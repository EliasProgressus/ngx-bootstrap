/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
export class SlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[attr.aria-hidden]': '!active'
                }
            }] }
];
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent, },
];
SlideComponent.propDecorators = {
    "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
    "addClass": [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] },],
};
function SlideComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SlideComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SlideComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SlideComponent.propDecorators;
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.addClass;
    /**
     * Link to Parent(container-collection) component
     * @type {?}
     */
    SlideComponent.prototype.carousel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVgsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBYXpELE1BQU07Ozs7SUFjSixZQUFZLFFBQTJCOzs7O3dCQUw1QixJQUFJO1FBTWIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Ozs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOzs7OztJQUdELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLFNBQVM7aUJBQ2hDO2FBQ0Y7Ozs7WUFaUSxpQkFBaUI7Ozt1QkFldkIsV0FBVyxTQUFDLGNBQWMsY0FDMUIsS0FBSzt5QkFJTCxXQUFXLFNBQUMsWUFBWSxjQUN4QixXQUFXLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NsaWRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnIWFjdGl2ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKiogSXMgY3VycmVudCBzbGlkZSBhY3RpdmUgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQElucHV0KClcclxuICBhY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBXcmFwcyBlbGVtZW50IGJ5IGFwcHJvcHJpYXRlIENTUyBjbGFzc2VzICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJylcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0nKVxyXG4gIGFkZENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgLyoqIExpbmsgdG8gUGFyZW50KGNvbnRhaW5lci1jb2xsZWN0aW9uKSBjb21wb25lbnQgKi9cclxuICBwcm90ZWN0ZWQgY2Fyb3VzZWw6IENhcm91c2VsQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQpIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwgPSBjYXJvdXNlbDtcclxuICB9XHJcblxyXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIGFkZGluZyBhIG5ldyBzbGlkZSBpbnN0YW5jZSAqL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXJvdXNlbC5hZGRTbGlkZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiBGaXJlcyBjaGFuZ2VzIGluIGNvbnRhaW5lciBjb2xsZWN0aW9uIGFmdGVyIHJlbW92aW5nIG9mIHRoaXMgc2xpZGUgaW5zdGFuY2UgKi9cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwucmVtb3ZlU2xpZGUodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==