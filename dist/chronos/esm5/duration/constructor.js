/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getLocale } from '../locale/locales';
import { isDurationValid } from './valid';
import { bubble, daysToMonths, monthsToDays } from './bubble';
import { normalizeUnits } from '../units/aliases';
import { relativeTime } from './humanize';
import { toInt } from '../utils/type-checks';
var Duration = /** @class */ (function () {
    function Duration(duration, config) {
        if (config === void 0) { config = {}; }
        this._data = {};
        this._locale = getLocale();
        this._locale = config && config._locale || getLocale();
        // const normalizedInput = normalizeObjectUnits(duration);
        var /** @type {?} */ normalizedInput = duration;
        var /** @type {?} */ years = normalizedInput.year || 0;
        var /** @type {?} */ quarters = normalizedInput.quarter || 0;
        var /** @type {?} */ months = normalizedInput.month || 0;
        var /** @type {?} */ weeks = normalizedInput.week || 0;
        var /** @type {?} */ days = normalizedInput.day || 0;
        var /** @type {?} */ hours = normalizedInput.hours || 0;
        var /** @type {?} */ minutes = normalizedInput.minutes || 0;
        var /** @type {?} */ seconds = normalizedInput.seconds || 0;
        var /** @type {?} */ milliseconds = normalizedInput.milliseconds || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1000 +
            minutes * 60 * 1000 + // 1000 * 60
            // 1000 * 60
            hours * 1000 * 60 * 60; // using 1000 * 60 * 60
        // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        // this._data = {};
        // this._locale = getLocale();
        // this._bubble();
        return bubble(this);
    }
    /**
     * @return {?}
     */
    Duration.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return this._isValid;
    };
    /**
     * @param {?=} withSuffix
     * @return {?}
     */
    Duration.prototype.humanize = /**
     * @param {?=} withSuffix
     * @return {?}
     */
    function (withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        var /** @type {?} */ locale = this.localeData();
        var /** @type {?} */ output = relativeTime(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    };
    /**
     * @return {?}
     */
    Duration.prototype.localeData = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    Duration.prototype.locale = /**
     * @param {?=} localeKey
     * @return {?}
     */
    function (localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = getLocale(localeKey) || this._locale;
        return this;
    };
    /**
     * @return {?}
     */
    Duration.prototype.abs = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ mathAbs = Math.abs;
        var /** @type {?} */ data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.month = mathAbs(data.month);
        data.year = mathAbs(data.year);
        return this;
    };
    /**
     * @param {?} _units
     * @return {?}
     */
    Duration.prototype.as = /**
     * @param {?} _units
     * @return {?}
     */
    function (_units) {
        if (!this.isValid()) {
            return NaN;
        }
        var /** @type {?} */ days;
        var /** @type {?} */ months;
        var /** @type {?} */ milliseconds = this._milliseconds;
        var /** @type {?} */ units = normalizeUnits(_units);
        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        }
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hours':
                return days * 24 + milliseconds / 36e5;
            case 'minutes':
                return days * 1440 + milliseconds / 6e4;
            case 'seconds':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'milliseconds':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error("Unknown unit " + units);
        }
    };
    /**
     * @return {?}
     */
    Duration.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6);
    };
    return Duration;
}());
export { Duration };
function Duration_tsickle_Closure_declarations() {
    /** @type {?} */
    Duration.prototype._milliseconds;
    /** @type {?} */
    Duration.prototype._days;
    /** @type {?} */
    Duration.prototype._months;
    /** @type {?} */
    Duration.prototype._data;
    /** @type {?} */
    Duration.prototype._locale;
    /** @type {?} */
    Duration.prototype._isValid;
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isDuration(obj) {
    return obj instanceof Duration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi9jb25zdHJ1Y3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxJQUFBO0lBUUUsa0JBQVksUUFBNkIsRUFBRSxNQUE4QjtRQUE5Qix1QkFBQSxFQUFBLFdBQThCO3FCQUo1QyxFQUFFO3VCQUNiLFNBQVMsRUFBRTtRQUkzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDOztRQUV2RCxxQkFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLHFCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxxQkFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDOUMscUJBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzFDLHFCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4QyxxQkFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMscUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FB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akMsTUFBTSxDQUFDLEdBQUcsWUFBWSxRQUFRLENBQUM7Q0FDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBpc0R1cmF0aW9uVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcclxuaW1wb3J0IHsgYnViYmxlLCBkYXlzVG9Nb250aHMsIG1vbnRoc1RvRGF5cyB9IGZyb20gJy4vYnViYmxlJztcclxuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XHJcbmltcG9ydCB7IHJlbGF0aXZlVGltZSB9IGZyb20gJy4vaHVtYW5pemUnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdXJhdGlvbiB7XHJcbiAgX21pbGxpc2Vjb25kczogbnVtYmVyO1xyXG4gIF9kYXlzOiBudW1iZXI7XHJcbiAgX21vbnRoczogbnVtYmVyO1xyXG4gIF9kYXRhOiBQYXJ0aWFsPERhdGVPYmplY3Q+ID0ge307XHJcbiAgX2xvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCk7XHJcbiAgX2lzVmFsaWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZyAmJiBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoKTtcclxuICAgIC8vIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IGR1cmF0aW9uO1xyXG4gICAgY29uc3QgeWVhcnMgPSBub3JtYWxpemVkSW5wdXQueWVhciB8fCAwO1xyXG4gICAgY29uc3QgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwO1xyXG4gICAgY29uc3QgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDA7XHJcbiAgICBjb25zdCB3ZWVrcyA9IG5vcm1hbGl6ZWRJbnB1dC53ZWVrIHx8IDA7XHJcbiAgICBjb25zdCBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwO1xyXG4gICAgY29uc3QgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91cnMgfHwgMDtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlcyB8fCAwO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmRzIHx8IDA7XHJcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmRzIHx8IDA7XHJcblxyXG4gICAgdGhpcy5faXNWYWxpZCA9IGlzRHVyYXRpb25WYWxpZChub3JtYWxpemVkSW5wdXQpO1xyXG5cclxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXHJcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSArbWlsbGlzZWNvbmRzICtcclxuICAgICAgc2Vjb25kcyAqIDEwMDAgK1xyXG4gICAgICBtaW51dGVzICogNjAgKiAxMDAwICsgLy8gMTAwMCAqIDYwXHJcbiAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vIHVzaW5nIDEwMDAgKiA2MCAqIDYwXHJcbiAgICAvLyBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XHJcbiAgICAvLyBCZWNhdXNlIG9mIGRhdGVBZGRSZW1vdmUgdHJlYXRzIDI0IGhvdXJzIGFzIGRpZmZlcmVudCBmcm9tIGFcclxuICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcclxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArXHJcbiAgICAgIHdlZWtzICogNztcclxuICAgIC8vIEl0IGlzIGltcG9zc2libGUgdG8gdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXHJcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxyXG4gICAgLy8gaXQgc2VwYXJhdGVseS5cclxuICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgK1xyXG4gICAgICBxdWFydGVycyAqIDMgK1xyXG4gICAgICB5ZWFycyAqIDEyO1xyXG5cclxuICAgIC8vIHRoaXMuX2RhdGEgPSB7fTtcclxuXHJcbiAgICAvLyB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcclxuXHJcbiAgICAvLyB0aGlzLl9idWJibGUoKTtcclxuICAgIHJldHVybiBidWJibGUodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBodW1hbml6ZSh3aXRoU3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYFRPRE86IGltcGxlbWVudGApO1xyXG5cclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xyXG4gICAgbGV0IG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcclxuXHJcbiAgICBpZiAod2l0aFN1ZmZpeCkge1xyXG4gICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcclxuICB9XHJcblxyXG4gIGxvY2FsZURhdGEoKTogTG9jYWxlIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgfVxyXG5cclxuICBsb2NhbGUoKTogc3RyaW5nO1xyXG4gIGxvY2FsZShsb2NhbGVLZXk6IHN0cmluZyk6IER1cmF0aW9uO1xyXG4gIGxvY2FsZShsb2NhbGVLZXk/OiBzdHJpbmcpOiBEdXJhdGlvbiB8IHN0cmluZyB7XHJcbiAgICBpZiAoIWxvY2FsZUtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGVLZXkpIHx8IHRoaXMuX2xvY2FsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICBhYnMoKTogRHVyYXRpb24ge1xyXG4gICAgY29uc3QgbWF0aEFicyA9IE1hdGguYWJzO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhO1xyXG5cclxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcclxuICAgIHRoaXMuX2RheXMgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xyXG4gICAgdGhpcy5fbW9udGhzID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xyXG5cclxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XHJcbiAgICBkYXRhLnNlY29uZHMgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XHJcbiAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XHJcbiAgICBkYXRhLmhvdXJzID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcclxuICAgIGRhdGEubW9udGggPSBtYXRoQWJzKGRhdGEubW9udGgpO1xyXG4gICAgZGF0YS55ZWFyID0gbWF0aEFicyhkYXRhLnllYXIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYXMoX3VuaXRzOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gTmFOO1xyXG4gICAgfVxyXG4gICAgbGV0IGRheXM7XHJcbiAgICBsZXQgbW9udGhzO1xyXG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xyXG5cclxuICAgIGNvbnN0IHVuaXRzID0gbm9ybWFsaXplVW5pdHMoX3VuaXRzKTtcclxuXHJcbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xyXG4gICAgICBkYXlzID0gdGhpcy5fZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xyXG4gICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XHJcblxyXG4gICAgICByZXR1cm4gdW5pdHMgPT09ICdtb250aCcgPyBtb250aHMgOiBtb250aHMgLyAxMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXHJcbiAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xyXG4gICAgc3dpdGNoICh1bml0cykge1xyXG4gICAgICBjYXNlICd3ZWVrJyAgIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAvIDcgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XHJcbiAgICAgIGNhc2UgJ2RheScgICAgOlxyXG4gICAgICAgIHJldHVybiBkYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XHJcbiAgICAgIGNhc2UgJ2hvdXJzJyAgIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcclxuICAgICAgY2FzZSAnbWludXRlcycgOlxyXG4gICAgICAgIHJldHVybiBkYXlzICogMTQ0MCArIG1pbGxpc2Vjb25kcyAvIDZlNDtcclxuICAgICAgY2FzZSAnc2Vjb25kcycgOlxyXG4gICAgICAgIHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xyXG4gICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcclxuICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB1bml0ICR7dW5pdHN9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWx1ZU9mICgpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLl9taWxsaXNlY29uZHMgK1xyXG4gICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xyXG4gICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcclxuICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uKG9iajogYW55KTogb2JqIGlzIER1cmF0aW9uIHtcclxuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRHVyYXRpb247XHJcbn1cclxuIl19