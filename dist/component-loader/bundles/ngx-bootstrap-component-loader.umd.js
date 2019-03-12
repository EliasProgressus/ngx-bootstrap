(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/component-loader', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap']['component-loader'] = {}),global.ng.core,global.utils,global.positioning));
}(this, (function (exports,core,utils,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ BsComponentRef = (function () {
        function BsComponentRef() {
        }
        return BsComponentRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var ContentRef = (function () {
        function ContentRef(/* tslint:disable-next-line: no-any */ 
        /* tslint:disable-next-line: no-any */
        nodes, viewRef, /* tslint:disable-next-line: no-any */ 
        /* tslint:disable-next-line: no-any */
        componentRef) {
            this.nodes = nodes;
            this.viewRef = viewRef;
            this.componentRef = componentRef;
        }
        return ContentRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ ComponentLoader = (function () {
        function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
            this._viewContainerRef = _viewContainerRef;
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._injector = _injector;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._applicationRef = _applicationRef;
            this._posService = _posService;
            this.onBeforeShow = new core.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onShown = new core.EventEmitter();
            /* tslint:disable-next-line: no-any*/
            this.onBeforeHide = new core.EventEmitter();
            this.onHidden = new core.EventEmitter();
            this._providers = [];
            this._isHiding = false;
            this._listenOpts = {};
            this._globalListener = Function.prototype;
        }
        Object.defineProperty(ComponentLoader.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                if (this._isHiding) {
                    return false;
                }
                return !!this._componentRef;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} compType
         * @return {?}
         */
        ComponentLoader.prototype.attach = /**
         * @param {?} compType
         * @return {?}
         */
            function (compType) {
                this._componentFactory = this._componentFactoryResolver
                    .resolveComponentFactory(compType);
                return this;
            };
        // todo: add behaviour: to target element, `body`, custom element
        /**
         * @param {?=} container
         * @return {?}
         */
        ComponentLoader.prototype.to = /**
         * @param {?=} container
         * @return {?}
         */
            function (container) {
                this.container = container || this.container;
                return this;
            };
        /**
         * @param {?=} opts
         * @return {?}
         */
        ComponentLoader.prototype.position = /**
         * @param {?=} opts
         * @return {?}
         */
            function (opts) {
                this.attachment = opts.attachment || this.attachment;
                this._elementRef = ((opts.target)) || this._elementRef;
                return this;
            };
        /**
         * @param {?} provider
         * @return {?}
         */
        ComponentLoader.prototype.provide = /**
         * @param {?} provider
         * @return {?}
         */
            function (provider) {
                this._providers.push(provider);
                return this;
            };
        // todo: appendChild to element or document.querySelector(this.container)
        /**
         * @param {?=} opts
         * @return {?}
         */
        ComponentLoader.prototype.show = /**
         * @param {?=} opts
         * @return {?}
         */
            function (opts) {
                if (opts === void 0) {
                    opts = {};
                }
                this._subscribePositioning();
                this._innerComponent = null;
                if (!this._componentRef) {
                    this.onBeforeShow.emit();
                    this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
                    var /** @type {?} */ injector = core.Injector.create({
                        providers: this._providers,
                        parent: this._injector
                    });
                    this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
                    this._applicationRef.attachView(this._componentRef.hostView);
                    // this._componentRef = this._viewContainerRef
                    //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
                    this.instance = this._componentRef.instance;
                    Object.assign(this._componentRef.instance, opts);
                    if (this.container instanceof core.ElementRef) {
                        this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
                    }
                    if (this.container === 'body' && typeof document !== 'undefined') {
                        document
                            .querySelector(/** @type {?} */ (this.container))
                            .appendChild(this._componentRef.location.nativeElement);
                    }
                    if (!this.container &&
                        this._elementRef &&
                        this._elementRef.nativeElement.parentElement) {
                        this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
                    }
                    // we need to manually invoke change detection since events registered
                    // via
                    // Renderer::listen() are not picked up by change detection with the
                    // OnPush strategy
                    if (this._contentRef.componentRef) {
                        this._innerComponent = this._contentRef.componentRef.instance;
                        this._contentRef.componentRef.changeDetectorRef.markForCheck();
                        this._contentRef.componentRef.changeDetectorRef.detectChanges();
                    }
                    this._componentRef.changeDetectorRef.markForCheck();
                    this._componentRef.changeDetectorRef.detectChanges();
                    this.onShown.emit(this._componentRef.instance);
                }
                this._registerOutsideClick();
                return this._componentRef;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.hide = /**
         * @return {?}
         */
            function () {
                if (!this._componentRef) {
                    return this;
                }
                this._posService.deletePositionElement(this._componentRef.location);
                this.onBeforeHide.emit(this._componentRef.instance);
                var /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
                componentEl.parentNode.removeChild(componentEl);
                if (this._contentRef.componentRef) {
                    this._contentRef.componentRef.destroy();
                }
                this._componentRef.destroy();
                if (this._viewContainerRef && this._contentRef.viewRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                }
                if (this._contentRef.viewRef) {
                    this._contentRef.viewRef.destroy();
                }
                this._contentRef = null;
                this._componentRef = null;
                this._removeGlobalListener();
                this.onHidden.emit();
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                    return;
                }
                this.show();
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.dispose = /**
         * @return {?}
         */
            function () {
                if (this.isShown) {
                    this.hide();
                }
                this._unsubscribePositioning();
                if (this._unregisterListenersFn) {
                    this._unregisterListenersFn();
                }
            };
        /**
         * @param {?} listenOpts
         * @return {?}
         */
        ComponentLoader.prototype.listen = /**
         * @param {?} listenOpts
         * @return {?}
         */
            function (listenOpts) {
                var _this = this;
                this.triggers = listenOpts.triggers || this.triggers;
                this._listenOpts.outsideClick = listenOpts.outsideClick;
                this._listenOpts.outsideEsc = listenOpts.outsideEsc;
                listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
                var /** @type {?} */ hide = (this._listenOpts.hide = function () {
                    return listenOpts.hide ? listenOpts.hide() : void _this.hide();
                });
                var /** @type {?} */ show = (this._listenOpts.show = function (registerHide) {
                    listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
                    registerHide();
                });
                var /** @type {?} */ toggle = function (registerHide) {
                    _this.isShown ? hide() : show(registerHide);
                };
                this._unregisterListenersFn = utils.listenToTriggersV2(this._renderer, {
                    target: listenOpts.target,
                    triggers: listenOpts.triggers,
                    show: show,
                    hide: hide,
                    toggle: toggle
                });
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._removeGlobalListener = /**
         * @return {?}
         */
            function () {
                if (this._globalListener) {
                    this._globalListener();
                    this._globalListener = null;
                }
            };
        /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */
        ComponentLoader.prototype.attachInline = /**
         * @param {?} vRef
         * @param {?} template
         * @return {?}
         */
            function (vRef, /* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            template) {
                this._inlineViewRef = vRef.createEmbeddedView(template);
                return this;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._registerOutsideClick = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._componentRef || !this._componentRef.location) {
                    return;
                }
                // why: should run after first event bubble
                if (this._listenOpts.outsideClick) {
                    var /** @type {?} */ target_1 = this._componentRef.location.nativeElement;
                    setTimeout(function () {
                        _this._globalListener = utils.registerOutsideClick(_this._renderer, {
                            targets: [target_1, _this._elementRef.nativeElement],
                            outsideClick: _this._listenOpts.outsideClick,
                            hide: function () { return _this._listenOpts.hide(); }
                        });
                    });
                }
                if (this._listenOpts.outsideEsc) {
                    var /** @type {?} */ target = this._componentRef.location.nativeElement;
                    this._globalListener = utils.registerEscClick(this._renderer, {
                        targets: [target, this._elementRef.nativeElement],
                        outsideEsc: this._listenOpts.outsideEsc,
                        hide: function () { return _this._listenOpts.hide(); }
                    });
                }
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype.getInnerComponent = /**
         * @return {?}
         */
            function () {
                return this._innerComponent;
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._subscribePositioning = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._zoneSubscription || !this.attachment) {
                    return;
                }
                this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
                    if (!_this._componentRef) {
                        return;
                    }
                    _this._posService.position({
                        element: _this._componentRef.location,
                        target: _this._elementRef,
                        attachment: _this.attachment,
                        appendToBody: _this.container === 'body'
                    });
                });
            };
        /**
         * @return {?}
         */
        ComponentLoader.prototype._unsubscribePositioning = /**
         * @return {?}
         */
            function () {
                if (!this._zoneSubscription) {
                    return;
                }
                this._zoneSubscription.unsubscribe();
                this._zoneSubscription = null;
            };
        /**
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */
        ComponentLoader.prototype._getContentRef = /**
         * @param {?} content
         * @param {?=} context
         * @param {?=} initialState
         * @return {?}
         */
            function (/* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            content, /* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            context, /* tslint:disable-next-line: no-any*/ 
            /* tslint:disable-next-line: no-any*/
            initialState) {
                if (!content) {
                    return new ContentRef([]);
                }
                if (content instanceof core.TemplateRef) {
                    if (this._viewContainerRef) {
                        var /** @type {?} */ _viewRef = this._viewContainerRef
                            .createEmbeddedView(content, context);
                        _viewRef.markForCheck();
                        return new ContentRef([_viewRef.rootNodes], _viewRef);
                    }
                    var /** @type {?} */ viewRef = content.createEmbeddedView({});
                    this._applicationRef.attachView(viewRef);
                    return new ContentRef([viewRef.rootNodes], viewRef);
                }
                if (typeof content === 'function') {
                    var /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
                    var /** @type {?} */ modalContentInjector = core.Injector.create({
                        providers: this._providers,
                        parent: this._injector
                    });
                    var /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
                    Object.assign(componentRef.instance, initialState);
                    this._applicationRef.attachView(componentRef.hostView);
                    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
                }
                return new ContentRef([[this._renderer.createText("" + content)]]);
            };
        return ComponentLoader;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ComponentLoaderFactory = (function () {
        function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._ngZone = _ngZone;
            this._injector = _injector;
            this._posService = _posService;
            this._applicationRef = _applicationRef;
        }
        /**
         *
         * @param _elementRef
         * @param _viewContainerRef
         * @param _renderer
         */
        /**
         *
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */
        ComponentLoaderFactory.prototype.createLoader = /**
         *
         * @template T
         * @param {?} _elementRef
         * @param {?} _viewContainerRef
         * @param {?} _renderer
         * @return {?}
         */
            function (_elementRef, _viewContainerRef, _renderer) {
                return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
            };
        ComponentLoaderFactory.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ComponentLoaderFactory.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver, },
                { type: core.NgZone, },
                { type: core.Injector, },
                { type: positioning.PositioningService, },
                { type: core.ApplicationRef, },
            ];
        };
        return ComponentLoaderFactory;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BsComponentRef = BsComponentRef;
    exports.ComponentLoader = ComponentLoader;
    exports.ComponentLoaderFactory = ComponentLoaderFactory;
    exports.ContentRef = ContentRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb21wb25lbnQtbG9hZGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2JzLWNvbXBvbmVudC1yZWYuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci9jb250ZW50LXJlZi5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCc0NvbXBvbmVudFJlZjxUPiB7XHJcbiAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFQ+O1xyXG4gIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcclxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGVudFJlZiB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBub2RlczogYW55W107XHJcbiAgdmlld1JlZj86IFZpZXdSZWY7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgbm9kZXM6IGFueVtdLFxyXG4gICAgdmlld1JlZj86IFZpZXdSZWYsXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPGFueT5cclxuICApIHtcclxuICAgIHRoaXMubm9kZXMgPSBub2RlcztcclxuICAgIHRoaXMudmlld1JlZiA9IHZpZXdSZWY7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcclxuICB9XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxyXG4vLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxyXG4vLyB0b2RvOiBtZXJnZSBldmVudHMgb25TaG93LCBvblNob3duLCBldGMuLi5cclxuLy8gdG9kbzogYWRkIGdsb2JhbCBwb3NpdGlvbmluZyBjb25maWd1cmF0aW9uP1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0b3IsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBTdGF0aWNQcm92aWRlcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nT3B0aW9ucywgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGxpc3RlblRvVHJpZ2dlcnNWMixcclxuICByZWdpc3RlckVzY0NsaWNrLFxyXG4gIHJlZ2lzdGVyT3V0c2lkZUNsaWNrXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBDb250ZW50UmVmIH0gZnJvbSAnLi9jb250ZW50LXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IExpc3Rlbk9wdGlvbnMgfSBmcm9tICcuL2xpc3Rlbi1vcHRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICBvbkJlZm9yZVNob3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgaW5zdGFuY2U6IFQ7XHJcbiAgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+O1xyXG4gIF9pbmxpbmVWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8VD47XHJcblxyXG4gIHByaXZhdGUgX3Byb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VD47XHJcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2NvbnRlbnRSZWY6IENvbnRlbnRSZWY7XHJcbiAgcHJpdmF0ZSBfaW5uZXJDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPjtcclxuXHJcbiAgcHJpdmF0ZSBfdW5yZWdpc3Rlckxpc3RlbmVyc0ZuOiBGdW5jdGlvbjtcclxuXHJcbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5faXNIaWRpbmcpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIXRoaXMuX2NvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzSGlkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBsYWNlbWVudCBvZiBhIGNvbXBvbmVudC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXR0YWNobWVudDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBwcml2YXRlIGNvbnRhaW5lcjogc3RyaW5nIHwgRWxlbWVudFJlZiB8IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB0cmlnZ2Vyczogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9saXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zID0ge307XHJcbiAgcHJpdmF0ZSBfZ2xvYmFsTGlzdGVuZXIgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERvIG5vdCB1c2UgdGhpcyBkaXJlY3RseSwgaXQgc2hvdWxkIGJlIGluc3RhbmNlZCB2aWFcclxuICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhZGQgYmVoYXZpb3VyOiB0byB0YXJnZXQgZWxlbWVudCwgYGJvZHlgLCBjdXN0b20gZWxlbWVudFxyXG4gIHRvKGNvbnRhaW5lcj86IHN0cmluZyB8IEVsZW1lbnRSZWYpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXIgfHwgdGhpcy5jb250YWluZXI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbihvcHRzPzogUG9zaXRpb25pbmdPcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHRoaXMuYXR0YWNobWVudCA9IG9wdHMuYXR0YWNobWVudCB8fCB0aGlzLmF0dGFjaG1lbnQ7XHJcbiAgICB0aGlzLl9lbGVtZW50UmVmID0gKG9wdHMudGFyZ2V0IGFzIEVsZW1lbnRSZWYpIHx8IHRoaXMuX2VsZW1lbnRSZWY7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcm92aWRlKHByb3ZpZGVyOiBTdGF0aWNQcm92aWRlcik6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9wcm92aWRlcnMucHVzaChwcm92aWRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhcHBlbmRDaGlsZCB0byBlbGVtZW50IG9yIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIpXHJcblxyXG4gIHNob3cob3B0czoge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb250ZXh0PzogYW55O1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgaW5pdGlhbFN0YXRlPzogYW55O1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fVxyXG4gICk6IENvbXBvbmVudFJlZjxUPiB7XHJcblxyXG4gICAgdGhpcy5fc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcclxuICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLm9uQmVmb3JlU2hvdy5lbWl0KCk7XHJcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYgPSB0aGlzLl9nZXRDb250ZW50UmVmKG9wdHMuY29udGVudCwgb3B0cy5jb250ZXh0LCBvcHRzLmluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXHJcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICAvLyB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgIC8vICAgLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5LCAwLCBpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcblxyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSwgb3B0cyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lciBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMuY29udGFpbmVyICYmXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiAmJlxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGludm9rZSBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIGV2ZW50cyByZWdpc3RlcmVkXHJcbiAgICAgIC8vIHZpYVxyXG4gICAgICAvLyBSZW5kZXJlcjo6bGlzdGVuKCkgYXJlIG5vdCBwaWNrZWQgdXAgYnkgY2hhbmdlIGRldGVjdGlvbiB3aXRoIHRoZVxyXG4gICAgICAvLyBPblB1c2ggc3RyYXRlZ3lcclxuICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Bvc1NlcnZpY2UuZGVsZXRlUG9zaXRpb25FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbik7XHJcblxyXG4gICAgdGhpcy5vbkJlZm9yZUhpZGUuZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudEVsID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb21wb25lbnRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbXBvbmVudEVsKTtcclxuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYgJiYgdGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XHJcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKFxyXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY29udGVudFJlZiA9IG51bGw7XHJcbiAgICB0aGlzLl9jb21wb25lbnRSZWYgPSBudWxsO1xyXG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKTtcclxuXHJcbiAgICB0aGlzLm9uSGlkZGVuLmVtaXQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbikge1xyXG4gICAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpc3RlbihsaXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHRoaXMudHJpZ2dlcnMgPSBsaXN0ZW5PcHRzLnRyaWdnZXJzIHx8IHRoaXMudHJpZ2dlcnM7XHJcbiAgICB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVDbGljayA9IGxpc3Rlbk9wdHMub3V0c2lkZUNsaWNrO1xyXG4gICAgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjID0gbGlzdGVuT3B0cy5vdXRzaWRlRXNjO1xyXG4gICAgbGlzdGVuT3B0cy50YXJnZXQgPSBsaXN0ZW5PcHRzLnRhcmdldCB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgaGlkZSA9ICh0aGlzLl9saXN0ZW5PcHRzLmhpZGUgPSAoKSA9PlxyXG4gICAgICBsaXN0ZW5PcHRzLmhpZGUgPyBsaXN0ZW5PcHRzLmhpZGUoKSA6IHZvaWQgdGhpcy5oaWRlKCkpO1xyXG4gICAgY29uc3Qgc2hvdyA9ICh0aGlzLl9saXN0ZW5PcHRzLnNob3cgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBsaXN0ZW5PcHRzLnNob3cgPyBsaXN0ZW5PcHRzLnNob3cocmVnaXN0ZXJIaWRlKSA6IHRoaXMuc2hvdyhyZWdpc3RlckhpZGUpO1xyXG4gICAgICByZWdpc3RlckhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IChyZWdpc3RlckhpZGU6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNTaG93biA/IGhpZGUoKSA6IHNob3cocmVnaXN0ZXJIaWRlKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2Vyc1YyKHRoaXMuX3JlbmRlcmVyLCB7XHJcbiAgICAgIHRhcmdldDogbGlzdGVuT3B0cy50YXJnZXQsXHJcbiAgICAgIHRyaWdnZXJzOiBsaXN0ZW5PcHRzLnRyaWdnZXJzLFxyXG4gICAgICBzaG93LFxyXG4gICAgICBoaWRlLFxyXG4gICAgICB0b2dnbGVcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3JlbW92ZUdsb2JhbExpc3RlbmVyKCkge1xyXG4gICAgaWYgKHRoaXMuX2dsb2JhbExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyKCk7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaElubGluZShcclxuICAgIHZSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxyXG4gICk6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9pbmxpbmVWaWV3UmVmID0gdlJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgIXRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB3aHk6IHNob3VsZCBydW4gYWZ0ZXIgZmlyc3QgZXZlbnQgYnViYmxlXHJcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcclxuICAgICAgICAgIHRhcmdldHM6IFt0YXJnZXQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudF0sXHJcbiAgICAgICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUNsaWNrLFxyXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lciA9IHJlZ2lzdGVyRXNjQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcclxuICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxyXG4gICAgICAgIG91dHNpZGVFc2M6IHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYyxcclxuICAgICAgICBoaWRlOiAoKSA9PiB0aGlzLl9saXN0ZW5PcHRzLmhpZGUoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElubmVyQ29tcG9uZW50KCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5uZXJDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpYmVQb3NpdGlvbmluZygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl96b25lU3Vic2NyaXB0aW9uIHx8ICF0aGlzLmF0dGFjaG1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUub25TdGFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fcG9zU2VydmljZS5wb3NpdGlvbih7XHJcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxyXG4gICAgICAgIHRhcmdldDogdGhpcy5fZWxlbWVudFJlZixcclxuICAgICAgICBhdHRhY2htZW50OiB0aGlzLmF0dGFjaG1lbnQsXHJcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENvbnRlbnRSZWYoXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29udGV4dD86IGFueSxcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGluaXRpYWxTdGF0ZT86IGFueVxyXG4gICk6IENvbnRlbnRSZWYge1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgIGNvbnN0IF92aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlxyXG4gICAgICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldzxUZW1wbGF0ZVJlZjxUPj4oY29udGVudCwgY29udGV4dCk7XHJcbiAgICAgICAgX3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbX3ZpZXdSZWYucm9vdE5vZGVzXSwgX3ZpZXdSZWYpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyh7fSk7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRDbXB0RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcclxuICAgICAgICBjb250ZW50XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBtb2RhbENvbnRlbnRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXHJcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbnRlbnRDbXB0RmFjdG9yeS5jcmVhdGUobW9kYWxDb250ZW50SW5qZWN0b3IpO1xyXG4gICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgaW5pdGlhbFN0YXRlKTtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFxyXG4gICAgICAgIFtbY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRdXSxcclxuICAgICAgICBjb21wb25lbnRSZWYuaG9zdFZpZXcsXHJcbiAgICAgICAgY29tcG9uZW50UmVmXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtbdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChgJHtjb250ZW50fWApXV0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLFxyXG4gIE5nWm9uZSwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIF9lbGVtZW50UmVmXHJcbiAgICogQHBhcmFtIF92aWV3Q29udGFpbmVyUmVmXHJcbiAgICogQHBhcmFtIF9yZW5kZXJlclxyXG4gICAqL1xyXG4gIGNyZWF0ZUxvYWRlcjxUPihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyPFQ+KFxyXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgX3JlbmRlcmVyLFxyXG4gICAgICBfZWxlbWVudFJlZixcclxuICAgICAgdGhpcy5faW5qZWN0b3IsXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgdGhpcy5fbmdab25lLFxyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZixcclxuICAgICAgdGhpcy5fcG9zU2VydmljZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkluamVjdG9yIiwiRWxlbWVudFJlZiIsImxpc3RlblRvVHJpZ2dlcnNWMiIsInJlZ2lzdGVyT3V0c2lkZUNsaWNrIiwicmVnaXN0ZXJFc2NDbGljayIsIlRlbXBsYXRlUmVmIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIk5nWm9uZSIsIlBvc2l0aW9u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