(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tabs', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tabs = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgTranscludeDirective = (function () {
        function NgTranscludeDirective(viewRef) {
            this.viewRef = viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            /* tslint:disable-next-line:no-any */
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[ngTransclude]'
                    },] }
        ];
        /** @nocollapse */
        NgTranscludeDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef, },
            ];
        };
        NgTranscludeDirective.propDecorators = {
            "ngTransclude": [{ type: core.Input },],
        };
        return NgTranscludeDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabsetConfig = (function () {
        function TabsetConfig() {
            /**
             * provides default navigation context class: 'tabs' or 'pills'
             */
            this.type = 'tabs';
        }
        TabsetConfig.decorators = [
            { type: core.Injectable }
        ];
        return TabsetConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabsetComponent = (function () {
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
             */ function () {
                return this._vertical;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._justified;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                if (options === void 0) {
                    options = { reselect: true, emit: true };
                }
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
            { type: core.Component, args: [{
                        selector: 'tabset',
                        template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\r\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\r\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\r\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\r\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\r\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\r\n       (click)=\"tabz.active = true\">\r\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\r\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"
                    }] }
        ];
        /** @nocollapse */
        TabsetComponent.ctorParameters = function () {
            return [
                { type: TabsetConfig, },
                { type: core.Renderer2, },
            ];
        };
        TabsetComponent.propDecorators = {
            "vertical": [{ type: core.Input },],
            "justified": [{ type: core.Input },],
            "type": [{ type: core.Input },],
            "clazz": [{ type: core.HostBinding, args: ['class.tab-container',] },],
        };
        return TabsetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabDirective = (function () {
        function TabDirective(tabset, elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            /**
             * fired when tab became active, $event:Tab equals to selected instance of Tab component
             */
            this.select = new core.EventEmitter();
            /**
             * fired after tab became active,
             */
            this.selected = new core.EventEmitter();
            /**
             * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
             */
            this.deselect = new core.EventEmitter();
            /**
             * fired after tab became inactive,
             */
            this.deselected = new core.EventEmitter();
            /**
             * fired before tab will be removed, $event:Tab equals to instance of removed tab
             */
            this.removed = new core.EventEmitter();
            this.addClass = true;
            this.tabset = tabset;
            this.tabset.addTab(this);
        }
        Object.defineProperty(TabDirective.prototype, "customClass", {
            get: /**
             * if set, will be added to the tab's class attribute. Multiple classes are supported.
             * @return {?}
             */ function () {
                return this._customClass;
            },
            set: /**
             * @param {?} customClass
             * @return {?}
             */ function (customClass) {
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
             */ function () {
                return this._active;
            },
            set: /**
             * @param {?} active
             * @return {?}
             */ function (active) {
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
            { type: core.Directive, args: [{ selector: 'tab, [tab]' },] }
        ];
        /** @nocollapse */
        TabDirective.ctorParameters = function () {
            return [
                { type: TabsetComponent, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        TabDirective.propDecorators = {
            "heading": [{ type: core.Input },],
            "id": [{ type: core.HostBinding, args: ['attr.id',] }, { type: core.Input },],
            "disabled": [{ type: core.Input },],
            "removable": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "active": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input },],
            "select": [{ type: core.Output },],
            "selected": [{ type: core.Output },],
            "deselect": [{ type: core.Output },],
            "deselected": [{ type: core.Output },],
            "removed": [{ type: core.Output },],
            "addClass": [{ type: core.HostBinding, args: ['class.tab-pane',] },],
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
    var TabHeadingDirective = (function () {
        /* tslint:disable-next-line:no-any */
        function TabHeadingDirective(templateRef, tab) {
            tab.headingRef = templateRef;
        }
        TabHeadingDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[tabHeading]' },] }
        ];
        /** @nocollapse */
        TabHeadingDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef, },
                { type: TabDirective, },
            ];
        };
        return TabHeadingDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabsModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.TabDirective = TabDirective;
    exports.TabHeadingDirective = TabHeadingDirective;
    exports.TabsetComponent = TabsetComponent;
    exports.TabsetConfig = TabsetConfig;
    exports.TabsModule = TabsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10YWJzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL25nLXRyYW5zY2x1ZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFic2V0LmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90YWJzL3RhYnNldC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvdGFicy90YWIuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFiLWhlYWRpbmcuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvdGFicy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUge1xyXG4gIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIHByb3RlY3RlZCBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcHJvdGVjdGVkIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCBuZ1RyYW5zY2x1ZGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xyXG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMudmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iodmlld1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgdGhpcy52aWV3UmVmID0gdmlld1JlZjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFic2V0Q29uZmlnIHtcclxuICAvKiogcHJvdmlkZXMgZGVmYXVsdCBuYXZpZ2F0aW9uIGNvbnRleHQgY2xhc3M6ICd0YWJzJyBvciAncGlsbHMnICovXHJcbiAgdHlwZSA9ICd0YWJzJztcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LmNvbmZpZyc7XHJcbi8vIHRvZG86IGFkZCBhY3RpdmUgZXZlbnQgdG8gdGFiXHJcbi8vIHRvZG86IGZpeD8gbWl4aW5nIHN0YXRpYyBhbmQgZHluYW1pYyB0YWJzIHBvc2l0aW9uIHRhYnMgaW4gb3JkZXIgb2YgY3JlYXRpb25cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWJzZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzZXQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKiBpZiB0cnVlIHRhYnMgd2lsbCBiZSBwbGFjZWQgdmVydGljYWxseSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xyXG4gIH1cclxuICBzZXQgdmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3ZlcnRpY2FsID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICAvKiogaWYgdHJ1ZSB0YWJzIGZpbGwgdGhlIGNvbnRhaW5lciBhbmQgaGF2ZSBhIGNvbnNpc3RlbnQgd2lkdGggKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBqdXN0aWZpZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmaWVkO1xyXG4gIH1cclxuICBzZXQganVzdGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9qdXN0aWZpZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIC8qKiBuYXZpZ2F0aW9uIGNvbnRleHQgY2xhc3M6ICd0YWJzJyBvciAncGlsbHMnICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgfVxyXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLWNvbnRhaW5lcicpIGNsYXp6ID0gdHJ1ZTtcclxuXHJcbiAgdGFiczogVGFiRGlyZWN0aXZlW10gPSBbXTtcclxuICBjbGFzc01hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgcHJvdGVjdGVkIGlzRGVzdHJveWVkOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBfdmVydGljYWw6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF9qdXN0aWZpZWQ6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF90eXBlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVGFic2V0Q29uZmlnLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBhZGRUYWIodGFiOiBUYWJEaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIHRoaXMudGFicy5wdXNoKHRhYik7XHJcbiAgICB0YWIuYWN0aXZlID0gdGhpcy50YWJzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgdGFiLmFjdGl2ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUYWIoXHJcbiAgICB0YWI6IFRhYkRpcmVjdGl2ZSxcclxuICAgIG9wdGlvbnMgPSB7IHJlc2VsZWN0OiB0cnVlLCBlbWl0OiB0cnVlIH1cclxuICApOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEgfHwgdGhpcy5pc0Rlc3Ryb3llZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBTZWxlY3QgYSBuZXcgdGFiIGlmIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZCBpcyBzZWxlY3RlZCBhbmQgbm90IGRlc3Ryb3llZFxyXG4gICAgaWYgKG9wdGlvbnMucmVzZWxlY3QgJiYgdGFiLmFjdGl2ZSAmJiB0aGlzLmhhc0F2YWlsYWJsZVRhYnMoaW5kZXgpKSB7XHJcbiAgICAgIGNvbnN0IG5ld0FjdGl2ZUluZGV4ID0gdGhpcy5nZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXgpO1xyXG4gICAgICB0aGlzLnRhYnNbbmV3QWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5lbWl0KSB7XHJcbiAgICAgIHRhYi5yZW1vdmVkLmVtaXQodGFiKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgaWYgKHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxyXG4gICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSxcclxuICAgICAgICB0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XHJcbiAgICBpZiAoIXRhYnNMZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IHN0ZXAgPSAxOyBzdGVwIDw9IHRhYnNMZW5ndGg7IHN0ZXAgKz0gMSkge1xyXG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIHN0ZXA7XHJcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4ICsgc3RlcDtcclxuICAgICAgaWYgKHRoaXMudGFic1twcmV2SW5kZXhdICYmICF0aGlzLnRhYnNbcHJldkluZGV4XS5kaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGFic1tuZXh0SW5kZXhdICYmICF0aGlzLnRhYnNbbmV4dEluZGV4XS5kaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFzQXZhaWxhYmxlVGFicyhpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKCF0aGlzLnRhYnNbaV0uZGlzYWJsZWQgJiYgaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgICduYXYtc3RhY2tlZCc6IHRoaXMudmVydGljYWwsXHJcbiAgICAgICdmbGV4LWNvbHVtbic6IHRoaXMudmVydGljYWwsXHJcbiAgICAgICduYXYtanVzdGlmaWVkJzogdGhpcy5qdXN0aWZpZWQsXHJcbiAgICAgIFtgbmF2LSR7dGhpcy50eXBlfWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3RhYiwgW3RhYl0nIH0pXHJcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuICAvKiogdGFiIGlkLiBUaGUgc2FtZSBpZCB3aXRoIHN1ZmZpeCAnLWxpbmsnIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgJmx0O2xpJmd0OyBlbGVtZW50ICAqL1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIG5vdCBiZSBhY3RpdmF0ZWQgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIGJlIHJlbW92YWJsZSwgYWRkaXRpb25hbCBidXR0b24gd2lsbCBhcHBlYXIgKi9cclxuICBASW5wdXQoKSByZW1vdmFibGU6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXR0cmlidXRlLiBNdWx0aXBsZSBjbGFzc2VzIGFyZSBzdXBwb3J0ZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgY3VzdG9tQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXN0b21DbGFzcztcclxuICB9XHJcblxyXG4gIHNldCBjdXN0b21DbGFzcyhjdXN0b21DbGFzczogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5jdXN0b21DbGFzcykge1xyXG4gICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzcyA/IGN1c3RvbUNsYXNzLnRyaW0oKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcclxuICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjc3NDbGFzcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIHRhYiBhY3RpdmUgc3RhdGUgdG9nZ2xlICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZSA9PT0gYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICgodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUpIHx8ICFhY3RpdmUpIHtcclxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5kZXNlbGVjdC5lbWl0KHRoaXMpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZXNlbGVjdGVkLmVtaXQodGhpcyksIDApO1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VsZWN0ZWQuZW1pdCh0aGlzKSwgMCk7XHJcbiAgICB0aGlzLnRhYnNldC50YWJzLmZvckVhY2goKHRhYjogVGFiRGlyZWN0aXZlKSA9PiB7XHJcbiAgICAgIGlmICh0YWIgIT09IHRoaXMpIHtcclxuICAgICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBhY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIHNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cclxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgYWZ0ZXIgdGFiIGJlY2FtZSBhY3RpdmUsICovXHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGluYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBkZXNlbGVjdGVkIGluc3RhbmNlIG9mIFRhYiBjb21wb25lbnQgKi9cclxuICBAT3V0cHV0KCkgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCBhZnRlciB0YWIgYmVjYW1lIGluYWN0aXZlLCAqL1xyXG4gIEBPdXRwdXQoKSBkZXNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQsICRldmVudDpUYWIgZXF1YWxzIHRvIGluc3RhbmNlIG9mIHJlbW92ZWQgdGFiICovXHJcbiAgQE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgYWRkQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICB0YWJzZXQ6IFRhYnNldENvbXBvbmVudDtcclxuICBwcm90ZWN0ZWQgX2FjdGl2ZTogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2N1c3RvbUNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcclxuICAgIHRoaXMudGFic2V0LmFkZFRhYih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW1vdmFibGUgPSB0aGlzLnJlbW92YWJsZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMsIHsgcmVzZWxlY3Q6IGZhbHNlLCBlbWl0OiBmYWxzZSB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcclxuXHJcbi8qKiBTaG91bGQgYmUgdXNlZCB0byBtYXJrIDxuZy10ZW1wbGF0ZT4gZWxlbWVudCBhcyBhIHRlbXBsYXRlIGZvciB0YWIgaGVhZGluZyAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbdGFiSGVhZGluZ10nIH0pXHJcbmV4cG9ydCBjbGFzcyBUYWJIZWFkaW5nRGlyZWN0aXZlIHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgdGFiOiBUYWJEaXJlY3RpdmUpIHtcclxuICAgIHRhYi5oZWFkaW5nUmVmID0gdGVtcGxhdGVSZWY7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgfSBmcm9tICcuL25nLXRyYW5zY2x1ZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFiSGVhZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWhlYWRpbmcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFic2V0Q29tcG9uZW50IH0gZnJvbSAnLi90YWJzZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFic2V0Q29uZmlnIH0gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUsXHJcbiAgICBUYWJEaXJlY3RpdmUsXHJcbiAgICBUYWJzZXRDb21wb25lbnQsXHJcbiAgICBUYWJIZWFkaW5nRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUYWJEaXJlY3RpdmUsXHJcbiAgICBUYWJzZXRDb21wb25lbnQsXHJcbiAgICBUYWJIZWFkaW5nRGlyZWN0aXZlLFxyXG4gICAgTmdUcmFuc2NsdWRlRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVGFic01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbVGFic2V0Q29uZmlnXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJSZW5kZXJlcjIiLCJIb3N0QmluZGluZyIsIkV2ZW50RW1pdHRlciIsIkVsZW1lbnRSZWYiLCJPdXRwdXQiLCJUZW1wbGF0ZVJlZiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUEwQkUsK0JBQVksT0FBeUI7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OEJBZEcsK0NBQVk7Ozs7Z0JBUWhCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUMzQjs7Ozs7O3NCQVZnQixXQUE2QjtnQkFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2pDLElBQUksV0FBVyxFQUFFO29CQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzlDOzs7Ozs7b0JBaEJKQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0I7Ozs7O3dCQUp1Q0Ms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