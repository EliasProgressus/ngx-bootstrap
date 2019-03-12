(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/pagination', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].pagination = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Provides default values for Pagination and pager components
     */
    var PaginationConfig = (function () {
        function PaginationConfig() {
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
        PaginationConfig.decorators = [
            { type: core.Injectable }
        ];
        return PaginationConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return PagerComponent; }),
        multi: true
    };
    var PagerComponent = (function () {
        function PagerComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /**
             * fired when total pages count changes, $event:number equals to total pages count
             */
            this.numPages = new core.EventEmitter();
            /**
             * fired when page was changed, $event:{page, itemsPerPage} equals to
             * object with current page index and number of items per page
             */
            this.pageChanged = new core.EventEmitter();
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
             */ function () {
                return this._itemsPerPage;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._totalItems;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "totalPages", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalPages;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._page;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                return ((this))[key + "Text"] || this.config[key + "Text"];
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
            { type: core.Component, args: [{
                        selector: 'pager',
                        template: "<ul class=\"pager\">\r\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\r\n  </li>\r\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\r\n  </li>\r\n</ul>\r\n",
                        providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        PagerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: PaginationConfig, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        PagerComponent.propDecorators = {
            "align": [{ type: core.Input },],
            "maxSize": [{ type: core.Input },],
            "boundaryLinks": [{ type: core.Input },],
            "directionLinks": [{ type: core.Input },],
            "firstText": [{ type: core.Input },],
            "previousText": [{ type: core.Input },],
            "nextText": [{ type: core.Input },],
            "lastText": [{ type: core.Input },],
            "rotate": [{ type: core.Input },],
            "pageBtnClass": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "numPages": [{ type: core.Output },],
            "pageChanged": [{ type: core.Output },],
            "itemsPerPage": [{ type: core.Input },],
            "totalItems": [{ type: core.Input },],
        };
        return PagerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return PaginationComponent; }),
        multi: true
    };
    var PaginationComponent = (function () {
        function PaginationComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /**
             * fired when total pages count changes, $event:number equals to total pages count
             */
            this.numPages = new core.EventEmitter();
            /**
             * fired when page was changed, $event:{page, itemsPerPage} equals to object
             * with current page index and number of items per page
             */
            this.pageChanged = new core.EventEmitter();
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
             */ function () {
                return this._itemsPerPage;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._totalItems;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "totalPages", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalPages;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                return this._page;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                return ((this))[key + "Text"] || this.config[key + "Text"];
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
            { type: core.Component, args: [{
                        selector: 'pagination',
                        template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\r\n  <li class=\"pagination-first page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noPrevious()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\r\n       [innerHTML]=\"getText('first')\"></a>\r\n  </li>\r\n\r\n  <li class=\"pagination-prev page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noPrevious()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\r\n       [innerHTML]=\"getText('previous')\"></a>\r\n  </li>\r\n\r\n  <li *ngFor=\"let pg of pages\"\r\n      [class.active]=\"pg.active\"\r\n      [class.disabled]=\"disabled&&!pg.active\"\r\n      class=\"pagination-page page-item\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\r\n       [innerHTML]=\"pg.text\"></a>\r\n  </li>\r\n\r\n  <li class=\"pagination-next page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noNext()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\r\n       [innerHTML]=\"getText('next')\"></a></li>\r\n\r\n  <li class=\"pagination-last page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noNext()||disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\r\n       [innerHTML]=\"getText('last')\"></a></li>\r\n</ul>\r\n",
                        providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        PaginationComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: PaginationConfig, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        PaginationComponent.propDecorators = {
            "align": [{ type: core.Input },],
            "maxSize": [{ type: core.Input },],
            "boundaryLinks": [{ type: core.Input },],
            "directionLinks": [{ type: core.Input },],
            "firstText": [{ type: core.Input },],
            "previousText": [{ type: core.Input },],
            "nextText": [{ type: core.Input },],
            "lastText": [{ type: core.Input },],
            "rotate": [{ type: core.Input },],
            "pageBtnClass": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "numPages": [{ type: core.Output },],
            "pageChanged": [{ type: core.Output },],
            "itemsPerPage": [{ type: core.Input },],
            "totalItems": [{ type: core.Input },],
        };
        return PaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PaginationModule = (function () {
        function PaginationModule() {
        }
        /**
         * @return {?}
         */
        PaginationModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: PaginationModule, providers: [PaginationConfig] };
            };
        PaginationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PagerComponent, PaginationComponent],
                        exports: [PagerComponent, PaginationComponent]
                    },] }
        ];
        return PaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.PagerComponent = PagerComponent;
    exports.PaginationComponent = PaginationComponent;
    exports.PaginationModule = PaginationModule;
    exports.PaginationConfig = PaginationConfig;
    exports.ɵa = PAGER_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = PAGINATION_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBzcGxpdFxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXJNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbi8qKiBQcm92aWRlcyBkZWZhdWx0IHZhbHVlcyBmb3IgUGFnaW5hdGlvbiBhbmQgcGFnZXIgY29tcG9uZW50cyAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcclxuICBtYWluOiBDb25maWdNb2RlbCA9IHtcclxuICAgIG1heFNpemU6IHZvaWQgMCxcclxuICAgIGl0ZW1zUGVyUGFnZTogMTAsXHJcbiAgICBib3VuZGFyeUxpbmtzOiBmYWxzZSxcclxuICAgIGRpcmVjdGlvbkxpbmtzOiB0cnVlLFxyXG4gICAgZmlyc3RUZXh0OiAnRmlyc3QnLFxyXG4gICAgcHJldmlvdXNUZXh0OiAnUHJldmlvdXMnLFxyXG4gICAgbmV4dFRleHQ6ICdOZXh0JyxcclxuICAgIGxhc3RUZXh0OiAnTGFzdCcsXHJcbiAgICBwYWdlQnRuQ2xhc3M6ICcnLFxyXG4gICAgcm90YXRlOiB0cnVlXHJcbiAgfTtcclxuICBwYWdlcjogUGFnZXJNb2RlbCA9IHtcclxuICAgIGl0ZW1zUGVyUGFnZTogMTUsXHJcbiAgICBwcmV2aW91c1RleHQ6ICfDgsKrIFByZXZpb3VzJyxcclxuICAgIG5leHRUZXh0OiAnTmV4dCDDgsK7JyxcclxuICAgIHBhZ2VCdG5DbGFzczogJycsXHJcbiAgICBhbGlnbjogdHJ1ZVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFByb3ZpZGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBhZ2VDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIFBhZ2VzTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgUEFHRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbUEFHRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgY29uZmlnOiBDb25maWdNb2RlbDtcclxuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXHJcbiAgQElucHV0KCkgYWxpZ246IGJvb2xlYW47XHJcbiAgLyoqIGxpbWl0IG51bWJlciBmb3IgcGFnZSBsaW5rcyBpbiBwYWdlciAqL1xyXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcclxuICAvKiogaWYgZmFsc2UgZmlyc3QgYW5kIGxhc3QgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xyXG4gIEBJbnB1dCgpIGJvdW5kYXJ5TGlua3M6IGJvb2xlYW47XHJcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbjtcclxuICAvLyBsYWJlbHNcclxuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBmaXJzdFRleHQ6IHN0cmluZztcclxuICAvKiogcHJldmlvdXMgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcclxuICAvKiogbmV4dCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIG5leHRUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBsYXN0VGV4dDogc3RyaW5nO1xyXG4gIC8qKiBpZiB0cnVlIGN1cnJlbnQgcGFnZSB3aWxsIGluIHRoZSBtaWRkbGUgb2YgcGFnZXMgbGlzdCAqL1xyXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcclxuICAvLyBjc3NcclxuICAvKiogYWRkIGNsYXNzIHRvIDxjb2RlPjxsaVxcPjwvY29kZT4gKi9cclxuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgLyoqIGlmIHRydWUgcGFnaW5hdGlvbiBjb21wb25lbnQgd2lsbCBiZSBkaXNhYmxlZCAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKiogZmlyZWQgd2hlbiB0b3RhbCBwYWdlcyBjb3VudCBjaGFuZ2VzLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byB0b3RhbCBwYWdlcyBjb3VudCAqL1xyXG4gIEBPdXRwdXQoKSBudW1QYWdlczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICAvKiogZmlyZWQgd2hlbiBwYWdlIHdhcyBjaGFuZ2VkLCAkZXZlbnQ6e3BhZ2UsIGl0ZW1zUGVyUGFnZX0gZXF1YWxzIHRvXHJcbiAgICogb2JqZWN0IHdpdGggY3VycmVudCBwYWdlIGluZGV4IGFuZCBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFBhZ2VDaGFuZ2VkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PigpO1xyXG5cclxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpdGVtc1BlclBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiBhbGwgcGFnZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJdGVtcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbEl0ZW1zKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICB9XHJcblxyXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbFBhZ2VzKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XHJcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBfcHJldmlvdXMgPSB0aGlzLl9wYWdlO1xyXG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXHJcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBjbGFzc01hcDogc3RyaW5nO1xyXG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XHJcblxyXG4gIHByb3RlY3RlZCBfaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIGluaXRlZCA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgIGlmICghdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhZ2luYXRpb25Db25maWcubWFpbiwgcGFnaW5hdGlvbkNvbmZpZy5wYWdlcilcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZU9wdGlvbnMoY29uZmlnOiBDb25maWdNb2RlbCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5jbGFzc01hcCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcclxuICAgIH1cclxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXHJcbiAgICB0aGlzLm1heFNpemUgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4U2l6ZSA6IHRoaXMuY29uZmlnLm1heFNpemU7XHJcbiAgICB0aGlzLnJvdGF0ZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnJvdGF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnJvdGF0ZSA6IHRoaXMuY29uZmlnLnJvdGF0ZTtcclxuICAgIHRoaXMuYm91bmRhcnlMaW5rcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmJvdW5kYXJ5TGlua3NcclxuICAgICAgICA6IHRoaXMuY29uZmlnLmJvdW5kYXJ5TGlua3M7XHJcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cclxuICAgICAgdHlwZW9mIHRoaXMuZGlyZWN0aW9uTGlua3MgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLmRpcmVjdGlvbkxpbmtzXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcclxuICAgIHRoaXMucGFnZUJ0bkNsYXNzID1cclxuICAgICAgdHlwZW9mIHRoaXMucGFnZUJ0bkNsYXNzICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcclxuICAgICAgICA6IHRoaXMuY29uZmlnLnBhZ2VCdG5DbGFzcztcclxuXHJcbiAgICAvLyBiYXNlIGNsYXNzXHJcbiAgICB0aGlzLml0ZW1zUGVyUGFnZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLml0ZW1zUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXHJcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5pdGVtc1BlclBhZ2U7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICAgIC8vIHRoaXMgY2xhc3NcclxuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XHJcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcclxuICB9XHJcblxyXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xyXG4gIH1cclxuXHJcbiAgbm9OZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNlbGVjdFBhZ2UocGFnZTogbnVtYmVyLCBldmVudD86IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB0YXJnZXQuYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcclxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UobnVtOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XHJcbiAgICByZXR1cm4ge3RleHQsIG51bWJlcjogbnVtLCBhY3RpdmV9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IFBhZ2VzTW9kZWxbXSB7XHJcbiAgICBjb25zdCBwYWdlczogUGFnZXNNb2RlbFtdID0gW107XHJcblxyXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xyXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XHJcbiAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICBjb25zdCBpc01heFNpemVkID1cclxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5tYXhTaXplIDwgdG90YWxQYWdlcztcclxuXHJcbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4U2l6ZVxyXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcclxuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XHJcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcclxuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xyXG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcclxuICAgICAgICBzdGFydFBhZ2UgPVxyXG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBsYXN0IHBhZ2UgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcclxuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xyXG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXHJcbiAgICBpZiAoaXNNYXhTaXplZCAmJiAhdGhpcy5yb3RhdGUpIHtcclxuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMudW5zaGlmdChwcmV2aW91c1BhZ2VTZXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZW5kUGFnZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFnZXM7XHJcbiAgfVxyXG5cclxuICAvLyBiYXNlIGNsYXNzXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxyXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA8IDFcclxuICAgICAgICA/IDFcclxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQcm92aWRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXNNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUNoYW5nZWRFdmVudCB7XHJcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBhZ2luYXRpb25Db21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2luYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtQQUdJTkFUSU9OX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgY29uZmlnOiBDb25maWdNb2RlbDtcclxuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXHJcbiAgQElucHV0KCkgYWxpZ246IGJvb2xlYW47XHJcbiAgLyoqIGxpbWl0IG51bWJlciBmb3IgcGFnZSBsaW5rcyBpbiBwYWdlciAqL1xyXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcclxuICAvKiogaWYgZmFsc2UgZmlyc3QgYW5kIGxhc3QgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xyXG4gIEBJbnB1dCgpIGJvdW5kYXJ5TGlua3M6IGJvb2xlYW47XHJcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbjtcclxuICAvLyBsYWJlbHNcclxuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBmaXJzdFRleHQ6IHN0cmluZztcclxuICAvKiogcHJldmlvdXMgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcclxuICAvKiogbmV4dCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIG5leHRUZXh0OiBzdHJpbmc7XHJcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBsYXN0VGV4dDogc3RyaW5nO1xyXG4gIC8qKiBpZiB0cnVlIGN1cnJlbnQgcGFnZSB3aWxsIGluIHRoZSBtaWRkbGUgb2YgcGFnZXMgbGlzdCAqL1xyXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcclxuICAvLyBjc3NcclxuICAvKiogYWRkIGNsYXNzIHRvIDxjb2RlPjxsaVxcPjwvY29kZT4gKi9cclxuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgLyoqIGlmIHRydWUgcGFnaW5hdGlvbiBjb21wb25lbnQgd2lsbCBiZSBkaXNhYmxlZCAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKiogZmlyZWQgd2hlbiB0b3RhbCBwYWdlcyBjb3VudCBjaGFuZ2VzLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byB0b3RhbCBwYWdlcyBjb3VudCAqL1xyXG4gIEBPdXRwdXQoKSBudW1QYWdlczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICAvKiogZmlyZWQgd2hlbiBwYWdlIHdhcyBjaGFuZ2VkLCAkZXZlbnQ6e3BhZ2UsIGl0ZW1zUGVyUGFnZX0gZXF1YWxzIHRvIG9iamVjdFxyXG4gICAqIHdpdGggY3VycmVudCBwYWdlIGluZGV4IGFuZCBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcclxuXHJcbiAgLyoqIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlLiBJZiB2YWx1ZSBsZXNzIHRoYW4gMSB3aWxsIGRpc3BsYXkgYWxsIGl0ZW1zIG9uIG9uZSBwYWdlICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXRlbXNQZXJQYWdlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXNQZXJQYWdlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGl0ZW1zUGVyUGFnZSh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2l0ZW1zUGVyUGFnZSA9IHY7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKiB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gYWxsIHBhZ2VzICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdG90YWxJdGVtcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSXRlbXM7XHJcbiAgfVxyXG5cclxuICBzZXQgdG90YWxJdGVtcyh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3RvdGFsSXRlbXMgPSB2O1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUGFnZXM7XHJcbiAgfVxyXG5cclxuICBzZXQgdG90YWxQYWdlcyh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3RvdGFsUGFnZXMgPSB2O1xyXG4gICAgdGhpcy5udW1QYWdlcy5lbWl0KHYpO1xyXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGFnZSh0aGlzLnBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgY29uc3QgX3ByZXZpb3VzID0gdGhpcy5fcGFnZTtcclxuICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZSA+IHRoaXMudG90YWxQYWdlcyA/IHRoaXMudG90YWxQYWdlcyA6IHZhbHVlIHx8IDE7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICBpZiAoX3ByZXZpb3VzID09PSB0aGlzLl9wYWdlIHx8IHR5cGVvZiBfcHJldmlvdXMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxyXG4gICAgICBpdGVtc1BlclBhZ2U6IHRoaXMuaXRlbXNQZXJQYWdlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgY2xhc3NNYXA6IHN0cmluZztcclxuICBwYWdlczogUGFnZXNNb2RlbFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgX2l0ZW1zUGVyUGFnZTogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfdG90YWxQYWdlczogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBpbml0ZWQgPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgX3BhZ2UgPSAxO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHBhZ2luYXRpb25Db25maWc6IFBhZ2luYXRpb25Db25maWcsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnRSZWY7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucyhwYWdpbmF0aW9uQ29uZmlnLm1haW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlT3B0aW9ucyhjb25maWc6IENvbmZpZ01vZGVsKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmNsYXNzTWFwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xyXG4gICAgfVxyXG4gICAgLy8gd2F0Y2ggZm9yIG1heFNpemVcclxuICAgIHRoaXMubWF4U2l6ZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcclxuICAgIHRoaXMucm90YXRlID1cclxuICAgICAgdHlwZW9mIHRoaXMucm90YXRlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucm90YXRlIDogdGhpcy5jb25maWcucm90YXRlO1xyXG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cclxuICAgICAgdHlwZW9mIHRoaXMuYm91bmRhcnlMaW5rcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMuYm91bmRhcnlMaW5rc1xyXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcclxuICAgIHRoaXMuZGlyZWN0aW9uTGlua3MgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5kaXJlY3Rpb25MaW5rcyAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcclxuICAgICAgICA6IHRoaXMuY29uZmlnLmRpcmVjdGlvbkxpbmtzO1xyXG4gICAgdGhpcy5wYWdlQnRuQ2xhc3MgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyB0aGlzLnBhZ2VCdG5DbGFzc1xyXG4gICAgICAgIDogdGhpcy5jb25maWcucGFnZUJ0bkNsYXNzO1xyXG5cclxuICAgIC8vIGJhc2UgY2xhc3NcclxuICAgIHRoaXMuaXRlbXNQZXJQYWdlID1cclxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgICAgICA6IHRoaXMuY29uZmlnLml0ZW1zUGVyUGFnZTtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gICAgLy8gdGhpcyBjbGFzc1xyXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcclxuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcclxuICB9XHJcblxyXG4gIGdldFRleHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgcmV0dXJuICh0aGlzIGFzIGFueSlbYCR7a2V5fVRleHRgXSB8fCB0aGlzLmNvbmZpZ1tgJHtrZXl9VGV4dGBdO1xyXG4gIH1cclxuXHJcbiAgbm9QcmV2aW91cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IDE7XHJcbiAgfVxyXG5cclxuICBub05leHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldC5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53cml0ZVZhbHVlKHBhZ2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxyXG4gIHByb3RlY3RlZCBtYWtlUGFnZShcclxuICAgIG51bTogbnVtYmVyLFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgYWN0aXZlOiBib29sZWFuXHJcbiAgKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XHJcbiAgICByZXR1cm4geyB0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcclxuICAgIGNvbnN0IHBhZ2VzOiBQYWdlc01vZGVsW10gPSBbXTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXHJcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcclxuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm1heFNpemUgPCB0b3RhbFBhZ2VzO1xyXG5cclxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXHJcbiAgICBpZiAoaXNNYXhTaXplZCkge1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcclxuICAgICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xyXG4gICAgICAgIHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTWF0aC5mbG9vcih0aGlzLm1heFNpemUgLyAyKSwgMSk7XHJcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDE7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBpZiBsaW1pdCBpcyBleGNlZWRlZFxyXG4gICAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gdGhpcy5tYXhTaXplICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVmlzaWJsZSBwYWdlcyBhcmUgcGFnaW5hdGVkIHdpdGggbWF4U2l6ZVxyXG4gICAgICAgIHN0YXJ0UGFnZSA9XHJcbiAgICAgICAgICAoTWF0aC5jZWlsKGN1cnJlbnRQYWdlIC8gdGhpcy5tYXhTaXplKSAtIDEpICogdGhpcy5tYXhTaXplICsgMTtcclxuXHJcbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxyXG4gICAgICAgIGVuZFBhZ2UgPSBNYXRoLm1pbihzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxLCB0b3RhbFBhZ2VzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBwYWdlIG51bWJlciBsaW5rc1xyXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcclxuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLCBudW0udG9TdHJpbmcoKSwgbnVtID09PSBjdXJyZW50UGFnZSk7XHJcbiAgICAgIHBhZ2VzLnB1c2gocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGxpbmtzIHRvIG1vdmUgYmV0d2VlbiBwYWdlIHNldHNcclxuICAgIGlmIChpc01heFNpemVkICYmICF0aGlzLnJvdGF0ZSkge1xyXG4gICAgICBpZiAoc3RhcnRQYWdlID4gMSkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzUGFnZVNldCA9IHRoaXMubWFrZVBhZ2Uoc3RhcnRQYWdlIC0gMSwgJy4uLicsIGZhbHNlKTtcclxuICAgICAgICBwYWdlcy51bnNoaWZ0KHByZXZpb3VzUGFnZVNldCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbmRQYWdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIGNvbnN0IG5leHRQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShlbmRQYWdlICsgMSwgJy4uLicsIGZhbHNlKTtcclxuICAgICAgICBwYWdlcy5wdXNoKG5leHRQYWdlU2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYWdlcztcclxuICB9XHJcblxyXG4gIC8vIGJhc2UgY2xhc3NcclxuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVG90YWxQYWdlcygpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9XHJcbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlIDwgMVxyXG4gICAgICAgID8gMVxyXG4gICAgICAgIDogTWF0aC5jZWlsKHRoaXMudG90YWxJdGVtcyAvIHRoaXMuaXRlbXNQZXJQYWdlKTtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgUGFnZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQYWdlckNvbXBvbmVudCwgUGFnaW5hdGlvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFBhZ2luYXRpb25Nb2R1bGUsIHByb3ZpZGVyczogW1BhZ2luYXRpb25Db25maWddIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7Ozt3QkFPc0I7Z0JBQ2xCLE9BQU8sRUFBRSxLQUFLLENBQUM7Z0JBQ2YsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFlBQVksRUFBRSxVQUFVO2dCQUN4QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFlBQVksRUFBRSxFQUFFO2dC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