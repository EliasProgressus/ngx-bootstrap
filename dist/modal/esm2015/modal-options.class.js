/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
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
export const /** @type {?} */ modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
export const /** @type {?} */ CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
export const /** @type {?} */ SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
export const /** @type {?} */ TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
export const /** @type {?} */ DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvbW9kYWwvIiwic291cmNlcyI6WyJtb2RhbC1vcHRpb25zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU07OztZQURMLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ1gsTUFBTSxDQUFDLHVCQUFNLG1CQUFtQixHQUFpQjtJQUMvQyxRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsS0FBSyxFQUFFLEVBQUU7SUFDVCxRQUFRLEVBQUUsSUFBSTtJQUNkLFlBQVksRUFBRSxFQUFFO0NBQ2pCLENBQUM7QUFFRixNQUFNLENBQUMsdUJBQU0sVUFBVSxHQUFjO0lBQ25DLGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osRUFBRSxFQUFFLElBQUk7O0lBQ1IsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBRUYsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBYTtJQUNoQyxNQUFNLEVBQUUsZUFBZTtJQUN2QixXQUFXLEVBQUUsdUJBQXVCO0lBQ3BDLFlBQVksRUFBRSx3QkFBd0I7SUFDdEMsYUFBYSxFQUFFLG9EQUFvRDtDQUNwRSxDQUFDO0FBRUYsTUFBTSxDQUFDLHVCQUFNLG9CQUFvQixHQUF3QjtJQUN2RCxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQztBQUVGLE1BQU0sQ0FBQyx1QkFBTSxlQUFlLEdBQW1CO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsR0FBRyxFQUFFLEtBQUs7Q0FDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc05hbWUsIERpc21pc3NSZWFzb25zLCBTZWxlY3RvciwgVHJhbnNpdGlvbkR1cmF0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSxcclxuICAgKiAgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXHJcbiAgICovXHJcbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYyc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cclxuICAgKi9cclxuICBrZXlib2FyZD86IGJvb2xlYW47XHJcblxyXG4gIGZvY3VzPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cclxuICAgKi9cclxuICBzaG93PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBJZ25vcmUgdGhlIGJhY2tkcm9wIGNsaWNrXHJcbiAgICovXHJcbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcclxuICAgKi9cclxuICBjbGFzcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXHJcbiAgICovXHJcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1vZGFsIGRhdGFcclxuICAgKi9cclxuICBpbml0aWFsU3RhdGU/OiBPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xyXG4gIGJhY2tkcm9wOiB0cnVlLFxyXG4gIGtleWJvYXJkOiB0cnVlLFxyXG4gIGZvY3VzOiB0cnVlLFxyXG4gIHNob3c6IGZhbHNlLFxyXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxyXG4gIGNsYXNzOiAnJyxcclxuICBhbmltYXRlZDogdHJ1ZSxcclxuICBpbml0aWFsU3RhdGU6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRTogQ2xhc3NOYW1lID0ge1xyXG4gIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcclxuICBCQUNLRFJPUDogJ21vZGFsLWJhY2tkcm9wJyxcclxuICBPUEVOOiAnbW9kYWwtb3BlbicsXHJcbiAgRkFERTogJ2ZhZGUnLFxyXG4gIElOOiAnaW4nLCAvLyBiczNcclxuICBTSE9XOiAnc2hvdycgLy8gYnM0XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0VMRUNUT1I6IFNlbGVjdG9yID0ge1xyXG4gIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxyXG4gIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxyXG4gIERBVEFfRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXHJcbiAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT05TOiBUcmFuc2l0aW9uRHVyYXRpb25zID0ge1xyXG4gIE1PREFMOiAzMDAsXHJcbiAgQkFDS0RST1A6IDE1MFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERJU01JU1NfUkVBU09OUzogRGlzbWlzc1JlYXNvbnMgPSB7XHJcbiAgQkFDS1JET1A6ICdiYWNrZHJvcC1jbGljaycsXHJcbiAgRVNDOiAnZXNjJ1xyXG59O1xyXG4iXX0=