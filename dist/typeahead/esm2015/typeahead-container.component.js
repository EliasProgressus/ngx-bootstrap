/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren, Renderer2 } from '@angular/core';
import { isBs3, Utils } from 'ngx-bootstrap/utils';
import { latinize } from './typeahead-utils';
export class TypeaheadContainerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            const /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
            const /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            const /** @type {?} */ elemTop = elem.offsetTop;
            const /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set matches(value) {
        this._matches = value;
        this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
        if (this.typeaheadScrollable) {
            setTimeout(() => {
                this.setScrollableMode();
            });
        }
        if (this._matches.length > 0) {
            this._active = this._matches[0];
            if (this._active.isHeader()) {
                this.nextActiveMatch();
            }
        }
    }
    /**
     * @return {?}
     */
    get optionsListTemplate() {
        return this.parent ? this.parent.optionsListTemplate : undefined;
    }
    /**
     * @return {?}
     */
    get typeaheadScrollable() {
        return this.parent ? this.parent.typeaheadScrollable : false;
    }
    /**
     * @return {?}
     */
    get typeaheadOptionsInScrollableView() {
        return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
    }
    /**
     * @return {?}
     */
    get itemTemplate() {
        return this.parent ? this.parent.typeaheadItemTemplate : undefined;
    }
    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    selectActiveMatch(isActiveItemChanged) {
        if (this._active && this.parent.typeaheadSelectFirstItem) {
            this.selectMatch(this._active);
        }
        if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
            this.selectMatch(this._active);
        }
    }
    /**
     * @return {?}
     */
    prevActiveMatch() {
        const /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    }
    /**
     * @return {?}
     */
    nextActiveMatch() {
        const /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectActive(value) {
        this.isFocused = true;
        this._active = value;
    }
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    highlight(match, query) {
        let /** @type {?} */ itemStr = match.value;
        let /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        let /** @type {?} */ startIdx;
        let /** @type {?} */ tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            const /** @type {?} */ queryLen = query.length;
            for (let /** @type {?} */ i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                            `${itemStr.substring(startIdx + tokenLen)}`;
                    itemStrHelper =
                        `${itemStrHelper.substring(0, startIdx)}        ${' '.repeat(tokenLen)}         ` +
                            `${itemStrHelper.substring(startIdx + tokenLen)}`;
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                        `${itemStr.substring(startIdx + tokenLen)}`;
            }
        }
        return itemStr;
    }
    /**
     * @return {?}
     */
    focusLost() {
        this.isFocused = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isActive(value) {
        return this._active === value;
    }
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    selectMatch(value, e = void 0) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(() => this.parent.typeaheadOnSelect.emit(value), 0);
        return false;
    }
    /**
     * @return {?}
     */
    setScrollableMode() {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            const /** @type {?} */ ulStyles = Utils.getStyles(this.ulElement.nativeElement);
            const /** @type {?} */ liStyles = Utils.getStyles(this.liElements.first.nativeElement);
            const /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            const /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            const /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            const /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = `${height + ulPaddingTop + ulPaddingBottom}px`;
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollPrevious(index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            const /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollNext(index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            const /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    }
    /**
     * @return {?}
     */
    scrollToTop() {
        this.ulElement.nativeElement.scrollTop = 0;
    }
}
TypeaheadContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'typeahead-container',
                // tslint:disable-next-line
                template: "<!-- inject options list template -->\r\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\r\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\r\n\r\n<!-- default options item template -->\r\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 3 options list template -->\r\n<ng-template #bs3Template>\r\n  <ul class=\"dropdown-menu\"\r\n      #ulElement\r\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\r\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\r\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\r\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\r\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\r\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n        </a>\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 4 options list template -->\r\n<ng-template #bs4Template>\r\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\r\n    <ng-template [ngIf]=\"!match.isHeader()\">\r\n      <button #liElements\r\n              class=\"dropdown-item\"\r\n              (click)=\"selectMatch(match, $event)\"\r\n              (mouseenter)=\"selectActive(match)\"\r\n              [class.active]=\"isActive(match)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n      </button>\r\n    </ng-template>\r\n  </ng-template>\r\n</ng-template>\r\n",
                host: {
                    class: 'dropdown open',
                    '[class.dropdown-menu]': 'isBs4',
                    '[style.overflow-y]': `isBs4 && needScrollbar ? 'scroll': 'visible'`,
                    '[style.height]': `isBs4 && needScrollbar ? guiHeight: 'auto'`,
                    '[style.visibility]': `typeaheadScrollable ? 'hidden' : 'visible'`,
                    '[class.dropup]': 'dropup',
                    style: 'position: absolute;display: block;'
                },
                styles: [`
    :host.dropdown {
      z-index: 1000;
    }
  `]
            }] }
];
/** @nocollapse */
TypeaheadContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TypeaheadContainerComponent.propDecorators = {
    "ulElement": [{ type: ViewChild, args: ['ulElement',] },],
    "liElements": [{ type: ViewChildren, args: ['liElements',] },],
    "focusLost": [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC8iLCJzb3VyY2VzIjpbInR5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBeUI3QyxNQUFNOzs7OztJQTBCSixZQUFZLE9BQW1CLEVBQ1g7UUFBQSxhQUFRLEdBQVIsUUFBUTt5QkF2QmhCLEtBQUs7d0JBY3NCLEVBQUU7a0NBNk1aLFVBQVUsSUFBaUI7WUFDdEQsdUJBQU0sZ0JBQWdCLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQ3hFLHVCQUFNLG1CQUFtQixHQUFHLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRyx1QkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQix1QkFBTSxVQUFVLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFL0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7U0FDL0U7UUExTUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7Ozs7SUFoQkQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLENBQUMsS0FB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YUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTO29CQUNwQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVM7d0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7d0JBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7S0FDRjs7OztJQVlPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs7Ozs7SUFHN0UsV0FBVztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOzs7O1lBbFE5QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjs7Z0JBRS9CLG9vRUFBbUQ7Z0JBQ25ELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsZUFBZTtvQkFDdEIsdUJBQXVCLEVBQUUsT0FBTztvQkFDaEMsb0JBQW9CLEVBQUcsOENBQThDO29CQUNyRSxnQkFBZ0IsRUFBRSw0Q0FBNEM7b0JBQzlELG9CQUFvQixFQUFFLDRDQUE0QztvQkFDbEUsZ0JBQWdCLEVBQUUsUUFBUTtvQkFDMUIsS0FBSyxFQUFFLG9DQUFvQztpQkFDNUM7eUJBRUM7Ozs7R0FJRDthQUVGOzs7O1lBbENDLFVBQVU7WUFNVixTQUFTOzs7MEJBaURSLFNBQVMsU0FBQyxXQUFXOzJCQUdyQixZQUFZLFNBQUMsWUFBWTswQkFnSXpCLFlBQVksU0FBQyxZQUFZLGNBQ3pCLFlBQVksU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0JzMywgVXRpbHMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgbGF0aW5pemUgfSBmcm9tICcuL3R5cGVhaGVhZC11dGlscyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE1hdGNoIH0gZnJvbSAnLi90eXBlYWhlYWQtbWF0Y2guY2xhc3MnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0eXBlYWhlYWQtY29udGFpbmVyJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdkcm9wZG93biBvcGVuJyxcclxuICAgICdbY2xhc3MuZHJvcGRvd24tbWVudV0nOiAnaXNCczQnLFxyXG4gICAgJ1tzdHlsZS5vdmVyZmxvdy15XScgOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/ICdzY3JvbGwnOiAndmlzaWJsZSdgLFxyXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogYGlzQnM0ICYmIG5lZWRTY3JvbGxiYXIgPyBndWlIZWlnaHQ6ICdhdXRvJ2AsXHJcbiAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogYHR5cGVhaGVhZFNjcm9sbGFibGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ2AsXHJcbiAgICAnW2NsYXNzLmRyb3B1cF0nOiAnZHJvcHVwJyxcclxuICAgIHN0eWxlOiAncG9zaXRpb246IGFic29sdXRlO2Rpc3BsYXk6IGJsb2NrOydcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QuZHJvcGRvd24ge1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgfVxyXG4gIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQge1xyXG4gIHBhcmVudDogVHlwZWFoZWFkRGlyZWN0aXZlO1xyXG4gIHF1ZXJ5OiBzdHJpbmdbXSB8IHN0cmluZztcclxuICBlbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIHRvcDogc3RyaW5nO1xyXG4gIGxlZnQ6IHN0cmluZztcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgZHJvcHVwOiBib29sZWFuO1xyXG4gIGd1aUhlaWdodDogc3RyaW5nO1xyXG4gIG5lZWRTY3JvbGxiYXI6IGJvb2xlYW47XHJcblxyXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfYWN0aXZlOiBUeXBlYWhlYWRNYXRjaDtcclxuICBwcm90ZWN0ZWQgX21hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10gPSBbXTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndWxFbGVtZW50JylcclxuICBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbignbGlFbGVtZW50cycpXHJcbiAgcHJpdmF0ZSBsaUVsZW1lbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZSgpOiBUeXBlYWhlYWRNYXRjaCB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1hdGNoZXMoKTogVHlwZWFoZWFkTWF0Y2hbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcztcclxuICB9XHJcblxyXG4gIHNldCBtYXRjaGVzKHZhbHVlOiBUeXBlYWhlYWRNYXRjaFtdKSB7XHJcbiAgICB0aGlzLl9tYXRjaGVzID0gdmFsdWU7XHJcbiAgICB0aGlzLm5lZWRTY3JvbGxiYXIgPSB0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUgJiYgdGhpcy50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA8IHRoaXMubWF0Y2hlcy5sZW5ndGg7XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsYWJsZU1vZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9tYXRjaGVzWzBdO1xyXG4gICAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcclxuICAgICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0IG9wdGlvbnNMaXN0VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vcHRpb25zTGlzdFRlbXBsYXRlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGVhaGVhZFNjcm9sbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRTY3JvbGxhYmxlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0IHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA6IDU7XHJcbiAgfVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0IGl0ZW1UZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZEl0ZW1UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKGlzQWN0aXZlSXRlbUNoYW5nZWQ/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMucGFyZW50LnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xyXG4gICAgICB0aGlzLnNlbGVjdE1hdGNoKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnBhcmVudC50eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0gJiYgaXNBY3RpdmVJdGVtQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdE1hdGNoKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2QWN0aXZlTWF0Y2goKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXHJcbiAgICAgIGluZGV4IC0gMSA8IDAgPyB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMVxyXG4gICAgICBdO1xyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XHJcbiAgICAgIHRoaXMucHJldkFjdGl2ZU1hdGNoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUHJldmlvdXMoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dEFjdGl2ZU1hdGNoKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLl9hY3RpdmUpO1xyXG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5tYXRjaGVzW1xyXG4gICAgICBpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFcclxuICAgICAgXTtcclxuICAgIGlmICh0aGlzLl9hY3RpdmUuaXNIZWFkZXIoKSkge1xyXG4gICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSkge1xyXG4gICAgICB0aGlzLnNjcm9sbE5leHQoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHQobWF0Y2g6IFR5cGVhaGVhZE1hdGNoLCBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IGl0ZW1TdHI6IHN0cmluZyA9IG1hdGNoLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW1TdHJIZWxwZXI6IHN0cmluZyA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC50eXBlYWhlYWRMYXRpbml6ZVxyXG4gICAgICA/IGxhdGluaXplKGl0ZW1TdHIpXHJcbiAgICAgIDogaXRlbVN0cikudG9Mb3dlckNhc2UoKTtcclxuICAgIGxldCBzdGFydElkeDogbnVtYmVyO1xyXG4gICAgbGV0IHRva2VuTGVuOiBudW1iZXI7XHJcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcclxuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5TGVuOiBudW1iZXIgPSBxdWVyeS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlMZW47IGkgKz0gMSkge1xyXG4gICAgICAgIC8vIHF1ZXJ5W2ldIGlzIGFscmVhZHkgbGF0aW5pemVkIGFuZCBsb3dlciBjYXNlXHJcbiAgICAgICAgc3RhcnRJZHggPSBpdGVtU3RySGVscGVyLmluZGV4T2YocXVlcnlbaV0pO1xyXG4gICAgICAgIHRva2VuTGVuID0gcXVlcnlbaV0ubGVuZ3RoO1xyXG4gICAgICAgIGlmIChzdGFydElkeCA+PSAwICYmIHRva2VuTGVuID4gMCkge1xyXG4gICAgICAgICAgaXRlbVN0ciA9XHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX08c3Ryb25nPiR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHgsIHN0YXJ0SWR4ICsgdG9rZW5MZW4pfTwvc3Ryb25nPmAgK1xyXG4gICAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xyXG4gICAgICAgICAgaXRlbVN0ckhlbHBlciA9XHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHJIZWxwZXIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX0gICAgICAgICR7JyAnLnJlcGVhdCh0b2tlbkxlbil9ICAgICAgICAgYCArXHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHJIZWxwZXIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgIC8vIHF1ZXJ5IGlzIGFscmVhZHkgbGF0aW5pemVkIGFuZCBsb3dlciBjYXNlXHJcbiAgICAgIHN0YXJ0SWR4ID0gaXRlbVN0ckhlbHBlci5pbmRleE9mKHF1ZXJ5KTtcclxuICAgICAgdG9rZW5MZW4gPSBxdWVyeS5sZW5ndGg7XHJcbiAgICAgIGlmIChzdGFydElkeCA+PSAwICYmIHRva2VuTGVuID4gMCkge1xyXG4gICAgICAgIGl0ZW1TdHIgPVxyXG4gICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfTxzdHJvbmc+JHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCwgc3RhcnRJZHggKyB0b2tlbkxlbil9PC9zdHJvbmc+YCArXHJcbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdHI7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBmb2N1c0xvc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUodmFsdWU6IFR5cGVhaGVhZE1hdGNoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlID09PSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE1hdGNoKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCwgZTogRXZlbnQgPSB2b2lkIDApOiBib29sZWFuIHtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFyZW50LmNoYW5nZU1vZGVsKHZhbHVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wYXJlbnQudHlwZWFoZWFkT25TZWxlY3QuZW1pdCh2YWx1ZSksIDApO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbGFibGVNb2RlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnVsRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnVsRWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMuZmlyc3QpIHtcclxuICAgICAgY29uc3QgdWxTdHlsZXMgPSBVdGlscy5nZXRTdHlsZXModGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGxpU3R5bGVzID0gVXRpbHMuZ2V0U3R5bGVzKHRoaXMubGlFbGVtZW50cy5maXJzdC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgY29uc3QgdWxQYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdCgodWxTdHlsZXNbJ3BhZGRpbmctYm90dG9tJ10gPyB1bFN0eWxlc1sncGFkZGluZy1ib3R0b20nXSA6ICcnKVxyXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XHJcbiAgICAgIGNvbnN0IHVsUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLXRvcCddID8gdWxTdHlsZXNbJ3BhZGRpbmctdG9wJ10gOiAnMCcpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuICAgICAgY29uc3Qgb3B0aW9uSGVpZ2h0ID0gcGFyc2VGbG9hdCgobGlTdHlsZXMuaGVpZ2h0ID8gbGlTdHlsZXMuaGVpZ2h0IDogJzAnKVxyXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgKiBvcHRpb25IZWlnaHQ7XHJcbiAgICAgIHRoaXMuZ3VpSGVpZ2h0ID0gYCR7aGVpZ2h0ICsgdWxQYWRkaW5nVG9wICsgdWxQYWRkaW5nQm90dG9tfXB4YDtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFByZXZpb3VzKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5saUVsZW1lbnRzKSB7XHJcbiAgICAgIGNvbnN0IGxpRWxlbWVudCA9IHRoaXMubGlFbGVtZW50cy50b0FycmF5KClbaW5kZXggLSAxXTtcclxuICAgICAgaWYgKGxpRWxlbWVudCAmJiAhdGhpcy5pc1Njcm9sbGVkSW50b1ZpZXcobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbE5leHQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGluZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcclxuICAgICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5saUVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleCArIDFdO1xyXG4gICAgICBpZiAobGlFbGVtZW50ICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhsaUVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9XHJcbiAgICAgICAgICBsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLVxyXG4gICAgICAgICAgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArXHJcbiAgICAgICAgICBOdW1iZXIobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaXNTY3JvbGxlZEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBjb250YWluZXJWaWV3VG9wOiBudW1iZXIgPSB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdCb3R0b20gPSBjb250YWluZXJWaWV3VG9wICsgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgIGNvbnN0IGVsZW1Ub3AgPSBlbGVtLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgZWxlbS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBjb250YWluZXJWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBjb250YWluZXJWaWV3VG9wKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcclxuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gIH1cclxufVxyXG4iXX0=