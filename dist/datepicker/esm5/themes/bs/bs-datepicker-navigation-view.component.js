/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
var BsDatepickerNavigationViewComponent = /** @class */ (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.navTo = /**
     * @param {?} down
     * @return {?}
     */
    function (down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    };
    /**
     * @param {?} viewMode
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.view = /**
     * @param {?} viewMode
     * @return {?}
     */
    function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDatepickerNavigationViewComponent.propDecorators = {
        "calendar": [{ type: Input },],
        "onNavigate": [{ type: Output },],
        "onViewMode": [{ type: Output },],
    };
    return BsDatepickerNavigationViewComponent;
}());
export { BsDatepickerNavigationViewComponent };
function BsDatepickerNavigationViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerNavigationViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerNavigationViewComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDatepickerNavigationViewComponent.propDecorators;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.calendar;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDatepickerNavigationViewComponent.prototype.onViewMode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLHFCQUFxQixFQUV0QixNQUFNLGNBQWMsQ0FBQzs7OzBCQXdDRyxJQUFJLFlBQVksRUFBeUI7MEJBQ3pDLElBQUksWUFBWSxFQUF3Qjs7Ozs7O0lBRS9ELG1EQUFLOzs7O0lBQUwsVUFBTSxJQUFhO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUM3RCxDQUFDO0tBQ0g7Ozs7O0lBRUQsa0RBQUk7Ozs7SUFBSixVQUFLLFFBQThCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsMnBDQThCVDtpQkFDRjs7Ozs2QkFFRSxLQUFLOytCQUVMLE1BQU07K0JBQ04sTUFBTTs7OENBcERUOztTQWdEYSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3JyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInByZXZpb3VzXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3dcIlxyXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlTGVmdEFycm93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8odHJ1ZSlcIj48c3Bhbj4mbHNhcXVvOzwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxyXG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImNhbGVuZGFyLm1vbnRoVGl0bGVcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidmlldygnbW9udGgnKVwiXHJcbiAgICA+PHNwYW4+e3sgY2FsZW5kYXIubW9udGhUaXRsZSB9fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxyXG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIiAoY2xpY2spPVwidmlldygneWVhcicpXCJcclxuICAgID48c3Bhbj57eyBjYWxlbmRhci55ZWFyVGl0bGUgfX08L3NwYW4+PC9idXR0b24+XHJcblxyXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XHJcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibmV4dFwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvd1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVSaWdodEFycm93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8oZmFsc2UpXCI+PHNwYW4+JnJzYXF1bzs8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkRpcmVjdGlvbj4oKTtcclxuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XHJcblxyXG4gIG5hdlRvKGRvd246IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KFxyXG4gICAgICBkb3duID8gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gOiBCc05hdmlnYXRpb25EaXJlY3Rpb24uVVBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2aWV3KHZpZXdNb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQodmlld01vZGUpO1xyXG4gIH1cclxufVxyXG4iXX0=