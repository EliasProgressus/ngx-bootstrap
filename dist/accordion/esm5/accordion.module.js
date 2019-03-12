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
var AccordionModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
                    imports: [CommonModule, CollapseModule],
                    declarations: [AccordionComponent, AccordionPanelComponent],
                    exports: [AccordionComponent, AccordionPanelComponent]
                },] }
    ];
    return AccordionModule;
}());
export { AccordionModule };
function AccordionModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AccordionModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AccordionModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYWNjb3JkaW9uLyIsInNvdXJjZXMiOlsiYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7SUFRL0MsdUJBQU87OztJQUFkO1FBQ0UsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO0tBQ3BFOztnQkFSRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDdkMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUM7b0JBQzNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDO2lCQUN2RDs7MEJBYkQ7O1NBY2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29uZmlnIH0gZnJvbSAnLi9hY2NvcmRpb24uY29uZmlnJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb2xsYXBzZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3JkaW9uQ29tcG9uZW50LCBBY2NvcmRpb25QYW5lbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FjY29yZGlvbkNvbXBvbmVudCwgQWNjb3JkaW9uUGFuZWxDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEFjY29yZGlvbk1vZHVsZSwgcHJvdmlkZXJzOiBbQWNjb3JkaW9uQ29uZmlnXSB9O1xyXG4gIH1cclxufVxyXG4iXX0=