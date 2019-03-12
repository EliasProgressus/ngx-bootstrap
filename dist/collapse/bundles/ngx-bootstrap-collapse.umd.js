(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/collapse', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].collapse = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CollapseDirective = (function () {
        function CollapseDirective(_el, _renderer) {
            this._el = _el;
            this._renderer = _renderer;
            /**
             * This event fires as soon as content collapses
             */
            this.collapsed = new core.EventEmitter();
            /**
             * This event fires as soon as content becomes visible
             */
            this.expanded = new core.EventEmitter();
            // shown
            this.isExpanded = true;
            // hidden
            this.isCollapsed = false;
            // stale state
            this.isCollapse = true;
            // animation state
            this.isCollapsing = false;
        }
        Object.defineProperty(CollapseDirective.prototype, "collapse", {
            get: /**
             * @return {?}
             */ function () {
                return this.isExpanded;
            },
            set: /**
             * A flag indicating visibility of content (shown or hidden)
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.isExpanded = value;
                this.toggle();
            },
            enumerable: true,
            configurable: true
        });
        /** allows to manually toggle content visibility */
        /**
         * allows to manually toggle content visibility
         * @return {?}
         */
        CollapseDirective.prototype.toggle = /**
         * allows to manually toggle content visibility
         * @return {?}
         */
            function () {
                if (this.isExpanded) {
                    this.hide();
                }
                else {
                    this.show();
                }
            };
        /** allows to manually hide content */
        /**
         * allows to manually hide content
         * @return {?}
         */
        CollapseDirective.prototype.hide = /**
         * allows to manually hide content
         * @return {?}
         */
            function () {
                this.isCollapse = false;
                this.isCollapsing = true;
                this.isExpanded = false;
                this.isCollapsed = true;
                this.isCollapse = true;
                this.isCollapsing = false;
                this.display = 'none';
                this.collapsed.emit(this);
            };
        /** allows to manually show collapsed content */
        /**
         * allows to manually show collapsed content
         * @return {?}
         */
        CollapseDirective.prototype.show = /**
         * allows to manually show collapsed content
         * @return {?}
         */
            function () {
                this.isCollapse = false;
                this.isCollapsing = true;
                this.isExpanded = true;
                this.isCollapsed = false;
                this.display = 'block';
                // this.height = 'auto';
                this.isCollapse = true;
                this.isCollapsing = false;
                this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
                this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
                this.expanded.emit(this);
            };
        CollapseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[collapse]',
                        exportAs: 'bs-collapse',
                        host: {
                            '[class.collapse]': 'true'
                        }
                    },] }
        ];
        /** @nocollapse */
        CollapseDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        CollapseDirective.propDecorators = {
            "collapsed": [{ type: core.Output },],
            "expanded": [{ type: core.Output },],
            "display": [{ type: core.HostBinding, args: ['style.display',] },],
            "isExpanded": [{ type: core.HostBinding, args: ['class.in',] }, { type: core.HostBinding, args: ['class.show',] }, { type: core.HostBinding, args: ['attr.aria-expanded',] },],
            "isCollapsed": [{ type: core.HostBinding, args: ['attr.aria-hidden',] },],
            "isCollapse": [{ type: core.HostBinding, args: ['class.collapse',] },],
            "isCollapsing": [{ type: core.HostBinding, args: ['class.collapsing',] },],
            "collapse": [{ type: core.Input },],
        };
        return CollapseDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CollapseModule = (function () {
        function CollapseModule() {
        }
        /**
         * @return {?}
         */
        CollapseModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: CollapseModule, providers: [] };
            };
        CollapseModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CollapseDirective],
                        exports: [CollapseDirective]
                    },] }
        ];
        return CollapseModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.CollapseDirective = CollapseDirective;
    exports.CollapseModule = CollapseModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb2xsYXBzZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvY29sbGFwc2UvY29sbGFwc2UuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2NvbGxhcHNlL2NvbGxhcHNlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBhZGQgYW5pbWF0aW9ucyB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzk5NDcgc29sdmVkXHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NvbGxhcHNlXScsXHJcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jb2xsYXBzZV0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZURpcmVjdGl2ZSB7XHJcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGNvbGxhcHNlcyAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGJlY29tZXMgdmlzaWJsZSAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheTogc3RyaW5nO1xyXG4gIC8vIHNob3duXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbicpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JylcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXHJcbiAgaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgLy8gaGlkZGVuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGlkZGVuJykgaXNDb2xsYXBzZWQgPSBmYWxzZTtcclxuICAvLyBzdGFsZSBzdGF0ZVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2UnKSBpc0NvbGxhcHNlID0gdHJ1ZTtcclxuICAvLyBhbmltYXRpb24gc3RhdGVcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNpbmcnKSBpc0NvbGxhcHNpbmcgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEEgZmxhZyBpbmRpY2F0aW5nIHZpc2liaWxpdHkgb2YgY29udGVudCAoc2hvd24gb3IgaGlkZGVuKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbGxhcHNlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sbGFwc2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0V4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XHJcblxyXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eSAqL1xyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgaGlkZSBjb250ZW50ICovXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDb2xsYXBzZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgc2hvdyBjb2xsYXBzZWQgY29udGVudCAqL1xyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyB0aGlzLmhlaWdodCA9ICdhdXRvJztcclxuICAgIHRoaXMuaXNDb2xsYXBzZSA9IHRydWU7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICdvdmVyZmxvdycsXHJcbiAgICAgICd2aXNpYmxlJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgdGhpcy5leHBhbmRlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUgfSBmcm9tICcuL2NvbGxhcHNlLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NvbGxhcHNlRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbQ29sbGFwc2VEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQ29sbGFwc2VNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJPdXRwdXQiLCJIb3N0QmluZGluZyIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtRQWlERSwyQkFBb0IsR0FBZSxFQUFVLFNBQW9CO1lBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7WUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOzs7OzZCQTdCeEIsSUFBSUEsaUJBQVksRUFBRTs7Ozs0QkFHbkIsSUFBSUEsaUJBQVksRUFBRTs7OEJBTzdDLElBQUk7OytCQUU4QixLQUFLOzs4QkFFUixJQUFJOztnQ0FFQSxLQUFLO1NBYWdCOzhCQVRqRSx1Q0FBUTs7O2dCQUtaO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4Qjs7Ozs7MEJBUFksS0FBYztnQkFD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