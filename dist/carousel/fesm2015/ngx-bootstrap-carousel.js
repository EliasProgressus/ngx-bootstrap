import { Injectable, Component, EventEmitter, Input, NgZone, Output, HostBinding, NgModule } from '@angular/core';
import { isBs3, LinkedList } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CarouselConfig {
    constructor() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        /**
         * Show carousel-indicators
         */
        this.showIndicators = true;
    }
}
CarouselConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        this._slides = new LinkedList();
        this.destroyed = false;
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        const /** @type {?} */ remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            let /** @type {?} */ nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(() => {
                this._select(nextSlideIndex);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            const /** @type {?} */ currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout(() => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }, 0);
        }
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        this.activeSlide = index;
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex((slide) => slide.active);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        let /** @type {?} */ nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        const /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        const /** @type {?} */ nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        const /** @type {?} */ interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(() => {
                return setInterval(() => {
                    const /** @type {?} */ nInterval = +this.interval;
                    this.ngZone.run(() => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlide();
                        }
                        else {
                            this.pause();
                        }
                    });
                }, interval);
            });
        }
    }
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\r\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\r\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\r\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\r\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\r\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig, },
    { type: NgZone, },
];
CarouselComponent.propDecorators = {
    "noWrap": [{ type: Input },],
    "noPause": [{ type: Input },],
    "showIndicators": [{ type: Input },],
    "activeSlideChange": [{ type: Output },],
    "activeSlide": [{ type: Input },],
    "interval": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SlideComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CarouselComponent, CarouselModule, SlideComponent, CarouselConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jYXJvdXNlbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC9jYXJvdXNlbC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nhcm91c2VsL3NsaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb25maWcge1xyXG4gIC8qKiBEZWZhdWx0IGludGVydmFsIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzICovXHJcbiAgaW50ZXJ2YWwgPSA1MDAwO1xyXG5cclxuICAvKiogSXMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlcyBjYW4gYmUgcGF1c2VkICovXHJcbiAgbm9QYXVzZSA9IGZhbHNlO1xyXG5cclxuICAvKiogSXMgc2xpZGVzIGNhbiB3cmFwIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0IHNsaWRlICovXHJcbiAgbm9XcmFwID0gZmFsc2U7XHJcblxyXG4gIC8qKiBTaG93IGNhcm91c2VsLWluZGljYXRvcnMgKi9cclxuICBzaG93SW5kaWNhdG9ycyA9IHRydWU7XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxyXG4vKioqXHJcbiAqIHBhdXNlIChub3QgeWV0IHN1cHBvcnRlZCkgKD9zdHJpbmc9J2hvdmVyJykgLSBldmVudCBncm91cCBuYW1lIHdoaWNoIHBhdXNlc1xyXG4gKiB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwsIGlmIGhvdmVyIHBhdXNlcyBvbiBtb3VzZWVudGVyIGFuZCByZXN1bWVzIG9uXHJcbiAqIG1vdXNlbGVhdmUga2V5Ym9hcmQgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP2Jvb2xlYW49dHJ1ZSkgLSBpZiBmYWxzZVxyXG4gKiBjYXJvdXNlbCB3aWxsIG5vdCByZWFjdCB0byBrZXlib2FyZCBldmVudHNcclxuICogbm90ZTogc3dpcGluZyBub3QgeWV0IHN1cHBvcnRlZFxyXG4gKi9cclxuLyoqKipcclxuICogUHJvYmxlbXM6XHJcbiAqIDEpIGlmIHdlIHNldCBhbiBhY3RpdmUgc2xpZGUgdmlhIG1vZGVsIGNoYW5nZXMsIC5hY3RpdmUgY2xhc3MgcmVtYWlucyBvbiBhXHJcbiAqIGN1cnJlbnQgc2xpZGUuXHJcbiAqIDIpIGlmIHdlIGhhdmUgb25seSBvbmUgc2xpZGUsIHdlIHNob3VsZG4ndCBzaG93IHByZXYvbmV4dCBuYXYgYnV0dG9uc1xyXG4gKiAzKSBpZiBmaXJzdCBvciBsYXN0IHNsaWRlIGlzIGFjdGl2ZSBhbmQgbm9XcmFwIGlzIHRydWUsIHRoZXJlIHNob3VsZCBiZVxyXG4gKiBcImRpc2FibGVkXCIgY2xhc3Mgb24gdGhlIG5hdiBidXR0b25zLlxyXG4gKiA0KSBkZWZhdWx0IGludGVydmFsIHNob3VsZCBiZSBlcXVhbCA1MDAwXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzQnMzLCBMaW5rZWRMaXN0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbENvbmZpZyB9IGZyb20gJy4vY2Fyb3VzZWwuY29uZmlnJztcclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgVU5LTk9XTixcclxuICBORVhULFxyXG4gIFBSRVZcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgZWxlbWVudCB0byBjcmVhdGUgY2Fyb3VzZWxcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogSWYgYHRydWVgIMOiwoDClCBjYXJvdXNlbCB3aWxsIG5vdCBjeWNsZSBjb250aW51b3VzbHkgYW5kIHdpbGwgaGF2ZSBoYXJkIHN0b3BzIChwcmV2ZW50IGxvb3BpbmcpICovXHJcbiAgQElucHV0KCkgbm9XcmFwOiBib29sZWFuO1xyXG4gIC8qKiAgSWYgYHRydWVgIMOiwoDClCB3aWxsIGRpc2FibGUgcGF1c2luZyBvbiBjYXJvdXNlbCBtb3VzZSBob3ZlciAqL1xyXG4gIEBJbnB1dCgpIG5vUGF1c2U6IGJvb2xlYW47XHJcbiAgLyoqICBJZiBgdHJ1ZWAgw6LCgMKUIGNhcm91c2VsLWluZGljYXRvcnMgYXJlIHZpc2libGUgICovXHJcbiAgQElucHV0KCkgc2hvd0luZGljYXRvcnM6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBhY3RpdmUgc2xpZGUgaGFzIGJlZW4gY2hhbmdlZC4gUGFydCBvZiB0d28td2F5LWJpbmRhYmxlIFsoYWN0aXZlU2xpZGUpXSBwcm9wZXJ0eSAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGFjdGl2ZVNsaWRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPihmYWxzZSk7XHJcblxyXG4gIC8qKiBJbmRleCBvZiBjdXJyZW50bHkgZGlzcGxheWVkIHNsaWRlKHN0YXJ0ZWQgZm9yIDApICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYWN0aXZlU2xpZGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggJiYgaW5kZXggIT09IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3QoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZVNsaWRlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsYXkgb2YgaXRlbSBjeWNsaW5nIGluIG1pbGxpc2Vjb25kcy4gSWYgZmFsc2UsIGNhcm91c2VsIHdvbid0IGN5Y2xlXHJcbiAgICogYXV0b21hdGljYWxseS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpbnRlcnZhbCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xyXG4gIH1cclxuXHJcbiAgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XHJcbiAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9zbGlkZXMudG9BcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByb3RlY3RlZCBjdXJyZW50SW50ZXJ2YWw6IGFueTtcclxuICBwcm90ZWN0ZWQgX2N1cnJlbnRBY3RpdmVTbGlkZTogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfaW50ZXJ2YWw6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3NsaWRlczogTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4gPSBuZXcgTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4oKTtcclxuICBwcm90ZWN0ZWQgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYXJvdXNlbENvbmZpZywgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIG5ldyBzbGlkZS4gSWYgdGhpcyBzbGlkZSBpcyBmaXJzdCBpbiBjb2xsZWN0aW9uIC0gc2V0IGl0IGFzIGFjdGl2ZVxyXG4gICAqIGFuZCBzdGFydHMgYXV0byBjaGFuZ2luZ1xyXG4gICAqIEBwYXJhbSBzbGlkZVxyXG4gICAqL1xyXG4gIGFkZFNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2xpZGVzLmFkZChzbGlkZSk7XHJcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSB2b2lkIDA7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSAwO1xyXG4gICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgc3BlY2lmaWVkIHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGFjdGl2ZSAtIHdpbGwgcm9sbCB0byBhbm90aGVyXHJcbiAgICogc2xpZGVcclxuICAgKiBAcGFyYW0gc2xpZGVcclxuICAgKi9cclxuICByZW1vdmVTbGlkZShzbGlkZTogU2xpZGVDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlbUluZGV4ID0gdGhpcy5fc2xpZGVzLmluZGV4T2Yoc2xpZGUpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPT09IHJlbUluZGV4KSB7XHJcbiAgICAgIC8vIHJlbW92aW5nIG9mIGFjdGl2ZSBzbGlkZVxyXG4gICAgICBsZXQgbmV4dFNsaWRlSW5kZXg6IG51bWJlciA9IHZvaWQgMDtcclxuICAgICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgLy8gaWYgdGhpcyBzbGlkZSBsYXN0IC0gd2lsbCByb2xsIHRvIGZpcnN0IHNsaWRlLCBpZiBub1dyYXAgZmxhZyBpc1xyXG4gICAgICAgIC8vIEZBTFNFIG9yIHRvIHByZXZpb3VzLCBpZiBub1dyYXAgaXMgVFJVRSBpbiBjYXNlLCBpZiB0aGlzIHNsaWRlIGluXHJcbiAgICAgICAgLy8gbWlkZGxlIG9mIGNvbGxlY3Rpb24sIGluZGV4IG9mIG5leHQgc2xpZGUgaXMgc2FtZSB0byByZW1vdmVkXHJcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QocmVtSW5kZXgpXHJcbiAgICAgICAgICA/IHJlbUluZGV4XHJcbiAgICAgICAgICA6IHRoaXMubm9XcmFwID8gcmVtSW5kZXggLSAxIDogMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcclxuXHJcbiAgICAgIC8vIHByZXZlbnRzIGV4Y2VwdGlvbiB3aXRoIGNoYW5naW5nIHNvbWUgdmFsdWUgYWZ0ZXIgY2hlY2tpbmdcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0KG5leHRTbGlkZUluZGV4KTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTbGlkZUluZGV4KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGFmdGVyIHJlbW92aW5nLCBuZWVkIHRvIGFjdHVhbGl6ZSBpbmRleCBvZiBjdXJyZW50IGFjdGl2ZSBzbGlkZVxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUluZGV4O1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvbGxpbmcgdG8gbmV4dCBzbGlkZVxyXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xyXG4gICAqL1xyXG4gIG5leHRTbGlkZShmb3JjZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvbGxpbmcgdG8gcHJldmlvdXMgc2xpZGVcclxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiB0cnVlIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWdcclxuICAgKi9cclxuICBwcmV2aW91c1NsaWRlKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uUFJFViwgZm9yY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUm9sbGluZyB0byBzcGVjaWZpZWQgc2xpZGVcclxuICAgKiBAcGFyYW0gaW5kZXg6IHtudW1iZXJ9IGluZGV4IG9mIHNsaWRlLCB3aGljaCBtdXN0IGJlIHNob3duXHJcbiAgICovXHJcbiAgc2VsZWN0U2xpZGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwbGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xyXG4gICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyBhIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXHJcbiAgICovXHJcbiAgcGF1c2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubm9QYXVzZSkge1xyXG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIGFuZCByZXR1cm5zIGluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGVcclxuICAgKi9cclxuICBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcy5maW5kSW5kZXgoKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4gc2xpZGUuYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZXMsIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBsYXN0IGluIGNvbGxlY3Rpb25cclxuICAgKiBAcGFyYW0gaW5kZXhcclxuICAgKi9cclxuICBpc0xhc3QoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGluZGV4ICsgMSA+PSB0aGlzLl9zbGlkZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcyBuZXh0IHNsaWRlIGluZGV4LCBkZXBlbmRpbmcgb2YgZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvbjogRGlyZWN0aW9uKFVOS05PV058UFJFVnxORVhUKVxyXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIFRSVUUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZywgZWxzZSB3aWxsXHJcbiAgICogICByZXR1cm4gdW5kZWZpbmVkIGlmIG5leHQgc2xpZGUgcmVxdWlyZSB3cmFwcGluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbjogRGlyZWN0aW9uLCBmb3JjZTogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBsZXQgbmV4dFNsaWRlSW5kZXggPSAwO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWZvcmNlICYmXHJcbiAgICAgICh0aGlzLmlzTGFzdCh0aGlzLmFjdGl2ZVNsaWRlKSAmJlxyXG4gICAgICAgIGRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLlBSRVYgJiZcclxuICAgICAgICB0aGlzLm5vV3JhcClcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLk5FWFQ6XHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBsYXN0IHNsaWRlLCBub3QgZm9yY2UsIGxvb3BpbmcgaXMgZGlzYWJsZWRcclxuICAgICAgICAvLyBhbmQgbmVlZCB0byBnb2luZyBmb3J3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxyXG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gIXRoaXMuaXNMYXN0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSlcclxuICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlICsgMVxyXG4gICAgICAgICAgOiAhZm9yY2UgJiYgdGhpcy5ub1dyYXAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgOiAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5QUkVWOlxyXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgZmlyc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZFxyXG4gICAgICAgIC8vIGFuZCBuZWVkIHRvIGdvaW5nIGJhY2t3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxyXG4gICAgICAgIG5leHRTbGlkZUluZGV4ID1cclxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA+IDBcclxuICAgICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgLSAxXHJcbiAgICAgICAgICAgIDogIWZvcmNlICYmIHRoaXMubm9XcmFwXHJcbiAgICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlXHJcbiAgICAgICAgICAgIDogdGhpcy5fc2xpZGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGRpcmVjdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0U2xpZGVJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBzbGlkZSwgd2hpY2ggc3BlY2lmaWVkIHRocm91Z2ggaW5kZXgsIGFzIGFjdGl2ZVxyXG4gICAqIEBwYXJhbSBpbmRleFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NlbGVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOYU4oaW5kZXgpKSB7XHJcbiAgICAgIHRoaXMucGF1c2UoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcclxuICAgIGlmIChjdXJyZW50U2xpZGUpIHtcclxuICAgICAgY3VycmVudFNsaWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldChpbmRleCk7XHJcbiAgICBpZiAobmV4dFNsaWRlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGluZGV4O1xyXG4gICAgICBuZXh0U2xpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IGluZGV4O1xyXG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwcml2YXRlIHJlc3RhcnRUaW1lcigpIHtcclxuICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcclxuICAgIGlmICghaXNOYU4oaW50ZXJ2YWwpICYmIGludGVydmFsID4gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbkludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgJiZcclxuICAgICAgICAgICAgICAhaXNOYU4odGhpcy5pbnRlcnZhbCkgJiZcclxuICAgICAgICAgICAgICBuSW50ZXJ2YWwgPiAwICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5zbGlkZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBpbnRlcnZhbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVzZXRUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbnRlcnZhbCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY3VycmVudEludGVydmFsKTtcclxuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSB2b2lkIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbGlkZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJyFhY3RpdmUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIElzIGN1cnJlbnQgc2xpZGUgYWN0aXZlICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBJbnB1dCgpXHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG5cclxuICAvKiogV3JhcHMgZWxlbWVudCBieSBhcHByb3ByaWF0ZSBDU1MgY2xhc3NlcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtJylcclxuICBhZGRDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKiBMaW5rIHRvIFBhcmVudChjb250YWluZXItY29sbGVjdGlvbikgY29tcG9uZW50ICovXHJcbiAgcHJvdGVjdGVkIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoY2Fyb3VzZWw6IENhcm91c2VsQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XHJcbiAgfVxyXG5cclxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciBhZGRpbmcgYSBuZXcgc2xpZGUgaW5zdGFuY2UgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwuYWRkU2xpZGUodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciByZW1vdmluZyBvZiB0aGlzIHNsaWRlIGluc3RhbmNlICovXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcm91c2VsLnJlbW92ZVNsaWRlKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbENvbmZpZyB9IGZyb20gJy4vY2Fyb3VzZWwuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2xpZGVDb21wb25lbnQsIENhcm91c2VsQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU2xpZGVDb21wb25lbnQsIENhcm91c2VsQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtDYXJvdXNlbENvbmZpZ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBDYXJvdXNlbE1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7d0JBS2EsSUFBSTs7Ozt1QkFHTCxLQUFLOzs7O3NCQUdOLEtBQUs7Ozs7OEJBR0csSUFBSTs7OztZQVp0QixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUNYOzs7OztJQXNERSxZQUFZLE1BQXNCLEVBQVUsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7aUNBNUNoQixJQUFJLFlBQVksQ0FBUyxLQUFLLENBQUM7dUJBb0N6QixJQUFJLFVBQVUsRUFBa0I7eUJBRTFELEtBQUs7UUFPekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7Ozs7OztRQTFDRyxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFL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