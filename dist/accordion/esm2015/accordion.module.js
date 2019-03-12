/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionConfig } from './accordion.config';
import { AccordionPanelComponent } from './accordion-group.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
export class AccordionModule {
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
function AccordionModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AccordionModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AccordionModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPeEQsTUFBTTs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPO1FBQ1osTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO0tBQ3BFOzs7WUFSRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztnQkFDdkMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDO2FBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6IG1heC1jbGFzc2VzLXBlci1maWxlICovXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Db25maWcgfSBmcm9tICcuL2FjY29yZGlvbi5jb25maWcnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb2xsYXBzZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvbGxhcHNlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBY2NvcmRpb25Db21wb25lbnQsIEFjY29yZGlvblBhbmVsQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBBY2NvcmRpb25QYW5lbENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQWNjb3JkaW9uTW9kdWxlLCBwcm92aWRlcnM6IFtBY2NvcmRpb25Db25maWddIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==