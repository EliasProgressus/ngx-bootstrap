/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:max-file-line-count
/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { isBs3, LinkedList } from 'ngx-bootstrap/utils';
import { CarouselConfig } from './carousel.config';
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
export { Direction };
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        this._slides = new LinkedList();
        this.destroyed = false;
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        set: /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        var /** @type {?} */ remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            var /** @type {?} */ nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var /** @type {?} */ currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.activeSlide = index;
    };
    /**
     * Starts a auto changing of slides
     */
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * Starts a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * Stops a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     */
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        var /** @type {?} */ nextSlideIndex = 0;
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
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var /** @type {?} */ nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        var /** @type {?} */ interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(function () {
                return setInterval(function () {
                    var /** @type {?} */ nInterval = +_this.interval;
                    _this.ngZone.run(function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlide();
                        }
                        else {
                            _this.pause();
                        }
                    });
                }, interval);
            });
        }
    };
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\r\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\r\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\r\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\r\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\r\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig, },
        { type: NgZone, },
    ]; };
    CarouselComponent.propDecorators = {
        "noWrap": [{ type: Input },],
        "noPause": [{ type: Input },],
        "showIndicators": [{ type: Input },],
        "activeSlideChange": [{ type: Output },],
        "activeSlide": [{ type: Input },],
        "interval": [{ type: Input },],
    };
    return CarouselComponent;
}());
export { CarouselComponent };
function CarouselComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CarouselComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CarouselComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CarouselComponent.propDecorators;
    /**
     * If `true` — carousel will not cycle continuously and will have hard stops (prevent looping)
     * @type {?}
     */
    CarouselComponent.prototype.noWrap;
    /**
     * If `true` — will disable pausing on carousel mouse hover
     * @type {?}
     */
    CarouselComponent.prototype.noPause;
    /**
     * If `true` — carousel-indicators are visible
     * @type {?}
     */
    CarouselComponent.prototype.showIndicators;
    /**
     * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
     * @type {?}
     */
    CarouselComponent.prototype.activeSlideChange;
    /** @type {?} */
    CarouselComponent.prototype.currentInterval;
    /** @type {?} */
    CarouselComponent.prototype._currentActiveSlide;
    /** @type {?} */
    CarouselComponent.prototype._interval;
    /** @type {?} */
    CarouselComponent.prototype._slides;
    /** @type {?} */
    CarouselComponent.prototype.isPlaying;
    /** @type {?} */
    CarouselComponent.prototype.destroyed;
    /** @type {?} */
    CarouselComponent.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTyxFQUNMLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQzFELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFxRWpELDJCQUFZLE1BQXNCLEVBQVUsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7aUNBNUNoQixJQUFJLFlBQVksQ0FBUyxLQUFLLENBQUM7dUJBb0N6QixJQUFJLFVBQVUsRUFBa0I7eUJBRTFELEtBQUs7UUFPekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7MEJBMUNHLDBDQUFXOzs7O1FBTWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDOzs7Ozs7a0JBUmUsS0FBYTtZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjs7Ozs7MEJBWUMsdUNBQVE7Ozs7Ozs7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O1FBR3hCLFVBQWEsS0FBYTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxF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RSxDQUFDO3lCQUNsQjt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ2Q7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNKLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDZCxDQUFDLENBQUM7U0FDSjs7Ozs7O0lBTUssc0NBQVU7Ozs7O1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUMvQjs7O2dCQW5SSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHdpQ0FBd0M7aUJBQ3pDOzs7O2dCQWRRLGNBQWM7Z0JBTFcsTUFBTTs7OzJCQXNCckMsS0FBSzs0QkFFTCxLQUFLO21DQUVMLEtBQUs7c0NBR0wsTUFBTTtnQ0FJTixLQUFLOzZCQWVMLEtBQUs7OzRCQW5FUjs7U0F1Q2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudFxyXG4vKioqXHJcbiAqIHBhdXNlIChub3QgeWV0IHN1cHBvcnRlZCkgKD9zdHJpbmc9J2hvdmVyJykgLSBldmVudCBncm91cCBuYW1lIHdoaWNoIHBhdXNlc1xyXG4gKiB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwsIGlmIGhvdmVyIHBhdXNlcyBvbiBtb3VzZWVudGVyIGFuZCByZXN1bWVzIG9uXHJcbiAqIG1vdXNlbGVhdmUga2V5Ym9hcmQgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP2Jvb2xlYW49dHJ1ZSkgLSBpZiBmYWxzZVxyXG4gKiBjYXJvdXNlbCB3aWxsIG5vdCByZWFjdCB0byBrZXlib2FyZCBldmVudHNcclxuICogbm90ZTogc3dpcGluZyBub3QgeWV0IHN1cHBvcnRlZFxyXG4gKi9cclxuLyoqKipcclxuICogUHJvYmxlbXM6XHJcbiAqIDEpIGlmIHdlIHNldCBhbiBhY3RpdmUgc2xpZGUgdmlhIG1vZGVsIGNoYW5nZXMsIC5hY3RpdmUgY2xhc3MgcmVtYWlucyBvbiBhXHJcbiAqIGN1cnJlbnQgc2xpZGUuXHJcbiAqIDIpIGlmIHdlIGhhdmUgb25seSBvbmUgc2xpZGUsIHdlIHNob3VsZG4ndCBzaG93IHByZXYvbmV4dCBuYXYgYnV0dG9uc1xyXG4gKiAzKSBpZiBmaXJzdCBvciBsYXN0IHNsaWRlIGlzIGFjdGl2ZSBhbmQgbm9XcmFwIGlzIHRydWUsIHRoZXJlIHNob3VsZCBiZVxyXG4gKiBcImRpc2FibGVkXCIgY2xhc3Mgb24gdGhlIG5hdiBidXR0b25zLlxyXG4gKiA0KSBkZWZhdWx0IGludGVydmFsIHNob3VsZCBiZSBlcXVhbCA1MDAwXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzQnMzLCBMaW5rZWRMaXN0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbENvbmZpZyB9IGZyb20gJy4vY2Fyb3VzZWwuY29uZmlnJztcclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgVU5LTk9XTixcclxuICBORVhULFxyXG4gIFBSRVZcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgZWxlbWVudCB0byBjcmVhdGUgY2Fyb3VzZWxcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogSWYgYHRydWVgIOKAlCBjYXJvdXNlbCB3aWxsIG5vdCBjeWNsZSBjb250aW51b3VzbHkgYW5kIHdpbGwgaGF2ZSBoYXJkIHN0b3BzIChwcmV2ZW50IGxvb3BpbmcpICovXHJcbiAgQElucHV0KCkgbm9XcmFwOiBib29sZWFuO1xyXG4gIC8qKiAgSWYgYHRydWVgIOKAlCB3aWxsIGRpc2FibGUgcGF1c2luZyBvbiBjYXJvdXNlbCBtb3VzZSBob3ZlciAqL1xyXG4gIEBJbnB1dCgpIG5vUGF1c2U6IGJvb2xlYW47XHJcbiAgLyoqICBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsLWluZGljYXRvcnMgYXJlIHZpc2libGUgICovXHJcbiAgQElucHV0KCkgc2hvd0luZGljYXRvcnM6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBhY3RpdmUgc2xpZGUgaGFzIGJlZW4gY2hhbmdlZC4gUGFydCBvZiB0d28td2F5LWJpbmRhYmxlIFsoYWN0aXZlU2xpZGUpXSBwcm9wZXJ0eSAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGFjdGl2ZVNsaWRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPihmYWxzZSk7XHJcblxyXG4gIC8qKiBJbmRleCBvZiBjdXJyZW50bHkgZGlzcGxheWVkIHNsaWRlKHN0YXJ0ZWQgZm9yIDApICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYWN0aXZlU2xpZGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggJiYgaW5kZXggIT09IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3QoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZVNsaWRlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsYXkgb2YgaXRlbSBjeWNsaW5nIGluIG1pbGxpc2Vjb25kcy4gSWYgZmFsc2UsIGNhcm91c2VsIHdvbid0IGN5Y2xlXHJcbiAgICogYXV0b21hdGljYWxseS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpbnRlcnZhbCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xyXG4gIH1cclxuXHJcbiAgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XHJcbiAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9zbGlkZXMudG9BcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByb3RlY3RlZCBjdXJyZW50SW50ZXJ2YWw6IGFueTtcclxuICBwcm90ZWN0ZWQgX2N1cnJlbnRBY3RpdmVTbGlkZTogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfaW50ZXJ2YWw6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX3NsaWRlczogTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4gPSBuZXcgTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4oKTtcclxuICBwcm90ZWN0ZWQgaXNQbGF5aW5nOiBib29sZWFuO1xyXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYXJvdXNlbENvbmZpZywgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIG5ldyBzbGlkZS4gSWYgdGhpcyBzbGlkZSBpcyBmaXJzdCBpbiBjb2xsZWN0aW9uIC0gc2V0IGl0IGFzIGFjdGl2ZVxyXG4gICAqIGFuZCBzdGFydHMgYXV0byBjaGFuZ2luZ1xyXG4gICAqIEBwYXJhbSBzbGlkZVxyXG4gICAqL1xyXG4gIGFkZFNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2xpZGVzLmFkZChzbGlkZSk7XHJcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSB2b2lkIDA7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSAwO1xyXG4gICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgc3BlY2lmaWVkIHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGFjdGl2ZSAtIHdpbGwgcm9sbCB0byBhbm90aGVyXHJcbiAgICogc2xpZGVcclxuICAgKiBAcGFyYW0gc2xpZGVcclxuICAgKi9cclxuICByZW1vdmVTbGlkZShzbGlkZTogU2xpZGVDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlbUluZGV4ID0gdGhpcy5fc2xpZGVzLmluZGV4T2Yoc2xpZGUpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPT09IHJlbUluZGV4KSB7XHJcbiAgICAgIC8vIHJlbW92aW5nIG9mIGFjdGl2ZSBzbGlkZVxyXG4gICAgICBsZXQgbmV4dFNsaWRlSW5kZXg6IG51bWJlciA9IHZvaWQgMDtcclxuICAgICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgLy8gaWYgdGhpcyBzbGlkZSBsYXN0IC0gd2lsbCByb2xsIHRvIGZpcnN0IHNsaWRlLCBpZiBub1dyYXAgZmxhZyBpc1xyXG4gICAgICAgIC8vIEZBTFNFIG9yIHRvIHByZXZpb3VzLCBpZiBub1dyYXAgaXMgVFJVRSBpbiBjYXNlLCBpZiB0aGlzIHNsaWRlIGluXHJcbiAgICAgICAgLy8gbWlkZGxlIG9mIGNvbGxlY3Rpb24sIGluZGV4IG9mIG5leHQgc2xpZGUgaXMgc2FtZSB0byByZW1vdmVkXHJcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QocmVtSW5kZXgpXHJcbiAgICAgICAgICA/IHJlbUluZGV4XHJcbiAgICAgICAgICA6IHRoaXMubm9XcmFwID8gcmVtSW5kZXggLSAxIDogMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcclxuXHJcbiAgICAgIC8vIHByZXZlbnRzIGV4Y2VwdGlvbiB3aXRoIGNoYW5naW5nIHNvbWUgdmFsdWUgYWZ0ZXIgY2hlY2tpbmdcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0KG5leHRTbGlkZUluZGV4KTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTbGlkZUluZGV4KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGFmdGVyIHJlbW92aW5nLCBuZWVkIHRvIGFjdHVhbGl6ZSBpbmRleCBvZiBjdXJyZW50IGFjdGl2ZSBzbGlkZVxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUluZGV4O1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvbGxpbmcgdG8gbmV4dCBzbGlkZVxyXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xyXG4gICAqL1xyXG4gIG5leHRTbGlkZShmb3JjZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvbGxpbmcgdG8gcHJldmlvdXMgc2xpZGVcclxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiB0cnVlIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWdcclxuICAgKi9cclxuICBwcmV2aW91c1NsaWRlKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uUFJFViwgZm9yY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUm9sbGluZyB0byBzcGVjaWZpZWQgc2xpZGVcclxuICAgKiBAcGFyYW0gaW5kZXg6IHtudW1iZXJ9IGluZGV4IG9mIHNsaWRlLCB3aGljaCBtdXN0IGJlIHNob3duXHJcbiAgICovXHJcbiAgc2VsZWN0U2xpZGUoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwbGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzUGxheWluZykge1xyXG4gICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyBhIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXHJcbiAgICovXHJcbiAgcGF1c2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubm9QYXVzZSkge1xyXG4gICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmRzIGFuZCByZXR1cm5zIGluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGVcclxuICAgKi9cclxuICBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcy5maW5kSW5kZXgoKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4gc2xpZGUuYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZXMsIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBsYXN0IGluIGNvbGxlY3Rpb25cclxuICAgKiBAcGFyYW0gaW5kZXhcclxuICAgKi9cclxuICBpc0xhc3QoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGluZGV4ICsgMSA+PSB0aGlzLl9zbGlkZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcyBuZXh0IHNsaWRlIGluZGV4LCBkZXBlbmRpbmcgb2YgZGlyZWN0aW9uXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvbjogRGlyZWN0aW9uKFVOS05PV058UFJFVnxORVhUKVxyXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIFRSVUUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZywgZWxzZSB3aWxsXHJcbiAgICogICByZXR1cm4gdW5kZWZpbmVkIGlmIG5leHQgc2xpZGUgcmVxdWlyZSB3cmFwcGluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbjogRGlyZWN0aW9uLCBmb3JjZTogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBsZXQgbmV4dFNsaWRlSW5kZXggPSAwO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIWZvcmNlICYmXHJcbiAgICAgICh0aGlzLmlzTGFzdCh0aGlzLmFjdGl2ZVNsaWRlKSAmJlxyXG4gICAgICAgIGRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLlBSRVYgJiZcclxuICAgICAgICB0aGlzLm5vV3JhcClcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLk5FWFQ6XHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBsYXN0IHNsaWRlLCBub3QgZm9yY2UsIGxvb3BpbmcgaXMgZGlzYWJsZWRcclxuICAgICAgICAvLyBhbmQgbmVlZCB0byBnb2luZyBmb3J3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxyXG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gIXRoaXMuaXNMYXN0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSlcclxuICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlICsgMVxyXG4gICAgICAgICAgOiAhZm9yY2UgJiYgdGhpcy5ub1dyYXAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgOiAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5QUkVWOlxyXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgZmlyc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZFxyXG4gICAgICAgIC8vIGFuZCBuZWVkIHRvIGdvaW5nIGJhY2t3YXJkIC0gc2VsZWN0IGN1cnJlbnQgc2xpZGUsIGFzIGEgbmV4dFxyXG4gICAgICAgIG5leHRTbGlkZUluZGV4ID1cclxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA+IDBcclxuICAgICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgLSAxXHJcbiAgICAgICAgICAgIDogIWZvcmNlICYmIHRoaXMubm9XcmFwXHJcbiAgICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlXHJcbiAgICAgICAgICAgIDogdGhpcy5fc2xpZGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGRpcmVjdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0U2xpZGVJbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBzbGlkZSwgd2hpY2ggc3BlY2lmaWVkIHRocm91Z2ggaW5kZXgsIGFzIGFjdGl2ZVxyXG4gICAqIEBwYXJhbSBpbmRleFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NlbGVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOYU4oaW5kZXgpKSB7XHJcbiAgICAgIHRoaXMucGF1c2UoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcclxuICAgIGlmIChjdXJyZW50U2xpZGUpIHtcclxuICAgICAgY3VycmVudFNsaWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldChpbmRleCk7XHJcbiAgICBpZiAobmV4dFNsaWRlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGluZGV4O1xyXG4gICAgICBuZXh0U2xpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IGluZGV4O1xyXG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwcml2YXRlIHJlc3RhcnRUaW1lcigpIHtcclxuICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcclxuICAgIGlmICghaXNOYU4oaW50ZXJ2YWwpICYmIGludGVydmFsID4gMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbkludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgJiZcclxuICAgICAgICAgICAgICAhaXNOYU4odGhpcy5pbnRlcnZhbCkgJiZcclxuICAgICAgICAgICAgICBuSW50ZXJ2YWwgPiAwICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5zbGlkZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBpbnRlcnZhbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVzZXRUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbnRlcnZhbCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY3VycmVudEludGVydmFsKTtcclxuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSB2b2lkIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==