import { Injectable, Component, Input, HostBinding, Inject, Output, EventEmitter, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
class AccordionConfig {
    constructor() {
        /**
         * Whether the other panels should be closed when a panel is opened
         */
        this.closeOthers = false;
    }
}
AccordionConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
class AccordionComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.groups = [];
        Object.assign(this, config);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        this.groups.push(group);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    removeGroup(group) {
        const /** @type {?} */ index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'accordion',
                template: `<ng-content></ng-content>`,
                host: {
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist',
                    class: 'panel-group',
                    style: 'display: block'
                }
            }] }
];
/** @nocollapse */
AccordionComponent.ctorParameters = () => [
    { type: AccordionConfig, },
];
AccordionComponent.propDecorators = {
    "closeOthers": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
class AccordionPanelComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AccordionModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: AccordionModule, providers: [AccordionConfig] };
    }
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CollapseModule],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AccordionPanelComponent, AccordionComponent, AccordionModule, AccordionConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1hY2NvcmRpb24uanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSwgcHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBBY2NvcmRpb25Db21wb25lbnQuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db25maWcge1xyXG4gIC8qKiBXaGV0aGVyIHRoZSBvdGhlciBwYW5lbHMgc2hvdWxkIGJlIGNsb3NlZCB3aGVuIGEgcGFuZWwgaXMgb3BlbmVkICovXHJcbiAgY2xvc2VPdGhlcnM6IEJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29uZmlnIH0gZnJvbSAnLi9hY2NvcmRpb24uY29uZmlnJztcclxuXHJcbi8qKiBEaXNwbGF5cyBjb2xsYXBzaWJsZSBjb250ZW50IHBhbmVscyBmb3IgcHJlc2VudGluZyBpbmZvcm1hdGlvbiBpbiBhIGxpbWl0ZWQgYW1vdW50IG9mIHNwYWNlLiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FjY29yZGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGVdJzogJ2Nsb3NlT3RoZXJzJyxcclxuICAgIHJvbGU6ICd0YWJsaXN0JyxcclxuICAgIGNsYXNzOiAncGFuZWwtZ3JvdXAnLFxyXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jaydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQge1xyXG4gIC8qKiBpZiBgdHJ1ZWAgZXhwYW5kaW5nIG9uZSBpdGVtIHdpbGwgY2xvc2UgYWxsIG90aGVycyAqL1xyXG4gIEBJbnB1dCgpIGNsb3NlT3RoZXJzOiBib29sZWFuO1xyXG5cclxuICBwcm90ZWN0ZWQgZ3JvdXBzOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQWNjb3JkaW9uQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU90aGVyUGFuZWxzKG9wZW5Hcm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XHJcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkR3JvdXAoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiAjIyMgQWNjb3JkaW9uIGhlYWRpbmdcclxuICogSW5zdGVhZCBvZiB1c2luZyBgaGVhZGluZ2AgYXR0cmlidXRlIG9uIHRoZSBgYWNjb3JkaW9uLWdyb3VwYCwgeW91IGNhbiB1c2VcclxuICogYW4gYGFjY29yZGlvbi1oZWFkaW5nYCBhdHRyaWJ1dGUgb24gYGFueWAgZWxlbWVudCBpbnNpZGUgb2YgYSBncm91cCB0aGF0XHJcbiAqIHdpbGwgYmUgdXNlZCBhcyBncm91cCdzIGhlYWRlciB0ZW1wbGF0ZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwLCBhY2NvcmRpb24tcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAncGFuZWwnLFxyXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jaydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKiogQ2xpY2thYmxlIHRleHQgaW4gYWNjb3JkaW9uJ3MgZ3JvdXAgaGVhZGVyLCBjaGVjayBgYWNjb3JkaW9uIGhlYWRpbmdgIGJlbG93IGZvciB1c2luZyBodG1sIGluIGhlYWRlciAqL1xyXG4gIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuICAvKiogUHJvdmlkZXMgYW4gYWJpbGl0eSB0byB1c2UgQm9vdHN0cmFwJ3MgY29udGV4dHVhbCBwYW5lbCBjbGFzc2VzXHJcbiAgICogKGBwYW5lbC1wcmltYXJ5YCwgYHBhbmVsLXN1Y2Nlc3NgLCBgcGFuZWwtaW5mb2AsIGV0Yy4uLikuXHJcbiAgICogTGlzdCBvZiBhbGwgYXZhaWxhYmxlIGNsYXNzZXMgW2F2YWlsYWJsZSBoZXJlXVxyXG4gICAqIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy8zLjMvY29tcG9uZW50cy8jcGFuZWxzLWFsdGVybmF0aXZlcylcclxuICAgKi9cclxuICBASW5wdXQoKSBwYW5lbENsYXNzOiBzdHJpbmc7XHJcbiAgLyoqIGlmIDxjb2RlPnRydWU8L2NvZGU+IMOiwoDClCBkaXNhYmxlcyBhY2NvcmRpb24gZ3JvdXAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBvcGVuZWQgc3RhdGUgY2hhbmdlcyAqL1xyXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLy8gUXVlc3Rpb25hYmxlLCBtYXliZSAucGFuZWwtb3BlbiBzaG91bGQgYmUgb24gY2hpbGQgZGl2LnBhbmVsIGVsZW1lbnQ/XHJcbiAgLyoqIElzIGFjY29yZGlvbiBncm91cCBvcGVuIG9yIGNsb3NlZC4gVGhpcyBwcm9wZXJ0eSBzdXBwb3J0cyB0d28td2F5IGJpbmRpbmcgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhbmVsLW9wZW4nKVxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc09wZW47XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLmNsb3NlT3RoZXJQYW5lbHModGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgLyogdHNsaW50OmRpc2FibGU6IG5vLWNvbnNvbGUgKi9cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9pc09wZW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWNjb3JkaW9uQ29tcG9uZW50KSBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5hY2NvcmRpb24gPSBhY2NvcmRpb247XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGFuZWxDbGFzcyA9IHRoaXMucGFuZWxDbGFzcyB8fCAncGFuZWwtZGVmYXVsdCc7XHJcbiAgICB0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY2NvcmRpb24ucmVtb3ZlR3JvdXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29uZmlnIH0gZnJvbSAnLi9hY2NvcmRpb24uY29uZmlnJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb2xsYXBzZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBBY2NvcmRpb25QYW5lbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FjY29yZGlvbkNvbXBvbmVudCwgQWNjb3JkaW9uUGFuZWxDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEFjY29yZGlvbk1vZHVsZSwgcHJvdmlkZXJzOiBbQWNjb3JkaW9uQ29uZmlnXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQU1BOzs7OzsyQkFFeUIsS0FBSzs7OztZQUg3QixVQUFVOzs7Ozs7O0FDTFg7OztBQWVBOzs7O0lBTUUsWUFBWSxNQUF1QjtzQkFGVyxFQUFFO1FBRzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELGdCQUFnQixDQUFDLFNBQWtDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBOEI7WUFDakQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN0QjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELFFBQVEsQ0FBQyxLQUE4QjtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBOEI7UUFDeEMsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QjtLQUNGOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFX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