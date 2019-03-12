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
var AccordionPanelComponent = /** @class */ (function () {
    function AccordionPanelComponent(accordion) {
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
        get: /**
         * Is accordion group open or closed. This property supports two-way binding
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value !== this.isOpen) {
                if (value) {
                    this.accordion.closeOtherPanels(this);
                }
                this._isOpen = value;
                Promise.resolve(null).then(function () {
                    _this.isOpenChange.emit(value);
                })
                    .catch(function (error) {
                    /* tslint:disable: no-console */
                    console.log(error);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.accordion.removeGroup(this);
    };
    /**
     * @return {?}
     */
    AccordionPanelComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    };
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
    AccordionPanelComponent.ctorParameters = function () { return [
        { type: AccordionComponent, decorators: [{ type: Inject, args: [AccordionComponent,] },] },
    ]; };
    AccordionPanelComponent.propDecorators = {
        "heading": [{ type: Input },],
        "panelClass": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "isOpenChange": [{ type: Output },],
        "isOpen": [{ type: HostBinding, args: ['class.panel-open',] }, { type: Input },],
    };
    return AccordionPanelComponent;
}());
export { AccordionPanelComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFDL0UsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7OztJQTZEekQsaUNBQXdDOzs7OzRCQWpDUSxJQUFJLFlBQVksRUFBRTt1QkE4QjlDLEtBQUs7UUFJdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDNUI7MEJBN0JHLDJDQUFNOzs7Ozs7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Ozs7O1FBR3RCLFVBQVcsS0FBYztZQUF6QixpQkFjQztZQWJDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN2QztnQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMvQixDQUFDO3FCQUNDLEtBQUssQ0FBQyxVQUFDLEtBQVk7O29CQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwQixDQUFDLENBQUM7YUFDTjtTQUNGOzs7O0lBRUQsc0JBQUksMENBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjs7O09BQUE7Ozs7SUFTRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksZUFBZSxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzVCO0tBQ0Y7O2dCQXRFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMscXdCQUErQztvQkFDL0MsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxPQUFPO3dCQUNkLEtBQUssRUFBRSxnQkFBZ0I7cUJBQ3hCO2lCQUNGOzs7O2dCQWZRLGtCQUFrQix1QkE2RFosTUFBTSxTQUFDLGtCQUFrQjs7OzRCQTNDckMsS0FBSzsrQkFNTCxLQUFLOytCQUVMLEtBQUs7aUNBRUwsTUFBTTsyQkFJTixXQUFXLFNBQUMsa0JBQWtCLGNBQzlCLEtBQUs7O2tDQXJDUjs7U0FvQmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiAjIyMgQWNjb3JkaW9uIGhlYWRpbmdcclxuICogSW5zdGVhZCBvZiB1c2luZyBgaGVhZGluZ2AgYXR0cmlidXRlIG9uIHRoZSBgYWNjb3JkaW9uLWdyb3VwYCwgeW91IGNhbiB1c2VcclxuICogYW4gYGFjY29yZGlvbi1oZWFkaW5nYCBhdHRyaWJ1dGUgb24gYGFueWAgZWxlbWVudCBpbnNpZGUgb2YgYSBncm91cCB0aGF0XHJcbiAqIHdpbGwgYmUgdXNlZCBhcyBncm91cCdzIGhlYWRlciB0ZW1wbGF0ZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwLCBhY2NvcmRpb24tcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAncGFuZWwnLFxyXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jaydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKiogQ2xpY2thYmxlIHRleHQgaW4gYWNjb3JkaW9uJ3MgZ3JvdXAgaGVhZGVyLCBjaGVjayBgYWNjb3JkaW9uIGhlYWRpbmdgIGJlbG93IGZvciB1c2luZyBodG1sIGluIGhlYWRlciAqL1xyXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuICAvKiogUHJvdmlkZXMgYW4gYWJpbGl0eSB0byB1c2UgQm9vdHN0cmFwJ3MgY29udGV4dHVhbCBwYW5lbCBjbGFzc2VzXHJcbiAgICogKGBwYW5lbC1wcmltYXJ5YCwgYHBhbmVsLXN1Y2Nlc3NgLCBgcGFuZWwtaW5mb2AsIGV0Yy4uLikuXHJcbiAgICogTGlzdCBvZiBhbGwgYXZhaWxhYmxlIGNsYXNzZXMgW2F2YWlsYWJsZSBoZXJlXVxyXG4gICAqIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy8zLjMvY29tcG9uZW50cy8jcGFuZWxzLWFsdGVybmF0aXZlcylcclxuICAgKi9cclxuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmc7XHJcbiAgLyoqIGlmIDxjb2RlPnRydWU8L2NvZGU+IOKAlCBkaXNhYmxlcyBhY2NvcmRpb24gZ3JvdXAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBvcGVuZWQgc3RhdGUgY2hhbmdlcyAqL1xyXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gUXVlc3Rpb25hYmxlLCBtYXliZSAucGFuZWwtb3BlbiBzaG91bGQgYmUgb24gY2hpbGQgZGl2LnBhbmVsIGVsZW1lbnQ/XHJcbiAgLyoqIElzIGFjY29yZGlvbiBncm91cCBvcGVuIG9yIGNsb3NlZC4gVGhpcyBwcm9wZXJ0eSBzdXBwb3J0cyB0d28td2F5IGJpbmRpbmcgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhbmVsLW9wZW4nKVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc09wZW47XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGU6IG5vLWNvbnNvbGUgKi9cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9pc09wZW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWNjb3JkaW9uQ29tcG9uZW50KSBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5hY2NvcmRpb24gPSBhY2NvcmRpb247XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGFuZWxDbGFzcyA9IHRoaXMucGFuZWxDbGFzcyB8fCAncGFuZWwtZGVmYXVsdCc7XHJcbiAgICB0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY2NvcmRpb24ucmVtb3ZlR3JvdXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==