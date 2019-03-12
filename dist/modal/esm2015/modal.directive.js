/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable:max-file-line-count */
// todo: should we support enforce focus in?
// todo: in original bs there are was a way to prevent modal from showing
// todo: original modal had resize events
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { document, window, isBs3, Utils } from 'ngx-bootstrap/utils';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { CLASS_NAME, DISMISS_REASONS, modalConfigDefaults, ModalOptions } from './modal-options.class';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
const /** @type {?} */ TRANSITION_DURATION = 300;
const /** @type {?} */ BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
export class ModalDirective {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    constructor(_element, _viewContainerRef, _renderer, clf) {
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
    /**
     * allows to set modal configuration via element property
     * @param {?} conf
     * @return {?}
     */
    set config(conf) {
        this._config = this.getConfig(conf);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._config = this._config || this.getConfig();
        setTimeout(() => {
            if (this._config.show) {
                this.show();
            }
        }, 0);
    }
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    toggle() {
        return this._isShown ? this.hide() : this.show();
    }
    /**
     * Allows to manually open modal
     * @return {?}
     */
    show() {
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
        if (document && document.body) {
            if (document.body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document.body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop(() => {
            this.showElement();
        });
    }
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    hide(event) {
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        window.clearTimeout(this.timerHideModal);
        window.clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = window.setTimeout(() => this.hideModal(), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    }
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    getConfig(config) {
        return Object.assign({}, modalConfigDefaults, config);
    }
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    showElement() {
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (document && document.body) {
                document.body.appendChild(this._element.nativeElement);
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
        const /** @type {?} */ transitionComplete = () => {
            if (this._config.focus) {
                this._element.nativeElement.focus();
            }
            this.onShown.emit(this);
        };
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    hideModal() {
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(() => {
            if (!this.isNested) {
                if (document && document.body) {
                    this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
                }
                this.resetScrollbar();
            }
            this.resetAdjustments();
            this.focusOtherModal();
            this.onHidden.emit(this);
        });
    }
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    showBackdrop(callback) {
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
            const /** @type {?} */ callbackRemove = () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = window.setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    removeBackdrop() {
        this._backdrop.hide();
    }
    /**
     * Events tricks
     * @return {?}
     */
    focusOtherModal() {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        const /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    }
    /**
     * \@internal
     * @return {?}
     */
    resetAdjustments() {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    /**
     * @return {?}
     */
    getScrollbarWidth() {
        const /** @type {?} */ scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        const /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
}
ModalDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsModal]',
                exportAs: 'bs-modal'
            },] }
];
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer2, },
    { type: ComponentLoaderFactory, },
];
ModalDirective.propDecorators = {
    "config": [{ type: Input },],
    "onShow": [{ type: Output },],
    "onShown": [{ type: Output },],
    "onHide": [{ type: Output },],
    "onHidden": [{ type: Output },],
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
    "onEsc": [{ type: HostListener, args: ['keydown.esc', ['$event'],] },],
};
function ModalDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ModalDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ModalDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ModalDirective.propDecorators;
    /**
     * This event fires immediately when the `show` instance method is called.
     * @type {?}
     */
    ModalDirective.prototype.onShow;
    /**
     * This event is fired when the modal has been made visible to the user
     * (will wait for CSS transitions to complete)
     * @type {?}
     */
    ModalDirective.prototype.onShown;
    /**
     * This event is fired immediately when
     * the hide instance method has been called.
     * @type {?}
     */
    ModalDirective.prototype.onHide;
    /**
     * This event is fired when the modal has finished being
     * hidden from the user (will wait for CSS transitions to complete).
     * @type {?}
     */
    ModalDirective.prototype.onHidden;
    /**
     * This field contains last dismiss reason.
     * Possible values: `backdrop-click`, `esc` and `null`
     * (if modal was closed by direct call of `.hide()`).
     * @type {?}
     */
    ModalDirective.prototype.dismissReason;
    /** @type {?} */
    ModalDirective.prototype._config;
    /** @type {?} */
    ModalDirective.prototype._isShown;
    /** @type {?} */
    ModalDirective.prototype.isBodyOverflowing;
    /** @type {?} */
    ModalDirective.prototype.originalBodyPadding;
    /** @type {?} */
    ModalDirective.prototype.scrollbarWidth;
    /** @type {?} */
    ModalDirective.prototype.timerHideModal;
    /** @type {?} */
    ModalDirective.prototype.timerRmBackDrop;
    /** @type {?} */
    ModalDirective.prototype.backdrop;
    /** @type {?} */
    ModalDirective.prototype._backdrop;
    /** @type {?} */
    ModalDirective.prototype.isNested;
    /** @type {?} */
    ModalDirective.prototype._element;
    /** @type {?} */
    ModalDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLE9BQU8sRUFDUyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUNuRCxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUN2RCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUNMLFVBQVUsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUMvRCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV6Rix1QkFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUM7QUFDaEMsdUJBQU0sNEJBQTRCLEdBQUcsR0FBRyxDQUFDOzs7O0FBT3pDLE1BQU07Ozs7Ozs7SUF3REosWUFBb0IsUUFBb0IsRUFDNUIsaUJBQW1DLEVBQzNCLFdBQ1IsR0FBMkI7UUFIbkIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUVwQixjQUFTLEdBQVQsU0FBUzs7OztzQkE3Q1UsSUFBSSxZQUFZLEVBQWtCOzs7Ozt1QkFLakMsSUFBSSxZQUFZLEVBQWtCOzs7OztzQkFLbkMsSUFBSSxZQUFZLEVBQWtCOzs7Ozt3QkFLaEMsSUFBSSxZQUFZLEVBQWtCO3dCQWF0RCxLQUFLO2lDQUVJLEtBQUs7bUNBQ0gsQ0FBQzs4QkFDTixDQUFDOzhCQUVELENBQUM7K0JBQ0EsQ0FBQzt3QkFNVixLQUFLO1FBTXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxD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O1lBcmFGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFsQjBCLFVBQVU7WUFDRyxnQkFBZ0I7WUFBM0IsU0FBUztZQVFaLHNCQUFzQjs7O3VCQVk3QyxLQUFLO3VCQVVMLE1BQU07d0JBS04sTUFBTTt1QkFLTixNQUFNO3lCQUtOLE1BQU07d0JBd0NOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBY2hDLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50ICovXHJcbi8vIHRvZG86IHNob3VsZCB3ZSBzdXBwb3J0IGVuZm9yY2UgZm9jdXMgaW4/XHJcbi8vIHRvZG86IGluIG9yaWdpbmFsIGJzIHRoZXJlIGFyZSB3YXMgYSB3YXkgdG8gcHJldmVudCBtb2RhbCBmcm9tIHNob3dpbmdcclxuLy8gdG9kbzogb3JpZ2luYWwgbW9kYWwgaGFkIHJlc2l6ZSBldmVudHNcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCxcclxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGRvY3VtZW50LCB3aW5kb3csIGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1iYWNrZHJvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIENMQVNTX05BTUUsIERJU01JU1NfUkVBU09OUywgbW9kYWxDb25maWdEZWZhdWx0cywgTW9kYWxPcHRpb25zXHJcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbmNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAzMDA7XHJcbmNvbnN0IEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTA7XHJcblxyXG4vKiogTWFyayBhbnkgY29kZSB3aXRoIGRpcmVjdGl2ZSB0byBzaG93IGl0J3MgY29udGVudCBpbiBtb2RhbCAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tic01vZGFsXScsXHJcbiAgZXhwb3J0QXM6ICdicy1tb2RhbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIC8qKiBhbGxvd3MgdG8gc2V0IG1vZGFsIGNvbmZpZ3VyYXRpb24gdmlhIGVsZW1lbnQgcHJvcGVydHkgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb25maWcoY29uZjogTW9kYWxPcHRpb25zKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLmdldENvbmZpZyhjb25mKTtcclxuICB9XHJcblxyXG4gIGdldCBjb25maWcoKTogTW9kYWxPcHRpb25zIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25maWc7XHJcbiAgfVxyXG5cclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBpbW1lZGlhdGVseSB3aGVuIHRoZSBgc2hvd2AgaW5zdGFuY2UgbWV0aG9kIGlzIGNhbGxlZC4gKi9cclxuICBAT3V0cHV0KClcclxuICBvblNob3c6IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xyXG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vZGFsIGhhcyBiZWVuIG1hZGUgdmlzaWJsZSB0byB0aGUgdXNlclxyXG4gICAqICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSlcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvblNob3duOiBFdmVudEVtaXR0ZXI8TW9kYWxEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4oKTtcclxuICAvKiogVGhpcyBldmVudCBpcyBmaXJlZCBpbW1lZGlhdGVseSB3aGVuXHJcbiAgICogdGhlIGhpZGUgaW5zdGFuY2UgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZC5cclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvbkhpZGU6IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xyXG4gIC8qKiBUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIG1vZGFsIGhhcyBmaW5pc2hlZCBiZWluZ1xyXG4gICAqIGhpZGRlbiBmcm9tIHRoZSB1c2VyICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSkuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxNb2RhbERpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGFsRGlyZWN0aXZlPigpO1xyXG5cclxuICAvKiogVGhpcyBmaWVsZCBjb250YWlucyBsYXN0IGRpc21pc3MgcmVhc29uLlxyXG4gICAqIFBvc3NpYmxlIHZhbHVlczogYGJhY2tkcm9wLWNsaWNrYCwgYGVzY2AgYW5kIGBudWxsYFxyXG4gICAqIChpZiBtb2RhbCB3YXMgY2xvc2VkIGJ5IGRpcmVjdCBjYWxsIG9mIGAuaGlkZSgpYCkuXHJcbiAgICovXHJcbiAgZGlzbWlzc1JlYXNvbjogc3RyaW5nO1xyXG5cclxuICBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9jb25maWc6IE1vZGFsT3B0aW9ucztcclxuICBwcm90ZWN0ZWQgX2lzU2hvd24gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIG9yaWdpbmFsQm9keVBhZGRpbmcgPSAwO1xyXG4gIHByb3RlY3RlZCBzY3JvbGxiYXJXaWR0aCA9IDA7XHJcblxyXG4gIHByb3RlY3RlZCB0aW1lckhpZGVNb2RhbCA9IDA7XHJcbiAgcHJvdGVjdGVkIHRpbWVyUm1CYWNrRHJvcCA9IDA7XHJcblxyXG4gIC8vIHJlZmVyZW5jZSB0byBiYWNrZHJvcCBjb21wb25lbnRcclxuICBwcm90ZWN0ZWQgYmFja2Ryb3A6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9iYWNrZHJvcDogQ29tcG9uZW50TG9hZGVyPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIGlzTmVzdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcclxuICAgIHRoaXMuX2JhY2tkcm9wID0gY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihcclxuICAgICAgX2VsZW1lbnQsXHJcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBfcmVuZGVyZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNvbmZpZy5pZ25vcmVCYWNrZHJvcENsaWNrIHx8XHJcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJyB8fFxyXG4gICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGlzbWlzc1JlYXNvbiA9IERJU01JU1NfUkVBU09OUy5CQUNLUkRPUDtcclxuICAgIHRoaXMuaGlkZShldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBjb25zaWRlciBwcmV2ZW50aW5nIGRlZmF1bHQgYW5kIHN0b3BwaW5nIHByb3BhZ2F0aW9uXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lc2MnLCBbJyRldmVudCddKVxyXG4gIG9uRXNjKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbmZpZy5rZXlib2FyZCkge1xyXG4gICAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBESVNNSVNTX1JFQVNPTlMuRVNDO1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5jb25maWcgPSB2b2lkIDA7XHJcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xyXG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fY29uZmlnIHx8IHRoaXMuZ2V0Q29uZmlnKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zaG93KSB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgLyogUHVibGljIG1ldGhvZHMgKi9cclxuXHJcbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSB0b2dnbGUgbW9kYWwgdmlzaWJpbGl0eSAqL1xyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIC8qKiBBbGxvd3MgdG8gbWFudWFsbHkgb3BlbiBtb2RhbCAqL1xyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc21pc3NSZWFzb24gPSBudWxsO1xyXG4gICAgdGhpcy5vblNob3cuZW1pdCh0aGlzKTtcclxuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGlkZU1vZGFsKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyUm1CYWNrRHJvcCk7XHJcblxyXG4gICAgdGhpcy5faXNTaG93biA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jaGVja1Njcm9sbGJhcigpO1xyXG4gICAgdGhpcy5zZXRTY3JvbGxiYXIoKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRS5PUEVOKSkge1xyXG4gICAgICAgIHRoaXMuaXNOZXN0ZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3dCYWNrZHJvcCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0VsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFsbG93cyB0byBtYW51YWxseSBjbG9zZSBtb2RhbCAqL1xyXG4gIGhpZGUoZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkhpZGUuZW1pdCh0aGlzKTtcclxuXHJcbiAgICAvLyB0b2RvOiBhZGQgYW4gb3B0aW9uIHRvIHByZXZlbnQgaGlkaW5nXHJcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lckhpZGVNb2RhbCk7XHJcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXJSbUJhY2tEcm9wKTtcclxuXHJcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIENMQVNTX05BTUUuSU4pO1xyXG4gICAgaWYgKCFpc0JzMygpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5TSE9XKTtcclxuICAgIH1cclxuICAgIC8vIHRoaXMuX2FkZENsYXNzSW4gPSBmYWxzZTtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XHJcbiAgICAgIHRoaXMudGltZXJIaWRlTW9kYWwgPSB3aW5kb3cuc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLmhpZGVNb2RhbCgpLFxyXG4gICAgICAgIFRSQU5TSVRJT05fRFVSQVRJT05cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogUHJpdmF0ZSBtZXRob2RzIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCBnZXRDb25maWcoY29uZmlnPzogTW9kYWxPcHRpb25zKTogTW9kYWxPcHRpb25zIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBtb2RhbENvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIFNob3cgZGlhbG9nXHJcbiAgICogIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzaG93RWxlbWVudCgpOiB2b2lkIHtcclxuICAgIC8vIHRvZG86IHJlcGxhY2UgdGhpcyB3aXRoIGNvbXBvbmVudCBsb2FkZXIgdXNhZ2VcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIHx8XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxyXG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnYXJpYS1oaWRkZW4nLFxyXG4gICAgICAnZmFsc2UnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdhcmlhLW1vZGFsJyxcclxuICAgICAgJ3RydWUnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICAnYmxvY2snXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3Njcm9sbFRvcCcsXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRlZCkge1xyXG4gICAgICBVdGlscy5yZWZsb3codGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLl9hZGRDbGFzc0luID0gdHJ1ZTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgQ0xBU1NfTkFNRS5JTik7XHJcbiAgICBpZiAoIWlzQnMzKCkpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCBDTEFTU19OQU1FLlNIT1cpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TaG93bi5lbWl0KHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGVkKSB7XHJcbiAgICAgIHNldFRpbWVvdXQodHJhbnNpdGlvbkNvbXBsZXRlLCBUUkFOU0lUSU9OX0RVUkFUSU9OKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCBoaWRlTW9kYWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2FyaWEtaGlkZGVuJyxcclxuICAgICAgJ3RydWUnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICAnbm9uZSdcclxuICAgICk7XHJcbiAgICB0aGlzLnNob3dCYWNrZHJvcCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc05lc3RlZCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZXNldEFkanVzdG1lbnRzKCk7XHJcbiAgICAgIHRoaXMuZm9jdXNPdGhlck1vZGFsKCk7XHJcbiAgICAgIHRoaXMub25IaWRkZW4uZW1pdCh0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogb3JpZ2luYWwgc2hvdyB3YXMgY2FsbGluZyBhIGNhbGxiYWNrIHdoZW4gZG9uZSwgYnV0IHdlIGNhbiB1c2VcclxuICAvLyBwcm9taXNlXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCBzaG93QmFja2Ryb3AoY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLl9pc1Nob3duICYmXHJcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wICYmXHJcbiAgICAgICghdGhpcy5iYWNrZHJvcCB8fCAhdGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc1Nob3duKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcclxuICAgICAgdGhpcy5fYmFja2Ryb3BcclxuICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXHJcbiAgICAgICAgLnRvKCdib2R5JylcclxuICAgICAgICAuc2hvdyh7aXNBbmltYXRlZDogdGhpcy5fY29uZmlnLmFuaW1hdGVkfSk7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AgPSB0aGlzLl9iYWNrZHJvcC5fY29tcG9uZW50UmVmO1xyXG5cclxuICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuYW5pbWF0ZWQpIHtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMuYmFja2Ryb3AuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xyXG5cclxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCYWNrZHJvcCgpO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodGhpcy5iYWNrZHJvcC5pbnN0YW5jZS5pc0FuaW1hdGVkKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclJtQmFja0Ryb3AgPSB3aW5kb3cuc2V0VGltZW91dChcclxuICAgICAgICAgIGNhbGxiYWNrUmVtb3ZlLFxyXG4gICAgICAgICAgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByb3RlY3RlZCByZW1vdmVCYWNrZHJvcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBFdmVudHMgdHJpY2tzICovXHJcblxyXG4gIC8vIG5vIG5lZWQgZm9yIGl0XHJcbiAgLy8gcHJvdGVjdGVkIHNldEVzY2FwZUV2ZW50KCk6dm9pZCB7XHJcbiAgLy8gICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcclxuICAvLyAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xyXG4gIC8vICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjcpIHtcclxuICAvLyAgICAgICAgIHRoaXMuaGlkZSgpXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vXHJcbiAgLy8gICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XHJcbiAgLy8gICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LktFWURPV05fRElTTUlTUylcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIHByb3RlY3RlZCBzZXRSZXNpemVFdmVudCgpOnZvaWQge1xyXG4gIC8vIGNvbnNvbGUubG9nKHRoaXMucmVuZGVyZXIubGlzdGVuR2xvYmFsKCcnLCBFdmVudC5SRVNJWkUpKTtcclxuICAvLyBpZiAodGhpcy5faXNTaG93bikge1xyXG4gIC8vICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgJC5wcm94eSh0aGlzLl9oYW5kbGVVcGRhdGUsIHRoaXMpKVxyXG4gIC8vIH0gZWxzZSB7XHJcbiAgLy8gICAkKHdpbmRvdykub2ZmKEV2ZW50LlJFU0laRSlcclxuICAvLyB9XHJcbiAgLy8gfVxyXG5cclxuICBwcm90ZWN0ZWQgZm9jdXNPdGhlck1vZGFsKCkge1xyXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3RoZXJPcGVuZWRNb2RhbHMgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5bYnNNb2RhbF0nKTtcclxuICAgIGlmICghb3RoZXJPcGVuZWRNb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG90aGVyT3BlbmVkTW9kYWxzW290aGVyT3BlbmVkTW9kYWxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgcHJvdGVjdGVkIHJlc2V0QWRqdXN0bWVudHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAncGFkZGluZ0xlZnQnLFxyXG4gICAgICAnJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdwYWRkaW5nUmlnaHQnLFxyXG4gICAgICAnJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiBTY3JvbGwgYmFyIHRyaWNrcyAqL1xyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwcm90ZWN0ZWQgY2hlY2tTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICBpZiAoIWRvY3VtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcclxuICAgICAgd2luZG93XHJcbiAgICAgICAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcclxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpIHx8IDAsXHJcbiAgICAgIDEwXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQm9keU92ZXJmbG93aW5nKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJXaWR0aH1weGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVzZXRTY3JvbGxiYXIoKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMub3JpZ2luYWxCb2R5UGFkZGluZ31weGA7XHJcbiAgfVxyXG5cclxuICAvLyB0aHggZC53YWxzaFxyXG4gIHByb3RlY3RlZCBnZXRTY3JvbGxiYXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2Nyb2xsRGl2ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzY3JvbGxEaXYsIENMQVNTX05BTUUuU0NST0xMQkFSX01FQVNVUkVSKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XHJcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xyXG4gIH1cclxufVxyXG4iXX0=