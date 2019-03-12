/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var BsLocaleService = /** @class */ (function () {
    function BsLocaleService() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    Object.defineProperty(BsLocaleService.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} locale
     * @return {?}
     */
    BsLocaleService.prototype.use = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    };
    BsLocaleService.decorators = [
        { type: Injectable }
    ];
    return BsLocaleService;
}());
export { BsLocaleService };
function BsLocaleService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsLocaleService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsLocaleService.ctorParameters;
    /** @type {?} */
    BsLocaleService.prototype._defaultLocale;
    /** @type {?} */
    BsLocaleService.prototype._locale;
    /** @type {?} */
    BsLocaleService.prototype._localeChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1sb2NhbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOzs7OEJBSXhCLElBQUk7dUJBQ1gsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLGNBQWMsQ0FBQzs2QkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7O0lBRXZFLHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBWTs7OztRQUFoQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFhOzs7O1FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEM7OztPQUFBOzs7OztJQUVELDZCQUFHOzs7O0lBQUgsVUFBSSxNQUFjO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNCOztnQkF4QkYsVUFBVTs7MEJBSFg7O1NBSWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0xvY2FsZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2RlZmF1bHRMb2NhbGUgPSAnZW4nO1xyXG4gIHByaXZhdGUgX2xvY2FsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aGlzLl9kZWZhdWx0TG9jYWxlKTtcclxuICBwcml2YXRlIF9sb2NhbGVDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX2xvY2FsZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGxvY2FsZSgpOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50TG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICB1c2UobG9jYWxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChsb2NhbGUgPT09IHRoaXMuY3VycmVudExvY2FsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbG9jYWxlLm5leHQobG9jYWxlKTtcclxuICB9XHJcbn1cclxuIl19