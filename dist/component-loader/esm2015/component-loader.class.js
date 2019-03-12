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
export class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
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
    /**
     * @return {?}
     */
    get isShown() {
        if (this._isHiding) {
            return false;
        }
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            const /** @type {?} */ injector = Injector.create({
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
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this._posService.deletePositionElement(this._componentRef.location);
        this.onBeforeHide.emit(this._componentRef.instance);
        const /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
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
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        const /** @type {?} */ hide = (this._listenOpts.hide = () => listenOpts.hide ? listenOpts.hide() : void this.hide());
        const /** @type {?} */ show = (this._listenOpts.show = (registerHide) => {
            listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
            registerHide();
        });
        const /** @type {?} */ toggle = (registerHide) => {
            this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show,
            hide,
            toggle
        });
        return this;
    }
    /**
     * @return {?}
     */
    _removeGlobalListener() {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    }
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    attachInline(vRef, /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    }
    /**
     * @return {?}
     */
    _registerOutsideClick() {
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            const /** @type {?} */ target = this._componentRef.location.nativeElement;
            setTimeout(() => {
                this._globalListener = registerOutsideClick(this._renderer, {
                    targets: [target, this._elementRef.nativeElement],
                    outsideClick: this._listenOpts.outsideClick,
                    hide: () => this._listenOpts.hide()
                });
            });
        }
        if (this._listenOpts.outsideEsc) {
            const /** @type {?} */ target = this._componentRef.location.nativeElement;
            this._globalListener = registerEscClick(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: () => this._listenOpts.hide()
            });
        }
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
            if (!this._componentRef) {
                return;
            }
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        });
    }
    /**
     * @return {?}
     */
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    /**
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    _getContentRef(/* tslint:disable-next-line: no-any*/
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
                const /** @type {?} */ _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            const /** @type {?} */ viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            const /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            const /** @type {?} */ modalContentInjector = Injector.create({
                providers: this._providers,
                parent: this._injector
            });
            const /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC1sb2FkZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFLTCxVQUFVLEVBRVYsWUFBWSxFQUNaLFFBQVEsRUFJUixXQUFXLEVBR1osTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3JCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBSWpELE1BQU07Ozs7Ozs7Ozs7Ozs7O2dCQTBETSxtQkFDQSxXQUNBLGFBQ0EsV0FDQSwyQkFDQSxTQUNBLGlCQUNBO1FBUEEsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixjQUFTLEdBQVQsU0FBUztRQUNULGdCQUFXLEdBQVgsV0FBVztRQUNYLGNBQVMsR0FBVCxTQUFTO1FBQ1QsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQUN6QixZQUFPLEdBQVAsT0FBTztRQUNQLG9CQUFlLEdBQWYsZUFBZTtRQUNmLGdCQUFXLEdBQVgsV0FBVzs0QkFoRWMsSUFBSSxZQUFZLEVBQUU7O3VCQUV4QixJQUFJLFlBQVksRUFBRTs7NEJBRWIsSUFBSSxZQUFZLEVBQUU7d0JBQ2xCLElBQUksWUFBWSxFQUFFOzBCQU1iLEVBQUU7eUJBZ0JyQixLQUFLOzJCQW9CWSxFQUFFOytCQUNiLFFBQVEsQ0FBQyxTQUFTOzs7OztJQTdCNUMsSUFBSSxPQUFPO1FBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzdCOzs7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OlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxyXG4vLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxyXG4vLyB0b2RvOiBtZXJnZSBldmVudHMgb25TaG93LCBvblNob3duLCBldGMuLi5cclxuLy8gdG9kbzogYWRkIGdsb2JhbCBwb3NpdGlvbmluZyBjb25maWd1cmF0aW9uP1xyXG5pbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0b3IsXHJcbiAgTmdab25lLFxyXG4gIFJlbmRlcmVyMixcclxuICBTdGF0aWNQcm92aWRlcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nT3B0aW9ucywgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGxpc3RlblRvVHJpZ2dlcnNWMixcclxuICByZWdpc3RlckVzY0NsaWNrLFxyXG4gIHJlZ2lzdGVyT3V0c2lkZUNsaWNrXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBDb250ZW50UmVmIH0gZnJvbSAnLi9jb250ZW50LXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IExpc3Rlbk9wdGlvbnMgfSBmcm9tICcuL2xpc3Rlbi1vcHRpb25zLm1vZGVsJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICBvbkJlZm9yZVNob3c6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIG9uQmVmb3JlSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgaW5zdGFuY2U6IFQ7XHJcbiAgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+O1xyXG4gIF9pbmxpbmVWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8VD47XHJcblxyXG4gIHByaXZhdGUgX3Byb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VD47XHJcbiAgcHJpdmF0ZSBfem9uZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2NvbnRlbnRSZWY6IENvbnRlbnRSZWY7XHJcbiAgcHJpdmF0ZSBfaW5uZXJDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPjtcclxuXHJcbiAgcHJpdmF0ZSBfdW5yZWdpc3Rlckxpc3RlbmVyc0ZuOiBGdW5jdGlvbjtcclxuXHJcbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5faXNIaWRpbmcpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAhIXRoaXMuX2NvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2lzSGlkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBsYWNlbWVudCBvZiBhIGNvbXBvbmVudC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXR0YWNobWVudDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBwcml2YXRlIGNvbnRhaW5lcjogc3RyaW5nIHwgRWxlbWVudFJlZiB8IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB0cmlnZ2Vyczogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9saXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zID0ge307XHJcbiAgcHJpdmF0ZSBfZ2xvYmFsTGlzdGVuZXIgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERvIG5vdCB1c2UgdGhpcyBkaXJlY3RseSwgaXQgc2hvdWxkIGJlIGluc3RhbmNlZCB2aWFcclxuICAgKiBgQ29tcG9uZW50TG9hZEZhY3RvcnkuYXR0YWNoYFxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIF9wb3NTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wVHlwZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhZGQgYmVoYXZpb3VyOiB0byB0YXJnZXQgZWxlbWVudCwgYGJvZHlgLCBjdXN0b20gZWxlbWVudFxyXG4gIHRvKGNvbnRhaW5lcj86IHN0cmluZyB8IEVsZW1lbnRSZWYpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXIgfHwgdGhpcy5jb250YWluZXI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbihvcHRzPzogUG9zaXRpb25pbmdPcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHRoaXMuYXR0YWNobWVudCA9IG9wdHMuYXR0YWNobWVudCB8fCB0aGlzLmF0dGFjaG1lbnQ7XHJcbiAgICB0aGlzLl9lbGVtZW50UmVmID0gKG9wdHMudGFyZ2V0IGFzIEVsZW1lbnRSZWYpIHx8IHRoaXMuX2VsZW1lbnRSZWY7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcm92aWRlKHByb3ZpZGVyOiBTdGF0aWNQcm92aWRlcik6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9wcm92aWRlcnMucHVzaChwcm92aWRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhcHBlbmRDaGlsZCB0byBlbGVtZW50IG9yIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250YWluZXIpXHJcblxyXG4gIHNob3cob3B0czoge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb250ZXh0PzogYW55O1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgaW5pdGlhbFN0YXRlPzogYW55O1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH0gPSB7fVxyXG4gICk6IENvbXBvbmVudFJlZjxUPiB7XHJcblxyXG4gICAgdGhpcy5fc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcclxuICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLm9uQmVmb3JlU2hvdy5lbWl0KCk7XHJcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYgPSB0aGlzLl9nZXRDb250ZW50UmVmKG9wdHMuY29udGVudCwgb3B0cy5jb250ZXh0LCBvcHRzLmluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXHJcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICAvLyB0aGlzLl9jb21wb25lbnRSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgIC8vICAgLmNyZWF0ZUNvbXBvbmVudCh0aGlzLl9jb21wb25lbnRGYWN0b3J5LCAwLCBpbmplY3RvciwgdGhpcy5fY29udGVudFJlZi5ub2Rlcyk7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcblxyXG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZSwgb3B0cyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyID09PSAnYm9keScgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lciBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAuYXBwZW5kQ2hpbGQodGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMuY29udGFpbmVyICYmXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZiAmJlxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGludm9rZSBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIGV2ZW50cyByZWdpc3RlcmVkXHJcbiAgICAgIC8vIHZpYVxyXG4gICAgICAvLyBSZW5kZXJlcjo6bGlzdGVuKCkgYXJlIG5vdCBwaWNrZWQgdXAgYnkgY2hhbmdlIGRldGVjdGlvbiB3aXRoIHRoZVxyXG4gICAgICAvLyBPblB1c2ggc3RyYXRlZ3lcclxuICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5faW5uZXJDb21wb25lbnQgPSB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIGlmICghdGhpcy5fY29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Bvc1NlcnZpY2UuZGVsZXRlUG9zaXRpb25FbGVtZW50KHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbik7XHJcblxyXG4gICAgdGhpcy5vbkJlZm9yZUhpZGUuZW1pdCh0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudEVsID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb21wb25lbnRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbXBvbmVudEVsKTtcclxuICAgIGlmICh0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYgJiYgdGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XHJcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKFxyXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLl9jb250ZW50UmVmLnZpZXdSZWYpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XHJcbiAgICAgIHRoaXMuX2NvbnRlbnRSZWYudmlld1JlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY29udGVudFJlZiA9IG51bGw7XHJcbiAgICB0aGlzLl9jb21wb25lbnRSZWYgPSBudWxsO1xyXG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXIoKTtcclxuXHJcbiAgICB0aGlzLm9uSGlkZGVuLmVtaXQoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNTaG93bikge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3VucmVnaXN0ZXJMaXN0ZW5lcnNGbikge1xyXG4gICAgICB0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpc3RlbihsaXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHRoaXMudHJpZ2dlcnMgPSBsaXN0ZW5PcHRzLnRyaWdnZXJzIHx8IHRoaXMudHJpZ2dlcnM7XHJcbiAgICB0aGlzLl9saXN0ZW5PcHRzLm91dHNpZGVDbGljayA9IGxpc3Rlbk9wdHMub3V0c2lkZUNsaWNrO1xyXG4gICAgdGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjID0gbGlzdGVuT3B0cy5vdXRzaWRlRXNjO1xyXG4gICAgbGlzdGVuT3B0cy50YXJnZXQgPSBsaXN0ZW5PcHRzLnRhcmdldCB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgaGlkZSA9ICh0aGlzLl9saXN0ZW5PcHRzLmhpZGUgPSAoKSA9PlxyXG4gICAgICBsaXN0ZW5PcHRzLmhpZGUgPyBsaXN0ZW5PcHRzLmhpZGUoKSA6IHZvaWQgdGhpcy5oaWRlKCkpO1xyXG4gICAgY29uc3Qgc2hvdyA9ICh0aGlzLl9saXN0ZW5PcHRzLnNob3cgPSAocmVnaXN0ZXJIaWRlOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBsaXN0ZW5PcHRzLnNob3cgPyBsaXN0ZW5PcHRzLnNob3cocmVnaXN0ZXJIaWRlKSA6IHRoaXMuc2hvdyhyZWdpc3RlckhpZGUpO1xyXG4gICAgICByZWdpc3RlckhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9IChyZWdpc3RlckhpZGU6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNTaG93biA/IGhpZGUoKSA6IHNob3cocmVnaXN0ZXJIaWRlKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2Vyc1YyKHRoaXMuX3JlbmRlcmVyLCB7XHJcbiAgICAgIHRhcmdldDogbGlzdGVuT3B0cy50YXJnZXQsXHJcbiAgICAgIHRyaWdnZXJzOiBsaXN0ZW5PcHRzLnRyaWdnZXJzLFxyXG4gICAgICBzaG93LFxyXG4gICAgICBoaWRlLFxyXG4gICAgICB0b2dnbGVcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3JlbW92ZUdsb2JhbExpc3RlbmVyKCkge1xyXG4gICAgaWYgKHRoaXMuX2dsb2JhbExpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyKCk7XHJcbiAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaElubGluZShcclxuICAgIHZSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PlxyXG4gICk6IENvbXBvbmVudExvYWRlcjxUPiB7XHJcbiAgICB0aGlzLl9pbmxpbmVWaWV3UmVmID0gdlJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3JlZ2lzdGVyT3V0c2lkZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYgfHwgIXRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB3aHk6IHNob3VsZCBydW4gYWZ0ZXIgZmlyc3QgZXZlbnQgYnViYmxlXHJcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlQ2xpY2spIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2dsb2JhbExpc3RlbmVyID0gcmVnaXN0ZXJPdXRzaWRlQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcclxuICAgICAgICAgIHRhcmdldHM6IFt0YXJnZXQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudF0sXHJcbiAgICAgICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUNsaWNrLFxyXG4gICAgICAgICAgaGlkZTogKCkgPT4gdGhpcy5fbGlzdGVuT3B0cy5oaWRlKClcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fbGlzdGVuT3B0cy5vdXRzaWRlRXNjKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICB0aGlzLl9nbG9iYWxMaXN0ZW5lciA9IHJlZ2lzdGVyRXNjQ2xpY2sodGhpcy5fcmVuZGVyZXIsIHtcclxuICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRdLFxyXG4gICAgICAgIG91dHNpZGVFc2M6IHRoaXMuX2xpc3Rlbk9wdHMub3V0c2lkZUVzYyxcclxuICAgICAgICBoaWRlOiAoKSA9PiB0aGlzLl9saXN0ZW5PcHRzLmhpZGUoKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldElubmVyQ29tcG9uZW50KCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5uZXJDb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpYmVQb3NpdGlvbmluZygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl96b25lU3Vic2NyaXB0aW9uIHx8ICF0aGlzLmF0dGFjaG1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUub25TdGFibGUuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fcG9zU2VydmljZS5wb3NpdGlvbih7XHJcbiAgICAgICAgZWxlbWVudDogdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLFxyXG4gICAgICAgIHRhcmdldDogdGhpcy5fZWxlbWVudFJlZixcclxuICAgICAgICBhdHRhY2htZW50OiB0aGlzLmF0dGFjaG1lbnQsXHJcbiAgICAgICAgYXBwZW5kVG9Cb2R5OiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl96b25lU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldENvbnRlbnRSZWYoXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29udGV4dD86IGFueSxcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGluaXRpYWxTdGF0ZT86IGFueVxyXG4gICk6IENvbnRlbnRSZWYge1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgICAgIGNvbnN0IF92aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZlxyXG4gICAgICAgICAgLmNyZWF0ZUVtYmVkZGVkVmlldzxUZW1wbGF0ZVJlZjxUPj4oY29udGVudCwgY29udGV4dCk7XHJcbiAgICAgICAgX3ZpZXdSZWYubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbX3ZpZXdSZWYucm9vdE5vZGVzXSwgX3ZpZXdSZWYpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBjb250ZW50LmNyZWF0ZUVtYmVkZGVkVmlldyh7fSk7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRDbXB0RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcclxuICAgICAgICBjb250ZW50XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBtb2RhbENvbnRlbnRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgICAgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsXHJcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvclxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbnRlbnRDbXB0RmFjdG9yeS5jcmVhdGUobW9kYWxDb250ZW50SW5qZWN0b3IpO1xyXG4gICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgaW5pdGlhbFN0YXRlKTtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFxyXG4gICAgICAgIFtbY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRdXSxcclxuICAgICAgICBjb21wb25lbnRSZWYuaG9zdFZpZXcsXHJcbiAgICAgICAgY29tcG9uZW50UmVmXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBDb250ZW50UmVmKFtbdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChgJHtjb250ZW50fWApXV0pO1xyXG4gIH1cclxufVxyXG4iXX0=