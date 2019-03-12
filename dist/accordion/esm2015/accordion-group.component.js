/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AccordionComponent } from './accordion.component';
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
export class AccordionPanelComponent {
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    /**
     * Is accordion group open or closed. This property supports two-way binding
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null).then(() => {
                this.isOpenChange.emit(value);
            })
                .catch((error) => {
                /* tslint:disable: no-console */
                console.log(error);
            });
        }
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\r\n  <div class=\"panel-heading card-header\" role=\"tab\"\r\n       (click)=\"toggleOpen()\">\r\n    <div class=\"panel-title\">\r\n      <div role=\"button\" class=\"accordion-toggle\"\r\n           [attr.aria-expanded]=\"isOpen\">\r\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\r\n          {{ heading }}\r\n        </button>\r\n        <ng-content select=\"[accordion-heading]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\r\n    <div class=\"panel-body card-block card-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                host: {
                    class: 'panel',
                    style: 'display: block'
                }
            }] }
];
/** @nocollapse */
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] },] },
];
AccordionPanelComponent.propDecorators = {
    "heading": [{ type: Input },],
    "panelClass": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "isOpenChange": [{ type: Output },],
    "isOpen": [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input },],
};
function AccordionPanelComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AccordionPanelComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AccordionPanelComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AccordionPanelComponent.propDecorators;
    /**
     * Clickable text in accordion's group header, check `accordion heading` below for using html in header
     * @type {?}
     */
    AccordionPanelComponent.prototype.heading;
    /**
     * Provides an ability to use Bootstrap's contextual panel classes
     * (`panel-primary`, `panel-success`, `panel-info`, etc...).
     * List of all available classes [available here]
     * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
     * @type {?}
     */
    AccordionPanelComponent.prototype.panelClass;
    /**
     * if <code>true</code> — disables accordion group
     * @type {?}
     */
    AccordionPanelComponent.prototype.isDisabled;
    /**
     * Emits when the opened state changes
     * @type {?}
     */
    AccordionPanelComponent.prototype.isOpenChange;
    /** @type {?} */
    AccordionPanelComponent.prototype._isOpen;
    /** @type {?} */
    AccordionPanelComponent.prototype.accordion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFDL0UsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBZ0IzRCxNQUFNOzs7O0lBNkNKLFlBQXdDOzs7OzRCQWpDUSxJQUFJLFlBQVksRUFBRTt1QkE4QjlDLEtBQUs7UUFJdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDNUI7Ozs7O1FBN0JHLE1BQU07UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O0lBR3RCLElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0IsQ0FBQztpQkFDQyxLQUFLLENBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7Z0JBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1NBQ047S0FDRjs7OztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7OztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUI7S0FDRjs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1Qyxxd0JBQStDO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLGdCQUFnQjtpQkFDeEI7YUFDRjs7OztZQWZRLGtCQUFrQix1QkE2RFosTUFBTSxTQUFDLGtCQUFrQjs7O3dCQTNDckMsS0FBSzsyQkFNTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsTUFBTTt1QkFJTixXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqICMjIyBBY2NvcmRpb24gaGVhZGluZ1xyXG4gKiBJbnN0ZWFkIG9mIHVzaW5nIGBoZWFkaW5nYCBhdHRyaWJ1dGUgb24gdGhlIGBhY2NvcmRpb24tZ3JvdXBgLCB5b3UgY2FuIHVzZVxyXG4gKiBhbiBgYWNjb3JkaW9uLWhlYWRpbmdgIGF0dHJpYnV0ZSBvbiBgYW55YCBlbGVtZW50IGluc2lkZSBvZiBhIGdyb3VwIHRoYXRcclxuICogd2lsbCBiZSB1c2VkIGFzIGdyb3VwJ3MgaGVhZGVyIHRlbXBsYXRlLlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhY2NvcmRpb24tZ3JvdXAsIGFjY29yZGlvbi1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdwYW5lbCcsXHJcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKiBDbGlja2FibGUgdGV4dCBpbiBhY2NvcmRpb24ncyBncm91cCBoZWFkZXIsIGNoZWNrIGBhY2NvcmRpb24gaGVhZGluZ2AgYmVsb3cgZm9yIHVzaW5nIGh0bWwgaW4gaGVhZGVyICovXHJcbiAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG4gIC8qKiBQcm92aWRlcyBhbiBhYmlsaXR5IHRvIHVzZSBCb290c3RyYXAncyBjb250ZXh0dWFsIHBhbmVsIGNsYXNzZXNcclxuICAgKiAoYHBhbmVsLXByaW1hcnlgLCBgcGFuZWwtc3VjY2Vzc2AsIGBwYW5lbC1pbmZvYCwgZXRjLi4uKS5cclxuICAgKiBMaXN0IG9mIGFsbCBhdmFpbGFibGUgY2xhc3NlcyBbYXZhaWxhYmxlIGhlcmVdXHJcbiAgICogKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzMuMy9jb21wb25lbnRzLyNwYW5lbHMtYWx0ZXJuYXRpdmVzKVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZztcclxuICAvKiogaWYgPGNvZGU+dHJ1ZTwvY29kZT4g4oCUIGRpc2FibGVzIGFjY29yZGlvbiBncm91cCAqL1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIG9wZW5lZCBzdGF0ZSBjaGFuZ2VzICovXHJcbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBRdWVzdGlvbmFibGUsIG1heWJlIC5wYW5lbC1vcGVuIHNob3VsZCBiZSBvbiBjaGlsZCBkaXYucGFuZWwgZWxlbWVudD9cclxuICAvKiogSXMgYWNjb3JkaW9uIGdyb3VwIG9wZW4gb3IgY2xvc2VkLiBUaGlzIHByb3BlcnR5IHN1cHBvcnRzIHR3by13YXkgYmluZGluZyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFuZWwtb3BlbicpXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pc09wZW4pIHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTogbm8tY29uc29sZSAqL1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX2lzT3BlbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChBY2NvcmRpb25Db21wb25lbnQpIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmFjY29yZGlvbiA9IGFjY29yZGlvbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wYW5lbENsYXNzID0gdGhpcy5wYW5lbENsYXNzIHx8ICdwYW5lbC1kZWZhdWx0JztcclxuICAgIHRoaXMuYWNjb3JkaW9uLmFkZEdyb3VwKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjY29yZGlvbi5yZW1vdmVHcm91cCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19