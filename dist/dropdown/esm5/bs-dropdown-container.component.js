/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { isBs3 } from 'ngx-bootstrap/utils';
var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state, cd, _renderer, _element) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            var /** @type {?} */ dropdown = _this._element.nativeElement.querySelector('.dropdown-menu');
            if (dropdown && !isBs3()) {
                _this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    _this._renderer.setStyle(dropdown, 'left', 'auto');
                    _this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (_this.direction === 'up') {
                    _this._renderer.setStyle(dropdown, 'top', 'auto');
                    _this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    BsDropdownContainerComponent.prototype._contains = /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    function (el) {
        return this._element.nativeElement.contains(el);
    };
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState, },
        { type: ChangeDetectorRef, },
        { type: Renderer2, },
        { type: ElementRef, },
    ]; };
    return BsDropdownContainerComponent;
}());
export { BsDropdownContainerComponent };
function BsDropdownContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownContainerComponent.ctorParameters;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.isOpen;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._subscription;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._state;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.cd;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._renderer;
    /** @type {?} */
    BsDropdownContainerComponent.prototype._element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vIiwic291cmNlcyI6WyJicy1kcm9wZG93bi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQXlCMUMsc0NBQ1UsUUFDQSxJQUNBLFdBQ0E7UUFKVixpQkEyQkM7UUExQlMsV0FBTSxHQUFOLE1BQU07UUFDTixPQUFFLEdBQUYsRUFBRTtRQUNGLGNBQVMsR0FBVCxTQUFTO1FBQ1QsYUFBUSxHQUFSLFFBQVE7c0JBYlQsS0FBSztRQWVaLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFjO1lBQ2hFLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLHFCQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3RSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDMUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLFFBQVEsRUFDUixXQUFXLEVBQ1gsbUJBQW1CLENBQ3BCLENBQUM7aUJBQ0g7YUFDRjtZQUNELEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSjtJQWxDRCxzQkFBSSxtREFBUzs7OztRQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1NBQzlCOzs7T0FBQTtJQWtDRCxnQkFBZ0I7Ozs7OztJQUNoQixnREFBUzs7Ozs7SUFBVCxVQUFVLEVBQVc7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqRDs7OztJQUVELGtEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbEM7O2dCQTNERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsbUNBQW1DO3FCQUMzQztvQkFDRCxRQUFRLEVBQUUsOE1BS1Q7aUJBQ0Y7Ozs7Z0JBZlEsZUFBZTtnQkFOdEIsaUJBQWlCO2dCQUlqQixTQUFTO2dCQUZULFVBQVU7O3VDQUpaOztTQXdCYSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9icy1kcm9wZG93bi5zdGF0ZSc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRyb3Bkb3duLWNvbnRhaW5lcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgc3R5bGU6ICdkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOiBhYnNvbHV0ZTsnXHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbY2xhc3MuZHJvcHVwXT1cImRpcmVjdGlvbiA9PT0gJ3VwJ1wiXHJcbiAgICAgICAgIFtjbGFzcy5kcm9wZG93bl09XCJkaXJlY3Rpb24gPT09ICdkb3duJ1wiXHJcbiAgICAgICAgIFtjbGFzcy5zaG93XT1cImlzT3BlblwiXHJcbiAgICAgICAgIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGRpcmVjdGlvbigpOiAnZG93bicgfCAndXAnIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5kaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcclxuICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcclxuICAgICAgaWYgKGRyb3Bkb3duICYmICFpc0JzMygpKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZHJvcGRvd24sICdzaG93Jyk7XHJcbiAgICAgICAgaWYgKGRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tbWVudS1yaWdodCcpKSB7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkcm9wZG93biwgJ2xlZnQnLCAnYXV0bycpO1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICdyaWdodCcsICcwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3VwJykge1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZHJvcGRvd24sICd0b3AnLCAnYXV0bycpO1xyXG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICAgIGRyb3Bkb3duLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZVkoLTEwMSUpJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfY29udGFpbnMoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZWwpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19