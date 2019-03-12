/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AccordionConfig } from './accordion.config';
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
export class AccordionComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBYXJELE1BQU07Ozs7SUFNSixZQUFZLE1BQXVCO3NCQUZXLEVBQUU7UUFHOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsU0FBa0M7UUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN0QjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELFFBQVEsQ0FBQyxLQUE4QjtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBOEI7UUFDeEMsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO0tBQ0Y7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSiw2QkFBNkIsRUFBRSxhQUFhO29CQUM1QyxJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsS0FBSyxFQUFFLGdCQUFnQjtpQkFDeEI7YUFDRjs7OztZQVpRLGVBQWU7Ozs0QkFlckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Db25maWcgfSBmcm9tICcuL2FjY29yZGlvbi5jb25maWcnO1xyXG5cclxuLyoqIERpc3BsYXlzIGNvbGxhcHNpYmxlIGNvbnRlbnQgcGFuZWxzIGZvciBwcmVzZW50aW5nIGluZm9ybWF0aW9uIGluIGEgbGltaXRlZCBhbW91bnQgb2Ygc3BhY2UuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci5hcmlhLW11bHRpc2VsZWN0YWJsZV0nOiAnY2xvc2VPdGhlcnMnLFxyXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxyXG4gICAgY2xhc3M6ICdwYW5lbC1ncm91cCcsXHJcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XHJcbiAgLyoqIGlmIGB0cnVlYCBleHBhbmRpbmcgb25lIGl0ZW0gd2lsbCBjbG9zZSBhbGwgb3RoZXJzICovXHJcbiAgQElucHV0KCkgY2xvc2VPdGhlcnM6IGJvb2xlYW47XHJcblxyXG4gIHByb3RlY3RlZCBncm91cHM6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBBY2NvcmRpb25Db25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGNsb3NlT3RoZXJQYW5lbHMob3Blbkdyb3VwOiBBY2NvcmRpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNsb3NlT3RoZXJzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpID0+IHtcclxuICAgICAgaWYgKGdyb3VwICE9PSBvcGVuR3JvdXApIHtcclxuICAgICAgICBncm91cC5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRHcm91cChncm91cDogQWNjb3JkaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlR3JvdXAoZ3JvdXA6IEFjY29yZGlvblBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmdyb3Vwcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=