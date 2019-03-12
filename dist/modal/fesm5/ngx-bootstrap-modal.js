import { Injectable, Component, ElementRef, HostListener, Renderer2, Directive, EventEmitter, Input, Output, ViewContainerRef, RendererFactory2, NgModule } from '@angular/core';
import { isBs3, Utils, document as document$1, window as window$1 } from 'ngx-bootstrap/utils';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsModalRef = /** @class */ (function () {
    function BsModalRef() {
        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */
        this.setClass = Function;
    }
    BsModalRef.decorators = [
        { type: Injectable }
    ];
    return BsModalRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
var /** @type {?} */ modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var /** @type {?} */ CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var /** @type {?} */ TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
var /** @type {?} */ DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.bsModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            _this.bsModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modal-container',
                    template: "\n    <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n      <div class=\"modal-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'modal',
                        role: 'dialog',
                        tabindex: '-1',
                        '[attr.aria-modal]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalOptions, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    ModalContainerComponent.propDecorators = {
        "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
        "onEsc": [{ type: HostListener, args: ['window:keydown.esc', ['$event'],] },],
    };
    return ModalContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAnimated = value;
            // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
            }
            if (!isBs3()) {
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-modal-backdrop',
                    template: ' ',
                    host: { class: CLASS_NAME.BACKDROP }
                }] }
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    return ModalBackdropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ TRANSITION_DURATION = 300;
var /** @type {?} */ BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new EventEmitter();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new EventEmitter();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new EventEmitter();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new EventEmitter();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = /**
     * Allows to manually open modal
     * @return {?}
     */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        window$1.clearTimeout(this.timerHideModal);
        window$1.clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = window$1.setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    ModalDirective.prototype.showElement = /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            Utils.reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        var /** @type {?} */ transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.hideModal = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, CLASS_NAME.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use
    // promise
    /** @internal */
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var /** @type {?} */ callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = window$1.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = /**
     * \@internal
     * @return {?}
     */
    function () {
        this._backdrop.hide();
    };
    /** Events tricks */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    /**
     * Events tricks
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = /**
     * Events tricks
     * @return {?}
     */
    function () {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        var /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = /**
     * \@internal
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document$1.body.clientWidth < window$1.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(window$1
            .getComputedStyle(document$1.body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = /**
     * @return {?}
     */
    function () {
        document$1.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    // thx d.walsh
    /**
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document$1.body, scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document$1.body, scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsModal]',
                    exportAs: 'bs-modal'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ViewContainerRef, },
        { type: Renderer2, },
        { type: ComponentLoaderFactory, },
    ]; };
    ModalDirective.propDecorators = {
        "config": [{ type: Input },],
        "onShow": [{ type: Output },],
        "onShown": [{ type: Output },],
        "onHide": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
        "onEsc": [{ type: HostListener, args: ['keydown.esc', ['$event'],] },],
    };
    return ModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsModalService = /** @class */ (function () {
    function BsModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onShown = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHide = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onHidden = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    // tslint:disable-next-line:no-any
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    BsModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var /** @type {?} */ duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    BsModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        var /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
        var /** @type {?} */ bsModalRef = new BsModalRef();
        var /** @type {?} */ modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.setClass = function (newClass) {
            modalContainerRef.instance.config.class = newClass;
        };
        return bsModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var /** @type {?} */ modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    BsModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.removeBackdrop = /**
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    BsModalService.prototype.checkScrollbar = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding +
                this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.resetScrollbar = /**
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + "px";
    };
    /**
     * @return {?}
     */
    BsModalService.prototype.getScrollbarWidth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    BsModalService.prototype._createLoaders = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    BsModalService.prototype.removeLoaders = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    BsModalService.prototype.copyEvent = /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    BsModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsModalService.ctorParameters = function () { return [
        { type: RendererFactory2, },
        { type: ComponentLoaderFactory, },
    ]; };
    return BsModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    };
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalBackdropComponent,
                        ModalDirective,
                        ModalContainerComponent
                    ],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BsModalRef, ModalBackdropOptions, ModalContainerComponent, ModalBackdropComponent, ModalOptions, ModalDirective, ModalModule, BsModalService, CLASS_NAME as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1tb2RhbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9icy1tb2RhbC1yZWYuc2VydmljZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1iYWNrZHJvcC5vcHRpb25zLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLW9wdGlvbnMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL2JzLW1vZGFsLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzTW9kYWxSZWYge1xyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSB0byBhIGNvbXBvbmVudCBpbnNpZGUgdGhlIG1vZGFsLiBOdWxsIGlmIG1vZGFsJ3MgYmVlbiBjcmVhdGVkIHdpdGggVGVtcGxhdGVSZWZcclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29udGVudD86IGFueSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIHRoZSBtb2RhbFxyXG4gICAqL1xyXG4gIGhpZGU6ICgpID0+IHZvaWQgPSBGdW5jdGlvbjtcclxuICAvKipcclxuICAgKiBTZXRzIG5ldyBjbGFzcyB0byBtb2RhbCB3aW5kb3dcclxuICAgKi9cclxuICBzZXRDbGFzczogKG5ld0NsYXNzOiBzdHJpbmcpID0+IHZvaWQgPSBGdW5jdGlvbjtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcE9wdGlvbnMge1xyXG4gIGFuaW1hdGUgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbEJhY2tkcm9wT3B0aW9ucykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc05hbWUsIERpc21pc3NSZWFzb25zLCBTZWxlY3RvciwgVHJhbnNpdGlvbkR1cmF0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSxcclxuICAgKiAgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXHJcbiAgICovXHJcbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYyc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cclxuICAgKi9cclxuICBrZXlib2FyZD86IGJvb2xlYW47XHJcblxyXG4gIGZvY3VzPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cclxuICAgKi9cclxuICBzaG93PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBJZ25vcmUgdGhlIGJhY2tkcm9wIGNsaWNrXHJcbiAgICovXHJcbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcclxuICAgKi9cclxuICBjbGFzcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXHJcbiAgICovXHJcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1vZGFsIGRhdGFcclxuICAgKi9cclxuICBpbml0aWFsU3RhdGU/OiBPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xyXG4gIGJhY2tkcm9wOiB0cnVlLFxyXG4gIGtleWJvYXJkOiB0cnVlLFxyXG4gIGZvY3VzOiB0cnVlLFxyXG4gIHNob3c6IGZhbHNlLFxyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxyXG4gIGNsYXNzOiAnJyxcclxuICBhbmltYXRlZDogdHJ1ZSxcclxuICBpbml0aWFsU3RhdGU6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRTogQ2xhc3NOYW1lID0ge1xyXG4gIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcclxuICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcclxuICBPUEVOOiAnbW9kYWwtb3BlbicsXHJcbiAgRkFERTogJ2ZhZGUnLFxyXG4gIElOOiAnaW4nLCAvLyBiczNcclxuICBTSE9XOiAnc2hvdycgLy8gYnM0XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0VMRUNUT1I6IFNlbGVjdG9yID0ge1xyXG4gIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxyXG4gIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxyXG4gIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXHJcbiAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT05TOiBUcmFuc2l0aW9uRHVyYXRpb25zID0ge1xyXG4gIE1PREFMOiAzMDAsXHJcbiAgQkFDS0RST1A6IDE1MFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU01JU1NfUkVBU09OUzogRGlzbWlzc1JlYXNvbnMgPSB7XHJcbiAgQkFDS1JET1A6ICdiYWNrZHJvcC1jbGljaycsXHJcbiAgRVNDOiAnZXNjJ1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENMQVNTX05BTUUsXHJcbiAgRElTTUlTU19SRUFTT05TLFxyXG4gIE1vZGFsT3B0aW9ucyxcclxuICBUUkFOU0lUSU9OX0RVUkFUSU9OU1xyXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XHJcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9icy1tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbW9kYWwtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbY2xhc3NdPVwiJ21vZGFsLWRpYWxvZycgKyAoY29uZmlnLmNsYXNzID8gJyAnICsgY29uZmlnLmNsYXNzIDogJycpXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtb2RhbCcsXHJcbiAgICByb2xlOiAnZGlhbG9nJyxcclxuICAgIHRhYmluZGV4OiAnLTEnLFxyXG4gICAgJ1thdHRyLmFyaWEtbW9kYWxdJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnM7XHJcbiAgaXNTaG93biA9IGZhbHNlO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgaXNBbmltYXRlZDogYm9vbGVhbjtcclxuICBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2U7XHJcbiAgcHJpdmF0ZSBpc01vZGFsSGlkaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE1vZGFsT3B0aW9ucyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNBbmltYXRlZCkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgQ0xBU1NfTkFNRS5GQURFXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnZGlzcGxheScsXHJcbiAgICAgICdibG9jaydcclxuICAgICk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIGlzQnMzKCkgPyBDTEFTU19OQU1FLklOIDogQ0xBU1NfTkFNRS5TSE9XXHJcbiAgICAgICk7XHJcbiAgICB9LCB0aGlzLmlzQW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDApO1xyXG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgaWYgKHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuY2hlY2tTY3JvbGxiYXIoKTtcclxuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldFNjcm9sbGJhcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayB8fFxyXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycgfHxcclxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldERpc21pc3NSZWFzb24oRElTTUlTU19SRUFTT05TLkJBQ0tSRE9QKTtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcclxuICBvbkVzYyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY29uZmlnLmtleWJvYXJkICYmXHJcbiAgICAgIHRoaXMubGV2ZWwgPT09IHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuRVNDKTtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEhpZGluZyB8fCAhdGhpcy5pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xyXG4gICAgKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRvY3VtZW50ICYmXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keSAmJlxyXG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuaGlkZSh0aGlzLmxldmVsKTtcclxuICAgICAgdGhpcy5pc01vZGFsSGlkaW5nID0gZmFsc2U7XHJcbiAgICB9LCB0aGlzLmlzQW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5NT0RBTCA6IDApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDTEFTU19OQU1FIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcclxuaW1wb3J0IHsgaXNCczMsIFV0aWxzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5cclxuLyoqIFRoaXMgY29tcG9uZW50IHdpbGwgYmUgYWRkZWQgYXMgYmFja2dyb3VuZCBsYXlvdXQgZm9yIG1vZGFscyBpZiBlbmFibGVkICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtbW9kYWwtYmFja2Ryb3AnLFxyXG4gIHRlbXBsYXRlOiAnICcsXHJcbiAgaG9zdDogeyBjbGFzczogQ0xBU1NfTkFNRS5CQUNLRFJPUCB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBnZXQgaXNBbmltYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0FuaW1hdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzQW5pbWF0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzQW5pbWF0ZWQgPSB2YWx1ZTtcclxuICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtDbGFzc05hbWUuRkFERX1gLCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzU2hvd24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzU2hvd24gPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIGAke0NMQVNTX05BTUUuSU59YFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBgJHtDTEFTU19OQU1FLklOfWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICghaXNCczMoKSkge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICBgJHtDTEFTU19OQU1FLlNIT1d9YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcclxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgYCR7Q0xBU1NfTkFNRS5TSE9XfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcblxyXG4gIHByb3RlY3RlZCBfaXNBbmltYXRlZDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2lzU2hvd24gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNBbmltYXRlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIGAke0NMQVNTX05BTUUuRkFERX1gXHJcbiAgICAgICk7XHJcbiAgICAgIFV0aWxzLnJlZmxvdyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50ICovXHJcbi8vIHRvZG86IHNob3VsZCB3ZSBzdXBwb3J0IGVuZm9yY2UgZm9jdXMgaW4/XHJcbi8vIHRvZG86IGluIG9yaWdpbmFsIGJzIHRoZXJlIGFyZSB3YXMgYSB3YXkgdG8gcHJldmVudCBtb2RhbCBmcm9tIHNob3dpbmdcclxuLy8gdG9kbzogb3JpZ2luYWwgbW9kYWwgaGFkIHJlc2l6ZSBldmVudHNcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCxcclxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGRvY3VtZW50LCB3aW5kb3csIGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIENMQVNTX05BTUUsIERJU01JU1NfUkVBU09OUywgbW9kYWxDb25maWdEZWZhdWx0cywgTW9kYWxPcHRpb25zXHJcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbmNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAzMDA7XHJcbmNvbnN0IEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTA7XHJcblxyXG4vKiogTWFyayBhbnkgY29kZSB3aXRoIGRpcmVjdGl2ZSB0byBzaG93IGl0J3MgY29udGVudCBpbiBtb2RhbCAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tic01vZGFsXScsXHJcbiAgZXhwb3J0QXM6ICdicy1tb2RhbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIC8qKiBhbGxvd3MgdG8gc2V0IG1vZGFsIGNvbmZpZ3VyYXRpb24gdmlhIGVsZW1lbnQgcHJvcGVydHkgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb25maWcoY29uZjogTW9kYWxPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLmdldENvbmZpZyhjb25mKTtcclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogTW9kYWxPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25maWc7XHJcbiAgfVxyXG5cclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBpbW1lZGlhdGVseSB3aGVuIHRoZSBgc2hvd2AgaW5zdGFuY2UgbWV0aG9kIGlzIGNhbGxlZC4gKi9cclxuICBAT3V0cHV0KClcclxuICBvblNob3c6IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xyXG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vZGFsIGhhcyBiZWVuIG1hZGUgdmlzaWJsZSB0byB0aGUgdXNlclxyXG4gICAqICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSlcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcclxuICAvKiogVGhpcyBldmVudCBpcyBmaXJlZCBpbW1lZGlhdGVseSB3aGVuXHJcbiAgICogdGhlIGhpZGUgaW5zdGFuY2UgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZC5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvbkhpZGU6IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xyXG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCBiZWluZ1xyXG4gICAqIGhpZGRlbiBmcm9tIHRoZSB1c2VyICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSkuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xyXG5cclxuICAvKiogVGhpcyBmaWVsZCBjb250YWlucyBsYXN0IGRpc21pc3MgcmVhc29uLlxyXG4gICAqIFBvc3NpYmxlIHZhbHVlczogYGJhY2tkcm9wLWNsaWNrYCwgYGVzY2AgYW5kIGBudWxsYFxyXG4gICAqIChpZiBtb2RhbCB3YXMgY2xvc2VkIGJ5IGRpcmVjdCBjYWxsIG9mIGAuaGlkZSgpYCkuXHJcbiAgICovXHJcbiAgZGlzbWlzc1JlYXNvbjogc3RyaW5nO1xyXG5cclxuICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9jb25maWc6IE1vZGFsT3B0aW9ucztcclxuICBwcm90ZWN0ZWQgX2lzU2hvd24gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xyXG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XHJcblxyXG4gIHByb3RlY3RlZCB0aW1lckhpZGVNb2RhbCA9IDA7XHJcbiAgcHJvdGVjdGVkIHRpbWVyUm1CYWNrRHJvcCA9IDA7XHJcblxyXG4gIC8vIHJlZmVyZW5jZSB0byBiYWNrZHJvcCBjb21wb25lbnRcclxuICBwcm90ZWN0ZWQgYmFja2Ryb3A6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9iYWNrZHJvcDogQ29tcG9uZW50TG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIGlzTmVzdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcclxuICAgIHRoaXMuX2JhY2tkcm9wID0gY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcclxuICAgICAgX2VsZW1lbnQsXHJcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBfcmVuZGVyZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNvbmZpZy5pZ25vcmVCYWNrZHJvcENsaWNrIHx8XHJcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJyB8fFxyXG4gICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGlzbWlzc1JlYXNvbiA9IERJU01JU1NfUkVBU09OUy5CQUNLUkRPUDtcclxuICAgIHRoaXMuaGlkZShldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBjb25zaWRlciBwcmV2ZW50aW5nIGRlZmF1bHQgYW5kIHN0b3BwaW5nIHByb3BhZ2F0aW9uXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxyXG4gIG9uRXNjKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5rZXlib2FyZCkge1xyXG4gICAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBESVNNSVNTX1JFQVNPTlMuRVNDO1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB2b2lkIDA7XHJcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xyXG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fY29uZmlnIHx8IHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zaG93KSB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgLyogUHVibGljIG1ldGhvZHMgKi9cclxuXHJcbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSB0b2dnbGUgbW9kYWwgdmlzaWJpbGl0eSAqL1xyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIC8qKiBBbGxvd3MgdG8gbWFudWFsbHkgb3BlbiBtb2RhbCAqL1xyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBudWxsO1xyXG4gICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcclxuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGlkZU1vZGFsKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyUm1CYWNrRHJvcCk7XHJcblxyXG4gICAgdGhpcy5faXNTaG93biA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jaGVja1Njcm9sbGJhcigpO1xyXG4gICAgdGhpcy5zZXRTY3JvbGxiYXIoKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRS5PUEVOKSkge1xyXG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3dCYWNrZHJvcCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0VsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSBjbG9zZSBtb2RhbCAqL1xyXG4gIGhpZGUoZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcclxuXHJcbiAgICAvLyB0b2RvOiBhZGQgYW4gb3B0aW9uIHRvIHByZXZlbnQgaGlkaW5nXHJcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lckhpZGVNb2RhbCk7XHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJSbUJhY2tEcm9wKTtcclxuXHJcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuSU4pO1xyXG4gICAgaWYgKCFpc0JzMygpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5TSE9XKTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuX2FkZENsYXNzSW4gPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XHJcbiAgICAgIHRoaXMudGltZXJIaWRlTW9kYWwgPSB3aW5kb3cuc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLmhpZGVNb2RhbCgpLFxyXG4gICAgICAgIFRSQU5TSVRJT05fRFVSQVRJT05cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogUHJpdmF0ZSBtZXRob2RzIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCBnZXRDb25maWcoY29uZmlnPzogTW9kYWxPcHRpb25zKTogTW9kYWxPcHRpb25zIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIFNob3cgZGlhbG9nXHJcbiAgICogIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzaG93RWxlbWVudCgpOiB2b2lkIHtcclxuICAgIC8vIHRvZG86IHJlcGxhY2UgdGhpcyB3aXRoIGNvbXBvbmVudCBsb2FkZXIgdXNhZ2VcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIHx8XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxyXG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYXJpYS1oaWRkZW4nLFxyXG4gICAgICAnZmFsc2UnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdhcmlhLW1vZGFsJyxcclxuICAgICAgJ3RydWUnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICAnYmxvY2snXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3Njcm9sbFRvcCcsXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xyXG4gICAgICBVdGlscy5yZWZsb3codGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLl9hZGRDbGFzc0luID0gdHJ1ZTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5JTik7XHJcbiAgICBpZiAoIWlzQnMzKCkpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLlNIT1cpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XHJcbiAgICAgIHNldFRpbWVvdXQodHJhbnNpdGlvbkNvbXBsZXRlLCBUUkFOU0lUSU9OX0RVUkFUSU9OKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCBoaWRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2FyaWEtaGlkZGVuJyxcclxuICAgICAgJ3RydWUnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICAnbm9uZSdcclxuICAgICk7XHJcbiAgICB0aGlzLnNob3dCYWNrZHJvcCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc05lc3RlZCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZXNldEFkanVzdG1lbnRzKCk7XHJcbiAgICAgIHRoaXMuZm9jdXNPdGhlck1vZGFsKCk7XHJcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogb3JpZ2luYWwgc2hvdyB3YXMgY2FsbGluZyBhIGNhbGxiYWNrIHdoZW4gZG9uZSwgYnV0IHdlIGNhbiB1c2VcclxuICAvLyBwcm9taXNlXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCBzaG93QmFja2Ryb3AoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLl9pc1Nob3duICYmXHJcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wICYmXHJcbiAgICAgICghdGhpcy5iYWNrZHJvcCB8fCAhdGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc1Nob3duKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcclxuICAgICAgdGhpcy5fYmFja2Ryb3BcclxuICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXHJcbiAgICAgICAgLnRvKCdib2R5JylcclxuICAgICAgICAuc2hvdyh7aXNBbmltYXRlZDogdGhpcy5fY29uZmlnLmFuaW1hdGVkfSk7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLl9iYWNrZHJvcC5fY29tcG9uZW50UmVmO1xyXG5cclxuICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc0FuaW1hdGVkKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclJtQmFja0Ryb3AgPSB3aW5kb3cuc2V0VGltZW91dChcclxuICAgICAgICAgIGNhbGxiYWNrUmVtb3ZlLFxyXG4gICAgICAgICAgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBFdmVudHMgdHJpY2tzICovXHJcblxyXG4gIC8vIG5vIG5lZWQgZm9yIGl0XHJcbiAgLy8gcHJvdGVjdGVkIHNldEVzY2FwZUV2ZW50KCk6dm9pZCB7XHJcbiAgLy8gICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcclxuICAvLyAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xyXG4gIC8vICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcpIHtcclxuICAvLyAgICAgICAgIHRoaXMuaGlkZSgpXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vXHJcbiAgLy8gICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XHJcbiAgLy8gICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LktFWURPV05fRElTTUlTUylcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIHByb3RlY3RlZCBzZXRSZXNpemVFdmVudCgpOnZvaWQge1xyXG4gIC8vIGNvbnNvbGUubG9nKHRoaXMucmVuZGVyZXIubGlzdGVuR2xvYmFsKCcnLCBFdmVudC5SRVNJWkUpKTtcclxuICAvLyBpZiAodGhpcy5faXNTaG93bikge1xyXG4gIC8vICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgJC5wcm94eSh0aGlzLl9oYW5kbGVVcGRhdGUsIHRoaXMpKVxyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICAkKHdpbmRvdykub2ZmKEV2ZW50LlJFU0laRSlcclxuICAvLyB9XHJcbiAgLy8gfVxyXG5cclxuICBwcm90ZWN0ZWQgZm9jdXNPdGhlck1vZGFsKCkge1xyXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3RoZXJPcGVuZWRNb2RhbHMgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5bYnNNb2RhbF0nKTtcclxuICAgIGlmICghb3RoZXJPcGVuZWRNb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG90aGVyT3BlbmVkTW9kYWxzW290aGVyT3BlbmVkTW9kYWxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgcHJvdGVjdGVkIHJlc2V0QWRqdXN0bWVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAncGFkZGluZ0xlZnQnLFxyXG4gICAgICAnJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdwYWRkaW5nUmlnaHQnLFxyXG4gICAgICAnJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiBTY3JvbGwgYmFyIHRyaWNrcyAqL1xyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwcm90ZWN0ZWQgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIWRvY3VtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcclxuICAgICAgd2luZG93XHJcbiAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8IDAsXHJcbiAgICAgIDEwXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZ31weGA7XHJcbiAgfVxyXG5cclxuICAvLyB0aHggZC53YWxzaFxyXG4gIHByb3RlY3RlZCBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENMQVNTX05BTUUuU0NST0xMQkFSX01FQVNVUkVSKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudFJlZixcclxuICBJbmplY3RhYmxlLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBSZW5kZXJlcjIsXHJcbiAgUmVuZGVyZXJGYWN0b3J5MlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIENMQVNTX05BTUUsXHJcbiAgbW9kYWxDb25maWdEZWZhdWx0cyxcclxuICBNb2RhbE9wdGlvbnMsXHJcbiAgVFJBTlNJVElPTl9EVVJBVElPTlNcclxufSBmcm9tICcuL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xyXG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnLi9icy1tb2RhbC1yZWYuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc01vZGFsU2VydmljZSB7XHJcbiAgLy8gY29uc3RydWN0b3IgcHJvcHNcclxuICBjb25maWc6IE1vZGFsT3B0aW9ucyA9IG1vZGFsQ29uZmlnRGVmYXVsdHM7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25IaWRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcm90ZWN0ZWQgaXNCb2R5T3ZlcmZsb3dpbmcgPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgb3JpZ2luYWxCb2R5UGFkZGluZyA9IDA7XHJcblxyXG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XHJcblxyXG4gIHByb3RlY3RlZCBiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2JhY2tkcm9wTG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XHJcbiAgcHJpdmF0ZSBtb2RhbHNDb3VudCA9IDA7XHJcbiAgcHJpdmF0ZSBsYXN0RGlzbWlzc1JlYXNvbiA9ICcnO1xyXG5cclxuICBwcml2YXRlIGxvYWRlcnM6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD5bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIHByaXZhdGUgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XHJcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbFxyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNob3dzIGEgbW9kYWwgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2hvdyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LCBjb25maWc/OiBNb2RhbE9wdGlvbnMpOiBCc01vZGFsUmVmIHtcclxuICAgIHRoaXMubW9kYWxzQ291bnQrKztcclxuICAgIHRoaXMuX2NyZWF0ZUxvYWRlcnMoKTtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcclxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgpO1xyXG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dNb2RhbChjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGhpZGUobGV2ZWw6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcclxuICAgICAgdGhpcy5faGlkZUJhY2tkcm9wKCk7XHJcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMubW9kYWxzQ291bnQgPSB0aGlzLm1vZGFsc0NvdW50ID49IDEgPyB0aGlzLm1vZGFsc0NvdW50IC0gMSA6IDA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5faGlkZU1vZGFsKGxldmVsKTtcclxuICAgICAgdGhpcy5yZW1vdmVMb2FkZXJzKGxldmVsKTtcclxuICAgIH0sIHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcclxuICB9XHJcblxyXG4gIF9zaG93QmFja2Ryb3AoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0JhY2tkcm9wRW5hYmxlZCA9XHJcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wIHx8IHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJztcclxuICAgIGNvbnN0IGlzQmFja2Ryb3BJbkRPTSA9XHJcbiAgICAgICF0aGlzLmJhY2tkcm9wUmVmIHx8ICF0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd247XHJcblxyXG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcclxuICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xyXG5cclxuICAgICAgaWYgKGlzQmFja2Ryb3BFbmFibGVkICYmIGlzQmFja2Ryb3BJbkRPTSkge1xyXG4gICAgICAgIHRoaXMuX2JhY2tkcm9wTG9hZGVyXHJcbiAgICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXHJcbiAgICAgICAgICAudG8oJ2JvZHknKVxyXG4gICAgICAgICAgLnNob3coeyBpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZCB9KTtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wUmVmID0gdGhpcy5fYmFja2Ryb3BMb2FkZXIuX2NvbXBvbmVudFJlZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hpZGVCYWNrZHJvcCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5iYWNrZHJvcFJlZikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd24gPSBmYWxzZTtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlQmFja2Ryb3AoKSwgZHVyYXRpb24pO1xyXG4gIH1cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgX3Nob3dNb2RhbChjb250ZW50OiBhbnkpOiBCc01vZGFsUmVmIHtcclxuICAgIGNvbnN0IG1vZGFsTG9hZGVyID0gdGhpcy5sb2FkZXJzW3RoaXMubG9hZGVycy5sZW5ndGggLSAxXTtcclxuICAgIGNvbnN0IGJzTW9kYWxSZWYgPSBuZXcgQnNNb2RhbFJlZigpO1xyXG4gICAgY29uc3QgbW9kYWxDb250YWluZXJSZWYgPSBtb2RhbExvYWRlclxyXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IE1vZGFsT3B0aW9ucywgdXNlVmFsdWU6IHRoaXMuY29uZmlnIH0pXHJcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogQnNNb2RhbFJlZiwgdXNlVmFsdWU6IGJzTW9kYWxSZWYgfSlcclxuICAgICAgLmF0dGFjaChNb2RhbENvbnRhaW5lckNvbXBvbmVudClcclxuICAgICAgLnRvKCdib2R5JylcclxuICAgICAgLnNob3coe2NvbnRlbnQsIGlzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkLCBpbml0aWFsU3RhdGU6IHRoaXMuY29uZmlnLmluaXRpYWxTdGF0ZSwgYnNNb2RhbFNlcnZpY2U6IHRoaXN9KTtcclxuICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmxldmVsID0gdGhpcy5nZXRNb2RhbHNDb3VudCgpO1xyXG4gICAgYnNNb2RhbFJlZi5oaWRlID0gKCkgPT4ge1xyXG4gICAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5oaWRlKCk7XHJcbiAgICB9O1xyXG4gICAgYnNNb2RhbFJlZi5jb250ZW50ID0gbW9kYWxMb2FkZXIuZ2V0SW5uZXJDb21wb25lbnQoKSB8fCBudWxsO1xyXG4gICAgYnNNb2RhbFJlZi5zZXRDbGFzcyA9IChuZXdDbGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmNvbmZpZy5jbGFzcyA9IG5ld0NsYXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYnNNb2RhbFJlZjtcclxuICB9XHJcblxyXG4gIF9oaWRlTW9kYWwobGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbbGV2ZWwgLSAxXTtcclxuICAgIGlmIChtb2RhbExvYWRlcikge1xyXG4gICAgICBtb2RhbExvYWRlci5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRNb2RhbHNDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxzQ291bnQ7XHJcbiAgfVxyXG5cclxuICBzZXREaXNtaXNzUmVhc29uKHJlYXNvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxhc3REaXNtaXNzUmVhc29uID0gcmVhc29uO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmFja2Ryb3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlci5oaWRlKCk7XHJcbiAgICB0aGlzLmJhY2tkcm9wUmVmID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKiBBRlRFUiBQUiBNRVJHRSBNT0RBTC5DT01QT05FTlQgV0lMTCBCRSBVU0lORyBUSElTIENPREUgKi9cclxuICAvKiogU2Nyb2xsIGJhciB0cmlja3MgKi9cclxuICAvKiogQGludGVybmFsICovXHJcbiAgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbGJhcigpOiB2b2lkIHtcclxuICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3JpZ2luYWxCb2R5UGFkZGluZyA9IHBhcnNlSW50KFxyXG4gICAgICB3aW5kb3dcclxuICAgICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxyXG4gICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykgfHwgJzAnLFxyXG4gICAgICAxMFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JvZHlPdmVyZmxvd2luZykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArXHJcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmd9cHhgO1xyXG4gIH1cclxuXHJcbiAgLy8gdGh4IGQud2Fsc2hcclxuICBwcml2YXRlIGdldFNjcm9sbGJhcldpZHRoKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBzY3JvbGxEaXYgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHNjcm9sbERpdiwgQ0xBU1NfTkFNRS5TQ1JPTExCQVJfTUVBU1VSRVIpO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcclxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keSwgc2Nyb2xsRGl2KTtcclxuXHJcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jcmVhdGVMb2FkZXJzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbFxyXG4gICAgKTtcclxuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZVNob3csIHRoaXMub25TaG93KTtcclxuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vblNob3duLCB0aGlzLm9uU2hvd24pO1xyXG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlSGlkZSwgdGhpcy5vbkhpZGUpO1xyXG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uSGlkZGVuLCB0aGlzLm9uSGlkZGVuKTtcclxuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZUxvYWRlcnMobGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkZXJzLnNwbGljZShsZXZlbCAtIDEsIDEpO1xyXG4gICAgdGhpcy5sb2FkZXJzLmZvckVhY2goXHJcbiAgICAgIChsb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4sIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGxvYWRlci5pbnN0YW5jZS5sZXZlbCA9IGkgKyAxO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgY29weUV2ZW50KGZyb206IEV2ZW50RW1pdHRlcjxhbnk+LCB0bzogRXZlbnRFbWl0dGVyPGFueT4pIHtcclxuICAgIGZyb20uc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdG8uZW1pdCh0aGlzLmxhc3REaXNtaXNzUmVhc29uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vYnMtbW9kYWwuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcclxuICAgIE1vZGFsRGlyZWN0aXZlLFxyXG4gICAgTW9kYWxDb250YWluZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtNb2RhbEJhY2tkcm9wQ29tcG9uZW50LCBNb2RhbERpcmVjdGl2ZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxDb250YWluZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTW9kYWxNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0JzTW9kYWxTZXJ2aWNlLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztvQkFhcUIsUUFBUTs7Ozt3QkFJWSxRQUFROzs7Z0JBZmhELFVBQVU7O3FCQUZYOzs7Ozs7O0FDQUEsSUFBQTtJQUdFLDhCQUFZLE9BQTZCO3VCQUYvQixJQUFJO1FBR1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDOUI7K0JBTEg7SUFNQzs7Ozs7O0FDTkQ7Ozs7Z0JBR0MsVUFBVTs7dUJBSFg7O0FBdUNPLHFCQUFNLG1CQUFtQixHQUFpQjtJQUMvQyxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsS0FBSyxFQUFFLEVBQUU7SUFDVCxRQUFRLEVBQUUsSUFBSTtJQUNkLFlBQVksRUFBRSxFQUFFO0NBQ2pCLENBQUM7QUFFRixxQkFBYSxVQUFVLEdBQWM7SUFDbkMsa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixFQUFFLEVBQUUsSUFBSTs7SUFDUixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUM7QUFFRixBQU9PLHFCQUFNLG9CQUFvQixHQUF3QjtJQUN2RCxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVGLEFBQU8scUJBQU0sZUFBZSxHQUFtQjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLEdBQUcsRUFBRSxLQUFLO0NBQ1gsQ0FBQzs7Ozs7O0FDMUVGO0lBeUNFLGlDQUFZLE9BQXFCLEVBQ1gsUUFBb0IsRUFDdEI7UUFERSxhQUFRLEdBQVIs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