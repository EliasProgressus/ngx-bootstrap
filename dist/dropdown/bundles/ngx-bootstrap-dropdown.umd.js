(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('rxjs/operators'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/dropdown', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'rxjs/operators', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].dropdown = {}),global.ng.core,global.utils,global.rxjs.operators,global.componentLoader,global.positioning));
}(this, (function (exports,core,utils,operators,componentLoader,positioning) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Default dropdown configuration
     */
    var BsDropdownConfig = (function () {
        function BsDropdownConfig() {
            /**
             * default dropdown auto closing behavior
             */
            this.autoClose = true;
            /**
             * default dropdown auto closing behavior
             */
            this.insideClick = false;
        }
        BsDropdownConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDropdownConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownState = (function () {
        function BsDropdownState() {
            var _this = this;
            this.direction = 'down';
            this.isOpenChange = new core.EventEmitter();
            this.isDisabledChange = new core.EventEmitter();
            this.toggleClick = new core.EventEmitter();
            this.dropdownMenu = new Promise(function (resolve) {
                _this.resolveDropdownMenu = resolve;
            });
        }
        BsDropdownState.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDropdownState.ctorParameters = function () { return []; };
        return BsDropdownState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownContainerComponent = (function () {
        function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
            var _this = this;
            this._state = _state;
            this.cd = cd;
            this._renderer = _renderer;
            this._element = _element;
            this.isOpen = false;
            this._subscription = _state.isOpenChange.subscribe(function (value) {
                _this.isOpen = value;
                var /** @type {?} */ dropdown = _this._element.nativeElement.querySelector('.dropdown-menu');
                if (dropdown && !utils.isBs3()) {
                    _this._renderer.addClass(dropdown, 'show');
                    if (dropdown.classList.contains('dropdown-menu-right')) {
                        _this._renderer.setStyle(dropdown, 'left', 'auto');
                        _this._renderer.setStyle(dropdown, 'right', '0');
                    }
                    if (_this.direction === 'up') {
                        _this._renderer.setStyle(dropdown, 'top', 'auto');
                        _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                    }
                }
                _this.cd.markForCheck();
                _this.cd.detectChanges();
            });
        }
        Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.direction;
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        /**
         * \@internal
         * @param {?} el
         * @return {?}
         */
        BsDropdownContainerComponent.prototype._contains = /**
         * \@internal
         * @param {?} el
         * @return {?}
         */
            function (el) {
                return this._element.nativeElement.contains(el);
            };
        /**
         * @return {?}
         */
        BsDropdownContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._subscription.unsubscribe();
            };
        BsDropdownContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-dropdown-container',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            style: 'display:block;position: absolute;'
                        },
                        template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDropdownContainerComponent.ctorParameters = function () {
            return [
                { type: BsDropdownState, },
                { type: core.ChangeDetectorRef, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
            ];
        };
        return BsDropdownContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownDirective = (function () {
        function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._viewContainerRef = _viewContainerRef;
            this._cis = _cis;
            this._config = _config;
            this._state = _state;
            this._isInlineOpen = false;
            this._subscriptions = [];
            this._isInited = false;
            // set initial dropdown state from config
            this._state.autoClose = this._config.autoClose;
            this._state.insideClick = this._config.insideClick;
            // create dropdown component loader
            this._dropdown = this._cis
                .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
                .provide({ provide: BsDropdownState, useValue: this._state });
            this.onShown = this._dropdown.onShown;
            this.onHidden = this._dropdown.onHidden;
            this.isOpenChange = this._state.isOpenChange;
        }
        Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.autoClose;
            },
            set: /**
             * Indicates that dropdown will be closed on item or document click,
             * and after pressing ESC
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._state.autoClose = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
            get: /**
             * @return {?}
             */ function () {
                return this._state.insideClick;
            },
            set: /**
             * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._state.insideClick = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._isDisabled;
            },
            set: /**
             * Disables dropdown toggle and hides dropdown menu if opened
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._isDisabled = value;
                this._state.isDisabledChange.emit(value);
                if (value) {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the popover is currently being shown
             * @return {?}
             */ function () {
                if (this._showInline) {
                    return this._isInlineOpen;
                }
                return this._dropdown.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
            get: /**
             * @return {?}
             */ function () {
                return !this.container;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // fix: seems there are an issue with `routerLinkActive`
                // which result in duplicated call ngOnInit without call to ngOnDestroy
                // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
                if (this._isInited) {
                    return;
                }
                this._isInited = true;
                // attach DOM listeners
                this._dropdown.listen({
                    // because of dropdown inline mode
                    outsideClick: false,
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                // toggle visibility on toggle element click
                this._subscriptions.push(this._state.toggleClick.subscribe(function (value) { return _this.toggle(value); }));
                // hide dropdown if set disabled while opened
                this._subscriptions.push(this._state.isDisabledChange
                    .pipe(operators.filter(function (value) { return value; }))
                    .subscribe(function (value) { return _this.hide(); }));
            };
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        BsDropdownDirective.prototype.show = /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isOpen || this.isDisabled) {
                    return;
                }
                if (this._showInline) {
                    if (!this._inlinedMenu) {
                        this._state.dropdownMenu.then(function (dropdownMenu) {
                            _this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                            _this._inlinedMenu = _this._dropdown._inlineViewRef;
                            _this.addBs4Polyfills();
                        })
                            .catch();
                    }
                    this.addBs4Polyfills();
                    this._isInlineOpen = true;
                    this.onShown.emit(true);
                    this._state.isOpenChange.emit(true);
                    return;
                }
                this._state.dropdownMenu.then(function (dropdownMenu) {
                    // check direction in which dropdown should be opened
                    var /** @type {?} */ _dropup = _this.dropup ||
                        (typeof _this.dropup !== 'undefined' && _this.dropup);
                    _this._state.direction = _dropup ? 'up' : 'down';
                    var /** @type {?} */ _placement = _this.placement || (_dropup ? 'top left' : 'bottom left');
                    // show dropdown
                    // show dropdown
                    _this._dropdown
                        .attach(BsDropdownContainerComponent)
                        .to(_this.container)
                        .position({ attachment: _placement })
                        .show({
                        content: dropdownMenu.templateRef,
                        placement: _placement
                    });
                    _this._state.isOpenChange.emit(true);
                })
                    .catch();
            };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
        BsDropdownDirective.prototype.hide = /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         * @return {?}
         */
            function () {
                if (!this.isOpen) {
                    return;
                }
                if (this._showInline) {
                    this.removeShowClass();
                    this.removeDropupStyles();
                    this._isInlineOpen = false;
                    this.onHidden.emit(true);
                }
                else {
                    this._dropdown.hide();
                }
                this._state.isOpenChange.emit(false);
            };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         */
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         * @param {?=} value
         * @return {?}
         */
        BsDropdownDirective.prototype.toggle = /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
         * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
         * @param {?=} value
         * @return {?}
         */
            function (value) {
                if (this.isOpen || !value) {
                    return this.hide();
                }
                return this.show();
            };
        /** @internal */
        /**
         * \@internal
         * @param {?} event
         * @return {?}
         */
        BsDropdownDirective.prototype._contains = /**
         * \@internal
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return this._elementRef.nativeElement.contains(event.target) ||
                    (this._dropdown.instance && this._dropdown.instance._contains(event.target));
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    // clean up subscriptions and destroy dropdown
                    for (var _a = __values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._dropdown.dispose();
                var e_1, _c;
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.addBs4Polyfills = /**
         * @return {?}
         */
            function () {
                if (!utils.isBs3()) {
                    this.addShowClass();
                    this.checkRightAlignment();
                    this.addDropupStyles();
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.addShowClass = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.removeShowClass = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.checkRightAlignment = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    var /** @type {?} */ isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.addDropupStyles = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    // a little hack to not break support of bootstrap 4 beta
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
                    this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
                }
            };
        /**
         * @return {?}
         */
        BsDropdownDirective.prototype.removeDropupStyles = /**
         * @return {?}
         */
            function () {
                if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
                    this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
                    this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
                    this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
                }
            };
        BsDropdownDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDropdown],[dropdown]',
                        exportAs: 'bs-dropdown',
                        providers: [BsDropdownState],
                        host: {
                            '[class.dropup]': 'dropup',
                            '[class.open]': 'isOpen',
                            '[class.show]': 'isOpen && isBs4'
                        }
                    },] }
        ];
        /** @nocollapse */
        BsDropdownDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: BsDropdownConfig, },
                { type: BsDropdownState, },
            ];
        };
        BsDropdownDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "dropup": [{ type: core.Input },],
            "autoClose": [{ type: core.Input },],
            "insideClick": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "isOpenChange": [{ type: core.Output },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
        };
        return BsDropdownDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownMenuDirective = (function () {
        // tslint:disable:no-any
        function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
            _state.resolveDropdownMenu({
                templateRef: _templateRef,
                viewContainer: _viewContainer
            });
        }
        BsDropdownMenuDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDropdownMenu],[dropdownMenu]',
                        exportAs: 'bs-dropdown-menu'
                    },] }
        ];
        /** @nocollapse */
        BsDropdownMenuDirective.ctorParameters = function () {
            return [
                { type: BsDropdownState, },
                { type: core.ViewContainerRef, },
                { type: core.TemplateRef, },
            ];
        };
        return BsDropdownMenuDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownToggleDirective = (function () {
        function BsDropdownToggleDirective(_state, _element, dropdown) {
            var _this = this;
            this._state = _state;
            this._element = _element;
            this.dropdown = dropdown;
            this.isDisabled = null;
            this._subscriptions = [];
            // sync is open value with state
            this._subscriptions.push(this._state.isOpenChange.subscribe(function (value) { return (_this.isOpen = value); }));
            // populate disabled state
            this._subscriptions.push(this._state.isDisabledChange.subscribe(function (value) { return (_this.isDisabled = value || null); }));
        }
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.isDisabled) {
                    return;
                }
                this._state.toggleClick.emit(true);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onDocumentClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._state.autoClose &&
                    event.button !== 2 &&
                    !this._element.nativeElement.contains(event.target) &&
                    !(this._state.insideClick && this.dropdown._contains(event))) {
                    this._state.toggleClick.emit(false);
                }
            };
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.onEsc = /**
         * @return {?}
         */
            function () {
                if (this._state.autoClose) {
                    this._state.toggleClick.emit(false);
                }
            };
        /**
         * @return {?}
         */
        BsDropdownToggleDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        BsDropdownToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDropdownToggle],[dropdownToggle]',
                        exportAs: 'bs-dropdown-toggle',
                        host: {
                            '[attr.aria-haspopup]': 'true'
                        }
                    },] }
        ];
        /** @nocollapse */
        BsDropdownToggleDirective.ctorParameters = function () {
            return [
                { type: BsDropdownState, },
                { type: core.ElementRef, },
                { type: BsDropdownDirective, },
            ];
        };
        BsDropdownToggleDirective.propDecorators = {
            "isDisabled": [{ type: core.HostBinding, args: ['attr.disabled',] },],
            "isOpen": [{ type: core.HostBinding, args: ['attr.aria-expanded',] },],
            "onClick": [{ type: core.HostListener, args: ['click', [],] },],
            "onDocumentClick": [{ type: core.HostListener, args: ['document:click', ['$event'],] },],
            "onEsc": [{ type: core.HostListener, args: ['keyup.esc',] },],
        };
        return BsDropdownToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDropdownModule = (function () {
        function BsDropdownModule() {
        }
        // tslint:disable-next-line:no-any
        /**
         * @param {?=} config
         * @return {?}
         */
        BsDropdownModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: BsDropdownModule,
                    providers: [
                        componentLoader.ComponentLoaderFactory,
                        positioning.PositioningService,
                        BsDropdownState,
                        {
                            provide: BsDropdownConfig,
                            useValue: config ? config : { autoClose: true, insideClick: false }
                        }
                    ]
                };
            };
        BsDropdownModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BsDropdownMenuDirective,
                            BsDropdownToggleDirective,
                            BsDropdownContainerComponent,
                            BsDropdownDirective
                        ],
                        exports: [
                            BsDropdownMenuDirective,
                            BsDropdownToggleDirective,
                            BsDropdownDirective
                        ],
                        entryComponents: [BsDropdownContainerComponent]
                    },] }
        ];
        return BsDropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BsDropdownDirective = BsDropdownDirective;
    exports.BsDropdownMenuDirective = BsDropdownMenuDirective;
    exports.BsDropdownToggleDirective = BsDropdownToggleDirective;
    exports.BsDropdownContainerComponent = BsDropdownContainerComponent;
    exports.BsDropdownState = BsDropdownState;
    exports.BsDropdownConfig = BsDropdownConfig;
    exports.BsDropdownModule = BsDropdownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kcm9wZG93bi51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duL2JzLWRyb3Bkb3duLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5zdGF0ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duL2JzLWRyb3Bkb3duLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi1tZW51LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duL2JzLWRyb3Bkb3duLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKiBEZWZhdWx0IGRyb3Bkb3duIGNvbmZpZ3VyYXRpb24gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbmZpZyB7XHJcbiAgLyoqIGRlZmF1bHQgZHJvcGRvd24gYXV0byBjbG9zaW5nIGJlaGF2aW9yICovXHJcbiAgYXV0b0Nsb3NlID0gdHJ1ZTtcclxuICAvKiogZGVmYXVsdCBkcm9wZG93biBhdXRvIGNsb3NpbmcgYmVoYXZpb3IgKi9cclxuICBpbnNpZGVDbGljayA9IGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0NvbXBvbmVudFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duU3RhdGUge1xyXG4gIGRpcmVjdGlvbjogJ2Rvd24nIHwgJ3VwJyA9ICdkb3duJztcclxuICBhdXRvQ2xvc2U6IGJvb2xlYW47XHJcbiAgaW5zaWRlQ2xpY2s6IGJvb2xlYW47XHJcbiAgaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIGlzRGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgdG9nZ2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcbiAgZHJvcGRvd25NZW51OiBQcm9taXNlPEJzQ29tcG9uZW50UmVmPGFueT4+O1xyXG4gIHJlc29sdmVEcm9wZG93bk1lbnU6IChjb21wb25lbnRSZWY6IEJzQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kcm9wZG93bk1lbnUgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5yZXNvbHZlRHJvcGRvd25NZW51ID0gcmVzb2x2ZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRyb3Bkb3duLWNvbnRhaW5lcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgc3R5bGU6ICdkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOiBhYnNvbHV0ZTsnXHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbY2xhc3MuZHJvcHVwXT1cImRpcmVjdGlvbiA9PT0gJ3VwJ1wiXHJcbiAgICAgICAgIFtjbGFzcy5kcm9wZG93bl09XCJkaXJlY3Rpb24gPT09ICdkb3duJ1wiXHJcbiAgICAgICAgIFtjbGFzcy5zaG93XT1cImlzT3BlblwiXHJcbiAgICAgICAgIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGRpcmVjdGlvbigpOiAnZG93bicgfCAndXAnIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5kaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcclxuICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcclxuICAgICAgaWYgKGRyb3Bkb3duICYmICFpc0JzMygpKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZHJvcGRvd24sICdzaG93Jyk7XHJcbiAgICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tbWVudS1yaWdodCcpKSB7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ2xlZnQnLCAnYXV0bycpO1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICdyaWdodCcsICcwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICd0b3AnLCAnYXV0bycpO1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICAgIGRyb3Bkb3duLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZVkoLTEwMSUpJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfY29udGFpbnMoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZWwpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBCc0NvbXBvbmVudFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcblxyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29uZmlnIH0gZnJvbSAnLi9icy1kcm9wZG93bi5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9icy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tic0Ryb3Bkb3duXSxbZHJvcGRvd25dJyxcclxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duJyxcclxuICBwcm92aWRlcnM6IFtCc0Ryb3Bkb3duU3RhdGVdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuZHJvcHVwXSc6ICdkcm9wdXAnLFxyXG4gICAgJ1tjbGFzcy5vcGVuXSc6ICdpc09wZW4nLFxyXG4gICAgJ1tjbGFzcy5zaG93XSc6ICdpc09wZW4gJiYgaXNCczQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZCB1cHdhcmRzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZHJvcHVwOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhhdCBkcm9wZG93biB3aWxsIGJlIGNsb3NlZCBvbiBpdGVtIG9yIGRvY3VtZW50IGNsaWNrLFxyXG4gICAqIGFuZCBhZnRlciBwcmVzc2luZyBFU0NcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdXRvQ2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9DbG9zZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgZHJvcGRvd24gc2hvdWxkbid0IGNsb3NlIG9uIGluc2lkZSBjbGljayB3aGVuIGF1dG9DbG9zZSBpcyBzZXQgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGluc2lkZUNsaWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zdGF0ZS5pbnNpZGVDbGljayA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGluc2lkZUNsaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZXMgZHJvcGRvd24gdG9nZ2xlIGFuZCBoaWRlcyBkcm9wZG93biBtZW51IGlmIG9wZW5lZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faXNJbmxpbmVPcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bi5pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIGlzT3BlbiBjaGFuZ2VcclxuICAgKi9cclxuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cclxuICAgKi9cclxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIGhpZGRlblxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xyXG5cclxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIWlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kcm9wZG93bjogQ29tcG9uZW50TG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIGdldCBfc2hvd0lubGluZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBtb3ZlIHRvIGNvbXBvbmVudCBsb2FkZXJcclxuICBwcml2YXRlIF9pc0lubGluZU9wZW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5saW5lZE1lbnU6IEVtYmVkZGVkVmlld1JlZjxCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZT47XHJcbiAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgX2lzSW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9jb25maWc6IEJzRHJvcGRvd25Db25maWcsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSkge1xyXG4gICAgLy8gc2V0IGluaXRpYWwgZHJvcGRvd24gc3RhdGUgZnJvbSBjb25maWdcclxuICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSA9IHRoaXMuX2NvbmZpZy5hdXRvQ2xvc2U7XHJcbiAgICB0aGlzLl9zdGF0ZS5pbnNpZGVDbGljayA9IHRoaXMuX2NvbmZpZy5pbnNpZGVDbGljaztcclxuXHJcbiAgICAvLyBjcmVhdGUgZHJvcGRvd24gY29tcG9uZW50IGxvYWRlclxyXG4gICAgdGhpcy5fZHJvcGRvd24gPSB0aGlzLl9jaXNcclxuICAgICAgLmNyZWF0ZUxvYWRlcjxCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxyXG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcclxuICAgICAgKVxyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEcm9wZG93blN0YXRlLCB1c2VWYWx1ZTogdGhpcy5fc3RhdGV9KTtcclxuXHJcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kcm9wZG93bi5vblNob3duO1xyXG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2Ryb3Bkb3duLm9uSGlkZGVuO1xyXG4gICAgdGhpcy5pc09wZW5DaGFuZ2UgPSB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2U7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBmaXg6IHNlZW1zIHRoZXJlIGFyZSBhbiBpc3N1ZSB3aXRoIGByb3V0ZXJMaW5rQWN0aXZlYFxyXG4gICAgLy8gd2hpY2ggcmVzdWx0IGluIGR1cGxpY2F0ZWQgY2FsbCBuZ09uSW5pdCB3aXRob3V0IGNhbGwgdG8gbmdPbkRlc3Ryb3lcclxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcclxuICAgIGlmICh0aGlzLl9pc0luaXRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pc0luaXRlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gYXR0YWNoIERPTSBsaXN0ZW5lcnNcclxuICAgIHRoaXMuX2Ryb3Bkb3duLmxpc3Rlbih7XHJcbiAgICAgIC8vIGJlY2F1c2Ugb2YgZHJvcGRvd24gaW5saW5lIG1vZGVcclxuICAgICAgb3V0c2lkZUNsaWNrOiBmYWxzZSxcclxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXHJcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0b2dnbGUgdmlzaWJpbGl0eSBvbiB0b2dnbGUgZWxlbWVudCBjbGlja1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB0aGlzLnRvZ2dsZSh2YWx1ZSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGhpZGUgZHJvcGRvd24gaWYgc2V0IGRpc2FibGVkIHdoaWxlIG9wZW5lZFxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoKHZhbHVlOiBib29sZWFuKSA9PiB2YWx1ZSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHRoaXMuaGlkZSgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XHJcbiAgICAgIGlmICghdGhpcy5faW5saW5lZE1lbnUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5kcm9wZG93bk1lbnUudGhlbihcclxuICAgICAgICAgIChkcm9wZG93bk1lbnU6IEJzQ29tcG9uZW50UmVmPEJzRHJvcGRvd25NZW51RGlyZWN0aXZlPikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kcm9wZG93bi5hdHRhY2hJbmxpbmUoXHJcbiAgICAgICAgICAgICAgZHJvcGRvd25NZW51LnZpZXdDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgZHJvcGRvd25NZW51LnRlbXBsYXRlUmVmXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lubGluZWRNZW51ID0gdGhpcy5fZHJvcGRvd24uX2lubGluZVZpZXdSZWY7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQnM0UG9seWZpbGxzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vIHN3YWxsb3cgZXJyb3JzXHJcbiAgICAgICAgICAuY2F0Y2goKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFkZEJzNFBvbHlmaWxscygpO1xyXG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLm9uU2hvd24uZW1pdCh0cnVlKTtcclxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdGF0ZS5kcm9wZG93bk1lbnUudGhlbihkcm9wZG93bk1lbnUgPT4ge1xyXG4gICAgICAvLyBjaGVjayBkaXJlY3Rpb24gaW4gd2hpY2ggZHJvcGRvd24gc2hvdWxkIGJlIG9wZW5lZFxyXG4gICAgICBjb25zdCBfZHJvcHVwID1cclxuICAgICAgICB0aGlzLmRyb3B1cCB8fFxyXG4gICAgICAgICh0eXBlb2YgdGhpcy5kcm9wdXAgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZHJvcHVwKTtcclxuICAgICAgdGhpcy5fc3RhdGUuZGlyZWN0aW9uID0gX2Ryb3B1cCA/ICd1cCcgOiAnZG93bic7XHJcbiAgICAgIGNvbnN0IF9wbGFjZW1lbnQgPVxyXG4gICAgICAgIHRoaXMucGxhY2VtZW50IHx8IChfZHJvcHVwID8gJ3RvcCBsZWZ0JyA6ICdib3R0b20gbGVmdCcpO1xyXG5cclxuICAgICAgLy8gc2hvdyBkcm9wZG93blxyXG4gICAgICB0aGlzLl9kcm9wZG93blxyXG4gICAgICAgIC5hdHRhY2goQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudClcclxuICAgICAgICAudG8odGhpcy5jb250YWluZXIpXHJcbiAgICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiBfcGxhY2VtZW50fSlcclxuICAgICAgICAuc2hvdyh7XHJcbiAgICAgICAgICBjb250ZW50OiBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWYsXHJcbiAgICAgICAgICBwbGFjZW1lbnQ6IF9wbGFjZW1lbnRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgfSlcclxuICAgIC8vIHN3YWxsb3cgZXJyb3JcclxuICAgICAgLmNhdGNoKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci5cclxuICAgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcclxuICAgICAgdGhpcy5yZW1vdmVTaG93Q2xhc3MoKTtcclxuICAgICAgdGhpcy5yZW1vdmVEcm9wdXBTdHlsZXMoKTtcclxuICAgICAgdGhpcy5faXNJbmxpbmVPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2Ryb3Bkb3duLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHBvcG92ZXIuIFdpdGggcGFyYW1ldGVyIDxjb2RlPnRydWU8L2NvZGU+IGFsbG93cyB0b2dnbGluZywgd2l0aCBwYXJhbWV0ZXIgPGNvZGU+ZmFsc2U8L2NvZGU+XHJcbiAgICogb25seSBoaWRlcyBvcGVuZWQgZHJvcGRvd24uIFBhcmFtZXRlciB1c2FnZSB3aWxsIGJlIHJlbW92ZWQgaW4gbmd4LWJvb3RzdHJhcCB2M1xyXG4gICAqL1xyXG4gIHRvZ2dsZSh2YWx1ZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3BlbiB8fCAhdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfY29udGFpbnMoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpIHx8XHJcbiAgICAgICh0aGlzLl9kcm9wZG93bi5pbnN0YW5jZSAmJiB0aGlzLl9kcm9wZG93bi5pbnN0YW5jZS5fY29udGFpbnMoZXZlbnQudGFyZ2V0KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIGRlc3Ryb3kgZHJvcGRvd25cclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9kcm9wZG93bi5kaXNwb3NlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEJzNFBvbHlmaWxscygpOiB2b2lkIHtcclxuICAgIGlmICghaXNCczMoKSkge1xyXG4gICAgICB0aGlzLmFkZFNob3dDbGFzcygpO1xyXG4gICAgICB0aGlzLmNoZWNrUmlnaHRBbGlnbm1lbnQoKTtcclxuICAgICAgdGhpcy5hZGREcm9wdXBTdHlsZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkU2hvd0NsYXNzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVNob3dDbGFzcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAnc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1JpZ2h0QWxpZ25tZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xyXG4gICAgICBjb25zdCBpc1JpZ2h0QWxpZ25lZCA9IHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoXHJcbiAgICAgICAgJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcclxuICAgICAgICAnbGVmdCcsXHJcbiAgICAgICAgaXNSaWdodEFsaWduZWQgPyAnYXV0bycgOiAnMCdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLFxyXG4gICAgICAgICdyaWdodCcsXHJcbiAgICAgICAgaXNSaWdodEFsaWduZWQgPyAnMCcgOiAnYXV0bydcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRHJvcHVwU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xyXG4gICAgICAvLyBhIGxpdHRsZSBoYWNrIHRvIG5vdCBicmVhayBzdXBwb3J0IG9mIGJvb3RzdHJhcCA0IGJldGFcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLFxyXG4gICAgICAgICd0b3AnLFxyXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ2F1dG8nIDogJzEwMCUnXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSxcclxuICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICB0aGlzLmRyb3B1cCA/ICd0cmFuc2xhdGVZKC0xMDElKScgOiAndHJhbnNsYXRlWSgwKSdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLFxyXG4gICAgICAgICdib3R0b20nLFxyXG4gICAgICAgICdhdXRvJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVEcm9wdXBTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3RvcCcpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICd0cmFuc2Zvcm0nKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAnYm90dG9tJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tic0Ryb3Bkb3duTWVudV0sW2Ryb3Bkb3duTWVudV0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tbWVudSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxyXG4gICAgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT5cclxuICApIHtcclxuICAgIF9zdGF0ZS5yZXNvbHZlRHJvcGRvd25NZW51KHtcclxuICAgICAgdGVtcGxhdGVSZWY6IF90ZW1wbGF0ZVJlZixcclxuICAgICAgdmlld0NvbnRhaW5lcjogX3ZpZXdDb250YWluZXJcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzRHJvcGRvd25Ub2dnbGVdLFtkcm9wZG93blRvZ2dsZV0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tdG9nZ2xlJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIuYXJpYS1oYXNwb3B1cF0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBpc0Rpc2FibGVkOiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNPcGVuOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGRyb3Bkb3duOiBCc0Ryb3Bkb3duRGlyZWN0aXZlKSB7XHJcbiAgICAvLyBzeW5jIGlzIG9wZW4gdmFsdWUgd2l0aCBzdGF0ZVxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNPcGVuID0gdmFsdWUpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICAvLyBwb3B1bGF0ZSBkaXNhYmxlZCBzdGF0ZVxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgICAodmFsdWU6IGJvb2xlYW4pID0+ICh0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZSB8fCBudWxsKVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbXSlcclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgJiZcclxuICAgICAgZXZlbnQuYnV0dG9uICE9PSAyICYmXHJcbiAgICAgICF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAhKHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrICYmIHRoaXMuZHJvcGRvd24uX2NvbnRhaW5zKGV2ZW50KSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzYycpXHJcbiAgb25Fc2MoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc3RhdGUuYXV0b0Nsb3NlKSB7XHJcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9icy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcclxuICAgIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXHJcbiAgICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXHJcbiAgICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Nb2R1bGUge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCc0Ryb3Bkb3duTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgICAgIFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgICAgICBCc0Ryb3Bkb3duU3RhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQnNEcm9wZG93bkNvbmZpZyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcgPyBjb25maWcgOiB7IGF1dG9DbG9zZTogdHJ1ZSwgaW5zaWRlQ2xpY2s6IGZhbHNlIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiaXNCczMiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsImZpbHRlciIsInRzbGliXzEuX192YWx1ZXMiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tcG9uZW50TG9hZGVyRmFjdG9yeSIsIklucHV0IiwiT3V0cHV0IiwiVGVtcGxhdGVSZWYiLCJIb3N0QmluZGluZyIsIkhvc3RMaXN0ZW5lciIsIlBvc2l0aW9uaW5nU2VydmljZSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxzQkE0RnlCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTztZQUNILElBQUksRUFBRTtnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07b0JBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMzQztTQUNKLENBQUM7SUFDTixDQUFDOzs7Ozs7QUNuSEQ7Ozs7Ozs7OzZCQU1jLElBQUk7Ozs7K0JBRUYsS0FBSzs7O29CQUxwQkEsZUFBVTs7K0JBSFg7Ozs7Ozs7QUNBQTtRQW1CRTtZQUFBLGlCQUlDOzZCQWxCMEIsTUFBTTtnQ0FHbEIsSUFBSUMsaUJBQVksRUFBVztvQ0FDdkIsSUFBSUEsaUJBQVksRUFBVzsrQkFDaEMsSUFBSUEsaUJBQVksRUFBVztZQVV2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDckMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQzthQUNwQyxDQUFDLENBQUM7U0FDSjs7b0JBcEJGRCxlQUFVOzs7OzhCQUhYOzs7Ozs7O0FDQUE7UUFrQ0Usc0NBQ1UsUUFDQSxJQUNBLFdBQ0E7WUFKVixp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