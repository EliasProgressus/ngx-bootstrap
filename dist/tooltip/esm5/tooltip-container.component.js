/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import { isBs3 } from 'ngx-bootstrap/utils';
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
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
    TooltipContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap["tooltip-" + this.placement] = true;
        this.classMap["in"] = true;
        if (this.animation) {
            this.classMap["fade"] = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    };
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
                    template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
                    styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig, },
    ]; };
    return TooltipContainerComponent;
}());
export { TooltipContainerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQWtEMUMsbUNBQVksTUFBcUI7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7SUFORCxzQkFBSSw0Q0FBSzs7OztRQUFUO1lBQ0UsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCOzs7T0FBQTs7OztJQU1ELG1EQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFXLElBQUksQ0FBQyxTQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsU0FBTSxJQUFJLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsV0FBUSxJQUFJLENBQUM7U0FDM0I7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7S0FDRjs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7b0JBRS9DLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQ1AsOEdBQThHO3dCQUNoSCxjQUFjLEVBQUUsUUFBUTt3QkFDeEIsYUFBYSxFQUFFLE9BQU87d0JBQ3RCLFdBQVcsRUFBRSxTQUFTO3dCQUN0QixJQUFJLEVBQUUsU0FBUztxQkFDaEI7b0JBcUJELFFBQVEsRUFBRSx5SEFHUDs2QkF0QkQsMlpBaUJEO2lCQU1GOzs7O2dCQXZDUSxhQUFhOztvQ0FMdEI7O1NBNkNhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy10b29sdGlwLWNvbnRhaW5lcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzc10nOlxyXG4gICAgICAnXCJ0b29sdGlwIGluIHRvb2x0aXAtXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtdG9vbHRpcC1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBjb250YWluZXJDbGFzcycsXHJcbiAgICAnW2NsYXNzLnNob3ddJzogJyFpc0JzMycsXHJcbiAgICAnW2NsYXNzLmJzM10nOiAnaXNCczMnLFxyXG4gICAgJ1thdHRyLmlkXSc6ICd0aGlzLmlkJyxcclxuICAgIHJvbGU6ICd0b29sdGlwJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdC50b29sdGlwIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLnRvb2x0aXAudG9wPi5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLnRvb2x0aXAuYm90dG9tIHtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLmJzLXRvb2x0aXAtbGVmdCwgOmhvc3QuYnMzLmJzLXRvb2x0aXAtcmlnaHR7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLmJzLXRvb2x0aXAtcmlnaHQgLmFycm93LCA6aG9zdC5iczMuYnMtdG9vbHRpcC1sZWZ0IC5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbjogLjNyZW0gMDtcclxuICAgIH1cclxuICBgXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3cgYXJyb3dcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICBwbGFjZW1lbnQ6IHN0cmluZztcclxuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xyXG4gIGFuaW1hdGlvbjogYm9vbGVhbjtcclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHsgaW46IGZhbHNlLCBmYWRlOiBmYWxzZSB9O1xyXG4gICAgdGhpcy5jbGFzc01hcFt0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xyXG4gICAgdGhpcy5jbGFzc01hcFtgdG9vbHRpcC0ke3RoaXMucGxhY2VtZW50fWBdID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNsYXNzTWFwLmluID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICB0aGlzLmNsYXNzTWFwLmZhZGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRhaW5lckNsYXNzKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5jb250YWluZXJDbGFzc10gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=