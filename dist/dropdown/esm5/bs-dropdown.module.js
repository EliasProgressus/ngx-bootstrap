/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownConfig } from './bs-dropdown.config';
import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';
var BsDropdownModule = /** @class */ (function () {
    function BsDropdownModule() {
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?=} config
     * @return {?}
     */
    BsDropdownModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    };
    BsDropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownContainerComponent,
                        BsDropdownDirective
                    ],
                    exports: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownDirective
                    ],
                    entryComponents: [BsDropdownContainerComponent]
                },] }
    ];
    return BsDropdownModule;
}());
export { BsDropdownModule };
function BsDropdownModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kcm9wZG93bi8iLCJzb3VyY2VzIjpbImJzLWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0lBaUJwRCxrQ0FBa0M7Ozs7O0lBQzNCLHdCQUFPOzs7O0lBQWQsVUFBZSxNQUFZO1FBQ3pCLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULHNCQUFzQjtnQkFDdEIsa0JBQWtCO2dCQUNsQixlQUFlO2dCQUNmO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7aUJBQ3BFO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7O2dCQTdCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6QixtQkFBbUI7cUJBQ3BCO29CQUNELGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUNoRDs7MkJBekJEOztTQTBCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9icy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLW1lbnUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25Db25maWcgfSBmcm9tICcuL2JzLWRyb3Bkb3duLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcclxuICAgIEJzRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXHJcbiAgICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUsXHJcbiAgICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgQnNEcm9wZG93bkRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25Nb2R1bGUge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCc0Ryb3Bkb3duTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgICAgIFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgICAgICBCc0Ryb3Bkb3duU3RhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogQnNEcm9wZG93bkNvbmZpZyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWcgPyBjb25maWcgOiB7IGF1dG9DbG9zZTogdHJ1ZSwgaW5zaWRlQ2xpY2s6IGZhbHNlIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==