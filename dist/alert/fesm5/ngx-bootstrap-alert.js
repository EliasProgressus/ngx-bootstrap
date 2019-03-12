import { Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { OnChange } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
    AlertConfig.decorators = [
        { type: Injectable }
    ];
    return AlertConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(/** @type {?} */ (this.dismissOnTimeout), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'alert,bs-alert',
                    template: "<ng-template [ngIf]=\"isOpen\">\r\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\r\n    <ng-template [ngIf]=\"dismissible\">\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        <span class=\"sr-only\">Close</span>\r\n      </button>\r\n    </ng-template>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig, },
        { type: ChangeDetectorRef, },
    ]; };
    AlertComponent.propDecorators = {
        "type": [{ type: Input },],
        "dismissible": [{ type: Input },],
        "dismissOnTimeout": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "onClose": [{ type: Output },],
        "onClosed": [{ type: Output },],
    };
    __decorate([
        OnChange(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    /**
     * @return {?}
     */
    AlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    AlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent],
                    entryComponents: [AlertComponent]
                },] }
    ];
    return AlertModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AlertComponent, AlertModule, AlertConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1hbGVydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9hbGVydC9hbGVydC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbmZpZyB7XHJcbiAgLyoqIGRlZmF1bHQgYWxlcnQgdHlwZSAqL1xyXG4gIHR5cGUgPSAnd2FybmluZyc7XHJcblxyXG4gIC8qKiBpcyBhbGVydHMgYXJlIGRpc21pc3NpYmxlIGJ5IGRlZmF1bHQgKi9cclxuICBkaXNtaXNzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAvKiogZGVmYXVsdCB0aW1lIGJlZm9yZSBhbGVydCB3aWxsIGRpc21pc3MgKi9cclxuICBkaXNtaXNzT25UaW1lb3V0PzogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0Q29uZmlnIH0gZnJvbSAnLi9hbGVydC5jb25maWcnO1xyXG5pbXBvcnQgeyBPbkNoYW5nZSB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbGVydCxicy1hbGVydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKiBBbGVydCB0eXBlLlxyXG4gICAqIFByb3ZpZGVzIG9uZSBvZiBmb3VyIGJvb3RzdHJhcCBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOlxyXG4gICAqIGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AgYW5kIGBkYW5nZXJgXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZSA9ICd3YXJuaW5nJztcclxuICAvKiogSWYgc2V0LCBkaXNwbGF5cyBhbiBpbmxpbmUgXCJDbG9zZVwiIGJ1dHRvbiAqL1xyXG4gIEBPbkNoYW5nZSgpICAgQElucHV0KCkgICBkaXNtaXNzaWJsZSA9IGZhbHNlO1xyXG4gIC8qKiBOdW1iZXIgaW4gbWlsbGlzZWNvbmRzLCBhZnRlciB3aGljaCBhbGVydCB3aWxsIGJlIGNsb3NlZCAqL1xyXG4gIEBJbnB1dCgpIGRpc21pc3NPblRpbWVvdXQ6IG51bWJlciB8IHN0cmluZztcclxuXHJcbiAgLyoqIElzIGFsZXJ0IHZpc2libGUgKi9cclxuICBASW5wdXQoKSBpc09wZW4gPSB0cnVlO1xyXG5cclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBpbW1lZGlhdGVseSBhZnRlciBjbG9zZSBpbnN0YW5jZSBtZXRob2QgaXMgY2FsbGVkLFxyXG4gICAqICRldmVudCBpcyBhbiBpbnN0YW5jZSBvZiBBbGVydCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPEFsZXJ0Q29tcG9uZW50PigpO1xyXG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gYWxlcnQgY2xvc2VkLCAkZXZlbnQgaXMgYW4gaW5zdGFuY2Ugb2YgQWxlcnQgY29tcG9uZW50ICovXHJcbiAgQE91dHB1dCgpIG9uQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxBbGVydENvbXBvbmVudD4oKTtcclxuXHJcblxyXG4gIGNsYXNzZXMgPSAnJztcclxuICBkaXNtaXNzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoX2NvbmZpZzogQWxlcnRDb25maWcsIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcclxuICAgIHRoaXMuZGlzbWlzc2libGVDaGFuZ2Uuc3Vic2NyaWJlKChkaXNtaXNzaWJsZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLmRpc21pc3NpYmxlID8gJ2FsZXJ0LWRpc21pc3NpYmxlJyA6ICcnO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNtaXNzT25UaW1lb3V0KSB7XHJcbiAgICAgIC8vIGlmIGRpc21pc3NPblRpbWVvdXQgdXNlZCBhcyBhdHRyIHdpdGhvdXQgYmluZGluZywgaXQgd2lsbCBiZSBhIHN0cmluZ1xyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuY2xvc2UoKSxcclxuICAgICAgICBwYXJzZUludCh0aGlzLmRpc21pc3NPblRpbWVvdXQgYXMgc3RyaW5nLCAxMClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRvZG86IGFuaW1hdGlvbiBgIElmIHRoZSAuZmFkZSBhbmQgLmluIGNsYXNzZXMgYXJlIHByZXNlbnQgb24gdGhlIGVsZW1lbnQsXHJcbiAgLy8gdGhlIGFsZXJ0IHdpbGwgZmFkZSBvdXQgYmVmb3JlIGl0IGlzIHJlbW92ZWRgXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIGFuIGFsZXJ0IGJ5IHJlbW92aW5nIGl0IGZyb20gdGhlIERPTS5cclxuICAgKi9cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25DbG9zZS5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5vbkNsb3NlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRDb25maWcgfSBmcm9tICcuL2FsZXJ0LmNvbmZpZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FsZXJ0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWxlcnRDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0FsZXJ0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEFsZXJ0TW9kdWxlLCBwcm92aWRlcnM6IFtBbGVydENvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztvQkFLUyxTQUFTOzs7OzJCQUdGLEtBQUs7Ozs7Z0NBR1MsU0FBUzs7O2dCQVR0QyxVQUFVOztzQkFGWDs7Ozs7Ozs7SUMwQ0Usd0JBQVksT0FBb0IsRUFBVSxlQUFrQztRQUE1RSxpQkFNQztRQU55QyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7Ozs7OztvQkFwQjVELFNBQVM7Ozs7MkJBRWMsS0FBSzs7OztzQkFLMUIsSUFBSTs7Ozs7dUJBS0YsSUFBSSxZQUFZLEVBQWtCOzs7O3dCQUVqQyxJQUFJLFlBQVksRUFBa0I7dUJBRzdDLEVBQUU7aUNBQ1EsSUFBSSxZQUFZLEVBQVc7UUFHN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLFdBQW9CO1lBQ3BELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7WUFDM0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQyxDQUFDLENBQUM7S0FDSjs7OztJQUVELGlDQUFROzs7SUFBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O1lBRXpCLFVBQVUsQ0FDUixjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxHQUFBLEVBQ2xCLFFBQVEsbUJBQUMsSUFBSSxDQUFDLGdCQUEwQixHQUFFLEVBQUUsQ0FBQyxDQUM5QyxDQUFDO1NBQ0g7S0FDRjs7Ozs7Ozs7OztJQU9ELDhCQUFLOzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLHFkQUFxQztvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVBRLFdBQVc7Z0JBUGxCLGlCQUFpQjs7O3lCQW9CaEIsS0FBSztnQ0FFUyxLQUFLO3FDQUVuQixLQUFLOzJCQUdMLEtBQUs7NEJBS0wsTUFBTTs2QkFFTixNQUFNOzs7UUFaTixRQUFRLEVBQUU7Ozt5QkF4QmI7Ozs7Ozs7QUNBQTs7Ozs7O0lBWVMsbUJBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztLQUM1RDs7Z0JBVEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQ3pCLGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDbEM7O3NCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=