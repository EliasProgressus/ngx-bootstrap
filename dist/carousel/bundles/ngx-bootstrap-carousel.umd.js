(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/carousel', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].carousel = {}),global.ng.core,global.utils,global.ng.common));
}(this, (function (exports,core,utils,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CarouselConfig = (function () {
        function CarouselConfig() {
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
        CarouselConfig.decorators = [
            { type: core.Injectable }
        ];
        return CarouselConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var Direction = {
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
    var CarouselComponent = (function () {
        function CarouselComponent(config, ngZone) {
            this.ngZone = ngZone;
            /**
             * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
             */
            this.activeSlideChange = new core.EventEmitter(false);
            this._slides = new utils.LinkedList();
            this.destroyed = false;
            Object.assign(this, config);
        }
        Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentActiveSlide;
            },
            set: /**
             * Index of currently displayed slide(started for 0)
             * @param {?} index
             * @return {?}
             */ function (index) {
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
             */ function () {
                return this._interval;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._interval = value;
                this.restartTimer();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "slides", {
            get: /**
             * @return {?}
             */ function () {
                return this._slides.toArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
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
                if (force === void 0) {
                    force = false;
                }
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
                if (force === void 0) {
                    force = false;
                }
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
            { type: core.Component, args: [{
                        selector: 'carousel',
                        template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel slide\">\r\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\r\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\r\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\">\r\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\"  [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\">\r\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n"
                    }] }
        ];
        /** @nocollapse */
        CarouselComponent.ctorParameters = function () {
            return [
                { type: CarouselConfig, },
                { type: core.NgZone, },
            ];
        };
        CarouselComponent.propDecorators = {
            "noWrap": [{ type: core.Input },],
            "noPause": [{ type: core.Input },],
            "showIndicators": [{ type: core.Input },],
            "activeSlideChange": [{ type: core.Output },],
            "activeSlide": [{ type: core.Input },],
            "interval": [{ type: core.Input },],
        };
        return CarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SlideComponent = (function () {
        function SlideComponent(carousel) {
            /**
             * Wraps element by appropriate CSS classes
             */
            this.addClass = true;
            this.carousel = carousel;
        }
        /** Fires changes in container collection after adding a new slide instance */
        /**
         * Fires changes in container collection after adding a new slide instance
         * @return {?}
         */
        SlideComponent.prototype.ngOnInit = /**
         * Fires changes in container collection after adding a new slide instance
         * @return {?}
         */
            function () {
                this.carousel.addSlide(this);
            };
        /** Fires changes in container collection after removing of this slide instance */
        /**
         * Fires changes in container collection after removing of this slide instance
         * @return {?}
         */
        SlideComponent.prototype.ngOnDestroy = /**
         * Fires changes in container collection after removing of this slide instance
         * @return {?}
         */
            function () {
                this.carousel.removeSlide(this);
            };
        SlideComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'slide',
                        template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                        host: {
                            '[attr.aria-hidden]': '!active'
                        }
                    }] }
        ];
        /** @nocollapse */
        SlideComponent.ctorParameters = function () {
            return [
                { type: CarouselComponent, },
            ];
        };
        SlideComponent.propDecorators = {
            "active": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input },],
            "addClass": [{ type: core.HostBinding, args: ['class.item',] }, { type: core.HostBinding, args: ['class.carousel-item',] },],
        };
        return SlideComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CarouselModule = (function () {
        function CarouselModule() {
        }
        /**
         * @return {?}
         */
        CarouselModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: CarouselModule, providers: [] };
            };
        CarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SlideComponent, CarouselComponent],
                        exports: [SlideComponent, CarouselComponent],
                        providers: [CarouselConfig]
                    },] }
        ];
        return CarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.CarouselComponent = CarouselComponent;
    exports.CarouselModule = CarouselModule;
    exports.SlideComponent = SlideComponent;
    exports.CarouselConfig = CarouselConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jYXJvdXNlbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC9zbGlkZS5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29uZmlnIHtcclxuICAvKiogRGVmYXVsdCBpbnRlcnZhbCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlcyAqL1xyXG4gIGludGVydmFsID0gNTAwMDtcclxuXHJcbiAgLyoqIElzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgY2FuIGJlIHBhdXNlZCAqL1xyXG4gIG5vUGF1c2UgPSBmYWxzZTtcclxuXHJcbiAgLyoqIElzIHNsaWRlcyBjYW4gd3JhcCBmcm9tIHRoZSBsYXN0IHRvIHRoZSBmaXJzdCBzbGlkZSAqL1xyXG4gIG5vV3JhcCA9IGZhbHNlO1xyXG5cclxuICAvKiogU2hvdyBjYXJvdXNlbC1pbmRpY2F0b3JzICovXHJcbiAgc2hvd0luZGljYXRvcnMgPSB0cnVlO1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcclxuLyoqKlxyXG4gKiBwYXVzZSAobm90IHlldCBzdXBwb3J0ZWQpICg/c3RyaW5nPSdob3ZlcicpIC0gZXZlbnQgZ3JvdXAgbmFtZSB3aGljaCBwYXVzZXNcclxuICogdGhlIGN5Y2xpbmcgb2YgdGhlIGNhcm91c2VsLCBpZiBob3ZlciBwYXVzZXMgb24gbW91c2VlbnRlciBhbmQgcmVzdW1lcyBvblxyXG4gKiBtb3VzZWxlYXZlIGtleWJvYXJkIChub3QgeWV0IHN1cHBvcnRlZCkgKD9ib29sZWFuPXRydWUpIC0gaWYgZmFsc2VcclxuICogY2Fyb3VzZWwgd2lsbCBub3QgcmVhY3QgdG8ga2V5Ym9hcmQgZXZlbnRzXHJcbiAqIG5vdGU6IHN3aXBpbmcgbm90IHlldCBzdXBwb3J0ZWRcclxuICovXHJcbi8qKioqXHJcbiAqIFByb2JsZW1zOlxyXG4gKiAxKSBpZiB3ZSBzZXQgYW4gYWN0aXZlIHNsaWRlIHZpYSBtb2RlbCBjaGFuZ2VzLCAuYWN0aXZlIGNsYXNzIHJlbWFpbnMgb24gYVxyXG4gKiBjdXJyZW50IHNsaWRlLlxyXG4gKiAyKSBpZiB3ZSBoYXZlIG9ubHkgb25lIHNsaWRlLCB3ZSBzaG91bGRuJ3Qgc2hvdyBwcmV2L25leHQgbmF2IGJ1dHRvbnNcclxuICogMykgaWYgZmlyc3Qgb3IgbGFzdCBzbGlkZSBpcyBhY3RpdmUgYW5kIG5vV3JhcCBpcyB0cnVlLCB0aGVyZSBzaG91bGQgYmVcclxuICogXCJkaXNhYmxlZFwiIGNsYXNzIG9uIHRoZSBuYXYgYnV0dG9ucy5cclxuICogNCkgZGVmYXVsdCBpbnRlcnZhbCBzaG91bGQgYmUgZXF1YWwgNTAwMFxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0JzMywgTGlua2VkTGlzdCB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gIFVOS05PV04sXHJcbiAgTkVYVCxcclxuICBQUkVWXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGVsZW1lbnQgdG8gY3JlYXRlIGNhcm91c2VsXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIElmIGB0cnVlYCDDosKAwpQgY2Fyb3VzZWwgd2lsbCBub3QgY3ljbGUgY29udGludW91c2x5IGFuZCB3aWxsIGhhdmUgaGFyZCBzdG9wcyAocHJldmVudCBsb29waW5nKSAqL1xyXG4gIEBJbnB1dCgpIG5vV3JhcDogYm9vbGVhbjtcclxuICAvKiogIElmIGB0cnVlYCDDosKAwpQgd2lsbCBkaXNhYmxlIHBhdXNpbmcgb24gY2Fyb3VzZWwgbW91c2UgaG92ZXIgKi9cclxuICBASW5wdXQoKSBub1BhdXNlOiBib29sZWFuO1xyXG4gIC8qKiAgSWYgYHRydWVgIMOiwoDClCBjYXJvdXNlbC1pbmRpY2F0b3JzIGFyZSB2aXNpYmxlICAqL1xyXG4gIEBJbnB1dCgpIHNob3dJbmRpY2F0b3JzOiBib29sZWFuO1xyXG5cclxuICAvKiogV2lsbCBiZSBlbWl0dGVkIHdoZW4gYWN0aXZlIHNsaWRlIGhhcyBiZWVuIGNoYW5nZWQuIFBhcnQgb2YgdHdvLXdheS1iaW5kYWJsZSBbKGFjdGl2ZVNsaWRlKV0gcHJvcGVydHkgKi9cclxuICBAT3V0cHV0KClcclxuICBhY3RpdmVTbGlkZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oZmFsc2UpO1xyXG5cclxuICAvKiogSW5kZXggb2YgY3VycmVudGx5IGRpc3BsYXllZCBzbGlkZShzdGFydGVkIGZvciAwKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFjdGl2ZVNsaWRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoICYmIGluZGV4ICE9PSB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0KGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBhY3RpdmVTbGlkZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGF5IG9mIGl0ZW0gY3ljbGluZyBpbiBtaWxsaXNlY29uZHMuIElmIGZhbHNlLCBjYXJvdXNlbCB3b24ndCBjeWNsZVxyXG4gICAqIGF1dG9tYXRpY2FsbHkuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBzbGlkZXMoKTogU2xpZGVDb21wb25lbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLnRvQXJyYXkoKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcm90ZWN0ZWQgY3VycmVudEludGVydmFsOiBhbnk7XHJcbiAgcHJvdGVjdGVkIF9jdXJyZW50QWN0aXZlU2xpZGU6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2ludGVydmFsOiBudW1iZXI7XHJcbiAgcHJvdGVjdGVkIF9zbGlkZXM6IExpbmtlZExpc3Q8U2xpZGVDb21wb25lbnQ+ID0gbmV3IExpbmtlZExpc3Q8U2xpZGVDb21wb25lbnQ+KCk7XHJcbiAgcHJvdGVjdGVkIGlzUGxheWluZzogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgZGVzdHJveWVkID0gZmFsc2U7XHJcblxyXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNCczMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2Fyb3VzZWxDb25maWcsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBuZXcgc2xpZGUuIElmIHRoaXMgc2xpZGUgaXMgZmlyc3QgaW4gY29sbGVjdGlvbiAtIHNldCBpdCBhcyBhY3RpdmVcclxuICAgKiBhbmQgc3RhcnRzIGF1dG8gY2hhbmdpbmdcclxuICAgKiBAcGFyYW0gc2xpZGVcclxuICAgKi9cclxuICBhZGRTbGlkZShzbGlkZTogU2xpZGVDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NsaWRlcy5hZGQoc2xpZGUpO1xyXG4gICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gdm9pZCAwO1xyXG4gICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gMDtcclxuICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHNwZWNpZmllZCBzbGlkZS4gSWYgdGhpcyBzbGlkZSBpcyBhY3RpdmUgLSB3aWxsIHJvbGwgdG8gYW5vdGhlclxyXG4gICAqIHNsaWRlXHJcbiAgICogQHBhcmFtIHNsaWRlXHJcbiAgICovXHJcbiAgcmVtb3ZlU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCByZW1JbmRleCA9IHRoaXMuX3NsaWRlcy5pbmRleE9mKHNsaWRlKTtcclxuXHJcbiAgICBpZiAodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID09PSByZW1JbmRleCkge1xyXG4gICAgICAvLyByZW1vdmluZyBvZiBhY3RpdmUgc2xpZGVcclxuICAgICAgbGV0IG5leHRTbGlkZUluZGV4OiBudW1iZXIgPSB2b2lkIDA7XHJcbiAgICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIC8vIGlmIHRoaXMgc2xpZGUgbGFzdCAtIHdpbGwgcm9sbCB0byBmaXJzdCBzbGlkZSwgaWYgbm9XcmFwIGZsYWcgaXNcclxuICAgICAgICAvLyBGQUxTRSBvciB0byBwcmV2aW91cywgaWYgbm9XcmFwIGlzIFRSVUUgaW4gY2FzZSwgaWYgdGhpcyBzbGlkZSBpblxyXG4gICAgICAgIC8vIG1pZGRsZSBvZiBjb2xsZWN0aW9uLCBpbmRleCBvZiBuZXh0IHNsaWRlIGlzIHNhbWUgdG8gcmVtb3ZlZFxyXG4gICAgICAgIG5leHRTbGlkZUluZGV4ID0gIXRoaXMuaXNMYXN0KHJlbUluZGV4KVxyXG4gICAgICAgICAgPyByZW1JbmRleFxyXG4gICAgICAgICAgOiB0aGlzLm5vV3JhcCA/IHJlbUluZGV4IC0gMSA6IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc2xpZGVzLnJlbW92ZShyZW1JbmRleCk7XHJcblxyXG4gICAgICAvLyBwcmV2ZW50cyBleGNlcHRpb24gd2l0aCBjaGFuZ2luZyBzb21lIHZhbHVlIGFmdGVyIGNoZWNraW5nXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdChuZXh0U2xpZGVJbmRleCk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2xpZGVzLnJlbW92ZShyZW1JbmRleCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUluZGV4ID0gdGhpcy5nZXRDdXJyZW50U2xpZGVJbmRleCgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBhZnRlciByZW1vdmluZywgbmVlZCB0byBhY3R1YWxpemUgaW5kZXggb2YgY3VycmVudCBhY3RpdmUgc2xpZGVcclxuICAgICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSBjdXJyZW50U2xpZGVJbmRleDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSb2xsaW5nIHRvIG5leHQgc2xpZGVcclxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiB0cnVlIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWdcclxuICAgKi9cclxuICBuZXh0U2xpZGUoZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVTbGlkZSA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KERpcmVjdGlvbi5ORVhULCBmb3JjZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSb2xsaW5nIHRvIHByZXZpb3VzIHNsaWRlXHJcbiAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXHJcbiAgICovXHJcbiAgcHJldmlvdXNTbGlkZShmb3JjZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZVNsaWRlID0gdGhpcy5maW5kTmV4dFNsaWRlSW5kZXgoRGlyZWN0aW9uLlBSRVYsIGZvcmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvbGxpbmcgdG8gc3BlY2lmaWVkIHNsaWRlXHJcbiAgICogQHBhcmFtIGluZGV4OiB7bnVtYmVyfSBpbmRleCBvZiBzbGlkZSwgd2hpY2ggbXVzdCBiZSBzaG93blxyXG4gICAqL1xyXG4gIHNlbGVjdFNsaWRlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBhIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXHJcbiAgICovXHJcbiAgcGxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xyXG4gICAqL1xyXG4gIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm5vUGF1c2UpIHtcclxuICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yZXNldFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaW5kcyBhbmQgcmV0dXJucyBpbmRleCBvZiBjdXJyZW50bHkgZGlzcGxheWVkIHNsaWRlXHJcbiAgICovXHJcbiAgZ2V0Q3VycmVudFNsaWRlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zbGlkZXMuZmluZEluZGV4KChzbGlkZTogU2xpZGVDb21wb25lbnQpID0+IHNsaWRlLmFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmVzLCB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaW5kZXggaXMgbGFzdCBpbiBjb2xsZWN0aW9uXHJcbiAgICogQHBhcmFtIGluZGV4XHJcbiAgICovXHJcbiAgaXNMYXN0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpbmRleCArIDEgPj0gdGhpcy5fc2xpZGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZXMgbmV4dCBzbGlkZSBpbmRleCwgZGVwZW5kaW5nIG9mIGRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSBkaXJlY3Rpb246IERpcmVjdGlvbihVTktOT1dOfFBSRVZ8TkVYVClcclxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiBUUlVFIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWcsIGVsc2Ugd2lsbFxyXG4gICAqICAgcmV0dXJuIHVuZGVmaW5lZCBpZiBuZXh0IHNsaWRlIHJlcXVpcmUgd3JhcHBpbmdcclxuICAgKi9cclxuICBwcml2YXRlIGZpbmROZXh0U2xpZGVJbmRleChkaXJlY3Rpb246IERpcmVjdGlvbiwgZm9yY2U6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgbGV0IG5leHRTbGlkZUluZGV4ID0gMDtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICFmb3JjZSAmJlxyXG4gICAgICAodGhpcy5pc0xhc3QodGhpcy5hY3RpdmVTbGlkZSkgJiZcclxuICAgICAgICBkaXJlY3Rpb24gIT09IERpcmVjdGlvbi5QUkVWICYmXHJcbiAgICAgICAgdGhpcy5ub1dyYXApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHZvaWQgMDtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5ORVhUOlxyXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgbGFzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXHJcbiAgICAgICAgLy8gYW5kIG5lZWQgdG8gZ29pbmcgZm9yd2FyZCAtIHNlbGVjdCBjdXJyZW50IHNsaWRlLCBhcyBhIG5leHRcclxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICF0aGlzLmlzTGFzdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpXHJcbiAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSArIDFcclxuICAgICAgICAgIDogIWZvcmNlICYmIHRoaXMubm9XcmFwID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIDogMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBEaXJlY3Rpb24uUFJFVjpcclxuICAgICAgICAvLyBpZiB0aGlzIGlzIGZpcnN0IHNsaWRlLCBub3QgZm9yY2UsIGxvb3BpbmcgaXMgZGlzYWJsZWRcclxuICAgICAgICAvLyBhbmQgbmVlZCB0byBnb2luZyBiYWNrd2FyZCAtIHNlbGVjdCBjdXJyZW50IHNsaWRlLCBhcyBhIG5leHRcclxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9XHJcbiAgICAgICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPiAwXHJcbiAgICAgICAgICAgID8gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIC0gMVxyXG4gICAgICAgICAgICA6ICFmb3JjZSAmJiB0aGlzLm5vV3JhcFxyXG4gICAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZVxyXG4gICAgICAgICAgICA6IHRoaXMuX3NsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBkaXJlY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dFNsaWRlSW5kZXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgc2xpZGUsIHdoaWNoIHNwZWNpZmllZCB0aHJvdWdoIGluZGV4LCBhcyBhY3RpdmVcclxuICAgKiBAcGFyYW0gaW5kZXhcclxuICAgKi9cclxuICBwcml2YXRlIF9zZWxlY3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGlzTmFOKGluZGV4KSkge1xyXG4gICAgICB0aGlzLnBhdXNlKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSk7XHJcbiAgICBpZiAoY3VycmVudFNsaWRlKSB7XHJcbiAgICAgIGN1cnJlbnRTbGlkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoaW5kZXgpO1xyXG4gICAgaWYgKG5leHRTbGlkZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSBpbmRleDtcclxuICAgICAgbmV4dFNsaWRlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcclxuICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXN0YXJ0VGltZXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgIGNvbnN0IGludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XHJcbiAgICBpZiAoIWlzTmFOKGludGVydmFsKSAmJiBpbnRlcnZhbCA+IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5JbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nICYmXHJcbiAgICAgICAgICAgICAgIWlzTmFOKHRoaXMuaW50ZXJ2YWwpICYmXHJcbiAgICAgICAgICAgICAgbkludGVydmFsID4gMCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMuc2xpZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0aGlzLm5leHRTbGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwcml2YXRlIHJlc2V0VGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50SW50ZXJ2YWwpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmN1cnJlbnRJbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdm9pZCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2xpZGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCIgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLmFyaWEtaGlkZGVuXSc6ICchYWN0aXZlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKiBJcyBjdXJyZW50IHNsaWRlIGFjdGl2ZSAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBASW5wdXQoKVxyXG4gIGFjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIFdyYXBzIGVsZW1lbnQgYnkgYXBwcm9wcmlhdGUgQ1NTIGNsYXNzZXMgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbScpXHJcbiAgYWRkQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKiogTGluayB0byBQYXJlbnQoY29udGFpbmVyLWNvbGxlY3Rpb24pIGNvbXBvbmVudCAqL1xyXG4gIHByb3RlY3RlZCBjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudCkge1xyXG4gICAgdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZpcmVzIGNoYW5nZXMgaW4gY29udGFpbmVyIGNvbGxlY3Rpb24gYWZ0ZXIgYWRkaW5nIGEgbmV3IHNsaWRlIGluc3RhbmNlICovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcm91c2VsLmFkZFNsaWRlKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZpcmVzIGNoYW5nZXMgaW4gY29udGFpbmVyIGNvbGxlY3Rpb24gYWZ0ZXIgcmVtb3Zpbmcgb2YgdGhpcyBzbGlkZSBpbnN0YW5jZSAqL1xyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYXJvdXNlbC5yZW1vdmVTbGlkZSh0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NsaWRlQ29tcG9uZW50LCBDYXJvdXNlbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NsaWRlQ29tcG9uZW50LCBDYXJvdXNlbENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbQ2Fyb3VzZWxDb25maWddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQ2Fyb3VzZWxNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJMaW5rZWRMaXN0IiwiaXNCczMiLCJDb21wb25lbnQiLCJOZ1pvbmUiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RCaW5kaW5nIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7NEJBS2EsSUFBSTs7OzsyQkFHTCxLQUFLOzs7OzBCQUdOLEtBQUs7Ozs7a0NBR0csSUFBSTs7O29CQVp0QkEsZUFBVTs7NkJBRlg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDNkZFLDJCQUFZLE1BQXNCLEVBQVUsTUFBYztZQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7cUNBNUNoQixJQUFJQyxpQkFBWSxDQUFTLEtBQUssQ0FBQzsyQkFvQ3pCLElBQUlDLGdCQUFVLEVBQWtCOzZCQUUxRCxLQUFLO1lBT3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFD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