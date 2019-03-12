/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class TooltipContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
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
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap["in"] = true;
        if (this.animation) {
            this.classMap["fade"] = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
                styles: [`
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `]
            }] }
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig, },
];
function TooltipContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TooltipContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TooltipContainerComponent.ctorParameters;
    /** @type {?} */
    TooltipContainerComponent.prototype.classMap;
    /** @type {?} */
    TooltipContainerComponent.prototype.placement;
    /** @type {?} */
    TooltipContainerComponent.prototype.containerClass;
    /** @type {?} */
    TooltipContainerComponent.prototype.animation;
    /** @type {?} */
    TooltipContainerComponent.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBdUM1QyxNQUFNOzs7O0lBV0osWUFBWSxNQUFxQjtRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7OztJQU5ELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7OztJQU1ELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsU0FBTSxJQUFJLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsV0FBUSxJQUFJLENBQUM7U0FDM0I7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7S0FDRjs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQ1AsOEdBQThHO29CQUNoSCxjQUFjLEVBQUUsUUFBUTtvQkFDeEIsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLFdBQVcsRUFBRSxTQUFTO29CQUN0QixJQUFJLEVBQUUsU0FBUztpQkFDaEI7Z0JBcUJELFFBQVEsRUFBRTs7O0tBR1A7eUJBdEJEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRDthQU1GOzs7O1lBdkNRLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtdG9vbHRpcC1jb250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3NdJzpcclxuICAgICAgJ1widG9vbHRpcCBpbiB0b29sdGlwLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBcImJzLXRvb2x0aXAtXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIHBsYWNlbWVudCArIFwiIFwiICsgY29udGFpbmVyQ2xhc3MnLFxyXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxyXG4gICAgJ1tjbGFzcy5iczNdJzogJ2lzQnMzJyxcclxuICAgICdbYXR0ci5pZF0nOiAndGhpcy5pZCcsXHJcbiAgICByb2xlOiAndG9vbHRpcCdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QudG9vbHRpcCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy50b29sdGlwLnRvcD4uYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy50b29sdGlwLmJvdHRvbSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy10b29sdGlwLWxlZnQsIDpob3N0LmJzMy5icy10b29sdGlwLXJpZ2h0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy10b29sdGlwLXJpZ2h0IC5hcnJvdywgOmhvc3QuYnMzLmJzLXRvb2x0aXAtbGVmdCAuYXJyb3cge1xyXG4gICAgICBtYXJnaW46IC4zcmVtIDA7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93IGFycm93XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBjbGFzc01hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcclxuICBhbmltYXRpb246IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFRvb2x0aXBDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7IGluOiBmYWxzZSwgZmFkZTogZmFsc2UgfTtcclxuICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5wbGFjZW1lbnRdID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xhc3NNYXBbYHRvb2x0aXAtJHt0aGlzLnBsYWNlbWVudH1gXSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jbGFzc01hcC5pbiA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5jbGFzc01hcC5mYWRlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250YWluZXJDbGFzcykge1xyXG4gICAgICB0aGlzLmNsYXNzTWFwW3RoaXMuY29udGFpbmVyQ2xhc3NdID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19