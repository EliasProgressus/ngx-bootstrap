import { Injectable, Component, Input, Output, EventEmitter, forwardRef, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { __spread } from 'tslib';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DraggableItemService = /** @class */ (function () {
    function DraggableItemService() {
        this.onCapture = new Subject();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DraggableItemService.prototype.dragStart = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.draggableItem = item;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.getItem = /**
     * @return {?}
     */
    function () {
        return this.draggableItem;
    };
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    DraggableItemService.prototype.captureItem = /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex: overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    };
    /**
     * @return {?}
     */
    DraggableItemService.prototype.onCaptureItem = /**
     * @return {?}
     */
    function () {
        return this.onCapture;
    };
    DraggableItemService.decorators = [
        { type: Injectable }
    ];
    return DraggableItemService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableComponent = /** @class */ (function () {
    function SortableComponent(transfer) {
        var _this = this;
        /**
         * class name for items wrapper
         */
        this.wrapperClass = '';
        /**
         * style object for items wrapper
         */
        this.wrapperStyle = {};
        /**
         * class name for item
         */
        this.itemClass = '';
        /**
         * style object for item
         */
        this.itemStyle = {};
        /**
         * class name for active item
         */
        this.itemActiveClass = '';
        /**
         * style object for active item
         */
        this.itemActiveStyle = {};
        /**
         * class name for placeholder
         */
        this.placeholderClass = '';
        /**
         * style object for placeholder
         */
        this.placeholderStyle = {};
        /**
         * placeholder item which will be shown if collection is empty
         */
        this.placeholderItem = '';
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        /* tslint:disable-next-line: no-any */
        this.onTouched = Function.prototype;
        /* tslint:disable-next-line: no-any */
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe(function (item) { return _this.onDrop(item); });
    }
    Object.defineProperty(SortableComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._items = value;
            var /** @type {?} */ out = this.items.map(function (x) { return x.initData; });
            this.onChanged(out);
            this.onChange.emit(out);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragstart = /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event: event,
            item: item,
            i: i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    };
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    SortableComponent.prototype.onItemDragover = /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    function (event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        var /** @type {?} */ dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        var /** @type {?} */ newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = __spread(this.items.slice(0, i), [
                dragItem.item
            ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
        }
        else {
            // this.draggedItem.i < i
            newArray = __spread(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                dragItem.item
            ], this.items.slice(i + 1));
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.cancelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SortableComponent.prototype.onDrop = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter(function (x, i) { return i !== item.i; });
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.resetActiveItem = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnChange = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onChanged = callback;
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    SortableComponent.prototype.registerOnTouched = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.onTouched = callback;
    };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    SortableComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map(function (x, i) {
                return ({
                    id: i,
                    initData: x,
                    value: _this.fieldName ? x[_this.fieldName] : x
                });
            });
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    };
    /**
     * @return {?}
     */
    SortableComponent.prototype.updatePlaceholderState = /**
     * @return {?}
     */
    function () {
        this.showPlaceholder = !this._items.length;
    };
    /**
     * @param {?} isActive
     * @return {?}
     */
    SortableComponent.prototype.getItemStyle = /**
     * @param {?} isActive
     * @return {?}
     */
    function (isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SortableComponent.prototype.initDragstartEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    };
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-sortable',
                    exportAs: 'bs-sortable',
                    template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SortableComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    SortableComponent.ctorParameters = function () { return [
        { type: DraggableItemService, },
    ]; };
    SortableComponent.propDecorators = {
        "fieldName": [{ type: Input },],
        "wrapperClass": [{ type: Input },],
        "wrapperStyle": [{ type: Input },],
        "itemClass": [{ type: Input },],
        "itemStyle": [{ type: Input },],
        "itemActiveClass": [{ type: Input },],
        "itemActiveStyle": [{ type: Input },],
        "placeholderClass": [{ type: Input },],
        "placeholderStyle": [{ type: Input },],
        "placeholderItem": [{ type: Input },],
        "itemTemplate": [{ type: Input },],
        "onChange": [{ type: Output },],
    };
    return SortableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SortableModule = /** @class */ (function () {
    function SortableModule() {
    }
    /**
     * @return {?}
     */
    SortableModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    };
    SortableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [SortableComponent],
                    imports: [CommonModule],
                    exports: [SortableComponent]
                },] }
    ];
    return SortableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { SortableModule, SortableComponent, DraggableItemService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1zb3J0YWJsZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3NvcnRhYmxlL3NvcnRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS9zb3J0YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW0gfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUl0ZW1TZXJ2aWNlIHtcclxuICBwcml2YXRlIGRyYWdnYWJsZUl0ZW06IERyYWdnYWJsZUl0ZW07XHJcblxyXG4gIHByaXZhdGUgb25DYXB0dXJlOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+ID0gbmV3IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4oKTtcclxuXHJcbiAgZHJhZ1N0YXJ0KGl0ZW06IERyYWdnYWJsZUl0ZW0pOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IGl0ZW07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKCk6IERyYWdnYWJsZUl0ZW0ge1xyXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcclxuICB9XHJcblxyXG4gIGNhcHR1cmVJdGVtKG92ZXJab25lSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcik6IERyYWdnYWJsZUl0ZW0ge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ICE9PSBvdmVyWm9uZUluZGV4KSB7XHJcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5sYXN0Wm9uZUluZGV4ID0gdGhpcy5kcmFnZ2FibGVJdGVtLm92ZXJab25lSW5kZXg7XHJcbiAgICAgIHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4ID0gb3ZlclpvbmVJbmRleDtcclxuICAgICAgdGhpcy5vbkNhcHR1cmUubmV4dCh0aGlzLmRyYWdnYWJsZUl0ZW0pO1xyXG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRyYWdnYWJsZUl0ZW0sIHtcclxuICAgICAgICBvdmVyWm9uZUluZGV4LFxyXG4gICAgICAgIGk6IG5ld0luZGV4XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XHJcbiAgfVxyXG5cclxuICBvbkNhcHR1cmVJdGVtKCk6IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub25DYXB0dXJlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtc29ydGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnYnMtc29ydGFibGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjxkaXZcclxuICAgIFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc1wiXHJcbiAgICBbbmdTdHlsZV09XCJ3cmFwcGVyU3R5bGVcIlxyXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcclxuICAgIChkcmFnb3Zlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcclxuICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAoZHJvcCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXHJcbiAgICAobW91c2VsZWF2ZSk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiPlxyXG4gIDxkaXZcclxuICAgICAgICAqbmdJZj1cInNob3dQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwicGxhY2Vob2xkZXJDbGFzc1wiXHJcbiAgICAgICAgW25nU3R5bGVdPVwicGxhY2Vob2xkZXJTdHlsZVwiXHJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgMClcIlxyXG4gICAgICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICA+e3twbGFjZWhvbGRlckl0ZW19fTwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleDtcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIlsgaXRlbUNsYXNzLCBpID09PSBhY3RpdmVJdGVtID8gaXRlbUFjdGl2ZUNsYXNzIDogJycgXVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiZ2V0SXRlbVN0eWxlKGkgPT09IGFjdGl2ZUl0ZW0pXCJcclxuICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAoZHJhZ3N0YXJ0KT1cIm9uSXRlbURyYWdzdGFydCgkZXZlbnQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAoZHJhZ2VuZCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXHJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgaSlcIlxyXG4gICAgICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAgICAgYXJpYS1kcm9wZWZmZWN0PVwibW92ZVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1ncmFiYmVkXT1cImkgPT09IGFjdGl2ZUl0ZW1cIlxyXG4gICAgPjxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtVGVtcGxhdGUgfHwgZGVmSXRlbVRlbXBsYXRlXCJcclxuICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06aXRlbSwgaW5kZXg6IGl9XCI+PC9uZy10ZW1wbGF0ZT48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZkl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj57e2l0ZW0udmFsdWV9fTwvbmctdGVtcGxhdGU+ICBcclxuYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvcnRhYmxlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbi8qIHRzbGludDplbmFibGUgKi9cclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByaXZhdGUgc3RhdGljIGdsb2JhbFpvbmVJbmRleCA9IDA7XHJcbiAgLyoqIGZpZWxkIG5hbWUgaWYgaW5wdXQgYXJyYXkgY29uc2lzdHMgb2Ygb2JqZWN0cyAqL1xyXG4gIEBJbnB1dCgpIGZpZWxkTmFtZTogc3RyaW5nO1xyXG5cclxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbXMgd3JhcHBlciAqL1xyXG4gIEBJbnB1dCgpIHdyYXBwZXJDbGFzcyA9ICcnO1xyXG5cclxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtcyB3cmFwcGVyICovXHJcbiAgQElucHV0KCkgd3JhcHBlclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbUNsYXNzID0gJyc7XHJcblxyXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGl0ZW0gKi9cclxuICBASW5wdXQoKSBpdGVtU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGFjdGl2ZSBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbUFjdGl2ZUNsYXNzID0gJyc7XHJcblxyXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGFjdGl2ZSBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbUFjdGl2ZVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBwbGFjZWhvbGRlciAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyQ2xhc3MgPSAnJztcclxuXHJcbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgcGxhY2Vob2xkZXIgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIC8qKiBwbGFjZWhvbGRlciBpdGVtIHdoaWNoIHdpbGwgYmUgc2hvd24gaWYgY29sbGVjdGlvbiBpcyBlbXB0eSAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVySXRlbSA9ICcnO1xyXG5cclxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuIFRlbXBsYXRlIHZhcmlhYmxlczogaXRlbSBhbmQgaW5kZXg7ICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qKiBmaXJlZCBvbiBhcnJheSBjaGFuZ2UgKHJlb3JkZXJpbmcsIGluc2VydCwgcmVtb3ZlKSwgc2FtZSBhcyA8Y29kZT5uZ01vZGVsQ2hhbmdlPC9jb2RlPi5cclxuICAgKiAgUmV0dXJucyBuZXcgaXRlbXMgY29sbGVjdGlvbiBhcyBhIHBheWxvYWQuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG5cclxuICBzaG93UGxhY2Vob2xkZXIgPSBmYWxzZTtcclxuICBhY3RpdmVJdGVtID0gLTE7XHJcblxyXG4gIGdldCBpdGVtcygpOiBTb3J0YWJsZUl0ZW1bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG5cclxuICBzZXQgaXRlbXModmFsdWU6IFNvcnRhYmxlSXRlbVtdKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xyXG4gICAgY29uc3Qgb3V0ID0gdGhpcy5pdGVtcy5tYXAoKHg6IFNvcnRhYmxlSXRlbSkgPT4geC5pbml0RGF0YSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlZChvdXQpO1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG91dCk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgb25DaGFuZ2VkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlO1xyXG4gIHByaXZhdGUgY3VycmVudFpvbmVJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2l0ZW1zOiBTb3J0YWJsZUl0ZW1bXTtcclxuXHJcbiAgY29uc3RydWN0b3IodHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyID0gdHJhbnNmZXI7XHJcbiAgICB0aGlzLmN1cnJlbnRab25lSW5kZXggPSBTb3J0YWJsZUNvbXBvbmVudC5nbG9iYWxab25lSW5kZXgrKztcclxuICAgIHRoaXMudHJhbnNmZXJcclxuICAgICAgLm9uQ2FwdHVyZUl0ZW0oKVxyXG4gICAgICAuc3Vic2NyaWJlKChpdGVtOiBEcmFnZ2FibGVJdGVtKSA9PiB0aGlzLm9uRHJvcChpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1EcmFnc3RhcnQoXHJcbiAgICBldmVudDogRHJhZ0V2ZW50LFxyXG4gICAgaXRlbTogU29ydGFibGVJdGVtLFxyXG4gICAgaTogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXREcmFnc3RhcnRFdmVudChldmVudCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy50cmFuc2Zlci5kcmFnU3RhcnQoe1xyXG4gICAgICBldmVudCxcclxuICAgICAgaXRlbSxcclxuICAgICAgaSxcclxuICAgICAgaW5pdGlhbEluZGV4OiBpLFxyXG4gICAgICBsYXN0Wm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXgsXHJcbiAgICAgIG92ZXJab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1EcmFnb3ZlcihldmVudDogRHJhZ0V2ZW50LCBpOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRyYWdJdGVtID0gdGhpcy50cmFuc2Zlci5jYXB0dXJlSXRlbShcclxuICAgICAgdGhpcy5jdXJyZW50Wm9uZUluZGV4LFxyXG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgbmV3QXJyYXkgPSBbZHJhZ0l0ZW0uaXRlbV07XHJcbiAgICB9IGVsc2UgaWYgKGRyYWdJdGVtLmkgPiBpKSB7XHJcbiAgICAgIG5ld0FycmF5ID0gW1xyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgaSksXHJcbiAgICAgICAgZHJhZ0l0ZW0uaXRlbSxcclxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGksIGRyYWdJdGVtLmkpLFxyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEpXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLmRyYWdnZWRJdGVtLmkgPCBpXHJcbiAgICAgIG5ld0FycmF5ID0gW1xyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgZHJhZ0l0ZW0uaSksXHJcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShkcmFnSXRlbS5pICsgMSwgaSArIDEpLFxyXG4gICAgICAgIGRyYWdJdGVtLml0ZW0sXHJcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShpICsgMSlcclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXMgPSBuZXdBcnJheTtcclxuICAgIGRyYWdJdGVtLmkgPSBpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gaTtcclxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsRXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSB8fCAhZXZlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uRHJvcChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGl0ZW0gJiZcclxuICAgICAgaXRlbS5vdmVyWm9uZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRab25lSW5kZXggJiZcclxuICAgICAgaXRlbS5sYXN0Wm9uZUluZGV4ID09PSB0aGlzLmN1cnJlbnRab25lSW5kZXhcclxuICAgICkge1xyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKHg6IFNvcnRhYmxlSXRlbSwgaTogbnVtYmVyKSA9PiBpICE9PSBpdGVtLmlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSh1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRBY3RpdmVJdGVtKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gLTE7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgdGhpcy5pdGVtcyA9IHZhbHVlLm1hcCgoeDogYW55LCBpOiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgaW5pdERhdGE6IHgsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZmllbGROYW1lID8geFt0aGlzLmZpZWxkTmFtZV0gOiB4XHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd1BsYWNlaG9sZGVyID0gIXRoaXMuX2l0ZW1zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1TdHlsZShpc0FjdGl2ZTogYm9vbGVhbik6IHt9IHtcclxuICAgIHJldHVybiBpc0FjdGl2ZVxyXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbVN0eWxlLCB0aGlzLml0ZW1BY3RpdmVTdHlsZSlcclxuICAgICAgOiB0aGlzLml0ZW1TdHlsZTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHByaXZhdGUgaW5pdERyYWdzdGFydEV2ZW50KGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIGl0IGlzIG5lY2Vzc2FyeSBmb3IgbW96aWxsYVxyXG4gICAgLy8gZGF0YSB0eXBlIHNob3VsZCBiZSAnVGV4dCcgaW5zdGVhZCBvZiAndGV4dC9wbGFpbicgdG8ga2VlcCBjb21wYXRpYmlsaXR5XHJcbiAgICAvLyB3aXRoIElFXHJcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsICdwbGFjZWhvbGRlcicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFNvcnRhYmxlSXRlbSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgaW5pdERhdGE6IGFueTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU29ydGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU29ydGFibGVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtTb3J0YWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTb3J0YWJsZU1vZHVsZSwgcHJvdmlkZXJzOiBbRHJhZ2dhYmxlSXRlbVNlcnZpY2VdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O3lCQVE4QyxJQUFJLE9BQU8sRUFBaUI7Ozs7OztJQUV4RSx3Q0FBUzs7OztJQUFULFVBQVUsSUFBbUI7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDM0I7Ozs7SUFFRCxzQ0FBTzs7O0lBQVA7UUFD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