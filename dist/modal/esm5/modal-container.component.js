/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CLASS_NAME, DISMISS_REASONS, ModalOptions, TRANSITION_DURATIONS } from './modal-options.class';
import { isBs3 } from 'ngx-bootstrap/utils';
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
export { ModalContainerComponent };
function ModalContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ModalContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ModalContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ModalContainerComponent.propDecorators;
    /** @type {?} */
    ModalContainerComponent.prototype.config;
    /** @type {?} */
    ModalContainerComponent.prototype.isShown;
    /** @type {?} */
    ModalContainerComponent.prototype.level;
    /** @type {?} */
    ModalContainerComponent.prototype.isAnimated;
    /** @type {?} */
    ModalContainerComponent.prototype.bsModalService;
    /** @type {?} */
    ModalContainerComponent.prototype.isModalHiding;
    /** @type {?} */
    ModalContainerComponent.prototype._element;
    /** @type {?} */
    ModalContainerComponent.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBR1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFlBQVksRUFDWixvQkFBb0IsRUFDckIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBMEIxQyxpQ0FBWSxPQUFxQixFQUNYLFFBQW9CLEVBQ3RCO1FBREUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUzt1QkFSbkIsS0FBSzs2QkFJUyxLQUFLO1FBSzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDMUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkE2QkM7UUE1QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUMzQixVQUFVLENBQUMsSUFBSSxDQUNoQixDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLFNBQVMsRUFDVCxPQUFPLENBQ1IsQ0FBQztRQUNGLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixLQUFJ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Q0FBQztRQUNGLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxDQUNELFFBQVE7Z0JBQ1IsUUFBUSxDQUFDLElBQUk7Z0JBQ2IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RDtZQUNELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7O2dCQXpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDJNQU1UO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsT0FBTzt3QkFDZCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxRQUFRLEVBQUUsSUFBSTt3QkFDZCxtQkFBbUIsRUFBRSxNQUFNO3FCQUM1QjtpQkFDRjs7OztnQkFyQkMsWUFBWTtnQkFUWixVQUFVO2dCQUlWLFNBQVM7Ozs0QkF3RVIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFhaEMsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOztrQ0EzRmhEOztTQWlDYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENMQVNTX05BTUUsXHJcbiAgRElTTUlTU19SRUFTT05TLFxyXG4gIE1vZGFsT3B0aW9ucyxcclxuICBUUkFOU0lUSU9OX0RVUkFUSU9OU1xyXG59IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XHJcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9icy1tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbW9kYWwtY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbY2xhc3NdPVwiJ21vZGFsLWRpYWxvZycgKyAoY29uZmlnLmNsYXNzID8gJyAnICsgY29uZmlnLmNsYXNzIDogJycpXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtb2RhbCcsXHJcbiAgICByb2xlOiAnZGlhbG9nJyxcclxuICAgIHRhYmluZGV4OiAnLTEnLFxyXG4gICAgJ1thdHRyLmFyaWEtbW9kYWxdJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uZmlnOiBNb2RhbE9wdGlvbnM7XHJcbiAgaXNTaG93biA9IGZhbHNlO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgaXNBbmltYXRlZDogYm9vbGVhbjtcclxuICBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2U7XHJcbiAgcHJpdmF0ZSBpc01vZGFsSGlkaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE1vZGFsT3B0aW9ucyxcclxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNBbmltYXRlZCkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgQ0xBU1NfTkFNRS5GQURFXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnZGlzcGxheScsXHJcbiAgICAgICdibG9jaydcclxuICAgICk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIGlzQnMzKCkgPyBDTEFTU19OQU1FLklOIDogQ0xBU1NfTkFNRS5TSE9XXHJcbiAgICAgICk7XHJcbiAgICB9LCB0aGlzLmlzQW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5CQUNLRFJPUCA6IDApO1xyXG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgaWYgKHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuY2hlY2tTY3JvbGxiYXIoKTtcclxuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldFNjcm9sbGJhcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jb25maWcuaWdub3JlQmFja2Ryb3BDbGljayB8fFxyXG4gICAgICB0aGlzLmNvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycgfHxcclxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldERpc21pc3NSZWFzb24oRElTTUlTU19SRUFTT05TLkJBQ0tSRE9QKTtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcclxuICBvbkVzYyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY29uZmlnLmtleWJvYXJkICYmXHJcbiAgICAgIHRoaXMubGV2ZWwgPT09IHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2Uuc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuRVNDKTtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEhpZGluZyB8fCAhdGhpcy5pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xyXG4gICAgKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRvY3VtZW50ICYmXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keSAmJlxyXG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBDTEFTU19OQU1FLk9QRU4pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuaGlkZSh0aGlzLmxldmVsKTtcclxuICAgICAgdGhpcy5pc01vZGFsSGlkaW5nID0gZmFsc2U7XHJcbiAgICB9LCB0aGlzLmlzQW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5NT0RBTCA6IDApO1xyXG4gIH1cclxufVxyXG4iXX0=