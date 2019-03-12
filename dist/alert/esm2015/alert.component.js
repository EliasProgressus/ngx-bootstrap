/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertConfig } from './alert.config';
import { OnChange } from 'ngx-bootstrap/utils';
export class AlertComponent {
    /**
     * @param {?} _config
     * @param {?} changeDetection
     */
    constructor(_config, changeDetection) {
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
        this.dismissibleChange.subscribe((dismissible) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(() => this.close(), parseInt(/** @type {?} */ (this.dismissOnTimeout), 10));
        }
    }
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'alert,bs-alert',
                template: "<ng-template [ngIf]=\"isOpen\">\r\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\r\n    <ng-template [ngIf]=\"dismissible\">\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        <span class=\"sr-only\">Close</span>\r\n      </button>\r\n    </ng-template>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [
    { type: AlertConfig, },
    { type: ChangeDetectorRef, },
];
AlertComponent.propDecorators = {
    "type": [{ type: Input },],
    "dismissible": [{ type: Input },],
    "dismissOnTimeout": [{ type: Input },],
    "isOpen": [{ type: Input },],
    "onClose": [{ type: Output },],
    "onClosed": [{ type: Output },],
};
tslib_1.__decorate([
    OnChange(),
    tslib_1.__metadata("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
function AlertComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AlertComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AlertComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AlertComponent.propDecorators;
    /**
     * Alert type.
     * Provides one of four bootstrap supported contextual classes:
     * `success`, `info`, `warning` and `danger`
     * @type {?}
     */
    AlertComponent.prototype.type;
    /**
     * If set, displays an inline "Close" button
     * @type {?}
     */
    AlertComponent.prototype.dismissible;
    /**
     * Number in milliseconds, after which alert will be closed
     * @type {?}
     */
    AlertComponent.prototype.dismissOnTimeout;
    /**
     * Is alert visible
     * @type {?}
     */
    AlertComponent.prototype.isOpen;
    /**
     * This event fires immediately after close instance method is called,
     * $event is an instance of Alert component.
     * @type {?}
     */
    AlertComponent.prototype.onClose;
    /**
     * This event fires when alert closed, $event is an instance of Alert component
     * @type {?}
     */
    AlertComponent.prototype.onClosed;
    /** @type {?} */
    AlertComponent.prototype.classes;
    /** @type {?} */
    AlertComponent.prototype.dismissibleChange;
    /** @type {?} */
    AlertComponent.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9hbGVydC8iLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTy9DLE1BQU07Ozs7O0lBeUJKLFlBQVksT0FBb0IsRUFBVSxlQUFrQztRQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7Ozs7OztvQkFwQjVELFNBQVM7Ozs7MkJBRWMsS0FBSzs7OztzQkFLMUIsSUFBSTs7Ozs7dUJBS0YsSUFBSSxZQUFZLEVBQWtCOzs7O3dCQUVqQyxJQUFJLFlBQVksRUFBa0I7dUJBRzdDLEVBQUU7aUNBQ1EsSUFBSSxZQUFZLEVBQVc7UUFHN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQW9CLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQyxDQUFDLENBQUM7S0FDSjs7OztJQUVELFFBQVE7UUFDTixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOztZQUUxQixVQUFVLENBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUNsQixRQUFRLG1CQUFDLElBQUksQ0FBQyxnQkFBMEIsR0FBRSxFQUFFLENBQUMsQ0FDOUMsQ0FBQztTQUNIO0tBQ0Y7Ozs7O0lBT0QsS0FBSztRQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7WUE5REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHFkQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSxXQUFXO1lBUGxCLGlCQUFpQjs7O3FCQW9CaEIsS0FBSzs0QkFFUyxLQUFLO2lDQUVuQixLQUFLO3VCQUdMLEtBQUs7d0JBS0wsTUFBTTt5QkFFTixNQUFNOzs7SUFaTixRQUFRLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydENvbmZpZyB9IGZyb20gJy4vYWxlcnQuY29uZmlnJztcclxuaW1wb3J0IHsgT25DaGFuZ2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWxlcnQsYnMtYWxlcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKiogQWxlcnQgdHlwZS5cclxuICAgKiBQcm92aWRlcyBvbmUgb2YgZm91ciBib290c3RyYXAgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczpcclxuICAgKiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgIGFuZCBgZGFuZ2VyYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGUgPSAnd2FybmluZyc7XHJcbiAgLyoqIElmIHNldCwgZGlzcGxheXMgYW4gaW5saW5lIFwiQ2xvc2VcIiBidXR0b24gKi9cclxuICBAT25DaGFuZ2UoKSAgIEBJbnB1dCgpICAgZGlzbWlzc2libGUgPSBmYWxzZTtcclxuICAvKiogTnVtYmVyIGluIG1pbGxpc2Vjb25kcywgYWZ0ZXIgd2hpY2ggYWxlcnQgd2lsbCBiZSBjbG9zZWQgKi9cclxuICBASW5wdXQoKSBkaXNtaXNzT25UaW1lb3V0OiBudW1iZXIgfCBzdHJpbmc7XHJcblxyXG4gIC8qKiBJcyBhbGVydCB2aXNpYmxlICovXHJcbiAgQElucHV0KCkgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgY2xvc2UgaW5zdGFuY2UgbWV0aG9kIGlzIGNhbGxlZCxcclxuICAgKiAkZXZlbnQgaXMgYW4gaW5zdGFuY2Ugb2YgQWxlcnQgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxBbGVydENvbXBvbmVudD4oKTtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyB3aGVuIGFsZXJ0IGNsb3NlZCwgJGV2ZW50IGlzIGFuIGluc3RhbmNlIG9mIEFsZXJ0IGNvbXBvbmVudCAqL1xyXG4gIEBPdXRwdXQoKSBvbkNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QWxlcnRDb21wb25lbnQ+KCk7XHJcblxyXG5cclxuICBjbGFzc2VzID0gJyc7XHJcbiAgZGlzbWlzc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKF9jb25maWc6IEFsZXJ0Q29uZmlnLCBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgX2NvbmZpZyk7XHJcbiAgICB0aGlzLmRpc21pc3NpYmxlQ2hhbmdlLnN1YnNjcmliZSgoZGlzbWlzc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy5kaXNtaXNzaWJsZSA/ICdhbGVydC1kaXNtaXNzaWJsZScgOiAnJztcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzbWlzc09uVGltZW91dCkge1xyXG4gICAgICAvLyBpZiBkaXNtaXNzT25UaW1lb3V0IHVzZWQgYXMgYXR0ciB3aXRob3V0IGJpbmRpbmcsIGl0IHdpbGwgYmUgYSBzdHJpbmdcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLmNsb3NlKCksXHJcbiAgICAgICAgcGFyc2VJbnQodGhpcy5kaXNtaXNzT25UaW1lb3V0IGFzIHN0cmluZywgMTApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhbmltYXRpb24gYCBJZiB0aGUgLmZhZGUgYW5kIC5pbiBjbGFzc2VzIGFyZSBwcmVzZW50IG9uIHRoZSBlbGVtZW50LFxyXG4gIC8vIHRoZSBhbGVydCB3aWxsIGZhZGUgb3V0IGJlZm9yZSBpdCBpcyByZW1vdmVkYFxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBhbiBhbGVydCBieSByZW1vdmluZyBpdCBmcm9tIHRoZSBET00uXHJcbiAgICovXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMub25DbG9zZWQuZW1pdCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl19