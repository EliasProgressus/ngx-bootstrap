(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/sortable', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].sortable = {}),global.ng.core,global.rxjs,global.ng.forms,global.ng.common));
}(this, (function (exports,core,rxjs,forms,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DraggableItemService = (function () {
        function DraggableItemService() {
            this.onCapture = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        return DraggableItemService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableComponent = (function () {
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
            this.onChange = new core.EventEmitter();
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
             */ function () {
                return this._items;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Component, args: [{
                        selector: 'bs-sortable',
                        exportAs: 'bs-sortable',
                        template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>  \n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return SortableComponent; }),
                                multi: true
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        SortableComponent.ctorParameters = function () {
            return [
                { type: DraggableItemService, },
            ];
        };
        SortableComponent.propDecorators = {
            "fieldName": [{ type: core.Input },],
            "wrapperClass": [{ type: core.Input },],
            "wrapperStyle": [{ type: core.Input },],
            "itemClass": [{ type: core.Input },],
            "itemStyle": [{ type: core.Input },],
            "itemActiveClass": [{ type: core.Input },],
            "itemActiveStyle": [{ type: core.Input },],
            "placeholderClass": [{ type: core.Input },],
            "placeholderStyle": [{ type: core.Input },],
            "placeholderItem": [{ type: core.Input },],
            "itemTemplate": [{ type: core.Input },],
            "onChange": [{ type: core.Output },],
        };
        return SortableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableModule = (function () {
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
            { type: core.NgModule, args: [{
                        declarations: [SortableComponent],
                        imports: [common.CommonModule],
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

    exports.SortableModule = SortableModule;
    exports.SortableComponent = SortableComponent;
    exports.DraggableItemService = DraggableItemService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1zb3J0YWJsZS51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3NvcnRhYmxlL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UudHMiLCJuZzovL25neC1ib290c3RyYXAvc29ydGFibGUvc29ydGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3NvcnRhYmxlL3NvcnRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVJdGVtU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBkcmFnZ2FibGVJdGVtOiBEcmFnZ2FibGVJdGVtO1xyXG5cclxuICBwcml2YXRlIG9uQ2FwdHVyZTogU3ViamVjdDxEcmFnZ2FibGVJdGVtPiA9IG5ldyBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+KCk7XHJcblxyXG4gIGRyYWdTdGFydChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyYWdnYWJsZUl0ZW0gPSBpdGVtO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbSgpOiBEcmFnZ2FibGVJdGVtIHtcclxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUl0ZW07XHJcbiAgfVxyXG5cclxuICBjYXB0dXJlSXRlbShvdmVyWm9uZUluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpOiBEcmFnZ2FibGVJdGVtIHtcclxuICAgIGlmICh0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gb3ZlclpvbmVJbmRleCkge1xyXG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ubGFzdFpvbmVJbmRleCA9IHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4O1xyXG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCA9IG92ZXJab25lSW5kZXg7XHJcbiAgICAgIHRoaXMub25DYXB0dXJlLm5leHQodGhpcy5kcmFnZ2FibGVJdGVtKTtcclxuICAgICAgdGhpcy5kcmFnZ2FibGVJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kcmFnZ2FibGVJdGVtLCB7XHJcbiAgICAgICAgb3ZlclpvbmVJbmRleCxcclxuICAgICAgICBpOiBuZXdJbmRleFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVJdGVtO1xyXG4gIH1cclxuXHJcbiAgb25DYXB0dXJlSXRlbSgpOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+IHtcclxuICAgIHJldHVybiB0aGlzLm9uQ2FwdHVyZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0nO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtU2VydmljZSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0uc2VydmljZSc7XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLXNvcnRhYmxlJyxcclxuICBleHBvcnRBczogJ2JzLXNvcnRhYmxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG48ZGl2XHJcbiAgICBbbmdDbGFzc109XCJ3cmFwcGVyQ2xhc3NcIlxyXG4gICAgW25nU3R5bGVdPVwid3JhcHBlclN0eWxlXCJcclxuICAgIFtuZ1N0eWxlXT1cIndyYXBwZXJTdHlsZVwiXHJcbiAgICAoZHJhZ292ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxyXG4gICAgKGRyb3ApPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIj5cclxuICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJzaG93UGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInBsYWNlaG9sZGVyU3R5bGVcIlxyXG4gICAgICAgIChkcmFnb3Zlcik9XCJvbkl0ZW1EcmFnb3ZlcigkZXZlbnQsIDApXCJcclxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxyXG4gICAgPnt7cGxhY2Vob2xkZXJJdGVtfX08L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCJcclxuICAgICAgICBbbmdDbGFzc109XCJbIGl0ZW1DbGFzcywgaSA9PT0gYWN0aXZlSXRlbSA/IGl0ZW1BY3RpdmVDbGFzcyA6ICcnIF1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImdldEl0ZW1TdHlsZShpID09PSBhY3RpdmVJdGVtKVwiXHJcbiAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgKGRyYWdzdGFydCk9XCJvbkl0ZW1EcmFnc3RhcnQoJGV2ZW50LCBpdGVtLCBpKVwiXHJcbiAgICAgICAgKGRyYWdlbmQpPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIlxyXG4gICAgICAgIChkcmFnb3Zlcik9XCJvbkl0ZW1EcmFnb3ZlcigkZXZlbnQsIGkpXCJcclxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxyXG4gICAgICAgIGFyaWEtZHJvcGVmZmVjdD1cIm1vdmVcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtZ3JhYmJlZF09XCJpID09PSBhY3RpdmVJdGVtXCJcclxuICAgID48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVRlbXBsYXRlIHx8IGRlZkl0ZW1UZW1wbGF0ZVwiXHJcbiAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntpdGVtOml0ZW0sIGluZGV4OiBpfVwiPjwvbmctdGVtcGxhdGU+PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+e3tpdGVtLnZhbHVlfX08L25nLXRlbXBsYXRlPiAgXHJcbmAsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3J0YWJsZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBwcml2YXRlIHN0YXRpYyBnbG9iYWxab25lSW5kZXggPSAwO1xyXG4gIC8qKiBmaWVsZCBuYW1lIGlmIGlucHV0IGFycmF5IGNvbnNpc3RzIG9mIG9iamVjdHMgKi9cclxuICBASW5wdXQoKSBmaWVsZE5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGl0ZW1zIHdyYXBwZXIgKi9cclxuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnJztcclxuXHJcbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgaXRlbXMgd3JhcHBlciAqL1xyXG4gIEBJbnB1dCgpIHdyYXBwZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbSAqL1xyXG4gIEBJbnB1dCgpIGl0ZW1DbGFzcyA9ICcnO1xyXG5cclxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbVN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBhY3RpdmUgaXRlbSAqL1xyXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVDbGFzcyA9ICcnO1xyXG5cclxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBhY3RpdmUgaXRlbSAqL1xyXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAvKiogY2xhc3MgbmFtZSBmb3IgcGxhY2Vob2xkZXIgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzID0gJyc7XHJcblxyXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIHBsYWNlaG9sZGVyICovXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAvKiogcGxhY2Vob2xkZXIgaXRlbSB3aGljaCB3aWxsIGJlIHNob3duIGlmIGNvbGxlY3Rpb24gaXMgZW1wdHkgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlckl0ZW0gPSAnJztcclxuXHJcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBpdGVtIHRlbXBsYXRlLiBUZW1wbGF0ZSB2YXJpYWJsZXM6IGl0ZW0gYW5kIGluZGV4OyAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAvKiogZmlyZWQgb24gYXJyYXkgY2hhbmdlIChyZW9yZGVyaW5nLCBpbnNlcnQsIHJlbW92ZSksIHNhbWUgYXMgPGNvZGU+bmdNb2RlbENoYW5nZTwvY29kZT4uXHJcbiAgICogIFJldHVybnMgbmV3IGl0ZW1zIGNvbGxlY3Rpb24gYXMgYSBwYXlsb2FkLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuXHJcbiAgc2hvd1BsYWNlaG9sZGVyID0gZmFsc2U7XHJcbiAgYWN0aXZlSXRlbSA9IC0xO1xyXG5cclxuICBnZXQgaXRlbXMoKTogU29ydGFibGVJdGVtW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuXHJcbiAgc2V0IGl0ZW1zKHZhbHVlOiBTb3J0YWJsZUl0ZW1bXSkge1xyXG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcclxuICAgIGNvbnN0IG91dCA9IHRoaXMuaXRlbXMubWFwKCh4OiBTb3J0YWJsZUl0ZW0pID0+IHguaW5pdERhdGEpO1xyXG4gICAgdGhpcy5vbkNoYW5nZWQob3V0KTtcclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdChvdXQpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIG9uQ2hhbmdlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBwcml2YXRlIHRyYW5zZmVyOiBEcmFnZ2FibGVJdGVtU2VydmljZTtcclxuICBwcml2YXRlIGN1cnJlbnRab25lSW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIF9pdGVtczogU29ydGFibGVJdGVtW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRyYW5zZmVyOiBEcmFnZ2FibGVJdGVtU2VydmljZSkge1xyXG4gICAgdGhpcy50cmFuc2ZlciA9IHRyYW5zZmVyO1xyXG4gICAgdGhpcy5jdXJyZW50Wm9uZUluZGV4ID0gU29ydGFibGVDb21wb25lbnQuZ2xvYmFsWm9uZUluZGV4Kys7XHJcbiAgICB0aGlzLnRyYW5zZmVyXHJcbiAgICAgIC5vbkNhcHR1cmVJdGVtKClcclxuICAgICAgLnN1YnNjcmliZSgoaXRlbTogRHJhZ2dhYmxlSXRlbSkgPT4gdGhpcy5vbkRyb3AoaXRlbSkpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtRHJhZ3N0YXJ0KFxyXG4gICAgZXZlbnQ6IERyYWdFdmVudCxcclxuICAgIGl0ZW06IFNvcnRhYmxlSXRlbSxcclxuICAgIGk6IG51bWJlclxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMudHJhbnNmZXIuZHJhZ1N0YXJ0KHtcclxuICAgICAgZXZlbnQsXHJcbiAgICAgIGl0ZW0sXHJcbiAgICAgIGksXHJcbiAgICAgIGluaXRpYWxJbmRleDogaSxcclxuICAgICAgbGFzdFpvbmVJbmRleDogdGhpcy5jdXJyZW50Wm9uZUluZGV4LFxyXG4gICAgICBvdmVyWm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXhcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtRHJhZ292ZXIoZXZlbnQ6IERyYWdFdmVudCwgaTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudHJhbnNmZXIuZ2V0SXRlbSgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkcmFnSXRlbSA9IHRoaXMudHJhbnNmZXIuY2FwdHVyZUl0ZW0oXHJcbiAgICAgIHRoaXMuY3VycmVudFpvbmVJbmRleCxcclxuICAgICAgdGhpcy5pdGVtcy5sZW5ndGhcclxuICAgICk7XHJcblxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgIGxldCBuZXdBcnJheTogYW55W10gPSBbXTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIG5ld0FycmF5ID0gW2RyYWdJdGVtLml0ZW1dO1xyXG4gICAgfSBlbHNlIGlmIChkcmFnSXRlbS5pID4gaSkge1xyXG4gICAgICBuZXdBcnJheSA9IFtcclxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKDAsIGkpLFxyXG4gICAgICAgIGRyYWdJdGVtLml0ZW0sXHJcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShpLCBkcmFnSXRlbS5pKSxcclxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGRyYWdJdGVtLmkgKyAxKVxyXG4gICAgICBdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcy5kcmFnZ2VkSXRlbS5pIDwgaVxyXG4gICAgICBuZXdBcnJheSA9IFtcclxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKDAsIGRyYWdJdGVtLmkpLFxyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEsIGkgKyAxKSxcclxuICAgICAgICBkcmFnSXRlbS5pdGVtLFxyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoaSArIDEpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1zID0gbmV3QXJyYXk7XHJcbiAgICBkcmFnSXRlbS5pID0gaTtcclxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IGk7XHJcbiAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGNhbmNlbEV2ZW50KGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkgfHwgIWV2ZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBvbkRyb3AoaXRlbTogRHJhZ2dhYmxlSXRlbSk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICBpdGVtICYmXHJcbiAgICAgIGl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4ICYmXHJcbiAgICAgIGl0ZW0ubGFzdFpvbmVJbmRleCA9PT0gdGhpcy5jdXJyZW50Wm9uZUluZGV4XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKFxyXG4gICAgICAgICh4OiBTb3J0YWJsZUl0ZW0sIGk6IG51bWJlcikgPT4gaSAhPT0gaXRlbS5pXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXNldEFjdGl2ZUl0ZW0odW5kZWZpbmVkKTtcclxuICB9XHJcblxyXG4gIHJlc2V0QWN0aXZlSXRlbShldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcclxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IC0xO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZWQgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICAgIHRoaXMuaXRlbXMgPSB2YWx1ZS5tYXAoKHg6IGFueSwgaTogbnVtYmVyKSA9PiAoe1xyXG4gICAgICAgIGlkOiBpLFxyXG4gICAgICAgIGluaXREYXRhOiB4LFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLmZpZWxkTmFtZSA/IHhbdGhpcy5maWVsZE5hbWVdIDogeFxyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBsYWNlaG9sZGVyU3RhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3dQbGFjZWhvbGRlciA9ICF0aGlzLl9pdGVtcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtU3R5bGUoaXNBY3RpdmU6IGJvb2xlYW4pOiB7fSB7XHJcbiAgICByZXR1cm4gaXNBY3RpdmVcclxuICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCB0aGlzLml0ZW1TdHlsZSwgdGhpcy5pdGVtQWN0aXZlU3R5bGUpXHJcbiAgICAgIDogdGhpcy5pdGVtU3R5bGU7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICBwcml2YXRlIGluaXREcmFnc3RhcnRFdmVudChldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBpdCBpcyBuZWNlc3NhcnkgZm9yIG1vemlsbGFcclxuICAgIC8vIGRhdGEgdHlwZSBzaG91bGQgYmUgJ1RleHQnIGluc3RlYWQgb2YgJ3RleHQvcGxhaW4nIHRvIGtlZXAgY29tcGF0aWJpbGl0eVxyXG4gICAgLy8gd2l0aCBJRVxyXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCAncGxhY2Vob2xkZXInKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTb3J0YWJsZUl0ZW0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIGluaXREYXRhOiBhbnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNvcnRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVJdGVtU2VydmljZSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0uc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NvcnRhYmxlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbU29ydGFibGVDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0YWJsZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU29ydGFibGVNb2R1bGUsIHByb3ZpZGVyczogW0RyYWdnYWJsZUl0ZW1TZXJ2aWNlXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiU3ViamVjdCIsIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxvQkF1R3VCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFF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