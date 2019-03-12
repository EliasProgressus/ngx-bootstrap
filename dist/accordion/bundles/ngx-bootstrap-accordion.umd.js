(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common'), require('ngx-bootstrap/collapse')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/accordion', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common', 'ngx-bootstrap/collapse'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].accordion = {}),global.ng.core,global.utils,global.ng.common,global.collapse));
}(this, (function (exports,core,utils,common,collapse) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Configuration service, provides default values for the AccordionComponent.
     */
    var AccordionConfig = (function () {
        function AccordionConfig() {
            /**
             * Whether the other panels should be closed when a panel is opened
             */
            this.closeOthers = false;
        }
        AccordionConfig.decorators = [
            { type: core.Injectable }
        ];
        return AccordionConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Displays collapsible content panels for presenting information in a limited amount of space.
     */
    var AccordionComponent = (function () {
        function AccordionComponent(config) {
            this.groups = [];
            Object.assign(this, config);
        }
        /**
         * @param {?} openGroup
         * @return {?}
         */
        AccordionComponent.prototype.closeOtherPanels = /**
         * @param {?} openGroup
         * @return {?}
         */
            function (openGroup) {
                if (!this.closeOthers) {
                    return;
                }
                this.groups.forEach(function (group) {
                    if (group !== openGroup) {
                        group.isOpen = false;
                    }
                });
            };
        /**
         * @param {?} group
         * @return {?}
         */
        AccordionComponent.prototype.addGroup = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                this.groups.push(group);
            };
        /**
         * @param {?} group
         * @return {?}
         */
        AccordionComponent.prototype.removeGroup = /**
         * @param {?} group
         * @return {?}
         */
            function (group) {
                var /** @type {?} */ index = this.groups.indexOf(group);
                if (index !== -1) {
                    this.groups.splice(index, 1);
                }
            };
        AccordionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'accordion',
                        template: "<ng-content></ng-content>",
                        host: {
                            '[attr.aria-multiselectable]': 'closeOthers',
                            role: 'tablist',
                            class: 'panel-group',
                            style: 'display: block'
                        }
                    }] }
        ];
        /** @nocollapse */
        AccordionComponent.ctorParameters = function () {
            return [
                { type: AccordionConfig, },
            ];
        };
        AccordionComponent.propDecorators = {
            "closeOthers": [{ type: core.Input },],
        };
        return AccordionComponent;
    }());

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
    var AccordionPanelComponent = (function () {
        function AccordionPanelComponent(accordion) {
            /**
             * Emits when the opened state changes
             */
            this.isOpenChange = new core.EventEmitter();
            this._isOpen = false;
            this.accordion = accordion;
        }
        Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
            get: /**
             * Is accordion group open or closed. This property supports two-way binding
             * @return {?}
             */ function () {
                return this._isOpen;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return utils.isBs3();
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
            { type: core.Component, args: [{
                        selector: 'accordion-group, accordion-panel',
                        template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\r\n  <div class=\"panel-heading card-header\" role=\"tab\"\r\n       (click)=\"toggleOpen()\">\r\n    <div class=\"panel-title\">\r\n      <div role=\"button\" class=\"accordion-toggle\"\r\n           [attr.aria-expanded]=\"isOpen\">\r\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{'text-muted': isDisabled}\">\r\n          {{ heading }}\r\n        </button>\r\n        <ng-content select=\"[accordion-heading]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\">\r\n    <div class=\"panel-body card-block card-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                        host: {
                            class: 'panel',
                            style: 'display: block'
                        }
                    }] }
        ];
        /** @nocollapse */
        AccordionPanelComponent.ctorParameters = function () {
            return [
                { type: AccordionComponent, decorators: [{ type: core.Inject, args: [AccordionComponent,] },] },
            ];
        };
        AccordionPanelComponent.propDecorators = {
            "heading": [{ type: core.Input },],
            "panelClass": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "isOpenChange": [{ type: core.Output },],
            "isOpen": [{ type: core.HostBinding, args: ['class.panel-open',] }, { type: core.Input },],
        };
        return AccordionPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AccordionModule = (function () {
        function AccordionModule() {
        }
        /**
         * @return {?}
         */
        AccordionModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: AccordionModule, providers: [AccordionConfig] };
            };
        AccordionModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, collapse.CollapseModule],
                        declarations: [AccordionComponent, AccordionPanelComponent],
                        exports: [AccordionComponent, AccordionPanelComponent]
                    },] }
        ];
        return AccordionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.AccordionPanelComponent = AccordionPanelComponent;
    exports.AccordionComponent = AccordionComponent;
    exports.AccordionModule = AccordionModule;
    exports.AccordionConfig = AccordionConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1hY2NvcmRpb24udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24uY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2FjY29yZGlvbi9hY2NvcmRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIHNlcnZpY2UsIHByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgQWNjb3JkaW9uQ29tcG9uZW50LlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29uZmlnIHtcclxuICAvKiogV2hldGhlciB0aGUgb3RoZXIgcGFuZWxzIHNob3VsZCBiZSBjbG9zZWQgd2hlbiBhIHBhbmVsIGlzIG9wZW5lZCAqL1xyXG4gIGNsb3NlT3RoZXJzOiBCb29sZWFuID0gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbmZpZyc7XHJcblxyXG4vKiogRGlzcGxheXMgY29sbGFwc2libGUgY29udGVudCBwYW5lbHMgZm9yIHByZXNlbnRpbmcgaW5mb3JtYXRpb24gaW4gYSBsaW1pdGVkIGFtb3VudCBvZiBzcGFjZS4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhY2NvcmRpb24nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlXSc6ICdjbG9zZU90aGVycycsXHJcbiAgICByb2xlOiAndGFibGlzdCcsXHJcbiAgICBjbGFzczogJ3BhbmVsLWdyb3VwJyxcclxuICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2snXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IHtcclxuICAvKiogaWYgYHRydWVgIGV4cGFuZGluZyBvbmUgaXRlbSB3aWxsIGNsb3NlIGFsbCBvdGhlcnMgKi9cclxuICBASW5wdXQoKSBjbG9zZU90aGVyczogYm9vbGVhbjtcclxuXHJcbiAgcHJvdGVjdGVkIGdyb3VwczogQWNjb3JkaW9uUGFuZWxDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IEFjY29yZGlvbkNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VPdGhlclBhbmVscyhvcGVuR3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY2xvc2VPdGhlcnMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCkgPT4ge1xyXG4gICAgICBpZiAoZ3JvdXAgIT09IG9wZW5Hcm91cCkge1xyXG4gICAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEdyb3VwKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVHcm91cChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ncm91cHMuaW5kZXhPZihncm91cCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogIyMjIEFjY29yZGlvbiBoZWFkaW5nXHJcbiAqIEluc3RlYWQgb2YgdXNpbmcgYGhlYWRpbmdgIGF0dHJpYnV0ZSBvbiB0aGUgYGFjY29yZGlvbi1ncm91cGAsIHlvdSBjYW4gdXNlXHJcbiAqIGFuIGBhY2NvcmRpb24taGVhZGluZ2AgYXR0cmlidXRlIG9uIGBhbnlgIGVsZW1lbnQgaW5zaWRlIG9mIGEgZ3JvdXAgdGhhdFxyXG4gKiB3aWxsIGJlIHVzZWQgYXMgZ3JvdXAncyBoZWFkZXIgdGVtcGxhdGUuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FjY29yZGlvbi1ncm91cCwgYWNjb3JkaW9uLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ3BhbmVsJyxcclxuICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2snXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIENsaWNrYWJsZSB0ZXh0IGluIGFjY29yZGlvbidzIGdyb3VwIGhlYWRlciwgY2hlY2sgYGFjY29yZGlvbiBoZWFkaW5nYCBiZWxvdyBmb3IgdXNpbmcgaHRtbCBpbiBoZWFkZXIgKi9cclxuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgLyoqIFByb3ZpZGVzIGFuIGFiaWxpdHkgdG8gdXNlIEJvb3RzdHJhcCdzIGNvbnRleHR1YWwgcGFuZWwgY2xhc3Nlc1xyXG4gICAqIChgcGFuZWwtcHJpbWFyeWAsIGBwYW5lbC1zdWNjZXNzYCwgYHBhbmVsLWluZm9gLCBldGMuLi4pLlxyXG4gICAqIExpc3Qgb2YgYWxsIGF2YWlsYWJsZSBjbGFzc2VzIFthdmFpbGFibGUgaGVyZV1cclxuICAgKiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvMy4zL2NvbXBvbmVudHMvI3BhbmVscy1hbHRlcm5hdGl2ZXMpXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGFuZWxDbGFzczogc3RyaW5nO1xyXG4gIC8qKiBpZiA8Y29kZT50cnVlPC9jb2RlPiDDosKAwpQgZGlzYWJsZXMgYWNjb3JkaW9uIGdyb3VwICovXHJcbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICAvKiogRW1pdHMgd2hlbiB0aGUgb3BlbmVkIHN0YXRlIGNoYW5nZXMgKi9cclxuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIFF1ZXN0aW9uYWJsZSwgbWF5YmUgLnBhbmVsLW9wZW4gc2hvdWxkIGJlIG9uIGNoaWxkIGRpdi5wYW5lbCBlbGVtZW50P1xyXG4gIC8qKiBJcyBhY2NvcmRpb24gZ3JvdXAgb3BlbiBvciBjbG9zZWQuIFRoaXMgcHJvcGVydHkgc3VwcG9ydHMgdHdvLXdheSBiaW5kaW5nICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYW5lbC1vcGVuJylcclxuICBASW5wdXQoKVxyXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlzT3Blbikge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbi5jbG9zZU90aGVyUGFuZWxzKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xyXG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgIC8qIHRzbGludDpkaXNhYmxlOiBuby1jb25zb2xlICovXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfaXNPcGVuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFjY29yZGlvbkNvbXBvbmVudCkgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpIHtcclxuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhbmVsQ2xhc3MgPSB0aGlzLnBhbmVsQ2xhc3MgfHwgJ3BhbmVsLWRlZmF1bHQnO1xyXG4gICAgdGhpcy5hY2NvcmRpb24uYWRkR3JvdXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWNjb3JkaW9uLnJlbW92ZUdyb3VwKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BlbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbmZpZyB9IGZyb20gJy4vYWNjb3JkaW9uLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29sbGFwc2VNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FjY29yZGlvbkNvbXBvbmVudCwgQWNjb3JkaW9uUGFuZWxDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtBY2NvcmRpb25Db21wb25lbnQsIEFjY29yZGlvblBhbmVsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBBY2NvcmRpb25Nb2R1bGUsIHByb3ZpZGVyczogW0FjY29yZGlvbkNvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJJbnB1dCIsIkV2ZW50RW1pdHRlciIsImlzQnMzIiwiSW5qZWN0IiwiT3V0cHV0IiwiSG9zdEJpbmRpbmciLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNvbGxhcHNlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OytCQVF5QixLQUFLOzs7b0JBSDdCQSxlQUFVOzs4QkFMWDs7Ozs7OztBQ0FBOzs7O1FBcUJFLDRCQUFZLE1BQXVCOzBCQUZXLEVBQUU7WUFHOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0I7Ozs7O1FBRUQsNkNBQWdCOzs7O1lBQWhCLFVBQWlCLFNBQWtDO2dCQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDckIsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQThCO29CQUNqRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7d0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtpQkFDRixDQUFDLENBQUM7YUFDSjs7Ozs7UUFFRCxxQ0FBUTs7OztZQUFSLFVBQVMsS0FBOEI7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCOzs7OztRQUVELHdDQUFXOzs7O1lBQVgsVUFBWSxLQUE4QjtnQkFDeEMscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMs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