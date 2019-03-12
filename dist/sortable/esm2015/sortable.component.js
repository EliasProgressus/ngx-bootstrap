/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DraggableItemService } from './draggable-item.service';
/* tslint:enable */
export class SortableComponent {
    /**
     * @param {?} transfer
     */
    constructor(transfer) {
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
            .subscribe((item) => this.onDrop(item));
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._items = value;
        const /** @type {?} */ out = this.items.map((x) => x.initData);
        this.onChanged(out);
        this.onChange.emit(out);
    }
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    onItemDragstart(event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event,
            item,
            i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    }
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    onItemDragover(event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        const /** @type {?} */ dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        let /** @type {?} */ newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = [
                ...this.items.slice(0, i),
                dragItem.item,
                ...this.items.slice(i, dragItem.i),
                ...this.items.slice(dragItem.i + 1)
            ];
        }
        else {
            // this.draggedItem.i < i
            newArray = [
                ...this.items.slice(0, dragItem.i),
                ...this.items.slice(dragItem.i + 1, i + 1),
                dragItem.item,
                ...this.items.slice(i + 1)
            ];
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cancelEvent(event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDrop(item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((x, i) => i !== item.i);
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resetActiveItem(event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnChange(callback) {
        this.onChanged = callback;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map((x, i) => ({
                id: i,
                initData: x,
                value: this.fieldName ? x[this.fieldName] : x
            }));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    }
    /**
     * @return {?}
     */
    updatePlaceholderState() {
        this.showPlaceholder = !this._items.length;
    }
    /**
     * @param {?} isActive
     * @return {?}
     */
    getItemStyle(isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    initDragstartEvent(event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    }
}
SortableComponent.globalZoneIndex = 0;
SortableComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-sortable',
                exportAs: 'bs-sortable',
                template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>  
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SortableComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
SortableComponent.ctorParameters = () => [
    { type: DraggableItemService, },
];
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
function SortableComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SortableComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SortableComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SortableComponent.propDecorators;
    /** @type {?} */
    SortableComponent.globalZoneIndex;
    /**
     * field name if input array consists of objects
     * @type {?}
     */
    SortableComponent.prototype.fieldName;
    /**
     * class name for items wrapper
     * @type {?}
     */
    SortableComponent.prototype.wrapperClass;
    /**
     * style object for items wrapper
     * @type {?}
     */
    SortableComponent.prototype.wrapperStyle;
    /**
     * class name for item
     * @type {?}
     */
    SortableComponent.prototype.itemClass;
    /**
     * style object for item
     * @type {?}
     */
    SortableComponent.prototype.itemStyle;
    /**
     * class name for active item
     * @type {?}
     */
    SortableComponent.prototype.itemActiveClass;
    /**
     * style object for active item
     * @type {?}
     */
    SortableComponent.prototype.itemActiveStyle;
    /**
     * class name for placeholder
     * @type {?}
     */
    SortableComponent.prototype.placeholderClass;
    /**
     * style object for placeholder
     * @type {?}
     */
    SortableComponent.prototype.placeholderStyle;
    /**
     * placeholder item which will be shown if collection is empty
     * @type {?}
     */
    SortableComponent.prototype.placeholderItem;
    /**
     * used to specify a custom item template. Template variables: item and index;
     * @type {?}
     */
    SortableComponent.prototype.itemTemplate;
    /**
     * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
     *  Returns new items collection as a payload.
     * @type {?}
     */
    SortableComponent.prototype.onChange;
    /** @type {?} */
    SortableComponent.prototype.showPlaceholder;
    /** @type {?} */
    SortableComponent.prototype.activeItem;
    /** @type {?} */
    SortableComponent.prototype.onTouched;
    /** @type {?} */
    SortableComponent.prototype.onChanged;
    /** @type {?} */
    SortableComponent.prototype.transfer;
    /** @type {?} */
    SortableComponent.prototype.currentZoneIndex;
    /** @type {?} */
    SortableComponent.prototype._items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9zb3J0YWJsZS8iLCJzb3VyY2VzIjpbInNvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdoRTtBQTZDQSxNQUFNOzs7O0lBaUVKLFlBQVksUUFBOEI7Ozs7NEJBM0RsQixFQUFFOzs7OzRCQUd5QixFQUFFOzs7O3lCQUdoQyxFQUFFOzs7O3lCQUd5QixFQUFFOzs7OytCQUd2QixFQUFFOzs7OytCQUd5QixFQUFFOzs7O2dDQUc1QixFQUFFOzs7O2dDQUd5QixFQUFFOzs7OytCQUc5QixFQUFFOzs7Ozt3QkFVYSxJQUFJLFlBQVksRUFBUzsrQkFFakQsS0FBSzswQkFDVixDQUFDLENBQUM7O3lCQWNFLFFBQVEsQ0FBQyxTQUFTOzt5QkFFbEIsUUFBUSxDQUFDLFNBQVM7UUFPakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRO2FBQ1YsYUFBYSxFQUFFO2FBQ2YsU0FBUyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzFEOzs7O0lBMUJELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQXFCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHVCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekI7Ozs7Ozs7SUFtQkQsZUFBZSxDQUNiLEtBQWdCLEVBQ2hCLElBQWtCLEVBQ2xCLENBQVM7UUFFVCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3RCLEtBQUs7WUFDTCxJQUFJO1lBQ0osQ0FBQztZQUNELFlBQVksRUFBRSxDQUFDO1lBQ2YsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDcEMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDckMsQ0FBQyxDQUFDO0tBQ0o7Ozs7OztJQUVELGNBQWMsQ0FBQyxLQUFnQixFQUFFLENBQVM7UUFDeEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUM7U0FDUjtRQUNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2Qix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ2xCLENBQUM7O1FBR0YscUJBQUksUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUV6QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFFBQVEsR0FBRztnQkFDVCxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLFFBQVEsQ0FBQyxJQUFJO2dCQUNiLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEMsQ0FBQztTQUNIO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBRU4sUUFBUSxHQUFHO2dCQUNULEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUMsUUFBUSxDQUFDLElBQUk7Z0JBQ2IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7S0FDL0I7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWdCO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FB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S0FBSzswQkFHTCxLQUFLO2dDQUdMLEtBQUs7Z0NBR0wsS0FBSztpQ0FHTCxLQUFLO2lDQUdMLEtBQUs7Z0NBR0wsS0FBSzs2QkFJTCxLQUFLO3lCQU1MLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtc29ydGFibGUnLFxyXG4gIGV4cG9ydEFzOiAnYnMtc29ydGFibGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjxkaXZcclxuICAgIFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc1wiXHJcbiAgICBbbmdTdHlsZV09XCJ3cmFwcGVyU3R5bGVcIlxyXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcclxuICAgIChkcmFnb3Zlcik9XCJjYW5jZWxFdmVudCgkZXZlbnQpXCJcclxuICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAoZHJvcCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXHJcbiAgICAobW91c2VsZWF2ZSk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiPlxyXG4gIDxkaXZcclxuICAgICAgICAqbmdJZj1cInNob3dQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwicGxhY2Vob2xkZXJDbGFzc1wiXHJcbiAgICAgICAgW25nU3R5bGVdPVwicGxhY2Vob2xkZXJTdHlsZVwiXHJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgMClcIlxyXG4gICAgICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICA+e3twbGFjZWhvbGRlckl0ZW19fTwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaT1pbmRleDtcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIlsgaXRlbUNsYXNzLCBpID09PSBhY3RpdmVJdGVtID8gaXRlbUFjdGl2ZUNsYXNzIDogJycgXVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiZ2V0SXRlbVN0eWxlKGkgPT09IGFjdGl2ZUl0ZW0pXCJcclxuICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAoZHJhZ3N0YXJ0KT1cIm9uSXRlbURyYWdzdGFydCgkZXZlbnQsIGl0ZW0sIGkpXCJcclxuICAgICAgICAoZHJhZ2VuZCk9XCJyZXNldEFjdGl2ZUl0ZW0oJGV2ZW50KVwiXHJcbiAgICAgICAgKGRyYWdvdmVyKT1cIm9uSXRlbURyYWdvdmVyKCRldmVudCwgaSlcIlxyXG4gICAgICAgIChkcmFnZW50ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAgICAgYXJpYS1kcm9wZWZmZWN0PVwibW92ZVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1ncmFiYmVkXT1cImkgPT09IGFjdGl2ZUl0ZW1cIlxyXG4gICAgPjxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtVGVtcGxhdGUgfHwgZGVmSXRlbVRlbXBsYXRlXCJcclxuICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2l0ZW06aXRlbSwgaW5kZXg6IGl9XCI+PC9uZy10ZW1wbGF0ZT48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZkl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj57e2l0ZW0udmFsdWV9fTwvbmctdGVtcGxhdGU+ICBcclxuYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvcnRhYmxlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbi8qIHRzbGludDplbmFibGUgKi9cclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByaXZhdGUgc3RhdGljIGdsb2JhbFpvbmVJbmRleCA9IDA7XHJcbiAgLyoqIGZpZWxkIG5hbWUgaWYgaW5wdXQgYXJyYXkgY29uc2lzdHMgb2Ygb2JqZWN0cyAqL1xyXG4gIEBJbnB1dCgpIGZpZWxkTmFtZTogc3RyaW5nO1xyXG5cclxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbXMgd3JhcHBlciAqL1xyXG4gIEBJbnB1dCgpIHdyYXBwZXJDbGFzcyA9ICcnO1xyXG5cclxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtcyB3cmFwcGVyICovXHJcbiAgQElucHV0KCkgd3JhcHBlclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbUNsYXNzID0gJyc7XHJcblxyXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGl0ZW0gKi9cclxuICBASW5wdXQoKSBpdGVtU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGFjdGl2ZSBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbUFjdGl2ZUNsYXNzID0gJyc7XHJcblxyXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIGFjdGl2ZSBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbUFjdGl2ZVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBwbGFjZWhvbGRlciAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyQ2xhc3MgPSAnJztcclxuXHJcbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgcGxhY2Vob2xkZXIgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIC8qKiBwbGFjZWhvbGRlciBpdGVtIHdoaWNoIHdpbGwgYmUgc2hvd24gaWYgY29sbGVjdGlvbiBpcyBlbXB0eSAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVySXRlbSA9ICcnO1xyXG5cclxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIGl0ZW0gdGVtcGxhdGUuIFRlbXBsYXRlIHZhcmlhYmxlczogaXRlbSBhbmQgaW5kZXg7ICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qKiBmaXJlZCBvbiBhcnJheSBjaGFuZ2UgKHJlb3JkZXJpbmcsIGluc2VydCwgcmVtb3ZlKSwgc2FtZSBhcyA8Y29kZT5uZ01vZGVsQ2hhbmdlPC9jb2RlPi5cclxuICAgKiAgUmV0dXJucyBuZXcgaXRlbXMgY29sbGVjdGlvbiBhcyBhIHBheWxvYWQuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG5cclxuICBzaG93UGxhY2Vob2xkZXIgPSBmYWxzZTtcclxuICBhY3RpdmVJdGVtID0gLTE7XHJcblxyXG4gIGdldCBpdGVtcygpOiBTb3J0YWJsZUl0ZW1bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG5cclxuICBzZXQgaXRlbXModmFsdWU6IFNvcnRhYmxlSXRlbVtdKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xyXG4gICAgY29uc3Qgb3V0ID0gdGhpcy5pdGVtcy5tYXAoKHg6IFNvcnRhYmxlSXRlbSkgPT4geC5pbml0RGF0YSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlZChvdXQpO1xyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KG91dCk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgb25DaGFuZ2VkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIHByaXZhdGUgdHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlO1xyXG4gIHByaXZhdGUgY3VycmVudFpvbmVJbmRleDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2l0ZW1zOiBTb3J0YWJsZUl0ZW1bXTtcclxuXHJcbiAgY29uc3RydWN0b3IodHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyID0gdHJhbnNmZXI7XHJcbiAgICB0aGlzLmN1cnJlbnRab25lSW5kZXggPSBTb3J0YWJsZUNvbXBvbmVudC5nbG9iYWxab25lSW5kZXgrKztcclxuICAgIHRoaXMudHJhbnNmZXJcclxuICAgICAgLm9uQ2FwdHVyZUl0ZW0oKVxyXG4gICAgICAuc3Vic2NyaWJlKChpdGVtOiBEcmFnZ2FibGVJdGVtKSA9PiB0aGlzLm9uRHJvcChpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1EcmFnc3RhcnQoXHJcbiAgICBldmVudDogRHJhZ0V2ZW50LFxyXG4gICAgaXRlbTogU29ydGFibGVJdGVtLFxyXG4gICAgaTogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXREcmFnc3RhcnRFdmVudChldmVudCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy50cmFuc2Zlci5kcmFnU3RhcnQoe1xyXG4gICAgICBldmVudCxcclxuICAgICAgaXRlbSxcclxuICAgICAgaSxcclxuICAgICAgaW5pdGlhbEluZGV4OiBpLFxyXG4gICAgICBsYXN0Wm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXgsXHJcbiAgICAgIG92ZXJab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1EcmFnb3ZlcihldmVudDogRHJhZ0V2ZW50LCBpOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRyYWdJdGVtID0gdGhpcy50cmFuc2Zlci5jYXB0dXJlSXRlbShcclxuICAgICAgdGhpcy5jdXJyZW50Wm9uZUluZGV4LFxyXG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgbmV3QXJyYXkgPSBbZHJhZ0l0ZW0uaXRlbV07XHJcbiAgICB9IGVsc2UgaWYgKGRyYWdJdGVtLmkgPiBpKSB7XHJcbiAgICAgIG5ld0FycmF5ID0gW1xyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgaSksXHJcbiAgICAgICAgZHJhZ0l0ZW0uaXRlbSxcclxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGksIGRyYWdJdGVtLmkpLFxyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEpXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLmRyYWdnZWRJdGVtLmkgPCBpXHJcbiAgICAgIG5ld0FycmF5ID0gW1xyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgZHJhZ0l0ZW0uaSksXHJcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShkcmFnSXRlbS5pICsgMSwgaSArIDEpLFxyXG4gICAgICAgIGRyYWdJdGVtLml0ZW0sXHJcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShpICsgMSlcclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXMgPSBuZXdBcnJheTtcclxuICAgIGRyYWdJdGVtLmkgPSBpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gaTtcclxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsRXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSB8fCAhZXZlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uRHJvcChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGl0ZW0gJiZcclxuICAgICAgaXRlbS5vdmVyWm9uZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRab25lSW5kZXggJiZcclxuICAgICAgaXRlbS5sYXN0Wm9uZUluZGV4ID09PSB0aGlzLmN1cnJlbnRab25lSW5kZXhcclxuICAgICkge1xyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKHg6IFNvcnRhYmxlSXRlbSwgaTogbnVtYmVyKSA9PiBpICE9PSBpdGVtLmlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSh1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRBY3RpdmVJdGVtKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gLTE7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgdGhpcy5pdGVtcyA9IHZhbHVlLm1hcCgoeDogYW55LCBpOiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgaW5pdERhdGE6IHgsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZmllbGROYW1lID8geFt0aGlzLmZpZWxkTmFtZV0gOiB4XHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd1BsYWNlaG9sZGVyID0gIXRoaXMuX2l0ZW1zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1TdHlsZShpc0FjdGl2ZTogYm9vbGVhbik6IHt9IHtcclxuICAgIHJldHVybiBpc0FjdGl2ZVxyXG4gICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaXRlbVN0eWxlLCB0aGlzLml0ZW1BY3RpdmVTdHlsZSlcclxuICAgICAgOiB0aGlzLml0ZW1TdHlsZTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHByaXZhdGUgaW5pdERyYWdzdGFydEV2ZW50KGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIGl0IGlzIG5lY2Vzc2FyeSBmb3IgbW96aWxsYVxyXG4gICAgLy8gZGF0YSB0eXBlIHNob3VsZCBiZSAnVGV4dCcgaW5zdGVhZCBvZiAndGV4dC9wbGFpbicgdG8ga2VlcCBjb21wYXRpYmlsaXR5XHJcbiAgICAvLyB3aXRoIElFXHJcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsICdwbGFjZWhvbGRlcicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFNvcnRhYmxlSXRlbSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgaW5pdERhdGE6IGFueTtcclxufVxyXG4iXX0=