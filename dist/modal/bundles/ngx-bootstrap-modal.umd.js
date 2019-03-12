(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/modal', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].modal = {}),global.ng.core,global.utils,global.componentLoader,global.positioning));
}(this, (function (exports,core,utils,componentLoader,positioning) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsModalRef = (function () {
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
            { type: core.Injectable }
        ];
        return BsModalRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalBackdropOptions = (function () {
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
    var ModalOptions = (function () {
        function ModalOptions() {
        }
        ModalOptions.decorators = [
            { type: core.Injectable }
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
    var ModalContainerComponent = (function () {
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
                    _this._renderer.addClass(_this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
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
                this._renderer.removeClass(this._element.nativeElement, utils.isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
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
            { type: core.Component, args: [{
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
        ModalContainerComponent.ctorParameters = function () {
            return [
                { type: ModalOptions, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        ModalContainerComponent.propDecorators = {
            "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['window:keydown.esc', ['$event'],] },],
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
    var ModalBackdropComponent = (function () {
        function ModalBackdropComponent(element, renderer) {
            this._isShown = false;
            this.element = element;
            this.renderer = renderer;
        }
        Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
            get: /**
             * @return {?}
             */ function () {
                return this._isAnimated;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isAnimated = value;
                // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
                return this._isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isShown = value;
                if (value) {
                    this.renderer.addClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                else {
                    this.renderer.removeClass(this.element.nativeElement, "" + CLASS_NAME.IN);
                }
                if (!utils.isBs3()) {
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
                    utils.Utils.reflow(this.element.nativeElement);
                }
                this.isShown = true;
            };
        ModalBackdropComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-modal-backdrop',
                        template: ' ',
                        host: { class: CLASS_NAME.BACKDROP }
                    }] }
        ];
        /** @nocollapse */
        ModalBackdropComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
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
    var ModalDirective = (function () {
        function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
            this._element = _element;
            this._renderer = _renderer;
            /**
             * This event fires immediately when the `show` instance method is called.
             */
            this.onShow = new core.EventEmitter();
            /**
             * This event is fired when the modal has been made visible to the user
             * (will wait for CSS transitions to complete)
             */
            this.onShown = new core.EventEmitter();
            /**
             * This event is fired immediately when
             * the hide instance method has been called.
             */
            this.onHide = new core.EventEmitter();
            /**
             * This event is fired when the modal has finished being
             * hidden from the user (will wait for CSS transitions to complete).
             */
            this.onHidden = new core.EventEmitter();
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
             */ function () {
                return this._config;
            },
            set: /**
             * allows to set modal configuration via element property
             * @param {?} conf
             * @return {?}
             */ function (conf) {
                this._config = this.getConfig(conf);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ModalDirective.prototype, "isShown", {
            get: /**
             * @return {?}
             */ function () {
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
                if (utils.document && utils.document.body) {
                    if (utils.document.body.classList.contains(CLASS_NAME.OPEN)) {
                        this.isNested = true;
                    }
                    else {
                        this._renderer.addClass(utils.document.body, CLASS_NAME.OPEN);
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
                utils.window.clearTimeout(this.timerHideModal);
                utils.window.clearTimeout(this.timerRmBackDrop);
                this._isShown = false;
                this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
                if (!utils.isBs3()) {
                    this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
                }
                // this._addClassIn = false;
                if (this._config.animated) {
                    this.timerHideModal = utils.window.setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
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
                    if (utils.document && utils.document.body) {
                        utils.document.body.appendChild(this._element.nativeElement);
                    }
                }
                this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
                this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
                this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
                this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
                if (this._config.animated) {
                    utils.Utils.reflow(this._element.nativeElement);
                }
                // this._addClassIn = true;
                this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
                if (!utils.isBs3()) {
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
                        if (utils.document && utils.document.body) {
                            _this._renderer.removeClass(utils.document.body, CLASS_NAME.OPEN);
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
                        this.timerRmBackDrop = utils.window.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
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
                this.isBodyOverflowing = utils.document.body.clientWidth < utils.window.innerWidth;
                this.scrollbarWidth = this.getScrollbarWidth();
            };
        /**
         * @return {?}
         */
        ModalDirective.prototype.setScrollbar = /**
         * @return {?}
         */
            function () {
                if (!utils.document) {
                    return;
                }
                this.originalBodyPadding = parseInt(utils.window
                    .getComputedStyle(utils.document.body)
                    .getPropertyValue('padding-right') || 0, 10);
                if (this.isBodyOverflowing) {
                    utils.document.body.style.paddingRight = this.originalBodyPadding +
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
                utils.document.body.style.paddingRight = this.originalBodyPadding + "px";
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
                this._renderer.appendChild(utils.document.body, scrollDiv);
                var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                this._renderer.removeChild(utils.document.body, scrollDiv);
                return scrollbarWidth;
            };
        ModalDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsModal]',
                        exportAs: 'bs-modal'
                    },] }
        ];
        /** @nocollapse */
        ModalDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.ViewContainerRef, },
                { type: core.Renderer2, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        ModalDirective.propDecorators = {
            "config": [{ type: core.Input },],
            "onShow": [{ type: core.Output },],
            "onShown": [{ type: core.Output },],
            "onHide": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['keydown.esc', ['$event'],] },],
        };
        return ModalDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsModalService = (function () {
        function BsModalService(rendererFactory, clf) {
            this.clf = clf;
            // constructor props
            this.config = modalConfigDefaults;
            // tslint:disable-next-line:no-any
            this.onShow = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onShown = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onHide = new core.EventEmitter();
            // tslint:disable-next-line:no-any
            this.onHidden = new core.EventEmitter();
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsModalService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        return BsModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ModalModule = (function () {
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
                    providers: [BsModalService, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        ModalModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.BsModalRef = BsModalRef;
    exports.ModalBackdropOptions = ModalBackdropOptions;
    exports.ModalContainerComponent = ModalContainerComponent;
    exports.ModalBackdropComponent = ModalBackdropComponent;
    exports.ModalOptions = ModalOptions;
    exports.ModalDirective = ModalDirective;
    exports.ModalModule = ModalModule;
    exports.BsModalService = BsModalService;
    exports.ɵa = CLASS_NAME;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1tb2RhbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvbW9kYWwvYnMtbW9kYWwtcmVmLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtYmFja2Ryb3Aub3B0aW9ucy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvbW9kYWwvbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC9icy1tb2RhbC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc01vZGFsUmVmIHtcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2UgdG8gYSBjb21wb25lbnQgaW5zaWRlIHRoZSBtb2RhbC4gTnVsbCBpZiBtb2RhbCdzIGJlZW4gY3JlYXRlZCB3aXRoIFRlbXBsYXRlUmVmXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGNvbnRlbnQ/OiBhbnkgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBIaWRlcyB0aGUgbW9kYWxcclxuICAgKi9cclxuICBoaWRlOiAoKSA9PiB2b2lkID0gRnVuY3Rpb247XHJcbiAgLyoqXHJcbiAgICogU2V0cyBuZXcgY2xhc3MgdG8gbW9kYWwgd2luZG93XHJcbiAgICovXHJcbiAgc2V0Q2xhc3M6IChuZXdDbGFzczogc3RyaW5nKSA9PiB2b2lkID0gRnVuY3Rpb247XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsQmFja2Ryb3BPcHRpb25zIHtcclxuICBhbmltYXRlID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogTW9kYWxCYWNrZHJvcE9wdGlvbnMpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xhc3NOYW1lLCBEaXNtaXNzUmVhc29ucywgU2VsZWN0b3IsIFRyYW5zaXRpb25EdXJhdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb2RhbE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqICBJbmNsdWRlcyBhIG1vZGFsLWJhY2tkcm9wIGVsZW1lbnQuIEFsdGVybmF0aXZlbHksXHJcbiAgICogIHNwZWNpZnkgc3RhdGljIGZvciBhIGJhY2tkcm9wIHdoaWNoIGRvZXNuJ3QgY2xvc2UgdGhlIG1vZGFsIG9uIGNsaWNrLlxyXG4gICAqL1xyXG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnO1xyXG4gIC8qKlxyXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXHJcbiAgICovXHJcbiAga2V5Ym9hcmQ/OiBib29sZWFuO1xyXG5cclxuICBmb2N1cz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogU2hvd3MgdGhlIG1vZGFsIHdoZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICovXHJcbiAgc2hvdz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogSWdub3JlIHRoZSBiYWNrZHJvcCBjbGlja1xyXG4gICAqL1xyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIENzcyBjbGFzcyBmb3Igb3BlbmVkIG1vZGFsXHJcbiAgICovXHJcbiAgY2xhc3M/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBNb2RhbCBkYXRhXHJcbiAgICovXHJcbiAgaW5pdGlhbFN0YXRlPzogT2JqZWN0O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGFsQ29uZmlnRGVmYXVsdHM6IE1vZGFsT3B0aW9ucyA9IHtcclxuICBiYWNrZHJvcDogdHJ1ZSxcclxuICBrZXlib2FyZDogdHJ1ZSxcclxuICBmb2N1czogdHJ1ZSxcclxuICBzaG93OiBmYWxzZSxcclxuICBpZ25vcmVCYWNrZHJvcENsaWNrOiBmYWxzZSxcclxuICBjbGFzczogJycsXHJcbiAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgaW5pdGlhbFN0YXRlOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENMQVNTX05BTUU6IENsYXNzTmFtZSA9IHtcclxuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXHJcbiAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXHJcbiAgT1BFTjogJ21vZGFsLW9wZW4nLFxyXG4gIEZBREU6ICdmYWRlJyxcclxuICBJTjogJ2luJywgLy8gYnMzXHJcbiAgU0hPVzogJ3Nob3cnIC8vIGJzNFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SOiBTZWxlY3RvciA9IHtcclxuICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcclxuICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcclxuICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxyXG4gIEZJWEVEX0NPTlRFTlQ6ICcubmF2YmFyLWZpeGVkLXRvcCwgLm5hdmJhci1maXhlZC1ib3R0b20sIC5pcy1maXhlZCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OUzogVHJhbnNpdGlvbkR1cmF0aW9ucyA9IHtcclxuICBNT0RBTDogMzAwLFxyXG4gIEJBQ0tEUk9QOiAxNTBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlM6IERpc21pc3NSZWFzb25zID0ge1xyXG4gIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxyXG4gIEVTQzogJ2VzYydcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDTEFTU19OQU1FLFxyXG4gIERJU01JU1NfUkVBU09OUyxcclxuICBNb2RhbE9wdGlvbnMsXHJcbiAgVFJBTlNJVElPTl9EVVJBVElPTlNcclxufSBmcm9tICcuL21vZGFsLW9wdGlvbnMuY2xhc3MnO1xyXG5pbXBvcnQgeyBCc01vZGFsU2VydmljZSB9IGZyb20gJy4vYnMtbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21vZGFsLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2NsYXNzXT1cIidtb2RhbC1kaWFsb2cnICsgKGNvbmZpZy5jbGFzcyA/ICcgJyArIGNvbmZpZy5jbGFzcyA6ICcnKVwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbW9kYWwnLFxyXG4gICAgcm9sZTogJ2RpYWxvZycsXHJcbiAgICB0YWJpbmRleDogJy0xJyxcclxuICAgICdbYXR0ci5hcmlhLW1vZGFsXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbmZpZzogTW9kYWxPcHRpb25zO1xyXG4gIGlzU2hvd24gPSBmYWxzZTtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGlzQW5pbWF0ZWQ6IGJvb2xlYW47XHJcbiAgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlO1xyXG4gIHByaXZhdGUgaXNNb2RhbEhpZGluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIENMQVNTX05BTUUuRkFERVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICAnYmxvY2snXHJcbiAgICApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNTaG93biA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xyXG4gICAgICApO1xyXG4gICAgfSwgdGhpcy5pc0FuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcclxuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgIGlmICh0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmNoZWNrU2Nyb2xsYmFyKCk7XHJcbiAgICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5zZXRTY3JvbGxiYXIoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY29uZmlnLmlnbm9yZUJhY2tkcm9wQ2xpY2sgfHxcclxuICAgICAgdGhpcy5jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnIHx8XHJcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ic01vZGFsU2VydmljZS5zZXREaXNtaXNzUmVhc29uKERJU01JU1NfUkVBU09OUy5CQUNLUkRPUCk7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLmVzYycsIFsnJGV2ZW50J10pXHJcbiAgb25Fc2MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNvbmZpZy5rZXlib2FyZCAmJlxyXG4gICAgICB0aGlzLmxldmVsID09PSB0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KClcclxuICAgICkge1xyXG4gICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldERpc21pc3NSZWFzb24oRElTTUlTU19SRUFTT05TLkVTQyk7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1Nob3duKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTW9kYWxIaWRpbmcgfHwgIXRoaXMuaXNTaG93bikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzTW9kYWxIaWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgaXNCczMoKSA/IENMQVNTX05BTUUuSU4gOiBDTEFTU19OQU1FLlNIT1dcclxuICAgICk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pc1Nob3duID0gZmFsc2U7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkb2N1bWVudCAmJlxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkgJiZcclxuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmdldE1vZGFsc0NvdW50KCkgPT09IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgQ0xBU1NfTkFNRS5PUEVOKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmhpZGUodGhpcy5sZXZlbCk7XHJcbiAgICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IGZhbHNlO1xyXG4gICAgfSwgdGhpcy5pc0FuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuTU9EQUwgOiAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ0xBU1NfTkFNRSB9IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XHJcbmltcG9ydCB7IGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuXHJcbi8qKiBUaGlzIGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGFzIGJhY2tncm91bmQgbGF5b3V0IGZvciBtb2RhbHMgaWYgZW5hYmxlZCAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLW1vZGFsLWJhY2tkcm9wJyxcclxuICB0ZW1wbGF0ZTogJyAnLFxyXG4gIGhvc3Q6IHsgY2xhc3M6IENMQVNTX05BTUUuQkFDS0RST1AgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZ2V0IGlzQW5pbWF0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNBbmltYXRlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0FuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0FuaW1hdGVkID0gdmFsdWU7XHJcbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7Q2xhc3NOYW1lLkZBREV9YCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc1Nob3duKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc1Nob3duID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBgJHtDTEFTU19OQU1FLklOfWBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgYCR7Q0xBU1NfTkFNRS5JTn1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQnMzKCkpIHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgYCR7Q0xBU1NfTkFNRS5TSE9XfWBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgIGAke0NMQVNTX05BTUUuU0hPV31gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcclxuICByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG5cclxuICBwcm90ZWN0ZWQgX2lzQW5pbWF0ZWQ6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF9pc1Nob3duID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBgJHtDTEFTU19OQU1FLkZBREV9YFxyXG4gICAgICApO1xyXG4gICAgICBVdGlscy5yZWZsb3codGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiLyogdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCAqL1xyXG4vLyB0b2RvOiBzaG91bGQgd2Ugc3VwcG9ydCBlbmZvcmNlIGZvY3VzIGluP1xyXG4vLyB0b2RvOiBpbiBvcmlnaW5hbCBicyB0aGVyZSBhcmUgd2FzIGEgd2F5IHRvIHByZXZlbnQgbW9kYWwgZnJvbSBzaG93aW5nXHJcbi8vIHRvZG86IG9yaWdpbmFsIG1vZGFsIGhhZCByZXNpemUgZXZlbnRzXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsXHJcbiAgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBkb2N1bWVudCwgd2luZG93LCBpc0JzMywgVXRpbHMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtYmFja2Ryb3AuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBDTEFTU19OQU1FLCBESVNNSVNTX1JFQVNPTlMsIG1vZGFsQ29uZmlnRGVmYXVsdHMsIE1vZGFsT3B0aW9uc1xyXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcblxyXG5jb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMzAwO1xyXG5jb25zdCBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xyXG5cclxuLyoqIE1hcmsgYW55IGNvZGUgd2l0aCBkaXJlY3RpdmUgdG8gc2hvdyBpdCdzIGNvbnRlbnQgaW4gbW9kYWwgKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnNNb2RhbF0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtbW9kYWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICAvKiogYWxsb3dzIHRvIHNldCBtb2RhbCBjb25maWd1cmF0aW9uIHZpYSBlbGVtZW50IHByb3BlcnR5ICovXHJcbiAgQElucHV0KClcclxuICBzZXQgY29uZmlnKGNvbmY6IE1vZGFsT3B0aW9ucykge1xyXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5nZXRDb25maWcoY29uZik7XHJcbiAgfVxyXG5cclxuICBnZXQgY29uZmlnKCk6IE1vZGFsT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgaW1tZWRpYXRlbHkgd2hlbiB0aGUgYHNob3dgIGluc3RhbmNlIG1ldGhvZCBpcyBjYWxsZWQuICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25TaG93OiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcclxuICAvKiogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtb2RhbCBoYXMgYmVlbiBtYWRlIHZpc2libGUgdG8gdGhlIHVzZXJcclxuICAgKiAod2lsbCB3YWl0IGZvciBDU1MgdHJhbnNpdGlvbnMgdG8gY29tcGxldGUpXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+KCk7XHJcbiAgLyoqIFRoaXMgZXZlbnQgaXMgZmlyZWQgaW1tZWRpYXRlbHkgd2hlblxyXG4gICAqIHRoZSBoaWRlIGluc3RhbmNlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25IaWRlOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcclxuICAvKiogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBtb2RhbCBoYXMgZmluaXNoZWQgYmVpbmdcclxuICAgKiBoaWRkZW4gZnJvbSB0aGUgdXNlciAod2lsbCB3YWl0IGZvciBDU1MgdHJhbnNpdGlvbnMgdG8gY29tcGxldGUpLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcclxuXHJcbiAgLyoqIFRoaXMgZmllbGQgY29udGFpbnMgbGFzdCBkaXNtaXNzIHJlYXNvbi5cclxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IGBiYWNrZHJvcC1jbGlja2AsIGBlc2NgIGFuZCBgbnVsbGBcclxuICAgKiAoaWYgbW9kYWwgd2FzIGNsb3NlZCBieSBkaXJlY3QgY2FsbCBvZiBgLmhpZGUoKWApLlxyXG4gICAqL1xyXG4gIGRpc21pc3NSZWFzb246IHN0cmluZztcclxuXHJcbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfY29uZmlnOiBNb2RhbE9wdGlvbnM7XHJcbiAgcHJvdGVjdGVkIF9pc1Nob3duID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBpc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBvcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcclxuICBwcm90ZWN0ZWQgc2Nyb2xsYmFyV2lkdGggPSAwO1xyXG5cclxuICBwcm90ZWN0ZWQgdGltZXJIaWRlTW9kYWwgPSAwO1xyXG4gIHByb3RlY3RlZCB0aW1lclJtQmFja0Ryb3AgPSAwO1xyXG5cclxuICAvLyByZWZlcmVuY2UgdG8gYmFja2Ryb3AgY29tcG9uZW50XHJcbiAgcHJvdGVjdGVkIGJhY2tkcm9wOiBDb21wb25lbnRSZWY8TW9kYWxCYWNrZHJvcENvbXBvbmVudD47XHJcbiAgcHJpdmF0ZSBfYmFja2Ryb3A6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcclxuXHJcbiAgcHJpdmF0ZSBpc05lc3RlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XHJcbiAgICB0aGlzLl9iYWNrZHJvcCA9IGNsZi5jcmVhdGVMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD4oXHJcbiAgICAgIF9lbGVtZW50LFxyXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgX3JlbmRlcmVyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayB8fFxyXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycgfHxcclxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBESVNNSVNTX1JFQVNPTlMuQkFDS1JET1A7XHJcbiAgICB0aGlzLmhpZGUoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogY29uc2lkZXIgcHJldmVudGluZyBkZWZhdWx0IGFuZCBzdG9wcGluZyBwcm9wYWdhdGlvblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjJywgWyckZXZlbnQnXSlcclxuICBvbkVzYyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcua2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy5kaXNtaXNzUmVhc29uID0gRElTTUlTU19SRUFTT05TLkVTQztcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuY29uZmlnID0gdm9pZCAwO1xyXG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcclxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2NvbmZpZyB8fCB0aGlzLmdldENvbmZpZygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9jb25maWcuc2hvdykge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIC8qIFB1YmxpYyBtZXRob2RzICovXHJcblxyXG4gIC8qKiBBbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIG1vZGFsIHZpc2liaWxpdHkgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICAvKiogQWxsb3dzIHRvIG1hbnVhbGx5IG9wZW4gbW9kYWwgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNtaXNzUmVhc29uID0gbnVsbDtcclxuICAgIHRoaXMub25TaG93LmVtaXQodGhpcyk7XHJcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lckhpZGVNb2RhbCk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lclJtQmFja0Ryb3ApO1xyXG5cclxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2hlY2tTY3JvbGxiYXIoKTtcclxuICAgIHRoaXMuc2V0U2Nyb2xsYmFyKCk7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUUuT1BFTikpIHtcclxuICAgICAgICB0aGlzLmlzTmVzdGVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93QmFja2Ryb3AoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dFbGVtZW50KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBBbGxvd3MgdG8gbWFudWFsbHkgY2xvc2UgbW9kYWwgKi9cclxuICBoaWRlKGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25IaWRlLmVtaXQodGhpcyk7XHJcblxyXG4gICAgLy8gdG9kbzogYWRkIGFuIG9wdGlvbiB0byBwcmV2ZW50IGhpZGluZ1xyXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJIaWRlTW9kYWwpO1xyXG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVyUm1CYWNrRHJvcCk7XHJcblxyXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLklOKTtcclxuICAgIGlmICghaXNCczMoKSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuU0hPVyk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLl9hZGRDbGFzc0luID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xyXG4gICAgICB0aGlzLnRpbWVySGlkZU1vZGFsID0gd2luZG93LnNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5oaWRlTW9kYWwoKSxcclxuICAgICAgICBUUkFOU0lUSU9OX0RVUkFUSU9OXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFByaXZhdGUgbWV0aG9kcyBAaW50ZXJuYWwgKi9cclxuICBwcm90ZWN0ZWQgZ2V0Q29uZmlnKGNvbmZpZz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWxDb25maWdEZWZhdWx0cywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBTaG93IGRpYWxvZ1xyXG4gICAqICBAaW50ZXJuYWxcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2hvd0VsZW1lbnQoKTogdm9pZCB7XHJcbiAgICAvLyB0b2RvOiByZXBsYWNlIHRoaXMgd2l0aCBjb21wb25lbnQgbG9hZGVyIHVzYWdlXHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSB8fFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREVcclxuICAgICkge1xyXG4gICAgICAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cclxuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2FyaWEtaGlkZGVuJyxcclxuICAgICAgJ2ZhbHNlJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYXJpYS1tb2RhbCcsXHJcbiAgICAgICd0cnVlJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdkaXNwbGF5JyxcclxuICAgICAgJ2Jsb2NrJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdzY3JvbGxUb3AnLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcclxuICAgICAgVXRpbHMucmVmbG93KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5fYWRkQ2xhc3NJbiA9IHRydWU7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuSU4pO1xyXG4gICAgaWYgKCFpc0JzMygpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5TSE9XKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KHRyYW5zaXRpb25Db21wbGV0ZSwgVFJBTlNJVElPTl9EVVJBVElPTik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwcm90ZWN0ZWQgaGlkZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdhcmlhLWhpZGRlbicsXHJcbiAgICAgICd0cnVlJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdkaXNwbGF5JyxcclxuICAgICAgJ25vbmUnXHJcbiAgICApO1xyXG4gICAgdGhpcy5zaG93QmFja2Ryb3AoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNOZXN0ZWQpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgQ0xBU1NfTkFNRS5PUEVOKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGJhcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVzZXRBZGp1c3RtZW50cygpO1xyXG4gICAgICB0aGlzLmZvY3VzT3RoZXJNb2RhbCgpO1xyXG4gICAgICB0aGlzLm9uSGlkZGVuLmVtaXQodGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IG9yaWdpbmFsIHNob3cgd2FzIGNhbGxpbmcgYSBjYWxsYmFjayB3aGVuIGRvbmUsIGJ1dCB3ZSBjYW4gdXNlXHJcbiAgLy8gcHJvbWlzZVxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwcm90ZWN0ZWQgc2hvd0JhY2tkcm9wKGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5faXNTaG93biAmJlxyXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCAmJlxyXG4gICAgICAoIXRoaXMuYmFja2Ryb3AgfHwgIXRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNTaG93bilcclxuICAgICkge1xyXG4gICAgICB0aGlzLnJlbW92ZUJhY2tkcm9wKCk7XHJcbiAgICAgIHRoaXMuX2JhY2tkcm9wXHJcbiAgICAgICAgLmF0dGFjaChNb2RhbEJhY2tkcm9wQ29tcG9uZW50KVxyXG4gICAgICAgIC50bygnYm9keScpXHJcbiAgICAgICAgLnNob3coe2lzQW5pbWF0ZWQ6IHRoaXMuX2NvbmZpZy5hbmltYXRlZH0pO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy5fYmFja2Ryb3AuX2NvbXBvbmVudFJlZjtcclxuXHJcbiAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5iYWNrZHJvcCkge1xyXG4gICAgICB0aGlzLmJhY2tkcm9wLmluc3RhbmNlLmlzU2hvd24gPSBmYWxzZTtcclxuXHJcbiAgICAgIGNvbnN0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNBbmltYXRlZCkge1xyXG4gICAgICAgIHRoaXMudGltZXJSbUJhY2tEcm9wID0gd2luZG93LnNldFRpbWVvdXQoXHJcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSxcclxuICAgICAgICAgIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT05cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwcm90ZWN0ZWQgcmVtb3ZlQmFja2Ryb3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogRXZlbnRzIHRyaWNrcyAqL1xyXG5cclxuICAvLyBubyBuZWVkIGZvciBpdFxyXG4gIC8vIHByb3RlY3RlZCBzZXRFc2NhcGVFdmVudCgpOnZvaWQge1xyXG4gIC8vICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XHJcbiAgLy8gICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcclxuICAvLyAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3KSB7XHJcbiAgLy8gICAgICAgICB0aGlzLmhpZGUoKVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSlcclxuICAvL1xyXG4gIC8vICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xyXG4gIC8vICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBwcm90ZWN0ZWQgc2V0UmVzaXplRXZlbnQoKTp2b2lkIHtcclxuICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnJywgRXZlbnQuUkVTSVpFKSk7XHJcbiAgLy8gaWYgKHRoaXMuX2lzU2hvd24pIHtcclxuICAvLyAgICQod2luZG93KS5vbihFdmVudC5SRVNJWkUsICQucHJveHkodGhpcy5faGFuZGxlVXBkYXRlLCB0aGlzKSlcclxuICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXHJcbiAgLy8gfVxyXG4gIC8vIH1cclxuXHJcbiAgcHJvdGVjdGVkIGZvY3VzT3RoZXJNb2RhbCgpIHtcclxuICAgIGlmICh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG90aGVyT3BlbmVkTW9kYWxzID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluW2JzTW9kYWxdJyk7XHJcbiAgICBpZiAoIW90aGVyT3BlbmVkTW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBvdGhlck9wZW5lZE1vZGFsc1tvdGhlck9wZW5lZE1vZGFscy5sZW5ndGggLSAxXS5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCByZXNldEFkanVzdG1lbnRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3BhZGRpbmdMZWZ0JyxcclxuICAgICAgJydcclxuICAgICk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAncGFkZGluZ1JpZ2h0JyxcclxuICAgICAgJydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogU2Nyb2xsIGJhciB0cmlja3MgKi9cclxuICAvKiogQGludGVybmFsICovXHJcbiAgcHJvdGVjdGVkIGNoZWNrU2Nyb2xsYmFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xyXG4gICAgaWYgKCFkb2N1bWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nID0gcGFyc2VJbnQoXHJcbiAgICAgIHdpbmRvd1xyXG4gICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxyXG4gICAgICAxMFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0JvZHlPdmVyZmxvd2luZykge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZyArXHJcbiAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmd9cHhgO1xyXG4gIH1cclxuXHJcbiAgLy8gdGh4IGQud2Fsc2hcclxuICBwcm90ZWN0ZWQgZ2V0U2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc2Nyb2xsRGl2LCBDTEFTU19OQU1FLlNDUk9MTEJBUl9NRUFTVVJFUik7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xyXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xyXG5cclxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnRSZWYsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBUZW1wbGF0ZVJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFJlbmRlcmVyRmFjdG9yeTJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBDTEFTU19OQU1FLFxyXG4gIG1vZGFsQ29uZmlnRGVmYXVsdHMsXHJcbiAgTW9kYWxPcHRpb25zLFxyXG4gIFRSQU5TSVRJT05fRFVSQVRJT05TXHJcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcclxuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJy4vYnMtbW9kYWwtcmVmLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNNb2RhbFNlcnZpY2Uge1xyXG4gIC8vIGNvbnN0cnVjdG9yIHByb3BzXHJcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnMgPSBtb2RhbENvbmZpZ0RlZmF1bHRzO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25TaG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uSGlkZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xyXG5cclxuICBwcm90ZWN0ZWQgc2Nyb2xsYmFyV2lkdGggPSAwO1xyXG5cclxuICBwcm90ZWN0ZWQgYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9iYWNrZHJvcExvYWRlcjogQ29tcG9uZW50TG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgbW9kYWxzQ291bnQgPSAwO1xyXG4gIHByaXZhdGUgbGFzdERpc21pc3NSZWFzb24gPSAnJztcclxuXHJcbiAgcHJpdmF0ZSBsb2FkZXJzOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+W10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBwcml2YXRlIGNsZjogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xyXG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD4oXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGxcclxuICAgICk7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKiBTaG93cyBhIG1vZGFsICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNob3coY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IGFueSwgY29uZmlnPzogTW9kYWxPcHRpb25zKTogQnNNb2RhbFJlZiB7XHJcbiAgICB0aGlzLm1vZGFsc0NvdW50Kys7XHJcbiAgICB0aGlzLl9jcmVhdGVMb2FkZXJzKCk7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsQ29uZmlnRGVmYXVsdHMsIGNvbmZpZyk7XHJcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKTtcclxuICAgIHRoaXMubGFzdERpc21pc3NSZWFzb24gPSBudWxsO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9zaG93TW9kYWwoY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKGxldmVsOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XHJcbiAgICAgIHRoaXMuX2hpZGVCYWNrZHJvcCgpO1xyXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGFsc0NvdW50ID0gdGhpcy5tb2RhbHNDb3VudCA+PSAxID8gdGhpcy5tb2RhbHNDb3VudCAtIDEgOiAwO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hpZGVNb2RhbChsZXZlbCk7XHJcbiAgICAgIHRoaXMucmVtb3ZlTG9hZGVycyhsZXZlbCk7XHJcbiAgICB9LCB0aGlzLmNvbmZpZy5hbmltYXRlZCA/IFRSQU5TSVRJT05fRFVSQVRJT05TLkJBQ0tEUk9QIDogMCk7XHJcbiAgfVxyXG5cclxuICBfc2hvd0JhY2tkcm9wKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNCYWNrZHJvcEVuYWJsZWQgPVxyXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCB8fCB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYyc7XHJcbiAgICBjb25zdCBpc0JhY2tkcm9wSW5ET00gPVxyXG4gICAgICAhdGhpcy5iYWNrZHJvcFJlZiB8fCAhdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duO1xyXG5cclxuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcclxuXHJcbiAgICAgIGlmIChpc0JhY2tkcm9wRW5hYmxlZCAmJiBpc0JhY2tkcm9wSW5ET00pIHtcclxuICAgICAgICB0aGlzLl9iYWNrZHJvcExvYWRlclxyXG4gICAgICAgICAgLmF0dGFjaChNb2RhbEJhY2tkcm9wQ29tcG9uZW50KVxyXG4gICAgICAgICAgLnRvKCdib2R5JylcclxuICAgICAgICAgIC5zaG93KHsgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQgfSk7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcFJlZiA9IHRoaXMuX2JhY2tkcm9wTG9hZGVyLl9jb21wb25lbnRSZWY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oaWRlQmFja2Ryb3AoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYmFja2Ryb3BSZWYpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duID0gZmFsc2U7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZUJhY2tkcm9wKCksIGR1cmF0aW9uKTtcclxuICB9XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIF9zaG93TW9kYWwoY29udGVudDogYW55KTogQnNNb2RhbFJlZiB7XHJcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IHRoaXMubG9hZGVyc1t0aGlzLmxvYWRlcnMubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCBic01vZGFsUmVmID0gbmV3IEJzTW9kYWxSZWYoKTtcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyUmVmID0gbW9kYWxMb2FkZXJcclxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBNb2RhbE9wdGlvbnMsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZyB9KVxyXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IEJzTW9kYWxSZWYsIHVzZVZhbHVlOiBic01vZGFsUmVmIH0pXHJcbiAgICAgIC5hdHRhY2goTW9kYWxDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgIC50bygnYm9keScpXHJcbiAgICAgIC5zaG93KHtjb250ZW50LCBpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZCwgaW5pdGlhbFN0YXRlOiB0aGlzLmNvbmZpZy5pbml0aWFsU3RhdGUsIGJzTW9kYWxTZXJ2aWNlOiB0aGlzfSk7XHJcbiAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5sZXZlbCA9IHRoaXMuZ2V0TW9kYWxzQ291bnQoKTtcclxuICAgIGJzTW9kYWxSZWYuaGlkZSA9ICgpID0+IHtcclxuICAgICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UuaGlkZSgpO1xyXG4gICAgfTtcclxuICAgIGJzTW9kYWxSZWYuY29udGVudCA9IG1vZGFsTG9hZGVyLmdldElubmVyQ29tcG9uZW50KCkgfHwgbnVsbDtcclxuICAgIGJzTW9kYWxSZWYuc2V0Q2xhc3MgPSAobmV3Q2xhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICBtb2RhbENvbnRhaW5lclJlZi5pbnN0YW5jZS5jb25maWcuY2xhc3MgPSBuZXdDbGFzcztcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGJzTW9kYWxSZWY7XHJcbiAgfVxyXG5cclxuICBfaGlkZU1vZGFsKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1vZGFsTG9hZGVyID0gdGhpcy5sb2FkZXJzW2xldmVsIC0gMV07XHJcbiAgICBpZiAobW9kYWxMb2FkZXIpIHtcclxuICAgICAgbW9kYWxMb2FkZXIuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TW9kYWxzQ291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsc0NvdW50O1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzbWlzc1JlYXNvbihyZWFzb246IHN0cmluZykge1xyXG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IHJlYXNvbjtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJhY2tkcm9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIuaGlkZSgpO1xyXG4gICAgdGhpcy5iYWNrZHJvcFJlZiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKiogQUZURVIgUFIgTUVSR0UgTU9EQUwuQ09NUE9ORU5UIFdJTEwgQkUgVVNJTkcgVEhJUyBDT0RFICovXHJcbiAgLyoqIFNjcm9sbCBiYXIgdHJpY2tzICovXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIGNoZWNrU2Nyb2xsYmFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIWRvY3VtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcclxuICAgICAgd2luZG93XHJcbiAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8ICcwJyxcclxuICAgICAgMTBcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNCb2R5T3ZlcmZsb3dpbmcpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgK1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGh9cHhgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldFNjcm9sbGJhcigpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nfXB4YDtcclxuICB9XHJcblxyXG4gIC8vIHRoeCBkLndhbHNoXHJcbiAgcHJpdmF0ZSBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENMQVNTX05BTUUuU0NST0xMQkFSX01FQVNVUkVSKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY3JlYXRlTG9hZGVycygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4oXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGxcclxuICAgICk7XHJcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25CZWZvcmVTaG93LCB0aGlzLm9uU2hvdyk7XHJcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25TaG93biwgdGhpcy5vblNob3duKTtcclxuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZUhpZGUsIHRoaXMub25IaWRlKTtcclxuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkhpZGRlbiwgdGhpcy5vbkhpZGRlbik7XHJcbiAgICB0aGlzLmxvYWRlcnMucHVzaChsb2FkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVMb2FkZXJzKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGVycy5zcGxpY2UobGV2ZWwgLSAxLCAxKTtcclxuICAgIHRoaXMubG9hZGVycy5mb3JFYWNoKFxyXG4gICAgICAobG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICBsb2FkZXIuaW5zdGFuY2UubGV2ZWwgPSBpICsgMTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGNvcHlFdmVudChmcm9tOiBFdmVudEVtaXR0ZXI8YW55PiwgdG86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XHJcbiAgICBmcm9tLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRvLmVtaXQodGhpcy5sYXN0RGlzbWlzc1JlYXNvbik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2JzLW1vZGFsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1vZGFsQmFja2Ryb3BDb21wb25lbnQsXHJcbiAgICBNb2RhbERpcmVjdGl2ZSxcclxuICAgIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxEaXJlY3RpdmVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW01vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE1vZGFsTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtCc01vZGFsU2VydmljZSwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgUG9zaXRpb25pbmdTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJpc0JzMyIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJIb3N0TGlzdGVuZXIiLCJVdGlscyIsIkV2ZW50RW1pdHRlciIsImRvY3VtZW50Iiwid2luZG93IiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIkNvbXBvbmVudExvYWRlckZhY3RvcnkiLCJJbnB1dCIsIk91dHB1dCIsIlJlbmRlcmVyRmFjdG9yeTIiLCJQb3NpdGlvbmluZ1NlcnZpY2UiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozt3QkFhcUIsUUFBUTs7Ozs0QkFJWSxRQUFROzs7b0JBZmhEQSxlQUFVOzt5QkFGWDs7Ozs7OztBQ0FBLFFBQUE7UUFHRSw4QkFBWSxPQUE2QjsyQkFGL0IsSUFBSTtZQUdaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO21DQUxIO1FBTUM7Ozs7OztBQ05EOzs7O29CQUdDQSxlQUFVOzsyQkFIWDs7SUF1Q08scUJBQU0sbUJBQW1CLEdBQWlCO1FBQy9DLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxLQUFLO1FBQ1gsbUJBQW1CLEVBQUUsS0FBSztRQUMxQixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxJQUFJO1FBQ2QsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztBQUVGLHlCQUFhLFVBQVUsR0FBYztRQUNuQyxrQkFBa0IsRUFBRSx5QkFBeUI7UUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLEVBQUUsRUFBRSxJQUFJOztRQUNSLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztBQUVGLElBT08scUJBQU0sb0JBQW9CLEdBQXdCO1FBQ3ZELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEdBQUc7S0FDZCxDQUFDO0FBRUYsSUFBTyxxQkFBTSxlQUFlLEdBQW1CO1FBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsR0FBRyxFQUFFLEtBQUs7S0FDWCxDQUFDOzs7Ozs7QUMxRUY7UUF5Q0UsaUNBQVksT0FBcUIsRUFDWCxRQUFvQixFQUN0QjtZQURFLGFBQVEsR0FBUixRQUFRLENBQVk7WUFDdEIsY0FBUyxHQUFULFNBQVM7MkJBUm5CLEtBQUs7aUNBSVMsS0FBSztZQUszQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzFDOzs7O1FBRUQsMENBQVE7OztZQUFSO2dCQUFBLGlCQTZCQztnQkE1QkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQ2hCLENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUMzQixTQUFTLEVBQ1QsT0FBTyxDQUNSLENBQUM7Z0JBQ0YsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCQyxXQUFLLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQzFDLENBQUM7aUJBQ0gsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtvQkFDN0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDcEM7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pEO2dCQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNyQzthQUNGOzs7OztRQUdELHlDQUFPOzs7O3NCQUFDLEtBQWlCO2dCQUN2QixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CO29CQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRO29CQUNqQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsYUFDakMsRUFBRTtvQkFDQSxPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7OztRQUlkLHVDQUFLOzs7O3NCQUFDLEtBQW9CO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDakIsT0FBTztpQkFDUjs7Z0JBR0QsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDbEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjtnQkFFRCxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtvQkFDcEIsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFDbkQsRUFBRTtvQkFDQSxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiOzs7OztRQUdILDZDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYjthQUNGOzs7O1FBRUQsc0NBQUk7OztZQUFKO2dCQUFBLGlCQXFCQztnQkFwQkMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDdkMsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUMzQkEsV0FBSyxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUMxQyxDQUFDO2dCQUNGLFVBQVUsQ0FBQztvQkFDVCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFDRSxRQUFRO3dCQUNSLFFBQVEsQ0FBQyxJQUFJO3dCQUNiLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FDM0MsRUFBRTt3QkFDQSxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDNUQ7b0JBQ0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztpQkFDNUIsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN0RDs7b0JBekhGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLDJNQU1UO3dCQUNELElBQUksRUFBRTs0QkFDSixLQUFLLEVBQUUsT0FBTzs0QkFDZCxJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsSUFBSTs0QkFDZCxtQkFBbUIsRUFBRSxNQUFNO3lCQUM1QjtxQkFDRjs7Ozs7d0JBckJDLFlBQVk7d0JBVFpDLGVBQVU7d0JBSVZDLGNBQVM7Ozs7Z0NBd0VSQyxpQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFhaENBLGlCQUFZLFNBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3NDQTNGaEQ7Ozs7Ozs7QUNBQTs7OztRQTRERSxnQ0FBWSxPQUFtQixFQUFFLFFBQW1COzRCQUYvQixLQUFLO1lBR3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzFCO1FBbERELHNCQUFJLDhDQUFVOzs7Z0JBQWQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7O2dCQUVELFVBQWUsS0FBYztnQkFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7O2FBRTFCOzs7V0FMQTtRQU9ELHNCQUFJLDJDQUFPOzs7Z0JBQVg7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7O2dCQUVELFVBQVksS0FBYztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksS0FBSyxFQUFFO29CQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsS0FBRyxVQUFVLENBQUMsRUFBSSxDQUNuQixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsS0FBRyxVQUFVLENBQUMsRUFBSSxDQUNuQixDQUFDO2lCQUNIO2dCQUNELElBQUksQ0FBQ0osV0FBSyxFQUFFLEVBQUU7b0JBQ1osSUFBSSxLQUFLLEVBQUU7d0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixLQUFHLFVBQVUsQ0FBQyxJQUFNLENBQ3JCLENBQUM7cUJBQ0g7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixLQUFHLFVBQVUsQ0FBQyxJQUFNLENBQ3JCLENBQUM7cUJBQ0g7aUJBQ0Y7YUFDRjs7O1dBNUJBOzs7O1FBeUNELHlDQUFROzs7WUFBUjtnQkFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsS0FBRyxVQUFVLENBQUMsSUFBTSxDQUNyQixDQUFDO29CQUNGSyxXQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzFDO2dCQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCOztvQkFuRUZKLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixRQUFRLEVBQUUsR0FBRzt3QkFDYixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRTtxQkFDckM7Ozs7O3dCQVhtQkMsZUFBVTt3QkFBVUMsY0FBUzs7O3FDQUFqRDs7Ozs7OztJQ2lCQSxxQkFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDaEMscUJBQU0sNEJBQTRCLEdBQUcsR0FBRyxDQUFDOzs7OztRQStEdkMsd0JBQW9CLFFBQW9CLEVBQzVCLGlCQUFtQyxFQUMzQixXQUNSLEdBQTJCO1lBSG5CLGFBQVEsR0FBUixRQUFRLENBQVk7WUFFcEIsY0FBUyxHQUFULFNBQVM7Ozs7MEJBN0NVLElBQUlHLGlCQUFZLEVBQWtCOzs7OzsyQkFLakMsSUFBSUEsaUJBQVksRUFBa0I7Ozs7OzBCQUtuQyxJQUFJQSxpQkFBWSxFQUFrQjs7Ozs7NEJBS2hDLElBQUlBLGlCQUFZLEVBQWtCOzRCQWF0RCxLQUFLO3FDQUVJLEtBQUs7dUNBQ0gsQ0FBQztrQ0FDTixDQUFDO2tDQUVELENBQUM7bUNBQ0EsQ0FBQzs0QkFNVixLQUFLO1lBTXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FDL0IsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixTQUFTLENBQ1YsQ0FBQztTQUNIOzhCQTlERyxrQ0FBTTs7O2dCQUlWO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQjs7Ozs7MEJBTlUsSUFBa0I7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7UUFnQ3RDLHNCQUFJLG1DQUFPOzs7Z0JBQVg7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCOzs7V0FBQTs7Ozs7UUE4QkQsZ0NBQU87Ozs7c0JBQUMsS0FBaUI7Z0JBQ3ZCLElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUI7b0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVE7b0JBQ2pDLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUNqQyxFQUFFO29CQUNBLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFLbkIsOEJBQUs7Ozs7c0JBQUMsS0FBb0I7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixPQUFPO2lCQUNSOztnQkFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO29CQUNsRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3hCO2dCQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQztvQkFDekMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiOzs7OztRQUdILG9DQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQzFCO2FBQ0Y7Ozs7UUFFRCxpQ0FBUTs7O1lBQVI7Z0JBQUEsaUJBT0M7Z0JBTkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEQsVUFBVSxDQUFDO29CQUNULElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7d0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDYjtpQkFDRixFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7Ozs7Ozs7UUFLRCwrQkFBTTs7OztZQUFOO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xEOzs7Ozs7UUFHRCw2QkFBSTs7OztZQUFKO2dCQUFBLGlCQXlCQztnQkF4QkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLE9BQU87aUJBQ1I7Z0JBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDbEMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBRXJCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUVwQixJQUFJQyxjQUFRLElBQUlBLGNBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQzdCLElBQUlBLGNBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3FCQUN0Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQ0EsY0FBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3pEO2lCQUNGO2dCQUVELElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2hCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEIsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7UUFHRCw2QkFBSTs7Ozs7WUFBSixVQUFLLEtBQWE7Z0JBQWxCLGlCQThCQztnQkE3QkMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN4QjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBR3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixPQUFPO2lCQUNSO2dCQUVEQyxZQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDekNBLFlBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUNSLFdBQUssRUFBRSxFQUFFO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUU7O2dCQUdELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUdRLFlBQU0sQ0FBQyxVQUFVLENBQ3JDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEdBQUEsRUFDdEIsbUJBQW1CLENBQ3BCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNsQjthQUNGOzs7Ozs7O1FBR1Msa0NBQVM7Ozs7O1lBQW5CLFVBQW9CLE1BQXFCO2dCQUN2QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZEOzs7Ozs7Ozs7O1FBTVMsb0NBQVc7Ozs7O1lBQXJCO2dCQUFBLGlCQXVEQzs7Z0JBckRDLElBQ0UsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVO29CQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxZQUMzRCxFQUFFOztvQkFFQSxJQUFJRCxjQUFRLElBQUlBLGNBQVEsQ0FBQyxJQUFJLEVBQUU7d0JBQzdCQSxjQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUN4RDtpQkFDRjtnQkFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLGFBQWEsRUFDYixPQUFPLENBQ1IsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLFlBQVksRUFDWixNQUFNLENBQ1AsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLFNBQVMsRUFDVCxPQUFPLENBQ1IsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLFdBQVcsRUFDWCxDQUFDLENBQ0YsQ0FBQztnQkFFRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO29CQUN6QkYsV0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMzQzs7Z0JBR0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLENBQUNMLFdBQUssRUFBRSxFQUFFO29CQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdkU7Z0JBRUQscUJBQU0sa0JBQWtCLEdBQUc7b0JBQ3pCLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7d0JBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNyQztvQkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztpQkFDekIsQ0FBQztnQkFFRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO29CQUN6QixVQUFVLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztpQkFDckQ7cUJBQU07b0JBQ0wsa0JBQWtCLEVBQUUsQ0FBQztpQkFDdEI7YUFDRjs7Ozs7O1FBR1Msa0NBQVM7Ozs7WUFBbkI7Z0JBQUEsaUJBc0JDO2dCQXJCQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLGFBQWEsRUFDYixNQUFNLENBQ1AsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLFNBQVMsRUFDVCxNQUFNLENBQ1AsQ0FBQztnQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoQixJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTt3QkFDbEIsSUFBSU8sY0FBUSxJQUFJQSxjQUFRLENBQUMsSUFBSSxFQUFFOzRCQUM3QixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQ0EsY0FBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQzVEO3dCQUNELEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztxQkFDdkI7b0JBQ0QsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7aUJBQzFCLENBQUMsQ0FBQzthQUNKOzs7Ozs7Ozs7UUFLUyxxQ0FBWTs7Ozs7WUFBdEIsVUFBdUIsUUFBbUI7Z0JBQTFDLGlCQTZDQztnQkE1Q0MsSUFDRSxJQUFJLENBQUMsUUFBUTtvQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7cUJBQ25CLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDcEQsRUFBRTtvQkFDQSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxTQUFTO3lCQUNYLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzt5QkFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5QkFDVixJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO29CQUU3QyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNiLE9BQU87cUJBQ1I7b0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUMxQixRQUFRLEVBQUUsQ0FBQzt3QkFFWCxPQUFPO3FCQUNSO29CQUVELFVBQVUsQ0FBQyxRQUFRLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztpQkFDcEQ7cUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFFdkMscUJBQU0sY0FBYyxHQUFHO3dCQUNyQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3RCLElBQUksUUFBUSxFQUFFOzRCQUNaLFFBQVEsRUFBRSxDQUFDO3lCQUNaO3FCQUNGLENBQUM7b0JBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUdDLFlBQU0sQ0FBQyxVQUFVLENBQ3RDLGNBQWMsRUFDZCw0QkFBNEIsQ0FDN0IsQ0FBQztxQkFDSDt5QkFBTTt3QkFDTCxjQUFjLEVBQUUsQ0FBQztxQkFDbEI7aUJBQ0Y7cUJBQU0sSUFBSSxRQUFRLEVBQUU7b0JBQ25CLFFBQVEsRUFBRSxDQUFDO2lCQUNaO2FBQ0Y7Ozs7OztRQUdTLHVDQUFjOzs7O1lBQXhCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJCUyx3Q0FBZTs7OztZQUF6QjtnQkFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7b0JBQ3JELE9BQU87aUJBQ1I7Z0JBQ0QscUJBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNyRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO29CQUM3QixPQUFPO2lCQUNSO2dCQUNELGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN6RDs7Ozs7O1FBR1MseUNBQWdCOzs7O1lBQTFCO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFDM0IsYUFBYSxFQUNiLEVBQUUsQ0FDSCxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFDM0IsY0FBYyxFQUNkLEVBQUUsQ0FDSCxDQUFDO2FBQ0g7Ozs7Ozs7UUFJUyx1Q0FBYzs7OztZQUF4QjtnQkFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUdELGNBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHQyxZQUFNLENBQUMsVUFBVSxDQUFDO2dCQUN2RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ2hEOzs7O1FBRVMscUNBQVk7OztZQUF0QjtnQkFDRSxJQUFJLENBQUNELGNBQVEsRUFBRTtvQkFDYixPQUFPO2lCQUNSO2dCQUVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQ2pDQyxZQUFNO3FCQUNILGdCQUFnQixDQUFDRCxjQUFRLENBQUMsSUFBSSxDQUFDO3FCQUMvQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQ3pDLEVBQUUsQ0FDSCxDQUFDO2dCQUVGLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUMxQkEsY0FBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFNLElBQUksQ0FBQyxtQkFBbUI7d0JBQzlELElBQUksQ0FBQyxjQUFjLE9BQUksQ0FBQztpQkFDekI7YUFDRjs7OztRQUVTLHVDQUFjOzs7WUFBeEI7Z0JBQ0VBLGNBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBTSxJQUFJLENBQUMsbUJBQW1CLE9BQUksQ0FBQzthQUNwRTs7Ozs7UUFHUywwQ0FBaUI7OztZQUEzQjtnQkFDRSxxQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUNBLGNBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JELHFCQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDQSxjQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUVyRCxPQUFPLGNBQWMsQ0FBQzthQUN2Qjs7b0JBcmFGRSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxVQUFVO3FCQUNyQjs7Ozs7d0JBbEIwQlAsZUFBVTt3QkFDR1EscUJBQWdCO3dCQUEzQlAsY0FBUzt3QkFRWlEsc0NBQXNCOzs7OytCQVk3Q0MsVUFBSzsrQkFVTEMsV0FBTTtnQ0FLTkEsV0FBTTsrQkFLTkEsV0FBTTtpQ0FLTkEsV0FBTTtnQ0F3Q05ULGlCQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQWNoQ0EsaUJBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzZCQTFHekM7Ozs7Ozs7QUNBQTtRQWdERSx3QkFBWSxlQUFpQyxFQUFVLEdBQTJCO1lBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCOzswQkF6QjNELG1CQUFtQjs7MEJBR2QsSUFBSUUsaUJBQVksRUFBRTs7MkJBRWpCLElBQUlBLGlCQUFZLEVBQUU7OzBCQUVuQixJQUFJQSxpQkFBWSxFQUFFOzs0QkFFaEIsSUFBSUEsaUJBQVksRUFBRTtxQ0FFbEIsS0FBSzt1Q0FDSCxDQUFDO2tDQUVOLENBQUM7K0JBSU4sQ0FBQztxQ0FDSyxFQUFFOzJCQUVnQyxFQUFFO1lBSzlELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQzFDLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdEOzs7Ozs7Ozs7UUFJRCw2QkFBSTs7Ozs7O1lBQUosVUFBSyxPQUF3QyxFQUFFLE1BQXFCO2dCQUNsRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUU5QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7Ozs7O1FBRUQsNkJBQUk7Ozs7WUFBSixVQUFLLEtBQWE7Z0JBQWxCLGlCQVVDO2dCQVRDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEUsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlEOzs7O1FBRUQsc0NBQWE7OztZQUFiO2dCQUNFLHFCQUFNLGlCQUFpQixHQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUM7Z0JBQzVELHFCQUFNLGVBQWUsR0FDbkIsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUUxRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBRXRCLElBQUksaUJBQWlCLElBQUksZUFBZSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsZUFBZTs2QkFDakIsTUFBTSxDQUFDLHNCQUFzQixDQUFDOzZCQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDOzZCQUNWLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7d0JBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7cUJBQ3ZEO2lCQUNGO2FBQ0Y7Ozs7UUFFRCxzQ0FBYTs7O1lBQWI7Z0JBQUEsaUJBT0M7Z0JBTkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3JCLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDMUMscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQzFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxHQUFBLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDbkQ7Ozs7OztRQUVELG1DQUFVOzs7O1lBQVYsVUFBVyxPQUFZO2dCQUNyQixxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUQscUJBQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQ3BDLHFCQUFNLGlCQUFpQixHQUFHLFdBQVc7cUJBQ2xDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDekQsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7cUJBQ3RELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztxQkFDL0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztxQkFDVixJQUFJLENBQUMsRUFBQyxPQUFPLFNBQUEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUNuSCxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDekQsVUFBVSxDQUFDLElBQUksR0FBRztvQkFDaEIsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNuQyxDQUFDO2dCQUNGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixFQUFFLElBQUksSUFBSSxDQUFDO2dCQUM3RCxVQUFVLENBQUMsUUFBUSxHQUFHLFVBQUMsUUFBZ0I7b0JBQ3JDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztpQkFDcEQsQ0FBQztnQkFFRixPQUFPLFVBQVUsQ0FBQzthQUNuQjs7Ozs7UUFFRCxtQ0FBVTs7OztZQUFWLFVBQVcsS0FBYTtnQkFDdEIscUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLFdBQVcsRUFBRTtvQkFDZixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7Ozs7UUFFRCx1Q0FBYzs7O1lBQWQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCOzs7OztRQUVELHlDQUFnQjs7OztZQUFoQixVQUFpQixNQUFjO2dCQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO2FBQ2pDOzs7O1FBRUQsdUNBQWM7OztZQUFkO2dCQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCOzs7Ozs7OztRQUtELHVDQUFjOzs7O1lBQWQ7Z0JBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDaEQ7Ozs7UUFFRCxxQ0FBWTs7O1lBQVo7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixPQUFPO2lCQUNSO2dCQUVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQ2pDLE1BQU07cUJBQ0gsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztxQkFDL0IsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxFQUMzQyxFQUFFLENBQ0gsQ0FBQztnQkFFRixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtvQkFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFNLElBQUksQ0FBQyxtQkFBbUI7d0JBQzVELElBQUksQ0FBQyxjQUFjLE9BQUksQ0FBQztpQkFDM0I7YUFDRjs7OztRQUVPLHVDQUFjOzs7O2dCQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQU0sSUFBSSxDQUFDLG1CQUFtQixPQUFJLENBQUM7Ozs7O1FBSTdELDBDQUFpQjs7OztnQkFDdkIscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JELHFCQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRXJELE9BQU8sY0FBYyxDQUFDOzs7OztRQUdoQix1Q0FBYzs7OztnQkFDcEIscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUNsQyxJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7UUFHcEIsc0NBQWE7Ozs7c0JBQUMsS0FBYTtnQkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQ2xCLFVBQUMsTUFBZ0QsRUFBRSxDQUFTO29CQUMxRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQixDQUNGLENBQUM7Ozs7Ozs7UUFJSSxrQ0FBUzs7Ozs7c0JBQUMsSUFBdUIsRUFBRSxFQUFxQjs7Z0JBQzlELElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2IsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDakMsQ0FBQyxDQUFDOzs7b0JBck1OUCxlQUFVOzs7Ozt3QkFkVGUscUJBQWdCO3dCQUdRSCxzQ0FBc0I7Ozs2QkFUaEQ7Ozs7Ozs7QUNBQTs7Ozs7O1FBbUJTLG1CQUFPOzs7WUFBZDtnQkFDRSxPQUFPO29CQUNMLFFBQVEsRUFBRSxXQUFXO29CQUNyQixTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUVBLHNDQUFzQixFQUFFSSw4QkFBa0IsQ0FBQztpQkFDeEUsQ0FBQzthQUNIOztvQkFmRkMsYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRTs0QkFDWixzQkFBc0I7NEJBQ3RCLGNBQWM7NEJBQ2QsdUJBQXVCO3lCQUN4Qjt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUM7d0JBQ2pELGVBQWUsRUFBRSxDQUFDLHNCQUFzQixFQUFFLHVCQUF1QixDQUFDO3FCQUNuRTs7MEJBakJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9