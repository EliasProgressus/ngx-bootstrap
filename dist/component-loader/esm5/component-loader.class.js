/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ElementRef, EventEmitter, Injector, TemplateRef } from '@angular/core';
import { listenToTriggersV2, registerEscClick, registerOutsideClick } from 'ngx-bootstrap/utils';
import { ContentRef } from './content-ref.class';
/**
 * @template T
 */
var /**
 * @template T
 */
ComponentLoader = /** @class */ (function () {
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new EventEmitter();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
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
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
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
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            var /** @type {?} */ injector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
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
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
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
                _this._globalListener = registerOutsideClick(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
        if (this._listenOpts.outsideEsc) {
            var /** @type {?} */ target = this._componentRef.location.nativeElement;
            this._globalListener = registerEscClick(this._renderer, {
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
        if (content instanceof TemplateRef) {
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
            var /** @type {?} */ modalContentInjector = Injector.create({
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
 * @template T
 */
export { ComponentLoader };
function ComponentLoader_tsickle_Closure_declarations() {
    /** @type {?} */
    ComponentLoader.prototype.onBeforeShow;
    /** @type {?} */
    ComponentLoader.prototype.onShown;
    /** @type {?} */
    ComponentLoader.prototype.onBeforeHide;
    /** @type {?} */
    ComponentLoader.prototype.onHidden;
    /** @type {?} */
    ComponentLoader.prototype.instance;
    /** @type {?} */
    ComponentLoader.prototype._componentRef;
    /** @type {?} */
    ComponentLoader.prototype._inlineViewRef;
    /** @type {?} */
    ComponentLoader.prototype._providers;
    /** @type {?} */
    ComponentLoader.prototype._componentFactory;
    /** @type {?} */
    ComponentLoader.prototype._zoneSubscription;
    /** @type {?} */
    ComponentLoader.prototype._contentRef;
    /** @type {?} */
    ComponentLoader.prototype._innerComponent;
    /** @type {?} */
    ComponentLoader.prototype._unregisterListenersFn;
    /** @type {?} */
    ComponentLoader.prototype._isHiding;
    /**
     * Placement of a component. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    ComponentLoader.prototype.attachment;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    ComponentLoader.prototype.container;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    ComponentLoader.prototype.triggers;
    /** @type {?} */
    ComponentLoader.prototype._listenOpts;
    /** @type {?} */
    ComponentLoader.prototype._globalListener;
    /** @type {?} */
    ComponentLoader.prototype._viewContainerRef;
    /** @type {?} */
    ComponentLoader.prototype._renderer;
    /** @type {?} */
    ComponentLoader.prototype._elementRef;
    /** @type {?} */
    ComponentLoader.prototype._injector;
    /** @type {?} */
    ComponentLoader.prototype._componentFactoryResolver;
    /** @type {?} */
    ComponentLoader.prototype._ngZone;
    /** @type {?} */
    ComponentLoader.prototype._applicationRef;
    /** @type {?} */
    ComponentLoader.prototype._posService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC1sb2FkZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFLTCxVQUFVLEVBRVYsWUFBWSxFQUNaLFFBQVEsRUFJUixXQUFXLEVBR1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3JCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBSWpEOzs7QUFBQTs2QkEwRFksbUJBQ0EsV0FDQSxhQUNBLFdBQ0EsMkJBQ0EsU0FDQSxpQkFDQTtRQVBBLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNULDhCQUF5QixHQUF6Qix5QkFBeUI7UUFDekIsWUFBTyxHQUFQLE9BQU87UUFDUCxvQkFBZSxHQUFmLGVBQWU7UUFDZixnQkFBVyxHQUFYLFdBQVc7NEJBaEVjLElBQUksWUFBWSxFQUFFOzt1QkFFeEIsSUFBSSxZQUFZLEVBQUU7OzRCQUViLElBQUksWUFBWSxFQUFFO3dCQUNsQixJQUFJLFlBQVksRUFBRTswQkFNYixFQUFFO3lCQWdCckIsS0FBSzsyQkFvQlksRUFBRTsrQkFDYixRQUFRLENBQUMsU0FBUzs7SUE3QjVDLHNCQUFJLG9DQUFPOzs7O1FBQVg7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNkO1lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCOzs7T0FB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LENBQUMsQ0FBQyxFQUN2QyxZQUFZLENBQUMsUUFBUSxFQUNyQixZQUFZLENBQ2IsQ0FBQztTQUNIO1FBRUQsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFHLE9BQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzswQkF0WnZFO0lBd1pDLENBQUE7Ozs7QUF2WEQsMkJBdVhDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxyXG4vLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxyXG4vLyB0b2RvOiBtZXJnZSBldmVudHMgb25TaG93LCBvblNob3duLCBldGMuLi5cclxuLy8gdG9kbzogYWRkIGdsb2JhbCBwb3NpdGlvbmluZyBjb25maWd1cmF0aW9uP1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0b3IsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBTdGF0aWNQcm92aWRlcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nT3B0aW9ucywgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGxpc3RlblRvVHJpZ2dlcnNWMixcclxuICByZWdpc3RlckVzY0NsaWNrLFxyXG4gIHJlZ2lzdGVyT3V0c2lkZUNsaWNrXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBDb250ZW50UmVmIH0gZnJvbSAnLi9jb250ZW50LXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IExpc3Rlbk9wdGlvbnMgfSBmcm9tICcuL2xpc3Rlbi1vcHRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICBvbkJlZm9yZVNob3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgaW5zdGFuY2U6IFQ7XHJcbiAgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+O1xyXG4gIF9pbmxpbmVWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8VD47XHJcblxyXG4gIHByaXZhdGUgX3Byb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VD47XHJcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2NvbnRlbnRSZWY6IENvbnRlbnRSZWY7XHJcbiAgcHJpdmF0ZSBfaW5uZXJDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPjtcclxuXHJcbiAgcHJpdmF0ZSBfdW5yZWdpc3Rlckxpc3RlbmVyc0ZuOiBGdW5jdGlvbjtcclxuXHJcbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5faXNIaWRpbmcpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIXRoaXMuX2NvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzSGlkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBsYWNlbWVudCBvZiBhIGNvbXBvbmVudC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXR0YWNobWVudDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBwcml2YXRlIGNvbnRhaW5lcjogc3RyaW5nIHwgRWxlbWVudFJlZiB8IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB0cmlnZ2Vyczogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9saXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zID0ge307XHJcbiAgcHJpdmF0ZSBfZ2xvYmFsTGlzdGVuZXIgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERvIG5vdCB1c2UgdGhpcyBkaXJlY3RseSwgaXQgc2hvdWxkIGJlIGluc3RhbmNlZCB2aWFcclxuICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhZGQgYmVoYXZpb3VyOiB0byB0YXJnZXQgZWxlbWVudCwgYGJvZHlgLCBjdXN0b20gZWxlbWVudFxyXG4gIHRvKGNvbnRhaW5lcj86IHN0cmluZyB8IEVsZW1lbnRSZWYpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXIgfHwgdGhpcy5jb250YWluZXI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbihvcHRzPzogUG9zaXRpb25pbmdPcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHRoaXMuYXR0YWNobWVudCA9IG9wdHMuYXR0YWNobWVudCB8fCB0aGlzLmF0dGFjaG1lbnQ7XHJcbiAgICB0aGlzLl9lbGVtZW50UmVmID0gKG9wdHMudGFyZ2V0IGFzIEVsZW1lbnRSZWYpIHx8IHRoaXMuX2VsZW1lbnRSZWY7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcm92aWRlKHByb3ZpZGVyOiBTdGF0aWNQcm92aWRlcik6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9wcm92aWRlcnMucHVzaChwcm92aWRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhcHBlbmRDaGlsZCB0byBlbGVtZW50IG9yIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIpXHJcblxyXG4gIHNob3cob3B0czoge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb250ZXh0PzogYW55O1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgaW5pdGlhbFN0YXRlPzogYW55O1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fVxyXG4gICk6IENvbXBvbmVudFJlZjxUPiB7XHJcblxyXG4gICAgdGhpcy5fc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcclxuICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLm9uQmVmb3JlU2hvdy5lbWl0KCk7XHJcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYgPSB0aGlzLl9nZXRDb250ZW50UmVmKG9wdHMuY29udGVudCwgb3B0cy5jb250ZXh0LCBvcHRzLmluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXHJcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICAvLyB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgIC8vICAgLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5LCAwLCBpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcblxyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSwgb3B0cyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lciBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMuY29udGFpbmVyICYmXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiAmJlxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGludm9rZSBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIGV2ZW50cyByZWdpc3RlcmVkXHJcbiAgICAgIC8vIHZpYVxyXG4gICAgICAvLyBSZW5kZXJlcjo6bGlzdGVuKCkgYXJlIG5vdCBwaWNrZWQgdXAgYnkgY2hhbmdlIGRldGVjdGlvbiB3aXRoIHRoZVxyXG4gICAgICAvLyBPblB1c2ggc3RyYXRlZ3lcclxuICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Bvc1NlcnZpY2UuZGVsZXRlUG9zaXRpb25FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbik7XHJcblxyXG4gICAgdGhpcy5vbkJlZm9yZUhpZGUuZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudEVsID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb21wb25lbnRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbXBvbmVudEVsKTtcclxuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYgJiYgdGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XHJcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKFxyXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY29udGVudFJlZiA9IG51bGw7XHJcbiAgICB0aGlzLl9jb21wb25lbnRSZWYgPSBudWxsO1xyXG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKTtcclxuXHJcbiAgICB0aGlzLm9uSGlkZGVuLmVtaXQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbikge1xyXG4gICAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpc3RlbihsaXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHRoaXMudHJpZ2dlcnMgPSBsaXN0ZW5PcHRzLnRyaWdnZXJzIHx8IHRoaXMudHJpZ2dlcnM7XHJcbiAgICB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVDbGljayA9IGxpc3Rlbk9wdHMub3V0c2lkZUNsaWNrO1xyXG4gICAgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjID0gbGlzdGVuT3B0cy5vdXRzaWRlRXNjO1xyXG4gICAgbGlzdGVuT3B0cy50YXJnZXQgPSBsaXN0ZW5PcHRzLnRhcmdldCB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgaGlkZSA9ICh0aGlzLl9saXN0ZW5PcHRzLmhpZGUgPSAoKSA9PlxyXG4gICAgICBsaXN0ZW5PcHRzLmhpZGUgPyBsaXN0ZW5PcHRzLmhpZGUoKSA6IHZvaWQgdGhpcy5oaWRlKCkpO1xyXG4gICAgY29uc3Qgc2hvdyA9ICh0aGlzLl9saXN0ZW5PcHRzLnNob3cgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBsaXN0ZW5PcHRzLnNob3cgPyBsaXN0ZW5PcHRzLnNob3cocmVnaXN0ZXJIaWRlKSA6IHRoaXMuc2hvdyhyZWdpc3RlckhpZGUpO1xyXG4gICAgICByZWdpc3RlckhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IChyZWdpc3RlckhpZGU6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNTaG93biA/IGhpZGUoKSA6IHNob3cocmVnaXN0ZXJIaWRlKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2Vyc1YyKHRoaXMuX3JlbmRlcmVyLCB7XHJcbiAgICAgIHRhcmdldDogbGlzdGVuT3B0cy50YXJnZXQsXHJcbiAgICAgIHRyaWdnZXJzOiBsaXN0ZW5PcHRzLnRyaWdnZXJzLFxyXG4gICAgICBzaG93LFxyXG4gICAgICBoaWRlLFxyXG4gICAgICB0b2dnbGVcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3JlbW92ZUdsb2JhbExpc3RlbmVyKCkge1xyXG4gICAgaWYgKHRoaXMuX2dsb2JhbExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyKCk7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaElubGluZShcclxuICAgIHZSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxyXG4gICk6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9pbmxpbmVWaWV3UmVmID0gdlJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgIXRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB3aHk6IHNob3VsZCBydW4gYWZ0ZXIgZmlyc3QgZXZlbnQgYnViYmxlXHJcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcclxuICAgICAgICAgIHRhcmdldHM6IFt0YXJnZXQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudF0sXHJcbiAgICAgICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUNsaWNrLFxyXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lciA9IHJlZ2lzdGVyRXNjQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcclxuICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxyXG4gICAgICAgIG91dHNpZGVFc2M6IHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYyxcclxuICAgICAgICBoaWRlOiAoKSA9PiB0aGlzLl9saXN0ZW5PcHRzLmhpZGUoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElubmVyQ29tcG9uZW50KCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5uZXJDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpYmVQb3NpdGlvbmluZygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl96b25lU3Vic2NyaXB0aW9uIHx8ICF0aGlzLmF0dGFjaG1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUub25TdGFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fcG9zU2VydmljZS5wb3NpdGlvbih7XHJcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxyXG4gICAgICAgIHRhcmdldDogdGhpcy5fZWxlbWVudFJlZixcclxuICAgICAgICBhdHRhY2htZW50OiB0aGlzLmF0dGFjaG1lbnQsXHJcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENvbnRlbnRSZWYoXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29udGV4dD86IGFueSxcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGluaXRpYWxTdGF0ZT86IGFueVxyXG4gICk6IENvbnRlbnRSZWYge1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgIGNvbnN0IF92aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlxyXG4gICAgICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldzxUZW1wbGF0ZVJlZjxUPj4oY29udGVudCwgY29udGV4dCk7XHJcbiAgICAgICAgX3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbX3ZpZXdSZWYucm9vdE5vZGVzXSwgX3ZpZXdSZWYpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyh7fSk7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRDbXB0RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcclxuICAgICAgICBjb250ZW50XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBtb2RhbENvbnRlbnRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXHJcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbnRlbnRDbXB0RmFjdG9yeS5jcmVhdGUobW9kYWxDb250ZW50SW5qZWN0b3IpO1xyXG4gICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgaW5pdGlhbFN0YXRlKTtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFxyXG4gICAgICAgIFtbY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRdXSxcclxuICAgICAgICBjb21wb25lbnRSZWYuaG9zdFZpZXcsXHJcbiAgICAgICAgY29tcG9uZW50UmVmXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtbdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChgJHtjb250ZW50fWApXV0pO1xyXG4gIH1cclxufVxyXG4iXX0=