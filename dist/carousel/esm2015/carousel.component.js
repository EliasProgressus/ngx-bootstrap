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
const Direction = {
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
export class CarouselComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTyxFQUNMLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLEVBQzFELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWVuRCxNQUFNOzs7OztJQXNESixZQUFZLE1BQXNCLEVBQVUsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7aUNBNUNoQixJQUFJLFlBQVksQ0FBUyxLQUFLLENBQUM7dUJBb0N6QixJQUFJLFVBQVUsRUFBa0I7eUJBRTFELEtBQUs7UUFPekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7Ozs7OztRQTFDRyxXQUFXLENBQUMsS0FBYTtRQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCOzs7OztJQUdILElBQUksV0FBVztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7S0FDakM7Ozs7OztRQU9HLFFBQVE7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O0lBR3hCLElBQUksUUFBUSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7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Qjs7OztZQW5SSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHdpQ0FBd0M7YUFDekM7Ozs7WUFkUSxjQUFjO1lBTFcsTUFBTTs7O3VCQXNCckMsS0FBSzt3QkFFTCxLQUFLOytCQUVMLEtBQUs7a0NBR0wsTUFBTTs0QkFJTixLQUFLO3lCQWVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XHJcbi8qKipcclxuICogcGF1c2UgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP3N0cmluZz0naG92ZXInKSAtIGV2ZW50IGdyb3VwIG5hbWUgd2hpY2ggcGF1c2VzXHJcbiAqIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCwgaWYgaG92ZXIgcGF1c2VzIG9uIG1vdXNlZW50ZXIgYW5kIHJlc3VtZXMgb25cclxuICogbW91c2VsZWF2ZSBrZXlib2FyZCAobm90IHlldCBzdXBwb3J0ZWQpICg/Ym9vbGVhbj10cnVlKSAtIGlmIGZhbHNlXHJcbiAqIGNhcm91c2VsIHdpbGwgbm90IHJlYWN0IHRvIGtleWJvYXJkIGV2ZW50c1xyXG4gKiBub3RlOiBzd2lwaW5nIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAqL1xyXG4vKioqKlxyXG4gKiBQcm9ibGVtczpcclxuICogMSkgaWYgd2Ugc2V0IGFuIGFjdGl2ZSBzbGlkZSB2aWEgbW9kZWwgY2hhbmdlcywgLmFjdGl2ZSBjbGFzcyByZW1haW5zIG9uIGFcclxuICogY3VycmVudCBzbGlkZS5cclxuICogMikgaWYgd2UgaGF2ZSBvbmx5IG9uZSBzbGlkZSwgd2Ugc2hvdWxkbid0IHNob3cgcHJldi9uZXh0IG5hdiBidXR0b25zXHJcbiAqIDMpIGlmIGZpcnN0IG9yIGxhc3Qgc2xpZGUgaXMgYWN0aXZlIGFuZCBub1dyYXAgaXMgdHJ1ZSwgdGhlcmUgc2hvdWxkIGJlXHJcbiAqIFwiZGlzYWJsZWRcIiBjbGFzcyBvbiB0aGUgbmF2IGJ1dHRvbnMuXHJcbiAqIDQpIGRlZmF1bHQgaW50ZXJ2YWwgc2hvdWxkIGJlIGVxdWFsIDUwMDBcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNCczMsIExpbmtlZExpc3QgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcm91c2VsQ29uZmlnIH0gZnJvbSAnLi9jYXJvdXNlbC5jb25maWcnO1xyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuICBVTktOT1dOLFxyXG4gIE5FWFQsXHJcbiAgUFJFVlxyXG59XHJcblxyXG4vKipcclxuICogQmFzZSBlbGVtZW50IHRvIGNyZWF0ZSBjYXJvdXNlbFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKiBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsIHdpbGwgbm90IGN5Y2xlIGNvbnRpbnVvdXNseSBhbmQgd2lsbCBoYXZlIGhhcmQgc3RvcHMgKHByZXZlbnQgbG9vcGluZykgKi9cclxuICBASW5wdXQoKSBub1dyYXA6IGJvb2xlYW47XHJcbiAgLyoqICBJZiBgdHJ1ZWAg4oCUIHdpbGwgZGlzYWJsZSBwYXVzaW5nIG9uIGNhcm91c2VsIG1vdXNlIGhvdmVyICovXHJcbiAgQElucHV0KCkgbm9QYXVzZTogYm9vbGVhbjtcclxuICAvKiogIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwtaW5kaWNhdG9ycyBhcmUgdmlzaWJsZSAgKi9cclxuICBASW5wdXQoKSBzaG93SW5kaWNhdG9yczogYm9vbGVhbjtcclxuXHJcbiAgLyoqIFdpbGwgYmUgZW1pdHRlZCB3aGVuIGFjdGl2ZSBzbGlkZSBoYXMgYmVlbiBjaGFuZ2VkLiBQYXJ0IG9mIHR3by13YXktYmluZGFibGUgWyhhY3RpdmVTbGlkZSldIHByb3BlcnR5ICovXHJcbiAgQE91dHB1dCgpXHJcbiAgYWN0aXZlU2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KGZhbHNlKTtcclxuXHJcbiAgLyoqIEluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGUoc3RhcnRlZCBmb3IgMCkgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBhY3RpdmVTbGlkZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCAmJiBpbmRleCAhPT0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdChpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlU2xpZGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxheSBvZiBpdGVtIGN5Y2xpbmcgaW4gbWlsbGlzZWNvbmRzLiBJZiBmYWxzZSwgY2Fyb3VzZWwgd29uJ3QgY3ljbGVcclxuICAgKiBhdXRvbWF0aWNhbGx5LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGludGVydmFsKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XHJcbiAgfVxyXG5cclxuICBzZXQgaW50ZXJ2YWwodmFsdWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZTtcclxuICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2xpZGVzKCk6IFNsaWRlQ29tcG9uZW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NsaWRlcy50b0FycmF5KCk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJvdGVjdGVkIGN1cnJlbnRJbnRlcnZhbDogYW55O1xyXG4gIHByb3RlY3RlZCBfY3VycmVudEFjdGl2ZVNsaWRlOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9pbnRlcnZhbDogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBfc2xpZGVzOiBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PiA9IG5ldyBMaW5rZWRMaXN0PFNsaWRlQ29tcG9uZW50PigpO1xyXG4gIHByb3RlY3RlZCBpc1BsYXlpbmc6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCA9IGZhbHNlO1xyXG5cclxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIWlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IENhcm91c2VsQ29uZmlnLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgbmV3IHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGZpcnN0IGluIGNvbGxlY3Rpb24gLSBzZXQgaXQgYXMgYWN0aXZlXHJcbiAgICogYW5kIHN0YXJ0cyBhdXRvIGNoYW5naW5nXHJcbiAgICogQHBhcmFtIHNsaWRlXHJcbiAgICovXHJcbiAgYWRkU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9zbGlkZXMuYWRkKHNsaWRlKTtcclxuICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IHZvaWQgMDtcclxuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IDA7XHJcbiAgICAgIHRoaXMucGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBzcGVjaWZpZWQgc2xpZGUuIElmIHRoaXMgc2xpZGUgaXMgYWN0aXZlIC0gd2lsbCByb2xsIHRvIGFub3RoZXJcclxuICAgKiBzbGlkZVxyXG4gICAqIEBwYXJhbSBzbGlkZVxyXG4gICAqL1xyXG4gIHJlbW92ZVNsaWRlKHNsaWRlOiBTbGlkZUNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVtSW5kZXggPSB0aGlzLl9zbGlkZXMuaW5kZXhPZihzbGlkZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9PT0gcmVtSW5kZXgpIHtcclxuICAgICAgLy8gcmVtb3Zpbmcgb2YgYWN0aXZlIHNsaWRlXHJcbiAgICAgIGxldCBuZXh0U2xpZGVJbmRleDogbnVtYmVyID0gdm9pZCAwO1xyXG4gICAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAvLyBpZiB0aGlzIHNsaWRlIGxhc3QgLSB3aWxsIHJvbGwgdG8gZmlyc3Qgc2xpZGUsIGlmIG5vV3JhcCBmbGFnIGlzXHJcbiAgICAgICAgLy8gRkFMU0Ugb3IgdG8gcHJldmlvdXMsIGlmIG5vV3JhcCBpcyBUUlVFIGluIGNhc2UsIGlmIHRoaXMgc2xpZGUgaW5cclxuICAgICAgICAvLyBtaWRkbGUgb2YgY29sbGVjdGlvbiwgaW5kZXggb2YgbmV4dCBzbGlkZSBpcyBzYW1lIHRvIHJlbW92ZWRcclxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICF0aGlzLmlzTGFzdChyZW1JbmRleClcclxuICAgICAgICAgID8gcmVtSW5kZXhcclxuICAgICAgICAgIDogdGhpcy5ub1dyYXAgPyByZW1JbmRleCAtIDEgOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3NsaWRlcy5yZW1vdmUocmVtSW5kZXgpO1xyXG5cclxuICAgICAgLy8gcHJldmVudHMgZXhjZXB0aW9uIHdpdGggY2hhbmdpbmcgc29tZSB2YWx1ZSBhZnRlciBjaGVja2luZ1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZWxlY3QobmV4dFNsaWRlSW5kZXgpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NsaWRlcy5yZW1vdmUocmVtSW5kZXgpO1xyXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IHRoaXMuZ2V0Q3VycmVudFNsaWRlSW5kZXgoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gYWZ0ZXIgcmVtb3ZpbmcsIG5lZWQgdG8gYWN0dWFsaXplIGluZGV4IG9mIGN1cnJlbnQgYWN0aXZlIHNsaWRlXHJcbiAgICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gY3VycmVudFNsaWRlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUm9sbGluZyB0byBuZXh0IHNsaWRlXHJcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXHJcbiAgICovXHJcbiAgbmV4dFNsaWRlKGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmZpbmROZXh0U2xpZGVJbmRleChEaXJlY3Rpb24uTkVYVCwgZm9yY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUm9sbGluZyB0byBwcmV2aW91cyBzbGlkZVxyXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xyXG4gICAqL1xyXG4gIHByZXZpb3VzU2xpZGUoZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KERpcmVjdGlvbi5QUkVWLCBmb3JjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSb2xsaW5nIHRvIHNwZWNpZmllZCBzbGlkZVxyXG4gICAqIEBwYXJhbSBpbmRleDoge251bWJlcn0gaW5kZXggb2Ygc2xpZGUsIHdoaWNoIG11c3QgYmUgc2hvd25cclxuICAgKi9cclxuICBzZWxlY3RTbGlkZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gaW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xyXG4gICAqL1xyXG4gIHBsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwYXVzZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ub1BhdXNlKSB7XHJcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZHMgYW5kIHJldHVybnMgaW5kZXggb2YgY3VycmVudGx5IGRpc3BsYXllZCBzbGlkZVxyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRTbGlkZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLmZpbmRJbmRleCgoc2xpZGU6IFNsaWRlQ29tcG9uZW50KSA9PiBzbGlkZS5hY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcywgd2hldGhlciB0aGUgc3BlY2lmaWVkIGluZGV4IGlzIGxhc3QgaW4gY29sbGVjdGlvblxyXG4gICAqIEBwYXJhbSBpbmRleFxyXG4gICAqL1xyXG4gIGlzTGFzdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaW5kZXggKyAxID49IHRoaXMuX3NsaWRlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmVzIG5leHQgc2xpZGUgaW5kZXgsIGRlcGVuZGluZyBvZiBkaXJlY3Rpb25cclxuICAgKiBAcGFyYW0gZGlyZWN0aW9uOiBEaXJlY3Rpb24oVU5LTk9XTnxQUkVWfE5FWFQpXHJcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgVFJVRSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnLCBlbHNlIHdpbGxcclxuICAgKiAgIHJldHVybiB1bmRlZmluZWQgaWYgbmV4dCBzbGlkZSByZXF1aXJlIHdyYXBwaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaW5kTmV4dFNsaWRlSW5kZXgoZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGZvcmNlOiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIGxldCBuZXh0U2xpZGVJbmRleCA9IDA7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhZm9yY2UgJiZcclxuICAgICAgKHRoaXMuaXNMYXN0KHRoaXMuYWN0aXZlU2xpZGUpICYmXHJcbiAgICAgICAgZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uUFJFViAmJlxyXG4gICAgICAgIHRoaXMubm9XcmFwKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uTkVYVDpcclxuICAgICAgICAvLyBpZiB0aGlzIGlzIGxhc3Qgc2xpZGUsIG5vdCBmb3JjZSwgbG9vcGluZyBpcyBkaXNhYmxlZFxyXG4gICAgICAgIC8vIGFuZCBuZWVkIHRvIGdvaW5nIGZvcndhcmQgLSBzZWxlY3QgY3VycmVudCBzbGlkZSwgYXMgYSBuZXh0XHJcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKVxyXG4gICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgKyAxXHJcbiAgICAgICAgICA6ICFmb3JjZSAmJiB0aGlzLm5vV3JhcCA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA6IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlBSRVY6XHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBmaXJzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXHJcbiAgICAgICAgLy8gYW5kIG5lZWQgdG8gZ29pbmcgYmFja3dhcmQgLSBzZWxlY3QgY3VycmVudCBzbGlkZSwgYXMgYSBuZXh0XHJcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPVxyXG4gICAgICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID4gMFxyXG4gICAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSAtIDFcclxuICAgICAgICAgICAgOiAhZm9yY2UgJiYgdGhpcy5ub1dyYXBcclxuICAgICAgICAgICAgPyB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGVcclxuICAgICAgICAgICAgOiB0aGlzLl9zbGlkZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHRTbGlkZUluZGV4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIHNsaWRlLCB3aGljaCBzcGVjaWZpZWQgdGhyb3VnaCBpbmRleCwgYXMgYWN0aXZlXHJcbiAgICogQHBhcmFtIGluZGV4XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfc2VsZWN0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpc05hTihpbmRleCkpIHtcclxuICAgICAgdGhpcy5wYXVzZSgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gdGhpcy5fc2xpZGVzLmdldCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSkge1xyXG4gICAgICBjdXJyZW50U2xpZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXh0U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KGluZGV4KTtcclxuICAgIGlmIChuZXh0U2xpZGUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gaW5kZXg7XHJcbiAgICAgIG5leHRTbGlkZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdChpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVzdGFydFRpbWVyKCkge1xyXG4gICAgdGhpcy5yZXNldFRpbWVyKCk7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xyXG4gICAgaWYgKCFpc05hTihpbnRlcnZhbCkgJiYgaW50ZXJ2YWwgPiAwKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuSW50ZXJ2YWwgPSArdGhpcy5pbnRlcnZhbDtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyAmJlxyXG4gICAgICAgICAgICAgICFpc05hTih0aGlzLmludGVydmFsKSAmJlxyXG4gICAgICAgICAgICAgIG5JbnRlcnZhbCA+IDAgJiZcclxuICAgICAgICAgICAgICB0aGlzLnNsaWRlcy5sZW5ndGhcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIGludGVydmFsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXNldFRpbWVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEludGVydmFsKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jdXJyZW50SW50ZXJ2YWwpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IHZvaWQgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19