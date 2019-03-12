/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class PopoverContainerComponent {
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
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\r\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\r\n<div class=\"popover-content popover-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            }] }
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig, },
];
PopoverContainerComponent.propDecorators = {
    "placement": [{ type: Input },],
    "title": [{ type: Input },],
};
function PopoverContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PopoverContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PopoverContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PopoverContainerComponent.propDecorators;
    /** @type {?} */
    PopoverContainerComponent.prototype.placement;
    /** @type {?} */
    PopoverContainerComponent.prototype.title;
    /** @type {?} */
    PopoverContainerComponent.prototype.containerClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyLyIsInNvdXJjZXMiOlsicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBc0M1QyxNQUFNOzs7O0lBU0osWUFBWSxNQUFxQjtRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7OztJQU5ELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQ1AsOEdBQThHO29CQUNoSCxjQUFjLEVBQUUsUUFBUTtvQkFDeEIsYUFBYSxFQUFFLE9BQU87b0JBQ3RCLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxnQkFBZ0I7aUJBQ3hCO2dCQXVCRCxpT0FBaUQ7eUJBckIvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CQzthQUdKOzs7O1lBdENRLGFBQWE7OzswQkF3Q25CLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3NdJzpcclxuICAgICAgJ1wicG9wb3ZlciBpbiBwb3BvdmVyLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBcImJzLXBvcG92ZXItXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIHBsYWNlbWVudCArIFwiIFwiICsgY29udGFpbmVyQ2xhc3MnLFxyXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxyXG4gICAgJ1tjbGFzcy5iczNdJzogJ2lzQnMzJyxcclxuICAgIHJvbGU6ICd0b29sdGlwJyxcclxuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jazsnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIDpob3N0LmJzMy5wb3BvdmVyLXRvcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3A+LmFycm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3Age1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QucG9wb3Zlci5ib3R0b20+LmFycm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMuYnMtcG9wb3Zlci1sZWZ0IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdywgOmhvc3QuYnMzLmJzLXBvcG92ZXItbGVmdCAuYXJyb3d7XHJcbiAgICAgIG1hcmdpbjogLjNyZW0gMDtcclxuICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFBvcG92ZXJDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICB9XHJcbn1cclxuIl19