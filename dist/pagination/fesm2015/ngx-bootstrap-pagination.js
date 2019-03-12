import { Injectable, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */
class PaginationConfig {
    constructor() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => PagerComponent),
    multi: true
};
class PagerComponent {
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
PagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\r\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\r\n  </li>\r\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\r\n  </li>\r\n</ul>\r\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
PagerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: PaginationConfig, },
    { type: ChangeDetectorRef, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
};
class PaginationComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PaginationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    }
}
PaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { PagerComponent, PaginationComponent, PaginationModule, PaginationConfig, PAGER_CONTROL_VALUE_ACCESSOR as ɵa, PAGINATION_CONTROL_VALUE_ACCESSOR as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IHNwbGl0XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuLyoqIFByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIGZvciBQYWdpbmF0aW9uIGFuZCBwYWdlciBjb21wb25lbnRzICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db25maWcge1xyXG4gIG1haW46IENvbmZpZ01vZGVsID0ge1xyXG4gICAgbWF4U2l6ZTogdm9pZCAwLFxyXG4gICAgaXRlbXNQZXJQYWdlOiAxMCxcclxuICAgIGJvdW5kYXJ5TGlua3M6IGZhbHNlLFxyXG4gICAgZGlyZWN0aW9uTGlua3M6IHRydWUsXHJcbiAgICBmaXJzdFRleHQ6ICdGaXJzdCcsXHJcbiAgICBwcmV2aW91c1RleHQ6ICdQcmV2aW91cycsXHJcbiAgICBuZXh0VGV4dDogJ05leHQnLFxyXG4gICAgbGFzdFRleHQ6ICdMYXN0JyxcclxuICAgIHBhZ2VCdG5DbGFzczogJycsXHJcbiAgICByb3RhdGU6IHRydWVcclxuICB9O1xyXG4gIHBhZ2VyOiBQYWdlck1vZGVsID0ge1xyXG4gICAgaXRlbXNQZXJQYWdlOiAxNSxcclxuICAgIHByZXZpb3VzVGV4dDogJ8OCwqsgUHJldmlvdXMnLFxyXG4gICAgbmV4dFRleHQ6ICdOZXh0IMOCwrsnLFxyXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcclxuICAgIGFsaWduOiB0cnVlXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUHJvdmlkZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXNNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQQUdFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBhZ2VyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQQUdFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICBjb25maWc6IENvbmZpZ01vZGVsO1xyXG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cclxuICBASW5wdXQoKSBhbGlnbjogYm9vbGVhbjtcclxuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXHJcbiAgQElucHV0KCkgbWF4U2l6ZTogbnVtYmVyO1xyXG4gIC8qKiBpZiBmYWxzZSBmaXJzdCBhbmQgbGFzdCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXHJcbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcclxuICAvKiogaWYgZmFsc2UgcHJldmlvdXMgYW5kIG5leHQgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xyXG4gIC8vIGxhYmVsc1xyXG4gIC8qKiBmaXJzdCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGZpcnN0VGV4dDogc3RyaW5nO1xyXG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nO1xyXG4gIC8qKiBuZXh0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcclxuICAvKiogbGFzdCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGxhc3RUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXHJcbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xyXG4gIC8vIGNzc1xyXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xyXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xyXG5cclxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXHJcbiAgQE91dHB1dCgpIG51bVBhZ2VzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIHBhZ2Ugd2FzIGNoYW5nZWQsICRldmVudDp7cGFnZSwgaXRlbXNQZXJQYWdlfSBlcXVhbHMgdG9cclxuICAgKiBvYmplY3Qgd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VDaGFuZ2VkRXZlbnQ+KCk7XHJcblxyXG4gIC8qKiBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS4gSWYgdmFsdWUgbGVzcyB0aGFuIDEgd2lsbCBkaXNwbGF5IGFsbCBpdGVtcyBvbiBvbmUgcGFnZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zUGVyUGFnZTtcclxuICB9XHJcblxyXG4gIHNldCBpdGVtc1BlclBhZ2UodjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pdGVtc1BlclBhZ2UgPSB2O1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvdGFsSXRlbXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl90b3RhbEl0ZW1zID0gdjtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl90b3RhbFBhZ2VzID0gdjtcclxuICAgIHRoaXMubnVtUGFnZXMuZW1pdCh2KTtcclxuICAgIGlmICh0aGlzLmluaXRlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XHJcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB2YWx1ZSB8fCAxO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgaWYgKF9wcmV2aW91cyA9PT0gdGhpcy5fcGFnZSB8fCB0eXBlb2YgX3ByZXZpb3VzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcclxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIGNsYXNzTWFwOiBzdHJpbmc7XHJcbiAgcGFnZXM6IFBhZ2VzTW9kZWxbXTtcclxuXHJcbiAgcHJvdGVjdGVkIF9pdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3RvdGFsSXRlbXM6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3RvdGFsUGFnZXM6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIF9wYWdlID0gMTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xyXG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFnaW5hdGlvbkNvbmZpZy5tYWluLCBwYWdpbmF0aW9uQ29uZmlnLnBhZ2VyKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlT3B0aW9ucyhjb25maWc6IENvbmZpZ01vZGVsKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmNsYXNzTWFwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xyXG4gICAgfVxyXG4gICAgLy8gd2F0Y2ggZm9yIG1heFNpemVcclxuICAgIHRoaXMubWF4U2l6ZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcclxuICAgIHRoaXMucm90YXRlID1cclxuICAgICAgdHlwZW9mIHRoaXMucm90YXRlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucm90YXRlIDogdGhpcy5jb25maWcucm90YXRlO1xyXG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cclxuICAgICAgdHlwZW9mIHRoaXMuYm91bmRhcnlMaW5rcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMuYm91bmRhcnlMaW5rc1xyXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcclxuICAgIHRoaXMuZGlyZWN0aW9uTGlua3MgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5kaXJlY3Rpb25MaW5rcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcclxuICAgICAgICA6IHRoaXMuY29uZmlnLmRpcmVjdGlvbkxpbmtzO1xyXG4gICAgdGhpcy5wYWdlQnRuQ2xhc3MgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLnBhZ2VCdG5DbGFzc1xyXG4gICAgICAgIDogdGhpcy5jb25maWcucGFnZUJ0bkNsYXNzO1xyXG5cclxuICAgIC8vIGJhc2UgY2xhc3NcclxuICAgIHRoaXMuaXRlbXNQZXJQYWdlID1cclxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgICAgICA6IHRoaXMuY29uZmlnLml0ZW1zUGVyUGFnZTtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gICAgLy8gdGhpcyBjbGFzc1xyXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcclxuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcclxuICB9XHJcblxyXG4gIGdldFRleHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSlbYCR7a2V5fVRleHRgXSB8fCB0aGlzLmNvbmZpZ1tgJHtrZXl9VGV4dGBdO1xyXG4gIH1cclxuXHJcbiAgbm9QcmV2aW91cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XHJcbiAgfVxyXG5cclxuICBub05leHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldC5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53cml0ZVZhbHVlKHBhZ2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxyXG4gIHByb3RlY3RlZCBtYWtlUGFnZShudW06IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGJvb2xlYW4pOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcclxuICAgIHJldHVybiB7dGV4dCwgbnVtYmVyOiBudW0sIGFjdGl2ZX07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcclxuICAgIGNvbnN0IHBhZ2VzOiBQYWdlc01vZGVsW10gPSBbXTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXHJcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcclxuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm1heFNpemUgPCB0b3RhbFBhZ2VzO1xyXG5cclxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXHJcbiAgICBpZiAoaXNNYXhTaXplZCkge1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcclxuICAgICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xyXG4gICAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcih0aGlzLm1heFNpemUgLyAyKSwgMSk7XHJcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDE7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxyXG4gICAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhTaXplICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVmlzaWJsZSBwYWdlcyBhcmUgcGFnaW5hdGVkIHdpdGggbWF4U2l6ZVxyXG4gICAgICAgIHN0YXJ0UGFnZSA9XHJcbiAgICAgICAgICAoTWF0aC5jZWlsKGN1cnJlbnRQYWdlIC8gdGhpcy5tYXhTaXplKSAtIDEpICogdGhpcy5tYXhTaXplICsgMTtcclxuXHJcbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxyXG4gICAgICAgIGVuZFBhZ2UgPSBNYXRoLm1pbihzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxLCB0b3RhbFBhZ2VzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xyXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcclxuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLCBudW0udG9TdHJpbmcoKSwgbnVtID09PSBjdXJyZW50UGFnZSk7XHJcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGxpbmtzIHRvIG1vdmUgYmV0d2VlbiBwYWdlIHNldHNcclxuICAgIGlmIChpc01heFNpemVkICYmICF0aGlzLnJvdGF0ZSkge1xyXG4gICAgICBpZiAoc3RhcnRQYWdlID4gMSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGFnZVNldCA9IHRoaXMubWFrZVBhZ2Uoc3RhcnRQYWdlIC0gMSwgJy4uLicsIGZhbHNlKTtcclxuICAgICAgICBwYWdlcy51bnNoaWZ0KHByZXZpb3VzUGFnZVNldCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbmRQYWdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIGNvbnN0IG5leHRQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShlbmRQYWdlICsgMSwgJy4uLicsIGZhbHNlKTtcclxuICAgICAgICBwYWdlcy5wdXNoKG5leHRQYWdlU2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYWdlcztcclxuICB9XHJcblxyXG4gIC8vIGJhc2UgY2xhc3NcclxuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVG90YWxQYWdlcygpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9XHJcbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlIDwgMVxyXG4gICAgICAgID8gMVxyXG4gICAgICAgIDogTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFByb3ZpZGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlQ2hhbmdlZEV2ZW50IHtcclxuICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuICBwYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUGFnaW5hdGlvbkNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1BBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICBjb25maWc6IENvbmZpZ01vZGVsO1xyXG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cclxuICBASW5wdXQoKSBhbGlnbjogYm9vbGVhbjtcclxuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXHJcbiAgQElucHV0KCkgbWF4U2l6ZTogbnVtYmVyO1xyXG4gIC8qKiBpZiBmYWxzZSBmaXJzdCBhbmQgbGFzdCBidXR0b25zIHdpbGwgYmUgaGlkZGVuICovXHJcbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcclxuICAvKiogaWYgZmFsc2UgcHJldmlvdXMgYW5kIG5leHQgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xyXG4gIC8vIGxhYmVsc1xyXG4gIC8qKiBmaXJzdCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGZpcnN0VGV4dDogc3RyaW5nO1xyXG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nO1xyXG4gIC8qKiBuZXh0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcclxuICAvKiogbGFzdCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGxhc3RUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXHJcbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xyXG4gIC8vIGNzc1xyXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xyXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xyXG5cclxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXHJcbiAgQE91dHB1dCgpIG51bVBhZ2VzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIHBhZ2Ugd2FzIGNoYW5nZWQsICRldmVudDp7cGFnZSwgaXRlbXNQZXJQYWdlfSBlcXVhbHMgdG8gb2JqZWN0XHJcbiAgICogd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PigpO1xyXG5cclxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpdGVtc1BlclBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiBhbGwgcGFnZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJdGVtcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbEl0ZW1zKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbFBhZ2VzKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XHJcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBfcHJldmlvdXMgPSB0aGlzLl9wYWdlO1xyXG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXHJcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBjbGFzc01hcDogc3RyaW5nO1xyXG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XHJcblxyXG4gIHByb3RlY3RlZCBfaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIGluaXRlZCA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgIGlmICghdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKHBhZ2luYXRpb25Db25maWcubWFpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XHJcbiAgICB9XHJcbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxyXG4gICAgdGhpcy5tYXhTaXplID1cclxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heFNpemUgOiB0aGlzLmNvbmZpZy5tYXhTaXplO1xyXG4gICAgdGhpcy5yb3RhdGUgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XHJcbiAgICB0aGlzLmJvdW5kYXJ5TGlua3MgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5ib3VuZGFyeUxpbmtzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5ib3VuZGFyeUxpbmtzO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5kaXJlY3Rpb25MaW5rc1xyXG4gICAgICAgIDogdGhpcy5jb25maWcuZGlyZWN0aW9uTGlua3M7XHJcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnBhZ2VCdG5DbGFzcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMucGFnZUJ0bkNsYXNzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XHJcblxyXG4gICAgLy8gYmFzZSBjbGFzc1xyXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5pdGVtc1BlclBhZ2UgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLml0ZW1zUGVyUGFnZVxyXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgICAvLyB0aGlzIGNsYXNzXHJcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMucGFnZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8IHRoaXMuY29uZmlnW2Ake2tleX1UZXh0YF07XHJcbiAgfVxyXG5cclxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcclxuICB9XHJcblxyXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndyaXRlVmFsdWUocGFnZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBwYWdlIG9iamVjdCB1c2VkIGluIHRlbXBsYXRlXHJcbiAgcHJvdGVjdGVkIG1ha2VQYWdlKFxyXG4gICAgbnVtOiBudW1iZXIsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICBhY3RpdmU6IGJvb2xlYW5cclxuICApOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcclxuICAgIHJldHVybiB7IHRleHQsIG51bWJlcjogbnVtLCBhY3RpdmUgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRQYWdlcyhjdXJyZW50UGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIpOiBQYWdlc01vZGVsW10ge1xyXG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgIC8vIERlZmF1bHQgcGFnZSBsaW1pdHNcclxuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xyXG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgY29uc3QgaXNNYXhTaXplZCA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XHJcblxyXG4gICAgLy8gcmVjb21wdXRlIGlmIG1heFNpemVcclxuICAgIGlmIChpc01heFNpemVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xyXG4gICAgICAgIC8vIEN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdmlzaWJsZSBvbmVzXHJcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcclxuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMTtcclxuXHJcbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXHJcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXHJcbiAgICAgICAgc3RhcnRQYWdlID1cclxuICAgICAgICAgIChNYXRoLmNlaWwoY3VycmVudFBhZ2UgLyB0aGlzLm1heFNpemUpIC0gMSkgKiB0aGlzLm1heFNpemUgKyAxO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgbGFzdCBwYWdlIGlmIGxpbWl0IGlzIGV4Y2VlZGVkXHJcbiAgICAgICAgZW5kUGFnZSA9IE1hdGgubWluKHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDEsIHRvdGFsUGFnZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXHJcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xyXG4gICAgICBjb25zdCBwYWdlID0gdGhpcy5tYWtlUGFnZShudW0sIG51bS50b1N0cmluZygpLCBudW0gPT09IGN1cnJlbnRQYWdlKTtcclxuICAgICAgcGFnZXMucHVzaChwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xyXG4gICAgaWYgKGlzTWF4U2l6ZWQgJiYgIXRoaXMucm90YXRlKSB7XHJcbiAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFBhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKGVuZFBhZ2UgKyAxLCAnLi4uJywgZmFsc2UpO1xyXG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgLy8gYmFzZSBjbGFzc1xyXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVUb3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cclxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPCAxXHJcbiAgICAgICAgPyAxXHJcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xyXG5cclxuICAgIHJldHVybiBNYXRoLm1heCh0b3RhbFBhZ2VzIHx8IDAsIDEpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBQYWdlckNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQYWdlckNvbXBvbmVudCwgUGFnaW5hdGlvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BhZ2VyQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUGFnaW5hdGlvbk1vZHVsZSwgcHJvdmlkZXJzOiBbUGFnaW5hdGlvbkNvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7OztBQU1BOztvQkFDc0I7WUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFlBQVksRUFBRSxVQUFVO1lBQ3hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2I7cUJBQ21CO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1lBQzFCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1NBQ1o7Ozs7WUFwQkYsVUFBVTs7Ozs7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