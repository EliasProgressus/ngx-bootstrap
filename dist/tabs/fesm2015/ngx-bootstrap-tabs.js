import { Directive, Input, TemplateRef, ViewContainerRef, Injectable, Component, HostBinding, Renderer2, EventEmitter, Output, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgTranscludeDirective {
    /**
     * @param {?} viewRef
     */
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    /**
     * @return {?}
     */
    get ngTransclude() {
        return this._ngTransclude;
    }
}
NgTranscludeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngTransclude]'
            },] }
];
/** @nocollapse */
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
NgTranscludeDirective.propDecorators = {
    "ngTransclude": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsetConfig {
    constructor() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
}
TabsetConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsetComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
class TabHeadingDirective {
    /**
     * @param {?} templateRef
     * @param {?} tab
     */
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[tabHeading]' },] }
];
/** @nocollapse */
TabHeadingDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: TabDirective, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    }
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    NgTranscludeDirective,
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective
                ],
                exports: [
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective,
                    NgTranscludeDirective
                ]
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

export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10YWJzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvbmctdHJhbnNjbHVkZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzZXQuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFic2V0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL3RhYi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWItaGVhZGluZy5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSB7XHJcbiAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgcHJvdGVjdGVkIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBwcm90ZWN0ZWQgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy52aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgZ2V0IG5nVHJhbnNjbHVkZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcih2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb25maWcge1xyXG4gIC8qKiBwcm92aWRlcyBkZWZhdWx0IG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cclxuICB0eXBlID0gJ3RhYnMnO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFic2V0Q29uZmlnIH0gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcclxuLy8gdG9kbzogYWRkIGFjdGl2ZSBldmVudCB0byB0YWJcclxuLy8gdG9kbzogZml4PyBtaXhpbmcgc3RhdGljIGFuZCBkeW5hbWljIHRhYnMgcG9zaXRpb24gdGFicyBpbiBvcmRlciBvZiBjcmVhdGlvblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYnNldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnNldC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XHJcbiAgfVxyXG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIC8qKiBpZiB0cnVlIHRhYnMgZmlsbCB0aGUgY29udGFpbmVyIGFuZCBoYXZlIGEgY29uc2lzdGVudCB3aWR0aCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9qdXN0aWZpZWQ7XHJcbiAgfVxyXG4gIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2p1c3RpZmllZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgY2xhenogPSB0cnVlO1xyXG5cclxuICB0YWJzOiBUYWJEaXJlY3RpdmVbXSA9IFtdO1xyXG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQ6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2p1c3RpZmllZDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBUYWJzZXRDb25maWcsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzLnB1c2godGFiKTtcclxuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmIHR5cGVvZiB0YWIuYWN0aXZlID09PSAndW5kZWZpbmVkJztcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhYihcclxuICAgIHRhYjogVGFiRGlyZWN0aXZlLFxyXG4gICAgb3B0aW9ucyA9IHsgcmVzZWxlY3Q6IHRydWUsIGVtaXQ6IHRydWUgfVxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFNlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXHJcbiAgICBpZiAob3B0aW9ucy5yZXNlbGVjdCAmJiB0YWIuYWN0aXZlICYmIHRoaXMuaGFzQXZhaWxhYmxlVGFicyhpbmRleCkpIHtcclxuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XHJcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmVtaXQpIHtcclxuICAgICAgdGFiLnJlbW92ZWQuZW1pdCh0YWIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBpZiAodGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLFxyXG4gICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcclxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBzdGVwO1xyXG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xyXG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ2ZsZXgtY29sdW1uJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcclxuICAgICAgW2BuYXYtJHt0aGlzLnR5cGV9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAndGFiLCBbdGFiXScgfSlcclxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKiogdGFiIGhlYWRlciB0ZXh0ICovXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG4gIC8qKiB0YWIgaWQuIFRoZSBzYW1lIGlkIHdpdGggc3VmZml4ICctbGluaycgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyAmbHQ7bGkmZ3Q7IGVsZW1lbnQgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gYmUgcmVtb3ZhYmxlLCBhZGRpdGlvbmFsIGJ1dHRvbiB3aWxsIGFwcGVhciAqL1xyXG4gIEBJbnB1dCgpIHJlbW92YWJsZTogYm9vbGVhbjtcclxuICAvKiogaWYgc2V0LCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0YWIncyBjbGFzcyBhdHRyaWJ1dGUuIE11bHRpcGxlIGNsYXNzZXMgYXJlIHN1cHBvcnRlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNsYXNzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdXN0b21DbGFzcyA9IGN1c3RvbUNsYXNzID8gY3VzdG9tQ2xhc3MudHJpbSgpIDogbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xyXG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlID09PSBhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCh0aGlzLmRpc2FibGVkICYmIGFjdGl2ZSkgfHwgIWFjdGl2ZSkge1xyXG4gICAgICBpZiAodGhpcy5fYWN0aXZlICYmICFhY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRlc2VsZWN0ZWQuZW1pdCh0aGlzKSwgMCk7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMpLCAwKTtcclxuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgodGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcclxuICAgICAgaWYgKHRhYiAhPT0gdGhpcykge1xyXG4gICAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCBhZnRlciB0YWIgYmVjYW1lIGFjdGl2ZSwgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xyXG4gIEBPdXRwdXQoKSBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIGZpcmVkIGFmdGVyIHRhYiBiZWNhbWUgaW5hY3RpdmUsICovXHJcbiAgQE91dHB1dCgpIGRlc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCBiZWZvcmUgdGFiIHdpbGwgYmUgcmVtb3ZlZCwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gaW5zdGFuY2Ugb2YgcmVtb3ZlZCB0YWIgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLXBhbmUnKSBhZGRDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHRhYnNldDogVGFic2V0Q29tcG9uZW50O1xyXG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfY3VzdG9tQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudCxcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHRoaXMudGFic2V0ID0gdGFic2V0O1xyXG4gICAgdGhpcy50YWJzZXQuYWRkVGFiKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92YWJsZSA9IHRoaXMucmVtb3ZhYmxlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnNldC5yZW1vdmVUYWIodGhpcywgeyByZXNlbGVjdDogZmFsc2UsIGVtaXQ6IGZhbHNlIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5cclxuLyoqIFNob3VsZCBiZSB1c2VkIHRvIG1hcmsgPG5nLXRlbXBsYXRlPiBlbGVtZW50IGFzIGEgdGVtcGxhdGUgZm9yIHRhYiBoZWFkaW5nICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0YWJIZWFkaW5nXScgfSlcclxuZXhwb3J0IGNsYXNzIFRhYkhlYWRpbmdEaXJlY3RpdmUge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB0YWI6IFRhYkRpcmVjdGl2ZSkge1xyXG4gICAgdGFiLmhlYWRpbmdSZWYgPSB0ZW1wbGF0ZVJlZjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5nVHJhbnNjbHVkZURpcmVjdGl2ZSB9IGZyb20gJy4vbmctdHJhbnNjbHVkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJIZWFkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItaGVhZGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb25maWcgfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSxcclxuICAgIFRhYkRpcmVjdGl2ZSxcclxuICAgIFRhYnNldENvbXBvbmVudCxcclxuICAgIFRhYkhlYWRpbmdEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRhYkRpcmVjdGl2ZSxcclxuICAgIFRhYnNldENvbXBvbmVudCxcclxuICAgIFRhYkhlYWRpbmdEaXJlY3RpdmUsXHJcbiAgICBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYWJzTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtUYWJzZXRDb25maWddXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0lBMEJFLFlBQVksT0FBeUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7Ozs7OztRQWRHLFlBQVksQ0FBQyxXQUE2QjtRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztRQUNqQyxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUM7Ozs7O0lBSUgsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFKdUMsZ0JBQWdCOzs7NkJBWXJELEtBQUs7Ozs7Ozs7QUNaUjs7Ozs7b0JBS1MsTUFBTTs7OztZQUhkLFVBQVU7Ozs7Ozs7QUNGWDs7Ozs7SUFtREUsWUFBWSxNQUFvQixFQUFVLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7cUJBVmpCLElBQUk7b0JBRXpCLEVBQUU7d0JBQ2MsRUFBRTtRQVF2QyxNQUFNLENBQUMs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