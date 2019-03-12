/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input, Renderer2 } from '@angular/core';
import { TabsetConfig } from './tabset.config';
export class TabsetComponent {
    /**
     * @param {?} config
     * @param {?} renderer
     */
    constructor(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    /**
     * if true tabs will be placed vertically
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set vertical(value) {
        this._vertical = value;
        this.setClassMap();
    }
    /**
     * if true tabs fill the container and have a consistent width
     * @return {?}
     */
    get justified() {
        return this._justified;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /**
     * navigation context class: 'tabs' or 'pills'
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    }
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    removeTab(tab, options = { reselect: true, emit: true }) {
        const /** @type {?} */ index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            const /** @type {?} */ newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getClosestTabIndex(index) {
        const /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let /** @type {?} */ step = 1; step <= tabsLength; step += 1) {
            const /** @type {?} */ prevIndex = index - step;
            const /** @type {?} */ nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hasAvailableTabs(index) {
        const /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let /** @type {?} */ i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified,
            [`nav-${this.type}`]: true
        };
    }
}
TabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'tabset',
                template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\r\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\r\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\r\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\r\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\r\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\r\n       (click)=\"tabz.active = true\">\r\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\r\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
TabsetComponent.ctorParameters = () => [
    { type: TabsetConfig, },
    { type: Renderer2, },
];
TabsetComponent.propDecorators = {
    "vertical": [{ type: Input },],
    "justified": [{ type: Input },],
    "type": [{ type: Input },],
    "clazz": [{ type: HostBinding, args: ['class.tab-container',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLE1BQU07Ozs7O0lBeUNKLFlBQVksTUFBb0IsRUFBVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3FCQVZqQixJQUFJO29CQUV6QixFQUFFO3dCQUNjLEVBQUU7UUFRdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7Ozs7O1FBeENHLFFBQVE7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O0lBRXhCLElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztRQUlHLFNBQVM7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7O0lBRXpCLElBQUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztRQUlHLElBQUk7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0lBRXBCLElBQUksSUFBSSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBZ0JELFdBQVc7UUFDVCxJQUFJ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QyxNQUFNLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUVELEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDNUIsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzVCLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUztZQUMvQixDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUMzQixDQUFDO0tBQ0g7OztZQTdIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLHF5QkFBc0M7YUFDdkM7Ozs7WUFOUSxZQUFZO1lBSDhCLFNBQVM7Ozt5QkFZekQsS0FBSzswQkFVTCxLQUFLO3FCQVVMLEtBQUs7c0JBU0wsV0FBVyxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFic2V0Q29uZmlnIH0gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcclxuLy8gdG9kbzogYWRkIGFjdGl2ZSBldmVudCB0byB0YWJcclxuLy8gdG9kbzogZml4PyBtaXhpbmcgc3RhdGljIGFuZCBkeW5hbWljIHRhYnMgcG9zaXRpb24gdGFicyBpbiBvcmRlciBvZiBjcmVhdGlvblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYnNldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnNldC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XHJcbiAgfVxyXG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIC8qKiBpZiB0cnVlIHRhYnMgZmlsbCB0aGUgY29udGFpbmVyIGFuZCBoYXZlIGEgY29uc2lzdGVudCB3aWR0aCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9qdXN0aWZpZWQ7XHJcbiAgfVxyXG4gIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2p1c3RpZmllZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgY2xhenogPSB0cnVlO1xyXG5cclxuICB0YWJzOiBUYWJEaXJlY3RpdmVbXSA9IFtdO1xyXG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQ6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2p1c3RpZmllZDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBUYWJzZXRDb25maWcsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzLnB1c2godGFiKTtcclxuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmIHR5cGVvZiB0YWIuYWN0aXZlID09PSAndW5kZWZpbmVkJztcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhYihcclxuICAgIHRhYjogVGFiRGlyZWN0aXZlLFxyXG4gICAgb3B0aW9ucyA9IHsgcmVzZWxlY3Q6IHRydWUsIGVtaXQ6IHRydWUgfVxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFNlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXHJcbiAgICBpZiAob3B0aW9ucy5yZXNlbGVjdCAmJiB0YWIuYWN0aXZlICYmIHRoaXMuaGFzQXZhaWxhYmxlVGFicyhpbmRleCkpIHtcclxuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XHJcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmVtaXQpIHtcclxuICAgICAgdGFiLnJlbW92ZWQuZW1pdCh0YWIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBpZiAodGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLFxyXG4gICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcclxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBzdGVwO1xyXG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xyXG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ2ZsZXgtY29sdW1uJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcclxuICAgICAgW2BuYXYtJHt0aGlzLnR5cGV9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==