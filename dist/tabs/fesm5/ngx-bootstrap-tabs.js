import { Directive, Input, TemplateRef, ViewContainerRef, Injectable, Component, HostBinding, Renderer2, EventEmitter, Output, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        /* tslint:disable-next-line:no-any */
        get: /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTranscludeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
    ]; };
    NgTranscludeDirective.propDecorators = {
        "ngTransclude": [{ type: Input },],
    };
    return NgTranscludeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
    TabsetConfig.decorators = [
        { type: Injectable }
    ];
    return TabsetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
var TabHeadingDirective = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective.decorators = [
        { type: Directive, args: [{ selector: '[tabHeading]' },] }
    ];
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: TabDirective, },
    ]; };
    return TabHeadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
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
    return TabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10YWJzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvbmctdHJhbnNjbHVkZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzZXQuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFic2V0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL3RhYi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWItaGVhZGluZy5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSB7XHJcbiAgdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgcHJvdGVjdGVkIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBwcm90ZWN0ZWQgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy52aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgZ2V0IG5nVHJhbnNjbHVkZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcih2aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYgPSB2aWV3UmVmO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb25maWcge1xyXG4gIC8qKiBwcm92aWRlcyBkZWZhdWx0IG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cclxuICB0eXBlID0gJ3RhYnMnO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFic2V0Q29uZmlnIH0gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcclxuLy8gdG9kbzogYWRkIGFjdGl2ZSBldmVudCB0byB0YWJcclxuLy8gdG9kbzogZml4PyBtaXhpbmcgc3RhdGljIGFuZCBkeW5hbWljIHRhYnMgcG9zaXRpb24gdGFicyBpbiBvcmRlciBvZiBjcmVhdGlvblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYnNldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnNldC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XHJcbiAgfVxyXG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIC8qKiBpZiB0cnVlIHRhYnMgZmlsbCB0aGUgY29udGFpbmVyIGFuZCBoYXZlIGEgY29uc2lzdGVudCB3aWR0aCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9qdXN0aWZpZWQ7XHJcbiAgfVxyXG4gIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2p1c3RpZmllZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgY2xhenogPSB0cnVlO1xyXG5cclxuICB0YWJzOiBUYWJEaXJlY3RpdmVbXSA9IFtdO1xyXG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQ6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2p1c3RpZmllZDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBUYWJzZXRDb25maWcsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzLnB1c2godGFiKTtcclxuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmIHR5cGVvZiB0YWIuYWN0aXZlID09PSAndW5kZWZpbmVkJztcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhYihcclxuICAgIHRhYjogVGFiRGlyZWN0aXZlLFxyXG4gICAgb3B0aW9ucyA9IHsgcmVzZWxlY3Q6IHRydWUsIGVtaXQ6IHRydWUgfVxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFNlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXHJcbiAgICBpZiAob3B0aW9ucy5yZXNlbGVjdCAmJiB0YWIuYWN0aXZlICYmIHRoaXMuaGFzQXZhaWxhYmxlVGFicyhpbmRleCkpIHtcclxuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XHJcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmVtaXQpIHtcclxuICAgICAgdGFiLnJlbW92ZWQuZW1pdCh0YWIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBpZiAodGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLFxyXG4gICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcclxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBzdGVwO1xyXG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xyXG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ2ZsZXgtY29sdW1uJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcclxuICAgICAgW2BuYXYtJHt0aGlzLnR5cGV9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAndGFiLCBbdGFiXScgfSlcclxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKiogdGFiIGhlYWRlciB0ZXh0ICovXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG4gIC8qKiB0YWIgaWQuIFRoZSBzYW1lIGlkIHdpdGggc3VmZml4ICctbGluaycgd2lsbCBiZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyAmbHQ7bGkmZ3Q7IGVsZW1lbnQgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gYmUgcmVtb3ZhYmxlLCBhZGRpdGlvbmFsIGJ1dHRvbiB3aWxsIGFwcGVhciAqL1xyXG4gIEBJbnB1dCgpIHJlbW92YWJsZTogYm9vbGVhbjtcclxuICAvKiogaWYgc2V0LCB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0YWIncyBjbGFzcyBhdHRyaWJ1dGUuIE11bHRpcGxlIGNsYXNzZXMgYXJlIHN1cHBvcnRlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBjdXN0b21DbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNsYXNzO1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKS5mb3JFYWNoKChjc3NDbGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdXN0b21DbGFzcyA9IGN1c3RvbUNsYXNzID8gY3VzdG9tQ2xhc3MudHJpbSgpIDogbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xyXG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlID09PSBhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCh0aGlzLmRpc2FibGVkICYmIGFjdGl2ZSkgfHwgIWFjdGl2ZSkge1xyXG4gICAgICBpZiAodGhpcy5fYWN0aXZlICYmICFhY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRlc2VsZWN0ZWQuZW1pdCh0aGlzKSwgMCk7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMpLCAwKTtcclxuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgodGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcclxuICAgICAgaWYgKHRhYiAhPT0gdGhpcykge1xyXG4gICAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCBhZnRlciB0YWIgYmVjYW1lIGFjdGl2ZSwgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xyXG4gIEBPdXRwdXQoKSBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIGZpcmVkIGFmdGVyIHRhYiBiZWNhbWUgaW5hY3RpdmUsICovXHJcbiAgQE91dHB1dCgpIGRlc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCBiZWZvcmUgdGFiIHdpbGwgYmUgcmVtb3ZlZCwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gaW5zdGFuY2Ugb2YgcmVtb3ZlZCB0YWIgKi9cclxuICBAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLXBhbmUnKSBhZGRDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHRhYnNldDogVGFic2V0Q29tcG9uZW50O1xyXG4gIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfY3VzdG9tQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudCxcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHRoaXMudGFic2V0ID0gdGFic2V0O1xyXG4gICAgdGhpcy50YWJzZXQuYWRkVGFiKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92YWJsZSA9IHRoaXMucmVtb3ZhYmxlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYnNldC5yZW1vdmVUYWIodGhpcywgeyByZXNlbGVjdDogZmFsc2UsIGVtaXQ6IGZhbHNlIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5cclxuLyoqIFNob3VsZCBiZSB1c2VkIHRvIG1hcmsgPG5nLXRlbXBsYXRlPiBlbGVtZW50IGFzIGEgdGVtcGxhdGUgZm9yIHRhYiBoZWFkaW5nICovXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0YWJIZWFkaW5nXScgfSlcclxuZXhwb3J0IGNsYXNzIFRhYkhlYWRpbmdEaXJlY3RpdmUge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB0YWI6IFRhYkRpcmVjdGl2ZSkge1xyXG4gICAgdGFiLmhlYWRpbmdSZWYgPSB0ZW1wbGF0ZVJlZjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE5nVHJhbnNjbHVkZURpcmVjdGl2ZSB9IGZyb20gJy4vbmctdHJhbnNjbHVkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJIZWFkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItaGVhZGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb25maWcgfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSxcclxuICAgIFRhYkRpcmVjdGl2ZSxcclxuICAgIFRhYnNldENvbXBvbmVudCxcclxuICAgIFRhYkhlYWRpbmdEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRhYkRpcmVjdGl2ZSxcclxuICAgIFRhYnNldENvbXBvbmVudCxcclxuICAgIFRhYkhlYWRpbmdEaXJlY3RpdmUsXHJcbiAgICBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUYWJzTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtUYWJzZXRDb25maWddXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBMEJFLCtCQUFZLE9BQXlCO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzBCQWRHLCtDQUFZOzs7OztRQVFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjs7Ozs7O2tCQVZnQixXQUE2QjtZQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlDOzs7Ozs7Z0JBaEJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFKdUMsZ0JBQWdCOzs7aUNBWXJELEtBQUs7O2dDQVpSOzs7Ozs7O0FDQUE7Ozs7O29CQUtTLE1BQU07OztnQkFIZCxVQUFVOzt1QkFGWDs7Ozs7OztBQ0FBO0lBbURFLHlCQUFZLE1BQW9CLEVBQVUsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQkFWakIsSUFBSTtvQkFFekIsRUFBRTt3QkFDYyxFQUFFO1FBUXZD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