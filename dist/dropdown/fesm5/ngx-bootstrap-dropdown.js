import { Injectable, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, Directive, Input, Output, ViewContainerRef, TemplateRef, HostBinding, HostListener, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { __values } from 'tslib';
import { filter } from 'rxjs/operators';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
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
        { type: Injectable }
    ];
    return BsDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
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
            if (dropdown && !isBs3()) {
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
         */
        function () {
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
        { type: Component, args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ChangeDetectorRef, },
        { type: Renderer2, },
        { type: ElementRef, },
    ]; };
    return BsDropdownContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
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
         */
        function () {
            return this._state.autoClose;
        },
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.autoClose = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "insideClick", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.insideClick;
        },
        set: /**
         * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._state.insideClick = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: /**
         * @return {?}
         */
        function () {
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
            .pipe(filter(function (value) { return value; }))
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
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
        if (!isBs3()) {
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
        { type: Directive, args: [{
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
    BsDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
        { type: BsDropdownConfig, },
        { type: BsDropdownState, },
    ]; };
    BsDropdownDirective.propDecorators = {
        "placement": [{ type: Input },],
        "triggers": [{ type: Input },],
        "container": [{ type: Input },],
        "dropup": [{ type: Input },],
        "autoClose": [{ type: Input },],
        "insideClick": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "isOpenChange": [{ type: Output },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
    };
    return BsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    // tslint:disable:no-any
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] }
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ViewContainerRef, },
        { type: TemplateRef, },
    ]; };
    return BsDropdownMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    BsDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ElementRef, },
        { type: BsDropdownDirective, },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        "isDisabled": [{ type: HostBinding, args: ['attr.disabled',] },],
        "isOpen": [{ type: HostBinding, args: ['attr.aria-expanded',] },],
        "onClick": [{ type: HostListener, args: ['click', [],] },],
        "onDocumentClick": [{ type: HostListener, args: ['document:click', ['$event'],] },],
        "onEsc": [{ type: HostListener, args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownModule = /** @class */ (function () {
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
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: NgModule, args: [{
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

export { BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, BsDropdownModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kcm9wZG93bi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24uc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi9icy1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIERlZmF1bHQgZHJvcGRvd24gY29uZmlndXJhdGlvbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duQ29uZmlnIHtcclxuICAvKiogZGVmYXVsdCBkcm9wZG93biBhdXRvIGNsb3NpbmcgYmVoYXZpb3IgKi9cclxuICBhdXRvQ2xvc2UgPSB0cnVlO1xyXG4gIC8qKiBkZWZhdWx0IGRyb3Bkb3duIGF1dG8gY2xvc2luZyBiZWhhdmlvciAqL1xyXG4gIGluc2lkZUNsaWNrID0gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzQ29tcG9uZW50UmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25TdGF0ZSB7XHJcbiAgZGlyZWN0aW9uOiAnZG93bicgfCAndXAnID0gJ2Rvd24nO1xyXG4gIGF1dG9DbG9zZTogYm9vbGVhbjtcclxuICBpbnNpZGVDbGljazogYm9vbGVhbjtcclxuICBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgaXNEaXNhYmxlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICB0b2dnbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgcG9wb3Zlci5cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcclxuICBkcm9wZG93bk1lbnU6IFByb21pc2U8QnNDb21wb25lbnRSZWY8YW55Pj47XHJcbiAgcmVzb2x2ZURyb3Bkb3duTWVudTogKGNvbXBvbmVudFJlZjogQnNDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duTWVudSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmVEcm9wZG93bk1lbnUgPSByZXNvbHZlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZHJvcGRvd24tY29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246IGFic29sdXRlOydcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtjbGFzcy5kcm9wdXBdPVwiZGlyZWN0aW9uID09PSAndXAnXCJcclxuICAgICAgICAgW2NsYXNzLmRyb3Bkb3duXT1cImRpcmVjdGlvbiA9PT0gJ2Rvd24nXCJcclxuICAgICAgICAgW2NsYXNzLnNob3ddPVwiaXNPcGVuXCJcclxuICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaXNPcGVuXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICBnZXQgZGlyZWN0aW9uKCk6ICdkb3duJyB8ICd1cCcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRpcmVjdGlvbjtcclxuICB9XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IHZhbHVlO1xyXG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudScpO1xyXG4gICAgICBpZiAoZHJvcGRvd24gJiYgIWlzQnMzKCkpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkcm9wZG93biwgJ3Nob3cnKTtcclxuICAgICAgICBpZiAoZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZW51LXJpZ2h0JykpIHtcclxuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRyb3Bkb3duLCAnbGVmdCcsICdhdXRvJyk7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ3JpZ2h0JywgJzAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndXAnKSB7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ3RvcCcsICdhdXRvJyk7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgICAgZHJvcGRvd24sXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlWSgtMTAxJSknXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9jb250YWlucyhlbDogRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlbCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnksIEJzQ29tcG9uZW50UmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbmltcG9ydCB7IEJzRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRyb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzRHJvcGRvd25dLFtkcm9wZG93bl0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24nLFxyXG4gIHByb3ZpZGVyczogW0JzRHJvcGRvd25TdGF0ZV0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5kcm9wdXBdJzogJ2Ryb3B1cCcsXHJcbiAgICAnW2NsYXNzLm9wZW5dJzogJ2lzT3BlbicsXHJcbiAgICAnW2NsYXNzLnNob3ddJzogJ2lzT3BlbiAmJiBpc0JzNCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcclxuICAgKi9cclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcclxuICAgKiBldmVudCBuYW1lcy5cclxuICAgKi9cclxuICBASW5wdXQoKSB0cmlnZ2Vyczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXHJcbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHNcclxuICAgKi9cclxuICBASW5wdXQoKSBkcm9wdXA6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGF0IGRyb3Bkb3duIHdpbGwgYmUgY2xvc2VkIG9uIGl0ZW0gb3IgZG9jdW1lbnQgY2xpY2ssXHJcbiAgICogYW5kIGFmdGVyIHByZXNzaW5nIEVTQ1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9DbG9zZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b0Nsb3NlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmF1dG9DbG9zZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGRuJ3QgY2xvc2Ugb24gaW5zaWRlIGNsaWNrIHdoZW4gYXV0b0Nsb3NlIGlzIHNldCB0byB0cnVlXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgaW5zaWRlQ2xpY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5zaWRlQ2xpY2soKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlcyBkcm9wZG93biB0b2dnbGUgYW5kIGhpZGVzIGRyb3Bkb3duIG1lbnUgaWYgb3BlbmVkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5fc3RhdGUuaXNEaXNhYmxlZENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLl9zaG93SW5saW5lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pc0lubGluZU9wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duLmlzU2hvd247XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gaXNPcGVuIGNoYW5nZVxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcblxyXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Ryb3Bkb3duOiBDb21wb25lbnRMb2FkZXI8QnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudD47XHJcblxyXG4gIHByaXZhdGUgZ2V0IF9zaG93SW5saW5lKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IG1vdmUgdG8gY29tcG9uZW50IGxvYWRlclxyXG4gIHByaXZhdGUgX2lzSW5saW5lT3BlbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9pbmxpbmVkTWVudTogRW1iZWRkZWRWaWV3UmVmPEJzRHJvcGRvd25NZW51RGlyZWN0aXZlPjtcclxuICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBfaXNJbml0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbmZpZzogQnNEcm9wZG93bkNvbmZpZyxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlKSB7XHJcbiAgICAvLyBzZXQgaW5pdGlhbCBkcm9wZG93biBzdGF0ZSBmcm9tIGNvbmZpZ1xyXG4gICAgdGhpcy5fc3RhdGUuYXV0b0Nsb3NlID0gdGhpcy5fY29uZmlnLmF1dG9DbG9zZTtcclxuICAgIHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrID0gdGhpcy5fY29uZmlnLmluc2lkZUNsaWNrO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBkcm9wZG93biBjb21wb25lbnQgbG9hZGVyXHJcbiAgICB0aGlzLl9kcm9wZG93biA9IHRoaXMuX2Npc1xyXG4gICAgICAuY3JlYXRlTG9hZGVyPEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYsXHJcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICB0aGlzLl9yZW5kZXJlclxyXG4gICAgICApXHJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0Ryb3Bkb3duU3RhdGUsIHVzZVZhbHVlOiB0aGlzLl9zdGF0ZX0pO1xyXG5cclxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2Ryb3Bkb3duLm9uU2hvd247XHJcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZHJvcGRvd24ub25IaWRkZW47XHJcbiAgICB0aGlzLmlzT3BlbkNoYW5nZSA9IHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGZpeDogc2VlbXMgdGhlcmUgYXJlIGFuIGlzc3VlIHdpdGggYHJvdXRlckxpbmtBY3RpdmVgXHJcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxyXG4gICAgLy8gcmVhZCBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vdmFsb3Itc29mdHdhcmUvbmd4LWJvb3RzdHJhcC9pc3N1ZXMvMTg4NVxyXG4gICAgaWYgKHRoaXMuX2lzSW5pdGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2lzSW5pdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBhdHRhY2ggRE9NIGxpc3RlbmVyc1xyXG4gICAgdGhpcy5fZHJvcGRvd24ubGlzdGVuKHtcclxuICAgICAgLy8gYmVjYXVzZSBvZiBkcm9wZG93biBpbmxpbmUgbW9kZVxyXG4gICAgICBvdXRzaWRlQ2xpY2s6IGZhbHNlLFxyXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcclxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHRvZ2dsZSB2aXNpYmlsaXR5IG9uIHRvZ2dsZSBlbGVtZW50IGNsaWNrXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHRoaXMudG9nZ2xlKHZhbHVlKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gaGlkZSBkcm9wZG93biBpZiBzZXQgZGlzYWJsZWQgd2hpbGUgb3BlbmVkXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2VcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcigodmFsdWU6IGJvb2xlYW4pID0+IHZhbHVlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4gdGhpcy5oaWRlKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci5cclxuICAgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3Nob3dJbmxpbmUpIHtcclxuICAgICAgaWYgKCF0aGlzLl9pbmxpbmVkTWVudSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlLmRyb3Bkb3duTWVudS50aGVuKFxyXG4gICAgICAgICAgKGRyb3Bkb3duTWVudTogQnNDb21wb25lbnRSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Ryb3Bkb3duLmF0dGFjaElubGluZShcclxuICAgICAgICAgICAgICBkcm9wZG93bk1lbnUudmlld0NvbnRhaW5lcixcclxuICAgICAgICAgICAgICBkcm9wZG93bk1lbnUudGVtcGxhdGVSZWZcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5faW5saW5lZE1lbnUgPSB0aGlzLl9kcm9wZG93bi5faW5saW5lVmlld1JlZjtcclxuICAgICAgICAgICAgdGhpcy5hZGRCczRQb2x5ZmlsbHMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnNcclxuICAgICAgICAgIC5jYXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWRkQnM0UG9seWZpbGxzKCk7XHJcbiAgICAgIHRoaXMuX2lzSW5saW5lT3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3N0YXRlLmRyb3Bkb3duTWVudS50aGVuKGRyb3Bkb3duTWVudSA9PiB7XHJcbiAgICAgIC8vIGNoZWNrIGRpcmVjdGlvbiBpbiB3aGljaCBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkXHJcbiAgICAgIGNvbnN0IF9kcm9wdXAgPVxyXG4gICAgICAgIHRoaXMuZHJvcHVwIHx8XHJcbiAgICAgICAgKHR5cGVvZiB0aGlzLmRyb3B1cCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5kcm9wdXApO1xyXG4gICAgICB0aGlzLl9zdGF0ZS5kaXJlY3Rpb24gPSBfZHJvcHVwID8gJ3VwJyA6ICdkb3duJztcclxuICAgICAgY29uc3QgX3BsYWNlbWVudCA9XHJcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgfHwgKF9kcm9wdXAgPyAndG9wIGxlZnQnIDogJ2JvdHRvbSBsZWZ0Jyk7XHJcblxyXG4gICAgICAvLyBzaG93IGRyb3Bkb3duXHJcbiAgICAgIHRoaXMuX2Ryb3Bkb3duXHJcbiAgICAgICAgLmF0dGFjaChCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcclxuICAgICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IF9wbGFjZW1lbnR9KVxyXG4gICAgICAgIC5zaG93KHtcclxuICAgICAgICAgIGNvbnRlbnQ6IGRyb3Bkb3duTWVudS50ZW1wbGF0ZVJlZixcclxuICAgICAgICAgIHBsYWNlbWVudDogX3BsYWNlbWVudFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fc3RhdGUuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICB9KVxyXG4gICAgLy8gc3dhbGxvdyBlcnJvclxyXG4gICAgICAuY2F0Y2goKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSBwb3BvdmVyLlxyXG4gICAqL1xyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc2hvd0lubGluZSkge1xyXG4gICAgICB0aGlzLnJlbW92ZVNob3dDbGFzcygpO1xyXG4gICAgICB0aGlzLnJlbW92ZURyb3B1cFN0eWxlcygpO1xyXG4gICAgICB0aGlzLl9pc0lubGluZU9wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5vbkhpZGRlbi5lbWl0KHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZHJvcGRvd24uaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci4gV2l0aCBwYXJhbWV0ZXIgPGNvZGU+dHJ1ZTwvY29kZT4gYWxsb3dzIHRvZ2dsaW5nLCB3aXRoIHBhcmFtZXRlciA8Y29kZT5mYWxzZTwvY29kZT5cclxuICAgKiBvbmx5IGhpZGVzIG9wZW5lZCBkcm9wZG93bi4gUGFyYW1ldGVyIHVzYWdlIHdpbGwgYmUgcmVtb3ZlZCBpbiBuZ3gtYm9vdHN0cmFwIHYzXHJcbiAgICovXHJcbiAgdG9nZ2xlKHZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8ICF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9jb250YWlucyhldmVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHxcclxuICAgICAgKHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlICYmIHRoaXMuX2Ryb3Bkb3duLmluc3RhbmNlLl9jb250YWlucyhldmVudC50YXJnZXQpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgZGVzdHJveSBkcm9wZG93blxyXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2Ryb3Bkb3duLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkQnM0UG9seWZpbGxzKCk6IHZvaWQge1xyXG4gICAgaWYgKCFpc0JzMygpKSB7XHJcbiAgICAgIHRoaXMuYWRkU2hvd0NsYXNzKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tSaWdodEFsaWdubWVudCgpO1xyXG4gICAgICB0aGlzLmFkZERyb3B1cFN0eWxlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRTaG93Q2xhc3MoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3Nob3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlU2hvd0NsYXNzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2lubGluZWRNZW51ICYmIHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrUmlnaHRBbGlnbm1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XHJcbiAgICAgIGNvbnN0IGlzUmlnaHRBbGlnbmVkID0gdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcclxuICAgICAgICAnZHJvcGRvd24tbWVudS1yaWdodCdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLFxyXG4gICAgICAgICdsZWZ0JyxcclxuICAgICAgICBpc1JpZ2h0QWxpZ25lZCA/ICdhdXRvJyA6ICcwJ1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXHJcbiAgICAgICAgJ3JpZ2h0JyxcclxuICAgICAgICBpc1JpZ2h0QWxpZ25lZCA/ICcwJyA6ICdhdXRvJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGREcm9wdXBTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faW5saW5lZE1lbnUgJiYgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdKSB7XHJcbiAgICAgIC8vIGEgbGl0dGxlIGhhY2sgdG8gbm90IGJyZWFrIHN1cHBvcnQgb2YgYm9vdHN0cmFwIDQgYmV0YVxyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXHJcbiAgICAgICAgJ3RvcCcsXHJcbiAgICAgICAgdGhpcy5kcm9wdXAgPyAnYXV0bycgOiAnMTAwJSdcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgdGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLFxyXG4gICAgICAgICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIHRoaXMuZHJvcHVwID8gJ3RyYW5zbGF0ZVkoLTEwMSUpJyA6ICd0cmFuc2xhdGVZKDApJ1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sXHJcbiAgICAgICAgJ2JvdHRvbScsXHJcbiAgICAgICAgJ2F1dG8nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZURyb3B1cFN0eWxlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pbmxpbmVkTWVudSAmJiB0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0pIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5faW5saW5lZE1lbnUucm9vdE5vZGVzWzBdLCAndG9wJyk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2lubGluZWRNZW51LnJvb3ROb2Rlc1swXSwgJ3RyYW5zZm9ybScpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9pbmxpbmVkTWVudS5yb290Tm9kZXNbMF0sICdib3R0b20nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzRHJvcGRvd25NZW51XSxbZHJvcGRvd25NZW51XScsXHJcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi1tZW51J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXHJcbiAgICBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxyXG4gICkge1xyXG4gICAgX3N0YXRlLnJlc29sdmVEcm9wZG93bk1lbnUoe1xyXG4gICAgICB0ZW1wbGF0ZVJlZjogX3RlbXBsYXRlUmVmLFxyXG4gICAgICB2aWV3Q29udGFpbmVyOiBfdmlld0NvbnRhaW5lclxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93blRvZ2dsZV0sW2Ryb3Bkb3duVG9nZ2xlXScsXHJcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi10b2dnbGUnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci5hcmlhLWhhc3BvcHVwXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBudWxsO1xyXG5cclxuICAvLyBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKSBpc09wZW46IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJvcGRvd246IEJzRHJvcGRvd25EaXJlY3RpdmUpIHtcclxuICAgIC8vIHN5bmMgaXMgb3BlbiB2YWx1ZSB3aXRoIHN0YXRlXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0YXRlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgKHZhbHVlOiBib29sZWFuKSA9PiAodGhpcy5pc09wZW4gPSB2YWx1ZSlcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIC8vIHBvcHVsYXRlIGRpc2FibGVkIHN0YXRlXHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0YXRlLmlzRGlzYWJsZWRDaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNEaXNhYmxlZCA9IHZhbHVlIHx8IG51bGwpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFtdKVxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuX3N0YXRlLmF1dG9DbG9zZSAmJlxyXG4gICAgICBldmVudC5idXR0b24gIT09IDIgJiZcclxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICEodGhpcy5fc3RhdGUuaW5zaWRlQ2xpY2sgJiYgdGhpcy5kcm9wZG93bi5fY29udGFpbnMoZXZlbnQpKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjJylcclxuICBvbkVzYygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UpIHtcclxuICAgICAgdGhpcy5fc3RhdGUudG9nZ2xlQ2xpY2suZW1pdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRyb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93bkNvbmZpZyB9IGZyb20gJy4vYnMtZHJvcGRvd24uY29uZmlnJztcclxuXHJcbmltcG9ydCB7IEJzRHJvcGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxyXG4gICAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0Ryb3Bkb3duRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcclxuICAgIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXHJcbiAgICBCc0Ryb3Bkb3duRGlyZWN0aXZlXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bk1vZHVsZSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJzRHJvcGRvd25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxyXG4gICAgICAgIEJzRHJvcGRvd25TdGF0ZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBCc0Ryb3Bkb3duQ29uZmlnLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyA/IGNvbmZpZyA6IHsgYXV0b0Nsb3NlOiB0cnVlLCBpbnNpZGVDbGljazogZmFsc2UgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O3lCQU1jLElBQUk7Ozs7MkJBRUYsS0FBSzs7O2dCQUxwQixVQUFVOzsyQkFIWDs7Ozs7OztBQ0FBO0lBbUJFO1FBQUEsaUJBSUM7eUJBbEIwQixNQUFNOzRCQUdsQixJQUFJLFlBQVksRUFBVztnQ0FDdkIsSUFBSSxZQUFZLEVBQVc7MkJBQ2hDLElBQUksWUFBWSxFQUFXO1FBVXZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQ3JDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0tBQ0o7O2dCQXBCRixVQUFVOzs7OzBCQUhYOzs7Ozs7O0FDQUE7SUFrQ0Usc0NBQ1UsUUFDQSxJQUNBLFdBQ0E7UUFKVixpQkEyQkM7UUExQlMsV0FBTSxHQUFOLE1BQU07UUFDTixPQUFFLEdBQUYsRUFBRTtRQUNGLGNBQVMsR0FBVCxTQUFTO1FBQ1QsYUFBUSxHQUFSLFFBQVE7c0JBYlQsS0FBSztRQWVaLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFjO1lBQ2hFLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLHFCQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3RSxJQUFJLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRTtvQkFDdEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDakQ7Z0JBQ0QsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtvQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLFFBQVEsRUFDUixXQUFXLEVBQ1gsbUJBQW1CLENBQ3BCLENBQUM7aUJBQ0g7YUFDRjtZQUNELEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSjtJQWxDRCxzQkFBSSxtREFBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUM5Qjs7O09BQUE7Ozs7Ozs7SUFtQ0QsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxFQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEOzs7O0lBRUQsa0RBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNsQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxtQ0FBbUM7cUJBQzNDO29CQUNELFFBQVEsRUFBRSw4TUFLVDtpQkFDRjs7OztnQkFmUSxlQUFlO2dCQU50QixpQkFBaUI7Z0JBSWpCLFNBQVM7Z0JBRlQsVUFBVTs7dUNBSlo7Ozs7Ozs7O0lDb0pFLDZCQUFvQixXQUF1QixFQUN2QixXQUNBLG1CQUNBLE1BQ0EsU0FDQTtRQUxBLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTO1FBQ1Qsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixTQUFJLEdBQUosSUFBSTtRQUNKLFlBQU8sR0FBUCxPQUFPO1FBQ1AsV0FBTSxHQUFOLE1BQU07NkJBWkYsS0FBSzs4QkFJWSxFQUFFO3lCQUN2QixLQUFLOztRQVN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7UUFHbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTthQUN2QixZQUFZLENBQ1gsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUyxDQUNmO2FBQ0EsT0FBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7S0FFOUM7MEJBaEhHLDBDQUFTOzs7O1FBSWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQzlCOzs7Ozs7O2tCQU5hLEtBQWM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7OzswQkFXNUIsNENBQVc7Ozs7UUFJZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDaEM7Ozs7OztrQkFOZSxLQUFjO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7Ozs7MEJBVzlCLDJDQUFVOzs7O1FBUWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7Ozs7OztrQkFWYyxLQUFjO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiOzs7OzswQkFXQyx1Q0FBTTs7Ozs7O1lBQ1IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDM0I7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDOzs7Ozs7UUFHaEMsVUFBVyxLQUFjO1lBQ3ZCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1NBQ0Y7Ozs7SUFpQkQsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNqQjs7O09BQUE7MEJBSVcsNENBQVc7Ozs7O1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7Ozs7OztJQW9DekIsc0NBQVE7OztJQUFSO1FBQUEsaUJBOEJDOzs7O1FBMUJDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs7UUFHdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7O1lBRXBCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsR0FBQTtTQUN4QixDQUFDLENBQUM7O1FBR0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUMxRSxDQUFDOztRQUdGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQjthQUN6QixJQUFJLENBQ0gsTUFBTSxDQUFDLFVBQUMsS0FBYyxJQUFLLE9BQUEsS0FBSyxHQUFBLENBQUMsQ0FDbEM7YUFDQSxTQUFTLENBQUMsVUFBQyxLQUFjLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxFQUFFLEdBQUEsQ0FBQyxDQUM5QyxDQUFDO0tBQ0g7Ozs7Ozs7Ozs7SUFNRCxrQ0FBSTs7Ozs7SUFBSjtRQUFBLGlCQWtEQztRQWpEQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDM0IsVUFBQyxZQUFxRDtvQkFDcEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQ3pCLFlBQVksQ0FBQyxhQUFhLEVBQzFCLFlBQVksQ0FBQyxXQUFXLENBQ3pCLENBQUM7b0JBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUN4QixDQUNGO3FCQUVFLEtBQUssRUFBRSxDQUFDO2FBQ1o7WUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLFlBQVk7O1lBRXhDLHFCQUFNLE9BQU8sR0FDWCxLQUFJLENBQUMsTUFBTTtpQkFDVixPQUFPLEtBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNoRCxxQkFBTSxVQUFVLEdBQ2QsS0FBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDOzs7WUFHM0QsS0FBSSxDQUFDLFNBQVM7aUJBQ1gsTUFBTSxDQUFDLDRCQUE0QixDQUFDO2lCQUNwQyxFQUFFLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztpQkFDbEIsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDO2lCQUNsQyxJQUFJLENBQUM7Z0JBQ0osT0FBTyxFQUFFLFlBQVksQ0FBQyxXQUFXO2dCQUNqQyxTQUFTLEVBQUUsVUFBVTthQUN0QixDQUFDLENBQUM7WUFFTCxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckMsQ0FBQzthQUVDLEtBQUssRUFBRSxDQUFDO0tBQ1o7Ozs7Ozs7Ozs7SUFNRCxrQ0FBSTs7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7Ozs7Ozs7Ozs7SUFPRCxvQ0FBTTs7Ozs7OztJQUFOLFVBQU8sS0FBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQjs7Ozs7OztJQUdELHVDQUFTOzs7OztJQUFULFVBQVUsS0FBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNoRjs7OztJQUVELHlDQUFXOzs7SUFBWDs7O1lBRUUsS0FBa0IsSUFBQSxLQUFBQSxTQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUE7Z0JBQWhDLElBQU0sR0FBRyxXQUFBO2dCQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7S0FDMUI7Ozs7SUFFTyw2Q0FBZTs7OztRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCOzs7OztJQUdLLDBDQUFZOzs7O1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNqRTs7Ozs7SUFHSyw2Q0FBZTs7OztRQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEU7Ozs7O0lBR0ssaURBQW1COzs7O1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RCxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDdEUscUJBQXFCLENBQ3RCLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQzlCLE1BQU0sRUFDTixjQUFjLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FDOUIsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDOUIsT0FBTyxFQUNQLGNBQWMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUM5QixDQUFDO1NBQ0g7Ozs7O0lBR0ssNkNBQWU7Ozs7UUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFOztZQUV2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQzlCLEtBQUssRUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQzlCLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQzlCLFdBQVcsRUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixHQUFHLGVBQWUsQ0FDcEQsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDOUIsUUFBUSxFQUNSLE1BQU0sQ0FDUCxDQUFDO1NBQ0g7Ozs7O0lBR0ssZ0RBQWtCOzs7O1FBQ3hCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RTs7O2dCQTlWSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDNUIsSUFBSSxFQUFFO3dCQUNKLGdCQUFnQixFQUFFLFFBQVE7d0JBQzFCLGNBQWMsRUFBRSxRQUFRO3dCQUN4QixjQUFjLEVBQUUsaUJBQWlCO3FCQUNsQztpQkFDRjs7OztnQkE3QkMsVUFBVTtnQkFPVixTQUFTO2dCQUNULGdCQUFnQjtnQkFJUSxzQkFBc0I7Z0JBRXZDLGdCQUFnQjtnQkFFaEIsZUFBZTs7OzhCQWtCckIsS0FBSzs2QkFLTCxLQUFLOzhCQUtMLEtBQUs7MkJBS0wsS0FBSzs4QkFNTCxLQUFLO2dDQVlMLEtBQUs7K0JBWUwsS0FBSzsyQkFnQkwsS0FBSztpQ0FvQkwsTUFBTTs0QkFLTixNQUFNOzZCQUtOLE1BQU07OzhCQWhJVDs7Ozs7OztBQ0FBOztJQVNFLGlDQUNFLE1BQXVCLEVBQ3ZCLGNBQWdDLEVBQ2hDLFlBQThCO1FBRTlCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUN6QixXQUFXLEVBQUUsWUFBWTtZQUN6QixhQUFhLEVBQUUsY0FBYztTQUM5QixDQUFDLENBQUM7S0FDSjs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUxRLGVBQWU7Z0JBRFMsZ0JBQWdCO2dCQUE3QixXQUFXOztrQ0FBL0I7Ozs7Ozs7O0lDMkJFLG1DQUFvQixNQUF1QixFQUFVLFFBQW9CLEVBQVUsUUFBNkI7UUFBaEgsaUJBYUM7UUFibUIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7MEJBUDVELElBQUk7OEJBS2YsRUFBRTs7UUFJekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDaEMsVUFBQyxLQUFjLElBQUssUUFBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssSUFBQyxDQUMxQyxDQUNGLENBQUM7O1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUNwQyxVQUFDLEtBQWMsSUFBSyxRQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBQyxDQUN0RCxDQUNGLENBQUM7S0FDSDs7OztJQUdELDJDQUFPOzs7O1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBSXJDLG1EQUFlOzs7O2NBQUMsS0FBaUI7UUFDL0IsSUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7WUFDckIsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQ2xCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDbkQsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDN0QsRUFBRTtZQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzs7Ozs7SUFJSCx5Q0FBSzs7OztRQUNILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OztJQUdILCtDQUFXOzs7SUFBWDs7WUFDRSxLQUFrQixJQUFBLEtBQUFBLFNBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQSxnQkFBQTtnQkFBaEMsSUFBTSxHQUFHLFdBQUE7Z0JBQ1osR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25COzs7Ozs7Ozs7O0tBQ0Y7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsSUFBSSxFQUFFO3dCQUNKLHNCQUFzQixFQUFFLE1BQU07cUJBQy9CO2lCQUNGOzs7O2dCQVRRLGVBQWU7Z0JBUHRCLFVBQVU7Z0JBUUgsbUJBQW1COzs7K0JBVXpCLFdBQVcsU0FBQyxlQUFlOzJCQUczQixXQUFXLFNBQUMsb0JBQW9COzRCQW1CaEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxFQUFFO29DQVF4QixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBWXpDLFlBQVksU0FBQyxXQUFXOztvQ0E5RDNCOzs7Ozs7O0FDQUE7Ozs7Ozs7O0lBNEJTLHdCQUFPOzs7O0lBQWQsVUFBZSxNQUFZO1FBQ3pCLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxzQkFBc0I7Z0JBQ3RCLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtpQkFDcEU7YUFDRjtTQUNGLENBQUM7S0FDSDs7Z0JBN0JGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQ2hEOzsyQkF6QkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==