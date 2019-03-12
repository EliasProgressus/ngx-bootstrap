/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, Renderer2 } from '@angular/core';
import { isBs3, Utils } from 'ngx-bootstrap/utils';
import { latinize } from './typeahead-utils';
var TypeaheadContainerComponent = /** @class */ (function () {
    function TypeaheadContainerComponent(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            var /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
            var /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            var /** @type {?} */ elemTop = elem.offsetTop;
            var /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._matches;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._matches = value;
            this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
            if (this.typeaheadScrollable) {
                setTimeout(function () {
                    _this.setScrollableMode();
                });
            }
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadScrollable : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectActiveMatch = /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    function (isActiveItemChanged) {
        if (this._active && this.parent.typeaheadSelectFirstItem) {
            this.selectMatch(this._active);
        }
        if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
            this.selectMatch(this._active);
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.prevActiveMatch = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.nextActiveMatch = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectActive = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isFocused = true;
        this._active = value;
    };
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.highlight = /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    function (match, query) {
        var /** @type {?} */ itemStr = match.value;
        var /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        var /** @type {?} */ startIdx;
        var /** @type {?} */ tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var /** @type {?} */ queryLen = query.length;
            for (var /** @type {?} */ i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                            ("" + itemStr.substring(startIdx + tokenLen));
                    itemStrHelper =
                        itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                            ("" + itemStrHelper.substring(startIdx + tokenLen));
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                        ("" + itemStr.substring(startIdx + tokenLen));
            }
        }
        return itemStr;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.focusLost = /**
     * @return {?}
     */
    function () {
        this.isFocused = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.isActive = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._active === value;
    };
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.selectMatch = /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
        return false;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.setScrollableMode = /**
     * @return {?}
     */
    function () {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            var /** @type {?} */ ulStyles = Utils.getStyles(this.ulElement.nativeElement);
            var /** @type {?} */ liStyles = Utils.getStyles(this.liElements.first.nativeElement);
            var /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            var /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            var /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            var /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollPrevious = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            var /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollNext = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            var /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    TypeaheadContainerComponent.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.scrollTop = 0;
    };
    TypeaheadContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "<!-- inject options list template -->\r\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\r\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\r\n\r\n<!-- default options item template -->\r\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 3 options list template -->\r\n<ng-template #bs3Template>\r\n  <ul class=\"dropdown-menu\"\r\n      #ulElement\r\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\r\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\r\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\r\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\r\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\r\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n        </a>\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 4 options list template -->\r\n<ng-template #bs4Template>\r\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\r\n    <ng-template [ngIf]=\"!match.isHeader()\">\r\n      <button #liElements\r\n              class=\"dropdown-item\"\r\n              (click)=\"selectMatch(match, $event)\"\r\n              (mouseenter)=\"selectActive(match)\"\r\n              [class.active]=\"isActive(match)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n      </button>\r\n    </ng-template>\r\n  </ng-template>\r\n</ng-template>\r\n",
                    host: {
                        class: 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                        '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                        '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                        '[class.dropup]': 'dropup',
                        style: 'position: absolute;display: block;'
                    },
                    styles: ["\n    :host.dropdown {\n      z-index: 1000;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        "ulElement": [{ type: ViewChild, args: ['ulElement',] },],
        "liElements": [{ type: ViewChildren, args: ['liElements',] },],
        "focusLost": [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());
export { TypeaheadContainerComponent };
function TypeaheadContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TypeaheadContainerComponent.propDecorators;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.parent;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.query;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.element;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.isFocused;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.top;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.left;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.display;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.placement;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.dropup;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.guiHeight;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.needScrollbar;
    /** @type {?} */
    TypeaheadContainerComponent.prototype._active;
    /** @type {?} */
    TypeaheadContainerComponent.prototype._matches;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.ulElement;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.liElements;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.isScrolledIntoView;
    /** @type {?} */
    TypeaheadContainerComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC8iLCJzb3VyY2VzIjpbInR5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQW1EM0MscUNBQVksT0FBbUIsRUFDWDtRQUFBLGFBQVEsR0FBUixRQUFRO3lCQXZCaEIsS0FBSzt3QkFjc0IsRUFBRTtrQ0E2TVosVUFBVSxJQUFpQjtZQUN0RCxxQkFBTSxnQkFBZ0IsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDeEUscUJBQU0sbUJBQW1CLEdBQUcsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pHLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQy9CLHFCQUFNLFVBQVUsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUUvQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQztTQUMvRTtRQTFNQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4QjtJQWhCRCxzQkFBSSw4Q0FBSzs7OztRQUFUO1lBQ0UsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFF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QkFsQ0MsVUFBVTtnQkFNVixTQUFTOzs7OEJBaURSLFNBQVMsU0FBQyxXQUFXOytCQUdyQixZQUFZLFNBQUMsWUFBWTs4QkFnSXpCLFlBQVksU0FBQyxZQUFZLGNBQ3pCLFlBQVksU0FBQyxNQUFNOztzQ0E3THRCOztTQXFDYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBsYXRpbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcclxuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3R5cGVhaGVhZC1jb250YWluZXInLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Ryb3Bkb3duIG9wZW4nLFxyXG4gICAgJ1tjbGFzcy5kcm9wZG93bi1tZW51XSc6ICdpc0JzNCcsXHJcbiAgICAnW3N0eWxlLm92ZXJmbG93LXldJyA6IGBpc0JzNCAmJiBuZWVkU2Nyb2xsYmFyID8gJ3Njcm9sbCc6ICd2aXNpYmxlJ2AsXHJcbiAgICAnW3N0eWxlLmhlaWdodF0nOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/IGd1aUhlaWdodDogJ2F1dG8nYCxcclxuICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiBgdHlwZWFoZWFkU2Nyb2xsYWJsZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnYCxcclxuICAgICdbY2xhc3MuZHJvcHVwXSc6ICdkcm9wdXAnLFxyXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7ZGlzcGxheTogYmxvY2s7J1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdC5kcm9wZG93biB7XHJcbiAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgcGFyZW50OiBUeXBlYWhlYWREaXJlY3RpdmU7XHJcbiAgcXVlcnk6IHN0cmluZ1tdIHwgc3RyaW5nO1xyXG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgdG9wOiBzdHJpbmc7XHJcbiAgbGVmdDogc3RyaW5nO1xyXG4gIGRpc3BsYXk6IHN0cmluZztcclxuICBwbGFjZW1lbnQ6IHN0cmluZztcclxuICBkcm9wdXA6IGJvb2xlYW47XHJcbiAgZ3VpSGVpZ2h0OiBzdHJpbmc7XHJcbiAgbmVlZFNjcm9sbGJhcjogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9hY3RpdmU6IFR5cGVhaGVhZE1hdGNoO1xyXG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xyXG5cclxuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnKVxyXG4gIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKCdsaUVsZW1lbnRzJylcclxuICBwcml2YXRlIGxpRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlKCk6IFR5cGVhaGVhZE1hdGNoIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF0Y2hlcygpOiBUeXBlYWhlYWRNYXRjaFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1hdGNoZXModmFsdWU6IFR5cGVhaGVhZE1hdGNoW10pIHtcclxuICAgIHRoaXMuX21hdGNoZXMgPSB2YWx1ZTtcclxuICAgIHRoaXMubmVlZFNjcm9sbGJhciA9IHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSAmJiB0aGlzLnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3IDwgdGhpcy5tYXRjaGVzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxhYmxlTW9kZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuX21hdGNoZXNbMF07XHJcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUuaXNIZWFkZXIoKSkge1xyXG4gICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXQgb3B0aW9uc0xpc3RUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9wdGlvbnNMaXN0VGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZWFoZWFkU2Nyb2xsYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZFNjcm9sbGFibGUgOiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBnZXQgdHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3IDogNTtcclxuICB9XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXQgaXRlbVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudHlwZWFoZWFkSXRlbVRlbXBsYXRlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWN0aXZlTWF0Y2goaXNBY3RpdmVJdGVtQ2hhbmdlZD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5wYXJlbnQudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5fYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMucGFyZW50LnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSAmJiBpc0FjdGl2ZUl0ZW1DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5fYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZBY3RpdmVNYXRjaCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5fYWN0aXZlKTtcclxuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMubWF0Y2hlc1tcclxuICAgICAgaW5kZXggLSAxIDwgMCA/IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXHJcbiAgICAgIF07XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcclxuICAgICAgdGhpcy5wcmV2QWN0aXZlTWF0Y2goKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcclxuICAgICAgdGhpcy5zY3JvbGxQcmV2aW91cyhpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0QWN0aXZlTWF0Y2goKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXHJcbiAgICAgIGluZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMVxyXG4gICAgICBdO1xyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XHJcbiAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsTmV4dChpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RBY3RpdmUodmFsdWU6IFR5cGVhaGVhZE1hdGNoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodChtYXRjaDogVHlwZWFoZWFkTWF0Y2gsIHF1ZXJ5OiBzdHJpbmdbXSB8IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgaXRlbVN0cjogc3RyaW5nID0gbWF0Y2gudmFsdWU7XHJcbiAgICBsZXQgaXRlbVN0ckhlbHBlcjogc3RyaW5nID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgID8gbGF0aW5pemUoaXRlbVN0cilcclxuICAgICAgOiBpdGVtU3RyKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgbGV0IHN0YXJ0SWR4OiBudW1iZXI7XHJcbiAgICBsZXQgdG9rZW5MZW46IG51bWJlcjtcclxuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xyXG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgY29uc3QgcXVlcnlMZW46IG51bWJlciA9IHF1ZXJ5Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeUxlbjsgaSArPSAxKSB7XHJcbiAgICAgICAgLy8gcXVlcnlbaV0gaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcclxuICAgICAgICBzdGFydElkeCA9IGl0ZW1TdHJIZWxwZXIuaW5kZXhPZihxdWVyeVtpXSk7XHJcbiAgICAgICAgdG9rZW5MZW4gPSBxdWVyeVtpXS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XHJcbiAgICAgICAgICBpdGVtU3RyID1cclxuICAgICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfTxzdHJvbmc+JHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCwgc3RhcnRJZHggKyB0b2tlbkxlbil9PC9zdHJvbmc+YCArXHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XHJcbiAgICAgICAgICBpdGVtU3RySGVscGVyID1cclxuICAgICAgICAgICAgYCR7aXRlbVN0ckhlbHBlci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfSAgICAgICAgJHsnICcucmVwZWF0KHRva2VuTGVuKX0gICAgICAgICBgICtcclxuICAgICAgICAgICAgYCR7aXRlbVN0ckhlbHBlci5zdWJzdHJpbmcoc3RhcnRJZHggKyB0b2tlbkxlbil9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocXVlcnkpIHtcclxuICAgICAgLy8gcXVlcnkgaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcclxuICAgICAgc3RhcnRJZHggPSBpdGVtU3RySGVscGVyLmluZGV4T2YocXVlcnkpO1xyXG4gICAgICB0b2tlbkxlbiA9IHF1ZXJ5Lmxlbmd0aDtcclxuICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XHJcbiAgICAgICAgaXRlbVN0ciA9XHJcbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZygwLCBzdGFydElkeCl9PHN0cm9uZz4ke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4LCBzdGFydElkeCArIHRva2VuTGVuKX08L3N0cm9uZz5gICtcclxuICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVN0cjtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxyXG4gIGZvY3VzTG9zdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmUgPT09IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TWF0Y2godmFsdWU6IFR5cGVhaGVhZE1hdGNoLCBlOiBFdmVudCA9IHZvaWQgMCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYXJlbnQuY2hhbmdlTW9kZWwodmFsdWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhcmVudC50eXBlYWhlYWRPblNlbGVjdC5lbWl0KHZhbHVlKSwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsYWJsZU1vZGUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudWxFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMudWxFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGlFbGVtZW50cy5maXJzdCkge1xyXG4gICAgICBjb25zdCB1bFN0eWxlcyA9IFV0aWxzLmdldFN0eWxlcyh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgY29uc3QgbGlTdHlsZXMgPSBVdGlscy5nZXRTdHlsZXModGhpcy5saUVsZW1lbnRzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBjb25zdCB1bFBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KCh1bFN0eWxlc1sncGFkZGluZy1ib3R0b20nXSA/IHVsU3R5bGVzWydwYWRkaW5nLWJvdHRvbSddIDogJycpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuICAgICAgY29uc3QgdWxQYWRkaW5nVG9wID0gcGFyc2VGbG9hdCgodWxTdHlsZXNbJ3BhZGRpbmctdG9wJ10gPyB1bFN0eWxlc1sncGFkZGluZy10b3AnXSA6ICcwJylcclxuICAgICAgICAucmVwbGFjZSgncHgnLCAnJykpO1xyXG4gICAgICBjb25zdCBvcHRpb25IZWlnaHQgPSBwYXJzZUZsb2F0KChsaVN0eWxlcy5oZWlnaHQgPyBsaVN0eWxlcy5oZWlnaHQgOiAnMCcpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyAqIG9wdGlvbkhlaWdodDtcclxuICAgICAgdGhpcy5ndWlIZWlnaHQgPSBgJHtoZWlnaHQgKyB1bFBhZGRpbmdUb3AgKyB1bFBhZGRpbmdCb3R0b219cHhgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUHJldmlvdXMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcclxuICAgICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5saUVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleCAtIDFdO1xyXG4gICAgICBpZiAobGlFbGVtZW50ICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhsaUVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsTmV4dChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGlFbGVtZW50cykge1xyXG4gICAgICBjb25zdCBsaUVsZW1lbnQgPSB0aGlzLmxpRWxlbWVudHMudG9BcnJheSgpW2luZGV4ICsgMV07XHJcbiAgICAgIGlmIChsaUVsZW1lbnQgJiYgIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGxpRWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID1cclxuICAgICAgICAgIGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtXHJcbiAgICAgICAgICBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpICtcclxuICAgICAgICAgIE51bWJlcihsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpc1Njcm9sbGVkSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdUb3A6IG51bWJlciA9IHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgY29udGFpbmVyVmlld0JvdHRvbSA9IGNvbnRhaW5lclZpZXdUb3AgKyBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgY29uc3QgZWxlbVRvcCA9IGVsZW0ub2Zmc2V0VG9wO1xyXG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBlbGVtLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gKChlbGVtQm90dG9tIDw9IGNvbnRhaW5lclZpZXdCb3R0b20pICYmIChlbGVtVG9wID49IGNvbnRhaW5lclZpZXdUb3ApKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==