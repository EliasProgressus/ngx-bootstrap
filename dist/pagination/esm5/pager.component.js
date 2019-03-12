/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
export var /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = /** @class */ (function () {
    function PagerComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new EventEmitter();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
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
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
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
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
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
    Object.defineProperty(PagerComponent.prototype, "page", {
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
    PagerComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
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
    PagerComponent.prototype.writeValue = /**
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
    PagerComponent.prototype.getText = /**
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
    PagerComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnChange = /**
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
    PagerComponent.prototype.registerOnTouched = /**
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
    PagerComponent.prototype.selectPage = /**
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
    PagerComponent.prototype.makePage = /**
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
    PagerComponent.prototype.getPages = /**
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
    PagerComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\">\r\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\r\n  </li>\r\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\r\n  </li>\r\n</ul>\r\n",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: PaginationConfig, },
        { type: ChangeDetectorRef, },
    ]; };
    PagerComponent.propDecorators = {
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
    return PagerComponent;
}());
export { PagerComponent };
function PagerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PagerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PagerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PagerComponent.propDecorators;
    /** @type {?} */
    PagerComponent.prototype.config;
    /**
     * if `true` aligns each link to the sides of pager
     * @type {?}
     */
    PagerComponent.prototype.align;
    /**
     * limit number for page links in pager
     * @type {?}
     */
    PagerComponent.prototype.maxSize;
    /**
     * if false first and last buttons will be hidden
     * @type {?}
     */
    PagerComponent.prototype.boundaryLinks;
    /**
     * if false previous and next buttons will be hidden
     * @type {?}
     */
    PagerComponent.prototype.directionLinks;
    /**
     * first button text
     * @type {?}
     */
    PagerComponent.prototype.firstText;
    /**
     * previous button text
     * @type {?}
     */
    PagerComponent.prototype.previousText;
    /**
     * next button text
     * @type {?}
     */
    PagerComponent.prototype.nextText;
    /**
     * last button text
     * @type {?}
     */
    PagerComponent.prototype.lastText;
    /**
     * if true current page will in the middle of pages list
     * @type {?}
     */
    PagerComponent.prototype.rotate;
    /**
     * add class to <code><li\></code>
     * @type {?}
     */
    PagerComponent.prototype.pageBtnClass;
    /**
     * if true pagination component will be disabled
     * @type {?}
     */
    PagerComponent.prototype.disabled;
    /**
     * fired when total pages count changes, $event:number equals to total pages count
     * @type {?}
     */
    PagerComponent.prototype.numPages;
    /**
     * fired when page was changed, $event:{page, itemsPerPage} equals to
     * object with current page index and number of items per page
     * @type {?}
     */
    PagerComponent.prototype.pageChanged;
    /** @type {?} */
    PagerComponent.prototype.onChange;
    /** @type {?} */
    PagerComponent.prototype.onTouched;
    /** @type {?} */
    PagerComponent.prototype.classMap;
    /** @type {?} */
    PagerComponent.prototype.pages;
    /** @type {?} */
    PagerComponent.prototype._itemsPerPage;
    /** @type {?} */
    PagerComponent.prototype._totalItems;
    /** @type {?} */
    PagerComponent.prototype._totalPages;
    /** @type {?} */
    PagerComponent.prototype.inited;
    /** @type {?} */
    PagerComponent.prototype._page;
    /** @type {?} */
    PagerComponent.prototype.elementRef;
    /** @type {?} */
    PagerComponent.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsicGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl2RCxNQUFNLENBQUMscUJBQU0sNEJBQTRCLEdBQWE7SUFDcEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBNEdBLHdCQUFvQixVQUFzQixFQUM5QixnQkFBa0MsRUFDMUI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZTs7Ozt3QkExRVEsSUFBSSxZQUFZLEVBQVU7Ozs7OzJCQUt2QixJQUFJLFlBQVksRUFBb0I7d0JBdUR2RSxRQUFRLENBQUMsU0FBUzt5QkFDakIsUUFBUSxDQUFDLFNBQVM7c0JBUVgsS0FBSztxQkFDTixDQUFDO1FBS2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQ2pFLENBQUM7U0FD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QUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckM7O2dCQXhRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLG1rQkFBcUM7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUMxQzs7OztnQkExQkMsVUFBVTtnQkFXSCxnQkFBZ0I7Z0JBYnZCLGlCQUFpQjs7OzBCQWdDaEIsS0FBSzs0QkFFTCxLQUFLO2tDQUVMLEtBQUs7bUNBRUwsS0FBSzs4QkFHTCxLQUFLO2lDQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFFTCxLQUFLOzJCQUVMLEtBQUs7aUNBR0wsS0FBSzs2QkFHTCxLQUFLOzZCQUdMLE1BQU07Z0NBSU4sTUFBTTtpQ0FJTixLQUFLOytCQVdMLEtBQUs7O3lCQTlFUjs7U0E4QmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQcm92aWRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFnZXJDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BBR0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIGNvbmZpZzogQ29uZmlnTW9kZWw7XHJcbiAgLyoqIGlmIGB0cnVlYCBhbGlnbnMgZWFjaCBsaW5rIHRvIHRoZSBzaWRlcyBvZiBwYWdlciAqL1xyXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xyXG4gIC8qKiBsaW1pdCBudW1iZXIgZm9yIHBhZ2UgbGlua3MgaW4gcGFnZXIgKi9cclxuICBASW5wdXQoKSBtYXhTaXplOiBudW1iZXI7XHJcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzOiBib29sZWFuO1xyXG4gIC8qKiBpZiBmYWxzZSBwcmV2aW91cyBhbmQgbmV4dCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXHJcbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XHJcbiAgLy8gbGFiZWxzXHJcbiAgLyoqIGZpcnN0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIHByZXZpb3VzIGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgcHJldmlvdXNUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBuZXh0VGV4dDogc3RyaW5nO1xyXG4gIC8qKiBsYXN0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcclxuICAvKiogaWYgdHJ1ZSBjdXJyZW50IHBhZ2Ugd2lsbCBpbiB0aGUgbWlkZGxlIG9mIHBhZ2VzIGxpc3QgKi9cclxuICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW47XHJcbiAgLy8gY3NzXHJcbiAgLyoqIGFkZCBjbGFzcyB0byA8Y29kZT48bGlcXD48L2NvZGU+ICovXHJcbiAgQElucHV0KCkgcGFnZUJ0bkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBpZiB0cnVlIHBhZ2luYXRpb24gY29tcG9uZW50IHdpbGwgYmUgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIGZpcmVkIHdoZW4gdG90YWwgcGFnZXMgY291bnQgY2hhbmdlcywgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gdG90YWwgcGFnZXMgY291bnQgKi9cclxuICBAT3V0cHV0KCkgbnVtUGFnZXM6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgLyoqIGZpcmVkIHdoZW4gcGFnZSB3YXMgY2hhbmdlZCwgJGV2ZW50OntwYWdlLCBpdGVtc1BlclBhZ2V9IGVxdWFscyB0b1xyXG4gICAqIG9iamVjdCB3aXRoIGN1cnJlbnQgcGFnZSBpbmRleCBhbmQgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcclxuXHJcbiAgLyoqIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLiBJZiB2YWx1ZSBsZXNzIHRoYW4gMSB3aWxsIGRpc3BsYXkgYWxsIGl0ZW1zIG9uIG9uZSBwYWdlICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXRlbXNQZXJQYWdlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXNQZXJQYWdlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGl0ZW1zUGVyUGFnZSh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2l0ZW1zUGVyUGFnZSA9IHY7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gYWxsIHBhZ2VzICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdG90YWxJdGVtcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSXRlbXM7XHJcbiAgfVxyXG5cclxuICBzZXQgdG90YWxJdGVtcyh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3RvdGFsSXRlbXMgPSB2O1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUGFnZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgdG90YWxQYWdlcyh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3RvdGFsUGFnZXMgPSB2O1xyXG4gICAgdGhpcy5udW1QYWdlcy5lbWl0KHYpO1xyXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGFnZSh0aGlzLnBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgX3ByZXZpb3VzID0gdGhpcy5fcGFnZTtcclxuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZSA+IHRoaXMudG90YWxQYWdlcyA/IHRoaXMudG90YWxQYWdlcyA6IHZhbHVlIHx8IDE7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICBpZiAoX3ByZXZpb3VzID09PSB0aGlzLl9wYWdlIHx8IHR5cGVvZiBfcHJldmlvdXMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxyXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgY2xhc3NNYXA6IHN0cmluZztcclxuICBwYWdlczogUGFnZXNNb2RlbFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgX2l0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfdG90YWxQYWdlczogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBpbml0ZWQgPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgX3BhZ2UgPSAxO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucyhcclxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYWdpbmF0aW9uQ29uZmlnLm1haW4sIHBhZ2luYXRpb25Db25maWcucGFnZXIpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XHJcbiAgICB9XHJcbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxyXG4gICAgdGhpcy5tYXhTaXplID1cclxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heFNpemUgOiB0aGlzLmNvbmZpZy5tYXhTaXplO1xyXG4gICAgdGhpcy5yb3RhdGUgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XHJcbiAgICB0aGlzLmJvdW5kYXJ5TGlua3MgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5ib3VuZGFyeUxpbmtzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5ib3VuZGFyeUxpbmtzO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5kaXJlY3Rpb25MaW5rc1xyXG4gICAgICAgIDogdGhpcy5jb25maWcuZGlyZWN0aW9uTGlua3M7XHJcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnBhZ2VCdG5DbGFzcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMucGFnZUJ0bkNsYXNzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XHJcblxyXG4gICAgLy8gYmFzZSBjbGFzc1xyXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5pdGVtc1BlclBhZ2UgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLml0ZW1zUGVyUGFnZVxyXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgICAvLyB0aGlzIGNsYXNzXHJcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucGFnZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8IHRoaXMuY29uZmlnW2Ake2tleX1UZXh0YF07XHJcbiAgfVxyXG5cclxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcclxuICB9XHJcblxyXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndyaXRlVmFsdWUocGFnZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXHJcbiAgcHJvdGVjdGVkIG1ha2VQYWdlKG51bTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogYm9vbGVhbik6IHsgbnVtYmVyOiBudW1iZXI7IHRleHQ6IHN0cmluZzsgYWN0aXZlOiBib29sZWFuIH0ge1xyXG4gICAgcmV0dXJuIHt0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpOiBQYWdlc01vZGVsW10ge1xyXG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcclxuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xyXG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgY29uc3QgaXNNYXhTaXplZCA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XHJcblxyXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFNpemVcclxuICAgIGlmIChpc01heFNpemVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXHJcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcclxuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMTtcclxuXHJcbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXHJcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXHJcbiAgICAgICAgc3RhcnRQYWdlID1cclxuICAgICAgICAgIChNYXRoLmNlaWwoY3VycmVudFBhZ2UgLyB0aGlzLm1heFNpemUpIC0gMSkgKiB0aGlzLm1heFNpemUgKyAxO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgbGFzdCBwYWdlIGlmIGxpbWl0IGlzIGV4Y2VlZGVkXHJcbiAgICAgICAgZW5kUGFnZSA9IE1hdGgubWluKHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDEsIHRvdGFsUGFnZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXHJcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xyXG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0sIG51bS50b1N0cmluZygpLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcclxuICAgICAgcGFnZXMucHVzaChwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xyXG4gICAgaWYgKGlzTWF4U2l6ZWQgJiYgIXRoaXMucm90YXRlKSB7XHJcbiAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFBhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKGVuZFBhZ2UgKyAxLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgLy8gYmFzZSBjbGFzc1xyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVUb3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cclxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPCAxXHJcbiAgICAgICAgPyAxXHJcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG5cclxuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xyXG4gIH1cclxufVxyXG4iXX0=