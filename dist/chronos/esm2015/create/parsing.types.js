/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function DateParsingConfig() { }
function DateParsingConfig_tsickle_Closure_declarations() {
    /**
     * date value
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._d;
    /**
     * DateArray [year, month, date, .....]
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._a;
    /**
     * date meridiem
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._meridiem;
    /**
     * is PM
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._isPm;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._isUTC;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._useUTC;
    /**
     * input to parse: could be string, number[], number, Date, object
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._i;
    /**
     * locale key, 'en' by default
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._l;
    /**
     * date locale obj
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._locale;
    /**
     * date format
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._f;
    /**
     * use strict parse format
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._strict;
    /**
     * add one day to result at the end of parsing
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._nextDay;
    /**
     * utc time offset
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._offset;
    /**
     * time zone
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._tzm;
    /**
     * is valid
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._isValid;
    /**
     * date parsing flags
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._pf;
    /**
     * week
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._w;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._dayOfYear;
    /**
     * used in set offset
     * @type {?|undefined}
     */
    DateParsingConfig.prototype._changeInProgress;
    /** @type {?|undefined} */
    DateParsingConfig.prototype._zoneDelta;
}
/**
 * @record
 */
export function DateParsingFlags() { }
function DateParsingFlags_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowDayOfYear;
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowWeeks;
    /** @type {?|undefined} */
    DateParsingFlags.prototype._overflowWeekday;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.score;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.bigHour;
    /** @type {?} */
    DateParsingFlags.prototype.empty;
    /** @type {?} */
    DateParsingFlags.prototype.unusedTokens;
    /** @type {?} */
    DateParsingFlags.prototype.unusedInput;
    /** @type {?} */
    DateParsingFlags.prototype.overflow;
    /** @type {?} */
    DateParsingFlags.prototype.charsLeftOver;
    /** @type {?} */
    DateParsingFlags.prototype.nullInput;
    /** @type {?} */
    DateParsingFlags.prototype.invalidMonth;
    /** @type {?|undefined} */
    DateParsingFlags.prototype.invalidWeekday;
    /** @type {?} */
    DateParsingFlags.prototype.invalidFormat;
    /** @type {?} */
    DateParsingFlags.prototype.userInvalidated;
    /** @type {?} */
    DateParsingFlags.prototype.iso;
    /** @type {?} */
    DateParsingFlags.prototype.parsedDateParts;
    /** @type {?} */
    DateParsingFlags.prototype.meridiem;
    /** @type {?} */
    DateParsingFlags.prototype.rfc2822;
    /** @type {?} */
    DateParsingFlags.prototype.weekdayMismatch;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2luZy50eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9wYXJzaW5nLnR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlT2JqZWN0LCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAvKiogZGF0ZSB2YWx1ZSAqL1xyXG4gIF9kPzogRGF0ZTtcclxuICAvKiogRGF0ZUFycmF5IFt5ZWFyLCBtb250aCwgZGF0ZSwgLi4uLi5dICovXHJcbiAgX2E/OiBEYXRlQXJyYXk7XHJcbiAgLyoqIGRhdGUgbWVyaWRpZW0gKi9cclxuICBfbWVyaWRpZW0/OiBzdHJpbmc7XHJcbiAgLyoqIGlzIFBNICovXHJcbiAgX2lzUG0/OiBib29sZWFuO1xyXG4gIC8vIGR1cGxpY2F0ZSBwYXJhbT9cclxuICBfaXNVVEM/OiBib29sZWFuO1xyXG4gIF91c2VVVEM/OiBib29sZWFuO1xyXG4gIC8qKiBpbnB1dCB0byBwYXJzZTogY291bGQgYmUgc3RyaW5nLCBudW1iZXJbXSwgbnVtYmVyLCBEYXRlLCBvYmplY3QgKi9cclxuICBfaT86IERhdGVJbnB1dDtcclxuICAvKiogbG9jYWxlIGtleSwgJ2VuJyBieSBkZWZhdWx0ICovXHJcbiAgX2w/OiBzdHJpbmc7XHJcbiAgLyoqIGRhdGUgbG9jYWxlIG9iaiAqL1xyXG4gIF9sb2NhbGU/OiBMb2NhbGU7XHJcbiAgLyoqIGRhdGUgZm9ybWF0ICovXHJcbiAgX2Y/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAvKiogdXNlIHN0cmljdCBwYXJzZSBmb3JtYXQgKi9cclxuICBfc3RyaWN0PzogYm9vbGVhbjtcclxuICAvKiogYWRkIG9uZSBkYXkgdG8gcmVzdWx0IGF0IHRoZSBlbmQgb2YgcGFyc2luZyAqL1xyXG4gIF9uZXh0RGF5PzogYm9vbGVhbjtcclxuICAvKiogdXRjIHRpbWUgb2Zmc2V0ICovXHJcbiAgX29mZnNldD86IG51bWJlcjtcclxuICAvKiogdGltZSB6b25lICovXHJcbiAgX3R6bT86IG51bWJlcjtcclxuICAvKiogaXMgdmFsaWQgKi9cclxuICBfaXNWYWxpZD86IGJvb2xlYW47XHJcbiAgLyoqIGRhdGUgcGFyc2luZyBmbGFncyAqL1xyXG4gIF9wZj86IERhdGVQYXJzaW5nRmxhZ3M7XHJcblxyXG4gIC8qKiBkYXRlIHNwZWNpZmljIGluZm8gKi9cclxuXHJcbiAgLyoqIHdlZWsgKi9cclxuICBfdz86IFdlZWtQYXJzaW5nO1xyXG4gIF9kYXlPZlllYXI/OiBudW1iZXI7XHJcbiAgLyoqIHVzZWQgaW4gc2V0IG9mZnNldCAqL1xyXG4gIF9jaGFuZ2VJblByb2dyZXNzPzogYm9vbGVhbjtcclxuICAvKiB1c2VkIG9ubHkgaW4gZGlmZiBtZXRob2QgKi9cclxuICBfem9uZURlbHRhPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQYXJzaW5nRmxhZ3Mge1xyXG4gIF9vdmVyZmxvd0RheU9mWWVhcj86IGJvb2xlYW47XHJcbiAgX292ZXJmbG93V2Vla3M/OiBib29sZWFuO1xyXG4gIF9vdmVyZmxvd1dlZWtkYXk/OiBib29sZWFuO1xyXG4gIHNjb3JlPzogbnVtYmVyO1xyXG4gIGJpZ0hvdXI/OiBib29sZWFuO1xyXG4gIGVtcHR5OiBib29sZWFuO1xyXG4gIHVudXNlZFRva2Vuczogc3RyaW5nW107XHJcbiAgdW51c2VkSW5wdXQ6IHN0cmluZ1tdO1xyXG4gIG92ZXJmbG93OiBudW1iZXI7XHJcbiAgY2hhcnNMZWZ0T3ZlcjogbnVtYmVyO1xyXG4gIG51bGxJbnB1dDogYm9vbGVhbjtcclxuICBpbnZhbGlkTW9udGg6IGJvb2xlYW47XHJcbiAgaW52YWxpZFdlZWtkYXk/OiBib29sZWFuO1xyXG4gIGludmFsaWRGb3JtYXQ6IGJvb2xlYW47XHJcbiAgdXNlckludmFsaWRhdGVkOiBib29sZWFuO1xyXG4gIGlzbzogYm9vbGVhbjtcclxuICBwYXJzZWREYXRlUGFydHM6IERhdGVBcnJheTtcclxuICBtZXJpZGllbTogc3RyaW5nO1xyXG4gIHJmYzI4MjI6IGJvb2xlYW47XHJcbiAgd2Vla2RheU1pc21hdGNoOiBib29sZWFuO1xyXG59XHJcbiJdfQ==