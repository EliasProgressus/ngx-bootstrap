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
export var /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
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
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PaginationComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PaginationComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return (/** @type {?} */ (this))[key + "Text"] || this.config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PaginationComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var /** @type {?} */ target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PaginationComponent.prototype.getPages = /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        var /** @type {?} */ pages = [];
        // Default page limits
        var /** @type {?} */ startPage = 1;
        var /** @type {?} */ endPage = totalPages;
        var /** @type {?} */ isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
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
        for (var /** @type {?} */ num = startPage; num <= endPage; num++) {
            var /** @type {?} */ page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var /** @type {?} */ previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var /** @type {?} */ nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    /**
     * @return {?}
     */
    PaginationComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\r\n  <li class=\"pagination-first page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noPrevious()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\r\n       [innerHTML]=\"getText('first')\"></a>\r\n  </li>\r\n\r\n  <li class=\"pagination-prev page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noPrevious()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\r\n       [innerHTML]=\"getText('previous')\"></a>\r\n  </li>\r\n\r\n  <li *ngFor=\"let pg of pages\"\r\n      [class.active]=\"pg.active\"\r\n      [class.disabled]=\"disabled&&!pg.active\"\r\n      class=\"pagination-page page-item\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\r\n       [innerHTML]=\"pg.text\"></a>\r\n  </li>\r\n\r\n  <li class=\"pagination-next page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noNext()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\r\n       [innerHTML]=\"getText('next')\"></a></li>\r\n\r\n  <li class=\"pagination-last page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noNext()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\r\n       [innerHTML]=\"getText('last')\"></a></li>\r\n</ul>\r\n",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: PaginationConfig, },
        { type: ChangeDetectorRef, },
    ]; };
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
    return PaginationComponent;
}());
export { PaginationComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7O0FBU3ZELE1BQU0sQ0FBQyxxQkFBTSxpQ0FBaUMsR0FBYTtJQUN6RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBNEdBLDZCQUNVLFlBQ1IsZ0JBQWtDLEVBQzFCO1FBRkEsZUFBVSxHQUFWLFVBQVU7UUFFVixvQkFBZSxHQUFmLGVBQWU7Ozs7d0JBM0VrQixJQUFJLFlBQVksRUFBVTs7Ozs7MkJBS3ZELElBQUksWUFBWSxFQUFvQjt3QkF1RHZDLFFBQVEsQ0FBQyxTQUFTO3lCQUNqQixRQUFRLENBQUMsU0FBUztzQkFRWCxLQUFLO3FCQUNOLENBQUM7UUFPakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7S0FDRjswQkF4RUcsNkNBQVk7Ozs7OztZQUNkLE1BQU0sQ0FBQyxJQUFJLENB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LENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNyQzs7Z0JBMVFGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsMDVDQUEwQztvQkFDMUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOzs7O2dCQTlCQyxVQUFVO2dCQVVILGdCQUFnQjtnQkFadkIsaUJBQWlCOzs7MEJBb0NoQixLQUFLOzRCQUVMLEtBQUs7a0NBRUwsS0FBSzttQ0FFTCxLQUFLOzhCQUdMLEtBQUs7aUNBRUwsS0FBSzs2QkFFTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSztpQ0FHTCxLQUFLOzZCQUdMLEtBQUs7NkJBR0wsTUFBTTtnQ0FJTixNQUFNO2lDQUlOLEtBQUs7K0JBV0wsS0FBSzs7OEJBbEZSOztTQWtDYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUHJvdmlkZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIFBhZ2VzTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VDaGFuZ2VkRXZlbnQge1xyXG4gIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gIHBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdpbmF0aW9uQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdpbmF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbUEFHSU5BVElPTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIGNvbmZpZzogQ29uZmlnTW9kZWw7XHJcbiAgLyoqIGlmIGB0cnVlYCBhbGlnbnMgZWFjaCBsaW5rIHRvIHRoZSBzaWRlcyBvZiBwYWdlciAqL1xyXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xyXG4gIC8qKiBsaW1pdCBudW1iZXIgZm9yIHBhZ2UgbGlua3MgaW4gcGFnZXIgKi9cclxuICBASW5wdXQoKSBtYXhTaXplOiBudW1iZXI7XHJcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzOiBib29sZWFuO1xyXG4gIC8qKiBpZiBmYWxzZSBwcmV2aW91cyBhbmQgbmV4dCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXHJcbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XHJcbiAgLy8gbGFiZWxzXHJcbiAgLyoqIGZpcnN0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIHByZXZpb3VzIGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgcHJldmlvdXNUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBuZXh0VGV4dDogc3RyaW5nO1xyXG4gIC8qKiBsYXN0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcclxuICAvKiogaWYgdHJ1ZSBjdXJyZW50IHBhZ2Ugd2lsbCBpbiB0aGUgbWlkZGxlIG9mIHBhZ2VzIGxpc3QgKi9cclxuICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW47XHJcbiAgLy8gY3NzXHJcbiAgLyoqIGFkZCBjbGFzcyB0byA8Y29kZT48bGlcXD48L2NvZGU+ICovXHJcbiAgQElucHV0KCkgcGFnZUJ0bkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBpZiB0cnVlIHBhZ2luYXRpb24gY29tcG9uZW50IHdpbGwgYmUgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIGZpcmVkIHdoZW4gdG90YWwgcGFnZXMgY291bnQgY2hhbmdlcywgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gdG90YWwgcGFnZXMgY291bnQgKi9cclxuICBAT3V0cHV0KCkgbnVtUGFnZXM6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgLyoqIGZpcmVkIHdoZW4gcGFnZSB3YXMgY2hhbmdlZCwgJGV2ZW50OntwYWdlLCBpdGVtc1BlclBhZ2V9IGVxdWFscyB0byBvYmplY3RcclxuICAgKiB3aXRoIGN1cnJlbnQgcGFnZSBpbmRleCBhbmQgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcGFnZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VDaGFuZ2VkRXZlbnQ+KCk7XHJcblxyXG4gIC8qKiBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS4gSWYgdmFsdWUgbGVzcyB0aGFuIDEgd2lsbCBkaXNwbGF5IGFsbCBpdGVtcyBvbiBvbmUgcGFnZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zUGVyUGFnZTtcclxuICB9XHJcblxyXG4gIHNldCBpdGVtc1BlclBhZ2UodjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pdGVtc1BlclBhZ2UgPSB2O1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvdGFsSXRlbXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl90b3RhbEl0ZW1zID0gdjtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl90b3RhbFBhZ2VzID0gdjtcclxuICAgIHRoaXMubnVtUGFnZXMuZW1pdCh2KTtcclxuICAgIGlmICh0aGlzLmluaXRlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XHJcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB2YWx1ZSB8fCAxO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgaWYgKF9wcmV2aW91cyA9PT0gdGhpcy5fcGFnZSB8fCB0eXBlb2YgX3ByZXZpb3VzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcclxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIGNsYXNzTWFwOiBzdHJpbmc7XHJcbiAgcGFnZXM6IFBhZ2VzTW9kZWxbXTtcclxuXHJcbiAgcHJvdGVjdGVkIF9pdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3RvdGFsSXRlbXM6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3RvdGFsUGFnZXM6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIF9wYWdlID0gMTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMocGFnaW5hdGlvbkNvbmZpZy5tYWluKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZU9wdGlvbnMoY29uZmlnOiBDb25maWdNb2RlbCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5jbGFzc01hcCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcclxuICAgIH1cclxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXHJcbiAgICB0aGlzLm1heFNpemUgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4U2l6ZSA6IHRoaXMuY29uZmlnLm1heFNpemU7XHJcbiAgICB0aGlzLnJvdGF0ZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnJvdGF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnJvdGF0ZSA6IHRoaXMuY29uZmlnLnJvdGF0ZTtcclxuICAgIHRoaXMuYm91bmRhcnlMaW5rcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmJvdW5kYXJ5TGlua3NcclxuICAgICAgICA6IHRoaXMuY29uZmlnLmJvdW5kYXJ5TGlua3M7XHJcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cclxuICAgICAgdHlwZW9mIHRoaXMuZGlyZWN0aW9uTGlua3MgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmRpcmVjdGlvbkxpbmtzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcclxuICAgIHRoaXMucGFnZUJ0bkNsYXNzID1cclxuICAgICAgdHlwZW9mIHRoaXMucGFnZUJ0bkNsYXNzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcclxuICAgICAgICA6IHRoaXMuY29uZmlnLnBhZ2VCdG5DbGFzcztcclxuXHJcbiAgICAvLyBiYXNlIGNsYXNzXHJcbiAgICB0aGlzLml0ZW1zUGVyUGFnZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLml0ZW1zUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5pdGVtc1BlclBhZ2U7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICAgIC8vIHRoaXMgY2xhc3NcclxuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XHJcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcclxuICB9XHJcblxyXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xyXG4gIH1cclxuXHJcbiAgbm9OZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyLCBldmVudD86IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB0YXJnZXQuYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcclxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UoXHJcbiAgICBudW06IG51bWJlcixcclxuICAgIHRleHQ6IHN0cmluZyxcclxuICAgIGFjdGl2ZTogYm9vbGVhblxyXG4gICk6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH0ge1xyXG4gICAgcmV0dXJuIHsgdGV4dCwgbnVtYmVyOiBudW0sIGFjdGl2ZSB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IFBhZ2VzTW9kZWxbXSB7XHJcbiAgICBjb25zdCBwYWdlczogUGFnZXNNb2RlbFtdID0gW107XHJcblxyXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xyXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XHJcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICBjb25zdCBpc01heFNpemVkID1cclxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5tYXhTaXplIDwgdG90YWxQYWdlcztcclxuXHJcbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4U2l6ZVxyXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcclxuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XHJcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcclxuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xyXG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcclxuICAgICAgICBzdGFydFBhZ2UgPVxyXG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBsYXN0IHBhZ2UgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcclxuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xyXG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXHJcbiAgICBpZiAoaXNNYXhTaXplZCAmJiAhdGhpcy5yb3RhdGUpIHtcclxuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMudW5zaGlmdChwcmV2aW91c1BhZ2VTZXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZW5kUGFnZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFnZXM7XHJcbiAgfVxyXG5cclxuICAvLyBiYXNlIGNsYXNzXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxyXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA8IDFcclxuICAgICAgICA/IDFcclxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==