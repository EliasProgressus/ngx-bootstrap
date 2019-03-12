/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AccordionConfig } from './accordion.config';
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
var AccordionComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
    AccordionComponent.ctorParameters = function () { return [
        { type: AccordionConfig, },
    ]; };
    AccordionComponent.propDecorators = {
        "closeOthers": [{ type: Input },],
    };
    return AccordionComponent;
}());
export { AccordionComponent };
function AccordionComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AccordionComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AccordionComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AccordionComponent.propDecorators;
    /**
     * if `true` expanding one item will close all others
     * @type {?}
     */
    AccordionComponent.prototype.closeOthers;
    /** @type {?} */
    AccordionComponent.prototype.groups;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztJQW1CbkQsNEJBQVksTUFBdUI7c0JBRlcsRUFBRTtRQUc5QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCw2Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsU0FBa0M7UUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBOEI7WUFDakQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLEtBQThCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUE4QjtRQUN4QyxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7S0FDRjs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFO3dCQUNKLDZCQUE2QixFQUFFLGFBQWE7d0JBQzVDLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxhQUFhO3dCQUNwQixLQUFLLEVBQUUsZ0JBQWdCO3FCQUN4QjtpQkFDRjs7OztnQkFaUSxlQUFlOzs7Z0NBZXJCLEtBQUs7OzZCQWpCUjs7U0FlYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29uZmlnIH0gZnJvbSAnLi9hY2NvcmRpb24uY29uZmlnJztcclxuXHJcbi8qKiBEaXNwbGF5cyBjb2xsYXBzaWJsZSBjb250ZW50IHBhbmVscyBmb3IgcHJlc2VudGluZyBpbmZvcm1hdGlvbiBpbiBhIGxpbWl0ZWQgYW1vdW50IG9mIHNwYWNlLiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FjY29yZGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGVdJzogJ2Nsb3NlT3RoZXJzJyxcclxuICAgIHJvbGU6ICd0YWJsaXN0JyxcclxuICAgIGNsYXNzOiAncGFuZWwtZ3JvdXAnLFxyXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jaydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQge1xyXG4gIC8qKiBpZiBgdHJ1ZWAgZXhwYW5kaW5nIG9uZSBpdGVtIHdpbGwgY2xvc2UgYWxsIG90aGVycyAqL1xyXG4gIEBJbnB1dCgpIGNsb3NlT3RoZXJzOiBib29sZWFuO1xyXG5cclxuICBwcm90ZWN0ZWQgZ3JvdXBzOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQWNjb3JkaW9uQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU90aGVyUGFuZWxzKG9wZW5Hcm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jbG9zZU90aGVycykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XHJcbiAgICAgICAgZ3JvdXAuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkR3JvdXAoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUdyb3VwKGdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdyb3Vwcy5pbmRleE9mKGdyb3VwKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5ncm91cHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19