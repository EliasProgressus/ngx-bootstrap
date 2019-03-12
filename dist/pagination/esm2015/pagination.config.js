/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Provides default values for Pagination and pager components
 */
export class PaginationConfig {
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
function PaginationConfig_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PaginationConfig.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PaginationConfig.ctorParameters;
    /** @type {?} */
    PaginationConfig.prototype.main;
    /** @type {?} */
    PaginationConfig.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJwYWdpbmF0aW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU0zQyxNQUFNOztvQkFDZ0I7WUFDbEIsT0FBTyxFQUFFLEtBQUssQ0FBQztZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFlBQVksRUFBRSxVQUFVO1lBQ3hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2I7cUJBQ21CO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFlBQVksRUFBRSxZQUFZO1lBQzFCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1NBQ1o7Ozs7WUFwQkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IHNwbGl0XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuLyoqIFByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIGZvciBQYWdpbmF0aW9uIGFuZCBwYWdlciBjb21wb25lbnRzICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db25maWcge1xyXG4gIG1haW46IENvbmZpZ01vZGVsID0ge1xyXG4gICAgbWF4U2l6ZTogdm9pZCAwLFxyXG4gICAgaXRlbXNQZXJQYWdlOiAxMCxcclxuICAgIGJvdW5kYXJ5TGlua3M6IGZhbHNlLFxyXG4gICAgZGlyZWN0aW9uTGlua3M6IHRydWUsXHJcbiAgICBmaXJzdFRleHQ6ICdGaXJzdCcsXHJcbiAgICBwcmV2aW91c1RleHQ6ICdQcmV2aW91cycsXHJcbiAgICBuZXh0VGV4dDogJ05leHQnLFxyXG4gICAgbGFzdFRleHQ6ICdMYXN0JyxcclxuICAgIHBhZ2VCdG5DbGFzczogJycsXHJcbiAgICByb3RhdGU6IHRydWVcclxuICB9O1xyXG4gIHBhZ2VyOiBQYWdlck1vZGVsID0ge1xyXG4gICAgaXRlbXNQZXJQYWdlOiAxNSxcclxuICAgIHByZXZpb3VzVGV4dDogJ8KrIFByZXZpb3VzJyxcclxuICAgIG5leHRUZXh0OiAnTmV4dCDCuycsXHJcbiAgICBwYWdlQnRuQ2xhc3M6ICcnLFxyXG4gICAgYWxpZ246IHRydWVcclxuICB9O1xyXG59XHJcbiJdfQ==