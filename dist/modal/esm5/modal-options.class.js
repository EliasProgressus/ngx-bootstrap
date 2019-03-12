/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
export { ModalOptions };
function ModalOptions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ModalOptions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ModalOptions.ctorParameters;
    /**
     *  Includes a modal-backdrop element. Alternatively,
     *  specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.animated;
    /**
     * Modal data
     * @type {?}
     */
    ModalOptions.prototype.initialState;
}
export var /** @type {?} */ modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
export var /** @type {?} */ CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
export var /** @type {?} */ SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
export var /** @type {?} */ TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
export var /** @type {?} */ DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1vcHRpb25zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztnQkFHMUMsVUFBVTs7dUJBSFg7O1NBSWEsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUN6QixNQUFNLENBQUMscUJBQU0sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULFFBQVEsRUFBRSxJQUFJO0lBQ2QsWUFBWSxFQUFFLEVBQUU7Q0FDakIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQWM7SUFDbkMsa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixFQUFFLEVBQUUsSUFBSTs7SUFDUixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUM7QUFFRixNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFhO0lBQ2hDLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsb0RBQW9EO0NBQ3BFLENBQUM7QUFFRixNQUFNLENBQUMscUJBQU0sb0JBQW9CLEdBQXdCO0lBQ3ZELEtBQUssRUFBRSxHQUFHO0lBQ1YsUUFBUSxFQUFFLEdBQUc7Q0FDZCxDQUFDO0FBRUYsTUFBTSxDQUFDLHFCQUFNLGVBQWUsR0FBbUI7SUFDN0MsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixHQUFHLEVBQUUsS0FBSztDQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsYXNzTmFtZSwgRGlzbWlzc1JlYXNvbnMsIFNlbGVjdG9yLCBUcmFuc2l0aW9uRHVyYXRpb25zIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9kYWxPcHRpb25zIHtcclxuICAvKipcclxuICAgKiAgSW5jbHVkZXMgYSBtb2RhbC1iYWNrZHJvcCBlbGVtZW50LiBBbHRlcm5hdGl2ZWx5LFxyXG4gICAqICBzcGVjaWZ5IHN0YXRpYyBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cclxuICAgKi9cclxuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJztcclxuICAvKipcclxuICAgKiBDbG9zZXMgdGhlIG1vZGFsIHdoZW4gZXNjYXBlIGtleSBpcyBwcmVzc2VkLlxyXG4gICAqL1xyXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcclxuXHJcbiAgZm9jdXM/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIFNob3dzIHRoZSBtb2RhbCB3aGVuIGluaXRpYWxpemVkLlxyXG4gICAqL1xyXG4gIHNob3c/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIElnbm9yZSB0aGUgYmFja2Ryb3AgY2xpY2tcclxuICAgKi9cclxuICBpZ25vcmVCYWNrZHJvcENsaWNrPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBDc3MgY2xhc3MgZm9yIG9wZW5lZCBtb2RhbFxyXG4gICAqL1xyXG4gIGNsYXNzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSBhbmltYXRpb25cclxuICAgKi9cclxuICBhbmltYXRlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogTW9kYWwgZGF0YVxyXG4gICAqL1xyXG4gIGluaXRpYWxTdGF0ZT86IE9iamVjdDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbENvbmZpZ0RlZmF1bHRzOiBNb2RhbE9wdGlvbnMgPSB7XHJcbiAgYmFja2Ryb3A6IHRydWUsXHJcbiAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgZm9jdXM6IHRydWUsXHJcbiAgc2hvdzogZmFsc2UsXHJcbiAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXHJcbiAgY2xhc3M6ICcnLFxyXG4gIGFuaW1hdGVkOiB0cnVlLFxyXG4gIGluaXRpYWxTdGF0ZToge31cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FOiBDbGFzc05hbWUgPSB7XHJcbiAgU0NST0xMQkFSX01FQVNVUkVSOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxyXG4gIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxyXG4gIE9QRU46ICdtb2RhbC1vcGVuJyxcclxuICBGQURFOiAnZmFkZScsXHJcbiAgSU46ICdpbicsIC8vIGJzM1xyXG4gIFNIT1c6ICdzaG93JyAvLyBiczRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RPUjogU2VsZWN0b3IgPSB7XHJcbiAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXHJcbiAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXHJcbiAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcclxuICBGSVhFRF9DT05URU5UOiAnLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTlM6IFRyYW5zaXRpb25EdXJhdGlvbnMgPSB7XHJcbiAgTU9EQUw6IDMwMCxcclxuICBCQUNLRFJPUDogMTUwXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRElTTUlTU19SRUFTT05TOiBEaXNtaXNzUmVhc29ucyA9IHtcclxuICBCQUNLUkRPUDogJ2JhY2tkcm9wLWNsaWNrJyxcclxuICBFU0M6ICdlc2MnXHJcbn07XHJcbiJdfQ==