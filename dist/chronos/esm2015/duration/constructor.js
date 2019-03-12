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
export class Duration {
    /**
     * @param {?} duration
     * @param {?=} config
     */
    constructor(duration, config = {}) {
        this._data = {};
        this._locale = getLocale();
        this._locale = config && config._locale || getLocale();
        // const normalizedInput = normalizeObjectUnits(duration);
        const /** @type {?} */ normalizedInput = duration;
        const /** @type {?} */ years = normalizedInput.year || 0;
        const /** @type {?} */ quarters = normalizedInput.quarter || 0;
        const /** @type {?} */ months = normalizedInput.month || 0;
        const /** @type {?} */ weeks = normalizedInput.week || 0;
        const /** @type {?} */ days = normalizedInput.day || 0;
        const /** @type {?} */ hours = normalizedInput.hours || 0;
        const /** @type {?} */ minutes = normalizedInput.minutes || 0;
        const /** @type {?} */ seconds = normalizedInput.seconds || 0;
        const /** @type {?} */ milliseconds = normalizedInput.milliseconds || 0;
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
    isValid() {
        return this._isValid;
    }
    /**
     * @param {?=} withSuffix
     * @return {?}
     */
    humanize(withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        const /** @type {?} */ locale = this.localeData();
        let /** @type {?} */ output = relativeTime(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    }
    /**
     * @return {?}
     */
    localeData() {
        return this._locale;
    }
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    locale(localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = getLocale(localeKey) || this._locale;
        return this;
    }
    /**
     * @return {?}
     */
    abs() {
        const /** @type {?} */ mathAbs = Math.abs;
        const /** @type {?} */ data = this._data;
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
    }
    /**
     * @param {?} _units
     * @return {?}
     */
    as(_units) {
        if (!this.isValid()) {
            return NaN;
        }
        let /** @type {?} */ days;
        let /** @type {?} */ months;
        const /** @type {?} */ milliseconds = this._milliseconds;
        const /** @type {?} */ units = normalizeUnits(_units);
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
                throw new Error(`Unknown unit ${units}`);
        }
    }
    /**
     * @return {?}
     */
    valueOf() {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6);
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi9jb25zdHJ1Y3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxNQUFNOzs7OztJQVFKLFlBQVksUUFBNkIsRUFBRSxTQUE0QixFQUFFO3FCQUo1QyxFQUFFO3VCQUNiLFNBQVMsRUFBRTtRQUkzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsRUFBRSxDQUFDOztRQUV2RCx1QkFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLHVCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4Qyx1QkFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDOUMsdUJBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzFDLHVCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4Qyx1QkFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMsdUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FB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L2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgaXNEdXJhdGlvblZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XHJcbmltcG9ydCB7IGJ1YmJsZSwgZGF5c1RvTW9udGhzLCBtb250aHNUb0RheXMgfSBmcm9tICcuL2J1YmJsZSc7XHJcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyByZWxhdGl2ZVRpbWUgfSBmcm9tICcuL2h1bWFuaXplJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xyXG4gIF9taWxsaXNlY29uZHM6IG51bWJlcjtcclxuICBfZGF5czogbnVtYmVyO1xyXG4gIF9tb250aHM6IG51bWJlcjtcclxuICBfZGF0YTogUGFydGlhbDxEYXRlT2JqZWN0PiA9IHt9O1xyXG4gIF9sb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpO1xyXG4gIF9pc1ZhbGlkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0PiwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KSB7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcgJiYgY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKCk7XHJcbiAgICAvLyBjb25zdCBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbik7XHJcbiAgICBjb25zdCBub3JtYWxpemVkSW5wdXQgPSBkdXJhdGlvbjtcclxuICAgIGNvbnN0IHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMDtcclxuICAgIGNvbnN0IHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMDtcclxuICAgIGNvbnN0IG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwO1xyXG4gICAgY29uc3Qgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwO1xyXG4gICAgY29uc3QgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMDtcclxuICAgIGNvbnN0IGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXJzIHx8IDA7XHJcbiAgICBjb25zdCBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZXMgfHwgMDtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQuc2Vjb25kcyB8fCAwO1xyXG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kcyB8fCAwO1xyXG5cclxuICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcclxuXHJcbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxyXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gK21pbGxpc2Vjb25kcyArXHJcbiAgICAgIHNlY29uZHMgKiAxMDAwICtcclxuICAgICAgbWludXRlcyAqIDYwICogMTAwMCArIC8vIDEwMDAgKiA2MFxyXG4gICAgICBob3VycyAqIDEwMDAgKiA2MCAqIDYwOyAvLyB1c2luZyAxMDAwICogNjAgKiA2MFxyXG4gICAgLy8gaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxyXG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXHJcbiAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XHJcbiAgICB0aGlzLl9kYXlzID0gK2RheXMgK1xyXG4gICAgICB3ZWVrcyAqIDc7XHJcbiAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xyXG4gICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcclxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXHJcbiAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICtcclxuICAgICAgcXVhcnRlcnMgKiAzICtcclxuICAgICAgeWVhcnMgKiAxMjtcclxuXHJcbiAgICAvLyB0aGlzLl9kYXRhID0ge307XHJcblxyXG4gICAgLy8gdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKCk7XHJcblxyXG4gICAgLy8gdGhpcy5fYnViYmxlKCk7XHJcbiAgICByZXR1cm4gYnViYmxlKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgaHVtYW5pemUod2l0aFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBpbXBsZW1lbnRgKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcclxuICAgIGxldCBvdXRwdXQgPSByZWxhdGl2ZVRpbWUodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XHJcblxyXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcclxuICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XHJcbiAgfVxyXG5cclxuICBsb2NhbGVEYXRhKCk6IExvY2FsZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxlKCk6IHN0cmluZztcclxuICBsb2NhbGUobG9jYWxlS2V5OiBzdHJpbmcpOiBEdXJhdGlvbjtcclxuICBsb2NhbGUobG9jYWxlS2V5Pzogc3RyaW5nKTogRHVyYXRpb24gfCBzdHJpbmcge1xyXG4gICAgaWYgKCFsb2NhbGVLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlS2V5KSB8fCB0aGlzLl9sb2NhbGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWJzKCk6IER1cmF0aW9uIHtcclxuICAgIGNvbnN0IG1hdGhBYnMgPSBNYXRoLmFicztcclxuXHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcclxuXHJcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XHJcbiAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcclxuICAgIHRoaXMuX21vbnRocyA9IG1hdGhBYnModGhpcy5fbW9udGhzKTtcclxuXHJcbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xyXG4gICAgZGF0YS5zZWNvbmRzID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xyXG4gICAgZGF0YS5taW51dGVzID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xyXG4gICAgZGF0YS5ob3VycyA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XHJcbiAgICBkYXRhLm1vbnRoID0gbWF0aEFicyhkYXRhLm1vbnRoKTtcclxuICAgIGRhdGEueWVhciA9IG1hdGhBYnMoZGF0YS55ZWFyKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFzKF91bml0czogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH1cclxuICAgIGxldCBkYXlzO1xyXG4gICAgbGV0IG1vbnRocztcclxuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcclxuXHJcbiAgICBjb25zdCB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKF91bml0cyk7XHJcblxyXG4gICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAneWVhcicpIHtcclxuICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcclxuICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xyXG5cclxuICAgICAgcmV0dXJuIHVuaXRzID09PSAnbW9udGgnID8gbW9udGhzIDogbW9udGhzIC8gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxyXG4gICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcclxuICAgIHN3aXRjaCAodW5pdHMpIHtcclxuICAgICAgY2FzZSAnd2VlaycgICA6XHJcbiAgICAgICAgcmV0dXJuIGRheXMgLyA3ICsgbWlsbGlzZWNvbmRzIC8gNjA0OGU1O1xyXG4gICAgICBjYXNlICdkYXknICAgIDpcclxuICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xyXG4gICAgICBjYXNlICdob3VycycgICA6XHJcbiAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZXMnIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAqIDE0NDAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XHJcbiAgICAgIGNhc2UgJ3NlY29uZHMnIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcclxuICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXHJcbiAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdW5pdCAke3VuaXRzfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsdWVPZiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiBOYU47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcclxuICAgICAgdGhpcy5fZGF5cyAqIDg2NGU1ICtcclxuICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXHJcbiAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvbihvYmo6IGFueSk6IG9iaiBpcyBEdXJhdGlvbiB7XHJcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xyXG59XHJcbiJdfQ==