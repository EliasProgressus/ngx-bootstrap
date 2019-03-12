/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
/**
 * @record
 */
export function PageChangedEvent() { }
function PageChangedEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    PageChangedEvent.prototype.itemsPerPage;
    /** @type {?} */
    PageChangedEvent.prototype.page;
}
export const /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
};
export class PaginationComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new EventEmitter();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        const /** @type {?} */ _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return (/** @type {?} */ (this))[`${key}Text`] || this.config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                const /** @type {?} */ target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        const /** @type {?} */ pages = [];
        // Default page limits
        let /** @type {?} */ startPage = 1;
        let /** @type {?} */ endPage = totalPages;
        const /** @type {?} */ isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let /** @type {?} */ num = startPage; num <= endPage; num++) {
            const /** @type {?} */ page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                const /** @type {?} */ previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                const /** @type {?} */ nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    /**
     * @return {?}
     */
    calculateTotalPages() {
        const /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\r\n  <li class=\"pagination-first page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noPrevious()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\r\n       [innerHTML]=\"getText('first')\"></a>\r\n  </li>\r\n\r\n  <li class=\"pagination-prev page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noPrevious()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\r\n       [innerHTML]=\"getText('previous')\"></a>\r\n  </li>\r\n\r\n  <li *ngFor=\"let pg of pages\"\r\n      [class.active]=\"pg.active\"\r\n      [class.disabled]=\"disabled&&!pg.active\"\r\n      class=\"pagination-page page-item\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\r\n       [innerHTML]=\"pg.text\"></a>\r\n  </li>\r\n\r\n  <li class=\"pagination-next page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noNext()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\r\n       [innerHTML]=\"getText('next')\"></a></li>\r\n\r\n  <li class=\"pagination-last page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noNext()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\r\n       [innerHTML]=\"getText('last')\"></a></li>\r\n</ul>\r\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: PaginationConfig, },
    { type: ChangeDetectorRef, },
];
PaginationComponent.propDecorators = {
    "align": [{ type: Input },],
    "maxSize": [{ type: Input },],
    "boundaryLinks": [{ type: Input },],
    "directionLinks": [{ type: Input },],
    "firstText": [{ type: Input },],
    "previousText": [{ type: Input },],
    "nextText": [{ type: Input },],
    "lastText": [{ type: Input },],
    "rotate": [{ type: Input },],
    "pageBtnClass": [{ type: Input },],
    "disabled": [{ type: Input },],
    "numPages": [{ type: Output },],
    "pageChanged": [{ type: Output },],
    "itemsPerPage": [{ type: Input },],
    "totalItems": [{ type: Input },],
};
function PaginationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PaginationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PaginationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PaginationComponent.propDecorators;
    /** @type {?} */
    PaginationComponent.prototype.config;
    /**
     * if `true` aligns each link to the sides of pager
     * @type {?}
     */
    PaginationComponent.prototype.align;
    /**
     * limit number for page links in pager
     * @type {?}
     */
    PaginationComponent.prototype.maxSize;
    /**
     * if false first and last buttons will be hidden
     * @type {?}
     */
    PaginationComponent.prototype.boundaryLinks;
    /**
     * if false previous and next buttons will be hidden
     * @type {?}
     */
    PaginationComponent.prototype.directionLinks;
    /**
     * first button text
     * @type {?}
     */
    PaginationComponent.prototype.firstText;
    /**
     * previous button text
     * @type {?}
     */
    PaginationComponent.prototype.previousText;
    /**
     * next button text
     * @type {?}
     */
    PaginationComponent.prototype.nextText;
    /**
     * last button text
     * @type {?}
     */
    PaginationComponent.prototype.lastText;
    /**
     * if true current page will in the middle of pages list
     * @type {?}
     */
    PaginationComponent.prototype.rotate;
    /**
     * add class to <code><li\></code>
     * @type {?}
     */
    PaginationComponent.prototype.pageBtnClass;
    /**
     * if true pagination component will be disabled
     * @type {?}
     */
    PaginationComponent.prototype.disabled;
    /**
     * fired when total pages count changes, $event:number equals to total pages count
     * @type {?}
     */
    PaginationComponent.prototype.numPages;
    /**
     * fired when page was changed, $event:{page, itemsPerPage} equals to object
     * with current page index and number of items per page
     * @type {?}
     */
    PaginationComponent.prototype.pageChanged;
    /** @type {?} */
    PaginationComponent.prototype.onChange;
    /** @type {?} */
    PaginationComponent.prototype.onTouched;
    /** @type {?} */
    PaginationComponent.prototype.classMap;
    /** @type {?} */
    PaginationComponent.prototype.pages;
    /** @type {?} */
    PaginationComponent.prototype._itemsPerPage;
    /** @type {?} */
    PaginationComponent.prototype._totalItems;
    /** @type {?} */
    PaginationComponent.prototype._totalPages;
    /** @type {?} */
    PaginationComponent.prototype.inited;
    /** @type {?} */
    PaginationComponent.prototype._page;
    /** @type {?} */
    PaginationComponent.prototype.elementRef;
    /** @type {?} */
    PaginationComponent.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7O0FBU3ZELE1BQU0sQ0FBQyx1QkFBTSxpQ0FBaUMsR0FBYTtJQUN6RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU9GLE1BQU07Ozs7OztJQXFHSixZQUNVLFlBQ1IsZ0JBQWtDLEVBQzFCO1FBRkEsZUFBVSxHQUFWLFVBQVU7UUFFVixvQkFBZSxHQUFmLGVBQWU7Ozs7d0JBM0VrQixJQUFJLFlBQVksRUFBVTs7Ozs7MkJBS3ZELElBQUksWUFBWSxFQUFvQjt3QkF1RHZDLFFBQVEsQ0FBQyxTQUFTO3lCQUNqQixRQUFRLENBQUMsU0FBUztzQkFRWCxLQUFLO3FCQUNOLENBQUM7UUFPakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7S0FDRjs7Ozs7UUF4RUcsWUFBWTtRQUNkLE1BQU0sQ0FBQyxJQUFJ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YUFDL0M7Ozs7WUE5QkMsVUFBVTtZQVVILGdCQUFnQjtZQVp2QixpQkFBaUI7OztzQkFvQ2hCLEtBQUs7d0JBRUwsS0FBSzs4QkFFTCxLQUFLOytCQUVMLEtBQUs7MEJBR0wsS0FBSzs2QkFFTCxLQUFLO3lCQUVMLEtBQUs7eUJBRUwsS0FBSzt1QkFFTCxLQUFLOzZCQUdMLEtBQUs7eUJBR0wsS0FBSzt5QkFHTCxNQUFNOzRCQUlOLE1BQU07NkJBSU4sS0FBSzsyQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFByb3ZpZGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlQ2hhbmdlZEV2ZW50IHtcclxuICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuICBwYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFnaW5hdGlvbkNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICBjb25maWc6IENvbmZpZ01vZGVsO1xyXG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cclxuICBASW5wdXQoKSBhbGlnbjogYm9vbGVhbjtcclxuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXHJcbiAgQElucHV0KCkgbWF4U2l6ZTogbnVtYmVyO1xyXG4gIC8qKiBpZiBmYWxzZSBmaXJzdCBhbmQgbGFzdCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXHJcbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcclxuICAvKiogaWYgZmFsc2UgcHJldmlvdXMgYW5kIG5leHQgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xyXG4gIC8vIGxhYmVsc1xyXG4gIC8qKiBmaXJzdCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGZpcnN0VGV4dDogc3RyaW5nO1xyXG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nO1xyXG4gIC8qKiBuZXh0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcclxuICAvKiogbGFzdCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGxhc3RUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXHJcbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xyXG4gIC8vIGNzc1xyXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xyXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xyXG5cclxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXHJcbiAgQE91dHB1dCgpIG51bVBhZ2VzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIHBhZ2Ugd2FzIGNoYW5nZWQsICRldmVudDp7cGFnZSwgaXRlbXNQZXJQYWdlfSBlcXVhbHMgdG8gb2JqZWN0XHJcbiAgICogd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PigpO1xyXG5cclxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpdGVtc1BlclBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiBhbGwgcGFnZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJdGVtcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbEl0ZW1zKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbFBhZ2VzKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XHJcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBfcHJldmlvdXMgPSB0aGlzLl9wYWdlO1xyXG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXHJcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBjbGFzc01hcDogc3RyaW5nO1xyXG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XHJcblxyXG4gIHByb3RlY3RlZCBfaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIGluaXRlZCA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgIGlmICghdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKHBhZ2luYXRpb25Db25maWcubWFpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XHJcbiAgICB9XHJcbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxyXG4gICAgdGhpcy5tYXhTaXplID1cclxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heFNpemUgOiB0aGlzLmNvbmZpZy5tYXhTaXplO1xyXG4gICAgdGhpcy5yb3RhdGUgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XHJcbiAgICB0aGlzLmJvdW5kYXJ5TGlua3MgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5ib3VuZGFyeUxpbmtzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5ib3VuZGFyeUxpbmtzO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5kaXJlY3Rpb25MaW5rc1xyXG4gICAgICAgIDogdGhpcy5jb25maWcuZGlyZWN0aW9uTGlua3M7XHJcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnBhZ2VCdG5DbGFzcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMucGFnZUJ0bkNsYXNzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XHJcblxyXG4gICAgLy8gYmFzZSBjbGFzc1xyXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5pdGVtc1BlclBhZ2UgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLml0ZW1zUGVyUGFnZVxyXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgICAvLyB0aGlzIGNsYXNzXHJcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucGFnZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8IHRoaXMuY29uZmlnW2Ake2tleX1UZXh0YF07XHJcbiAgfVxyXG5cclxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcclxuICB9XHJcblxyXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndyaXRlVmFsdWUocGFnZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXHJcbiAgcHJvdGVjdGVkIG1ha2VQYWdlKFxyXG4gICAgbnVtOiBudW1iZXIsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBhY3RpdmU6IGJvb2xlYW5cclxuICApOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcclxuICAgIHJldHVybiB7IHRleHQsIG51bWJlcjogbnVtLCBhY3RpdmUgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpOiBQYWdlc01vZGVsW10ge1xyXG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcclxuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xyXG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgY29uc3QgaXNNYXhTaXplZCA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XHJcblxyXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFNpemVcclxuICAgIGlmIChpc01heFNpemVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXHJcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcclxuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMTtcclxuXHJcbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXHJcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXHJcbiAgICAgICAgc3RhcnRQYWdlID1cclxuICAgICAgICAgIChNYXRoLmNlaWwoY3VycmVudFBhZ2UgLyB0aGlzLm1heFNpemUpIC0gMSkgKiB0aGlzLm1heFNpemUgKyAxO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgbGFzdCBwYWdlIGlmIGxpbWl0IGlzIGV4Y2VlZGVkXHJcbiAgICAgICAgZW5kUGFnZSA9IE1hdGgubWluKHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDEsIHRvdGFsUGFnZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXHJcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xyXG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0sIG51bS50b1N0cmluZygpLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcclxuICAgICAgcGFnZXMucHVzaChwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xyXG4gICAgaWYgKGlzTWF4U2l6ZWQgJiYgIXRoaXMucm90YXRlKSB7XHJcbiAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFBhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKGVuZFBhZ2UgKyAxLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgLy8gYmFzZSBjbGFzc1xyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVUb3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cclxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPCAxXHJcbiAgICAgICAgPyAxXHJcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG5cclxuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xyXG4gIH1cclxufVxyXG4iXX0=