/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class DraggableItemService {
    constructor() {
        this.onCapture = new Subject();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    dragStart(item) {
        this.draggableItem = item;
    }
    /**
     * @return {?}
     */
    getItem() {
        return this.draggableItem;
    }
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    captureItem(overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    }
    /**
     * @return {?}
     */
    onCaptureItem() {
        return this.onCapture;
    }
}
DraggableItemService.decorators = [
    { type: Injectable }
];
function DraggableItemService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DraggableItemService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DraggableItemService.ctorParameters;
    /** @type {?} */
    DraggableItemService.prototype.draggableItem;
    /** @type {?} */
    DraggableItemService.prototype.onCapture;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWl0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvc29ydGFibGUvIiwic291cmNlcyI6WyJkcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsTUFBTTs7eUJBR3dDLElBQUksT0FBTyxFQUFpQjs7Ozs7O0lBRXhFLFNBQVMsQ0FBQyxJQUFtQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztLQUMzQjs7OztJQUVELE9BQU87UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQXFCLEVBQUUsUUFBZ0I7UUFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekQsYUFBYTtnQkFDYixDQUFDLEVBQUUsUUFBUTthQUNaLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7SUFFRCxhQUFhO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7OztZQTlCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW0gfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUl0ZW1TZXJ2aWNlIHtcclxuICBwcml2YXRlIGRyYWdnYWJsZUl0ZW06IERyYWdnYWJsZUl0ZW07XHJcblxyXG4gIHByaXZhdGUgb25DYXB0dXJlOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+ID0gbmV3IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4oKTtcclxuXHJcbiAgZHJhZ1N0YXJ0KGl0ZW06IERyYWdnYWJsZUl0ZW0pOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IGl0ZW07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKCk6IERyYWdnYWJsZUl0ZW0ge1xyXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcclxuICB9XHJcblxyXG4gIGNhcHR1cmVJdGVtKG92ZXJab25lSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcik6IERyYWdnYWJsZUl0ZW0ge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ICE9PSBvdmVyWm9uZUluZGV4KSB7XHJcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5sYXN0Wm9uZUluZGV4ID0gdGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXg7XHJcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ID0gb3ZlclpvbmVJbmRleDtcclxuICAgICAgdGhpcy5vbkNhcHR1cmUubmV4dCh0aGlzLmRyYWdnYWJsZUl0ZW0pO1xyXG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRyYWdnYWJsZUl0ZW0sIHtcclxuICAgICAgICBvdmVyWm9uZUluZGV4LFxyXG4gICAgICAgIGk6IG5ld0luZGV4XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XHJcbiAgfVxyXG5cclxuICBvbkNhcHR1cmVJdGVtKCk6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub25DYXB0dXJlO1xyXG4gIH1cclxufVxyXG4iXX0=