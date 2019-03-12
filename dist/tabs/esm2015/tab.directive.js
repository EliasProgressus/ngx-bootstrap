/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
export class TabDirective {
    /**
     * @param {?} tabset
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(tabset, elementRef, renderer) {
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
    /**
     * if set, will be added to the tab's class attribute. Multiple classes are supported.
     * @return {?}
     */
    get customClass() {
        return this._customClass;
    }
    /**
     * @param {?} customClass
     * @return {?}
     */
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : null;
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /**
     * tab active state toggle
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                setTimeout(() => this.deselected.emit(this), 0);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.select.emit(this);
        setTimeout(() => this.selected.emit(this), 0);
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.removable = this.removable;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.decorators = [
    { type: Directive, args: [{ selector: 'tab, [tab]' },] }
];
/** @nocollapse */
TabDirective.ctorParameters = () => [
    { type: TabsetComponent, },
    { type: ElementRef, },
    { type: Renderer2, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUlOLFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE1BQU07Ozs7OztJQWtGSixZQUNFLE1BQXVCLEVBQ2hCLFlBQ0E7UUFEQSxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFROzs7O3NCQXJCOEIsSUFBSSxZQUFZLEVBQUU7Ozs7d0JBRWhCLElBQUksWUFBWSxFQUFFOzs7O3dCQUVsQixJQUFJLFlBQVksRUFBRTs7OzswQkFFaEIsSUFBSSxZQUFZLEVBQUU7Ozs7dUJBRXJCLElBQUksWUFBWSxFQUFFO3dCQUV4QixJQUFJO1FBYTVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7OztRQTdFRyxXQUFXO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Ozs7OztJQUczQixJQUFJLFdBQVcsQ0FBQyxXQUFtQjtRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BFLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDakUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Ozs7UUFLRyxNQUFNO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Ozs7OztJQUd0QixJQUFJLE1BQU0sQ0FBQyxNQUFlO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUM7U0FDUjtRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ3ZCO1lBRUQsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNwQjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBOEJELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDakM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUMvRDs7O1lBbEdGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7Ozs7WUFGNUIsZUFBZTtZQUh0QixVQUFVO1lBQ1YsU0FBUzs7O3dCQU9SLEtBQUs7bUJBRUwsV0FBVyxTQUFDLFNBQVMsY0FDckIsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7NEJBRUwsS0FBSzt1QkFzQkwsV0FBVyxTQUFDLGNBQWMsY0FDMUIsS0FBSzt1QkE4QkwsTUFBTTt5QkFFTixNQUFNO3lCQUVOLE1BQU07MkJBRU4sTUFBTTt3QkFFTixNQUFNO3lCQUVOLFdBQVcsU0FBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3RhYiwgW3RhYl0nIH0pXHJcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuICAvKiogdGFiIGlkLiBUaGUgc2FtZSBpZCB3aXRoIHN1ZmZpeCAnLWxpbmsnIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgJmx0O2xpJmd0OyBlbGVtZW50ICAqL1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIG5vdCBiZSBhY3RpdmF0ZWQgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIGJlIHJlbW92YWJsZSwgYWRkaXRpb25hbCBidXR0b24gd2lsbCBhcHBlYXIgKi9cclxuICBASW5wdXQoKSByZW1vdmFibGU6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXR0cmlidXRlLiBNdWx0aXBsZSBjbGFzc2VzIGFyZSBzdXBwb3J0ZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgY3VzdG9tQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXN0b21DbGFzcztcclxuICB9XHJcblxyXG4gIHNldCBjdXN0b21DbGFzcyhjdXN0b21DbGFzczogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xyXG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzcyA/IGN1c3RvbUNsYXNzLnRyaW0oKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcclxuICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHRhYiBhY3RpdmUgc3RhdGUgdG9nZ2xlICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSA9PT0gYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICgodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUpIHx8ICFhY3RpdmUpIHtcclxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5kZXNlbGVjdC5lbWl0KHRoaXMpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZXNlbGVjdGVkLmVtaXQodGhpcyksIDApO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzKSwgMCk7XHJcbiAgICB0aGlzLnRhYnNldC50YWJzLmZvckVhY2goKHRhYjogVGFiRGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgIGlmICh0YWIgIT09IHRoaXMpIHtcclxuICAgICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBhY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIHNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgYWZ0ZXIgdGFiIGJlY2FtZSBhY3RpdmUsICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGluYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBkZXNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cclxuICBAT3V0cHV0KCkgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCBhZnRlciB0YWIgYmVjYW1lIGluYWN0aXZlLCAqL1xyXG4gIEBPdXRwdXQoKSBkZXNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQsICRldmVudDpUYWIgZXF1YWxzIHRvIGluc3RhbmNlIG9mIHJlbW92ZWQgdGFiICovXHJcbiAgQE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgYWRkQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudDtcclxuICBwcm90ZWN0ZWQgX2FjdGl2ZTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2N1c3RvbUNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcclxuICAgIHRoaXMudGFic2V0LmFkZFRhYih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmFibGUgPSB0aGlzLnJlbW92YWJsZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMsIHsgcmVzZWxlY3Q6IGZhbHNlLCBlbWl0OiBmYWxzZSB9KTtcclxuICB9XHJcbn1cclxuIl19