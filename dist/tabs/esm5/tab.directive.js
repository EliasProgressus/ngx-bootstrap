/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new EventEmitter();
        /**
         * fired after tab became active,
         */
        this.selected = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired after tab became inactive,
         */
        this.deselected = new EventEmitter();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                });
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach(function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    setTimeout(function () { return _this.deselected.emit(_this); }, 0);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.select.emit(this);
            setTimeout(function () { return _this.selected.emit(_this); }, 0);
            this.tabset.tabs.forEach(function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    TabDirective.decorators = [
        { type: Directive, args: [{ selector: 'tab, [tab]' },] }
    ];
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    TabDirective.propDecorators = {
        "heading": [{ type: Input },],
        "id": [{ type: HostBinding, args: ['attr.id',] }, { type: Input },],
        "disabled": [{ type: Input },],
        "removable": [{ type: Input },],
        "customClass": [{ type: Input },],
        "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
        "select": [{ type: Output },],
        "selected": [{ type: Output },],
        "deselect": [{ type: Output },],
        "deselected": [{ type: Output },],
        "removed": [{ type: Output },],
        "addClass": [{ type: HostBinding, args: ['class.tab-pane',] },],
    };
    return TabDirective;
}());
export { TabDirective };
function TabDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabDirective.propDecorators;
    /**
     * tab header text
     * @type {?}
     */
    TabDirective.prototype.heading;
    /**
     * tab id. The same id with suffix '-link' will be added to the corresponding &lt;li&gt; element
     * @type {?}
     */
    TabDirective.prototype.id;
    /**
     * if true tab can not be activated
     * @type {?}
     */
    TabDirective.prototype.disabled;
    /**
     * if true tab can be removable, additional button will appear
     * @type {?}
     */
    TabDirective.prototype.removable;
    /**
     * fired when tab became active, $event:Tab equals to selected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.select;
    /**
     * fired after tab became active,
     * @type {?}
     */
    TabDirective.prototype.selected;
    /**
     * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
     * @type {?}
     */
    TabDirective.prototype.deselect;
    /**
     * fired after tab became inactive,
     * @type {?}
     */
    TabDirective.prototype.deselected;
    /**
     * fired before tab will be removed, $event:Tab equals to instance of removed tab
     * @type {?}
     */
    TabDirective.prototype.removed;
    /** @type {?} */
    TabDirective.prototype.addClass;
    /** @type {?} */
    TabDirective.prototype.headingRef;
    /** @type {?} */
    TabDirective.prototype.tabset;
    /** @type {?} */
    TabDirective.prototype._active;
    /** @type {?} */
    TabDirective.prototype._customClass;
    /** @type {?} */
    TabDirective.prototype.elementRef;
    /** @type {?} */
    TabDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUlOLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQXFGbkQsc0JBQ0UsTUFBdUIsRUFDaEIsWUFDQTtRQURBLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7Ozs7c0JBckI4QixJQUFJLFlBQVksRUFBRTs7Ozt3QkFFaEIsSUFBSSxZQUFZLEVBQUU7Ozs7d0JBRWxCLElBQUksWUFBWSxFQUFFOzs7OzBCQUVoQixJQUFJLFlBQVksRUFBRTs7Ozt1QkFFckIsSUFBSSxZQUFZLEVBQUU7d0JBRXhCLElBQUk7UUFhNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7MEJBN0VHLHFDQUFXOzs7Ozs7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Ozs7O1FBRzNCLFVBQWdCLFdBQW1CO1lBQW5DLGlCQWNDO1lBYkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQWdCO29CQUNuRCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDcEUsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFNUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQWdCO29CQUNuRCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDakUsQ0FBQyxDQUFDO2FBQ0o7U0FDRjs7OzswQkFLRyxnQ0FBTTs7Ozs7O1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztRQUd0QixVQUFXLE1BQWU7WUFBMUIsaUJBc0JDO1lBckJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDO2FBQ1I7WUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEVBQTFCLENBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2lCQUN2QjtnQkFFRCxNQUFNLENBQUM7YUFDUjtZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEVBQXhCLENBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBaUI7Z0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQixHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDcEI7YUFDRixDQUFDLENBQUM7U0FDSjs7Ozs7OztJQThCRCwrQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDakM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQy9EOztnQkFsR0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRTs7OztnQkFGNUIsZUFBZTtnQkFIdEIsVUFBVTtnQkFDVixTQUFTOzs7NEJBT1IsS0FBSzt1QkFFTCxXQUFXLFNBQUMsU0FBUyxjQUNyQixLQUFLOzZCQUVMLEtBQUs7OEJBRUwsS0FBSztnQ0FFTCxLQUFLOzJCQXNCTCxXQUFXLFNBQUMsY0FBYyxjQUMxQixLQUFLOzJCQThCTCxNQUFNOzZCQUVOLE1BQU07NkJBRU4sTUFBTTsrQkFFTixNQUFNOzRCQUVOLE1BQU07NkJBRU4sV0FBVyxTQUFDLGdCQUFnQjs7dUJBekYvQjs7U0FlYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0YWIsIFt0YWJdJyB9KVxyXG5leHBvcnQgY2xhc3MgVGFiRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKiB0YWIgaGVhZGVyIHRleHQgKi9cclxuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgLyoqIHRhYiBpZC4gVGhlIHNhbWUgaWQgd2l0aCBzdWZmaXggJy1saW5rJyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nICZsdDtsaSZndDsgZWxlbWVudCAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBub3QgYmUgYWN0aXZhdGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBiZSByZW1vdmFibGUsIGFkZGl0aW9uYWwgYnV0dG9uIHdpbGwgYXBwZWFyICovXHJcbiAgQElucHV0KCkgcmVtb3ZhYmxlOiBib29sZWFuO1xyXG4gIC8qKiBpZiBzZXQsIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRhYidzIGNsYXNzIGF0dHJpYnV0ZS4gTXVsdGlwbGUgY2xhc3NlcyBhcmUgc3VwcG9ydGVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGN1c3RvbUNsYXNzKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ2xhc3M7XHJcbiAgfVxyXG5cclxuICBzZXQgY3VzdG9tQ2xhc3MoY3VzdG9tQ2xhc3M6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcclxuICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N1c3RvbUNsYXNzID0gY3VzdG9tQ2xhc3MgPyBjdXN0b21DbGFzcy50cmltKCkgOiBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiB0YWIgYWN0aXZlIHN0YXRlIHRvZ2dsZSAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBASW5wdXQoKVxyXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLl9hY3RpdmUgPT09IGFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoKHRoaXMuZGlzYWJsZWQgJiYgYWN0aXZlKSB8fCAhYWN0aXZlKSB7XHJcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZGVzZWxlY3QuZW1pdCh0aGlzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVzZWxlY3RlZC5lbWl0KHRoaXMpLCAwKTtcclxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlbGVjdGVkLmVtaXQodGhpcyksIDApO1xyXG4gICAgdGhpcy50YWJzZXQudGFicy5mb3JFYWNoKCh0YWI6IFRhYkRpcmVjdGl2ZSkgPT4ge1xyXG4gICAgICBpZiAodGFiICE9PSB0aGlzKSB7XHJcbiAgICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIGZpcmVkIGFmdGVyIHRhYiBiZWNhbWUgYWN0aXZlLCAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBpbmFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gZGVzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXHJcbiAgQE91dHB1dCgpIGRlc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgYWZ0ZXIgdGFiIGJlY2FtZSBpbmFjdGl2ZSwgKi9cclxuICBAT3V0cHV0KCkgZGVzZWxlY3RlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIGZpcmVkIGJlZm9yZSB0YWIgd2lsbCBiZSByZW1vdmVkLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBpbnN0YW5jZSBvZiByZW1vdmVkIHRhYiAqL1xyXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIGFkZENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGhlYWRpbmdSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XHJcbiAgcHJvdGVjdGVkIF9hY3RpdmU6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF9jdXN0b21DbGFzczogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRhYnNldDogVGFic2V0Q29tcG9uZW50LFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgdGhpcy50YWJzZXQgPSB0YWJzZXQ7XHJcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZhYmxlID0gdGhpcy5yZW1vdmFibGU7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGFic2V0LnJlbW92ZVRhYih0aGlzLCB7IHJlc2VsZWN0OiBmYWxzZSwgZW1pdDogZmFsc2UgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==