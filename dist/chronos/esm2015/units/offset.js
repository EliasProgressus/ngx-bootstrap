/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:no-bitwise max-line-length
// FORMATTING
import { addFormatToken } from '../format/format';
import { zeroFill } from '../utils/zero-fill';
import { isNumber, isString, toInt } from '../utils/type-checks';
import { addRegexToken, matchOffset, matchShortOffset } from '../parse/regex';
import { add } from '../moment/add-subtract';
import { addParseToken } from '../parse/token';
import { cloneDate } from '../create/clone';
import { setMonth } from '../utils/date-setters';
/**
 * @param {?} token
 * @param {?} separator
 * @return {?}
 */
function addOffsetFormatToken(token, separator) {
    addFormatToken(token, null, null, function (date, config) {
        let /** @type {?} */ offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        let /** @type {?} */ sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}
/**
 * @return {?}
 */
export function initOffset() {
    addOffsetFormatToken('Z', ':');
    addOffsetFormatToken('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
        return config;
    });
}
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
const /** @type {?} */ chunkOffset = /([\+\-]|\d\d)/gi;
/**
 * @param {?} matcher
 * @param {?} str
 * @return {?}
 */
function offsetFromString(matcher, str) {
    const /** @type {?} */ matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    const /** @type {?} */ chunk = matches[matches.length - 1];
    const /** @type {?} */ parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    const /** @type {?} */ minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
    const /** @type {?} */ _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
/**
 * @param {?} input
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
export function cloneWithOffset(input, date, config = {}) {
    if (!config._isUTC) {
        return input;
    }
    const /** @type {?} */ res = cloneDate(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    const /** @type {?} */ offsetDiff = (config._offset || 0) * 60000;
    const /** @type {?} */ diff = input.valueOf() - res.valueOf() + offsetDiff;
    // Use low-level api, because this fn is low-level api.
    res.setTime(res.valueOf() + diff);
    // todo: add timezone handling
    // hooks.updateOffset(res, false);
    return res;
}
/**
 * @param {?} date
 * @return {?}
 */
export function getDateOffset(date) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
/**
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
export function getUTCOffset(date, config = {}) {
    const /** @type {?} */ _offset = config._offset || 0;
    return config._isUTC ? _offset : getDateOffset(date);
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} keepLocalTime
 * @param {?=} keepMinutes
 * @param {?=} config
 * @return {?}
 */
export function setUTCOffset(date, input, keepLocalTime, keepMinutes, config = {}) {
    const /** @type {?} */ offset = config._offset || 0;
    let /** @type {?} */ localAdjust;
    let /** @type {?} */ _input = input;
    let /** @type {?} */ _date = date;
    if (isString(_input)) {
        _input = offsetFromString(matchShortOffset, _input);
        if (_input === null) {
            return _date;
        }
    }
    else if (isNumber(_input) && Math.abs(_input) < 16 && !keepMinutes) {
        _input = _input * 60;
    }
    if (!config._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(_date);
    }
    config._offset = _input;
    config._isUTC = true;
    if (localAdjust != null) {
        _date = add(_date, localAdjust, 'minutes');
    }
    if (offset !== _input) {
        if (!keepLocalTime || config._changeInProgress) {
            _date = add(_date, _input - offset, 'minutes', config._isUTC);
            // addSubtract(this, createDuration(_input - offset, 'm'), 1, false);
        }
        else if (!config._changeInProgress) {
            config._changeInProgress = true;
            // todo: add timezone handling
            // hooks.updateOffset(this, true);
            config._changeInProgress = null;
        }
    }
    return _date;
}
/**
 * @param {?} date
 * @param {?=} keepLocalTime
 * @return {?}
 */
export function setOffsetToUTC(date, keepLocalTime) {
    return setUTCOffset(date, 0, keepLocalTime);
}
/**
 * @param {?} date
 * @return {?}
 */
export function isDaylightSavingTime(date) {
    return (getUTCOffset(date) > getUTCOffset(setMonth(cloneDate(date), 0))
        || getUTCOffset(date) > getUTCOffset(setMonth(cloneDate(date), 5)));
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} config
 * @return {?}
 */
export function setOffsetToParsedOffset(date, input, config = {}) {
    if (config._tzm != null) {
        return setUTCOffset(date, config._tzm, false, true, config);
    }
    if (isString(input)) {
        const /** @type {?} */ tZone = offsetFromString(matchOffset, input);
        if (tZone != null) {
            return setUTCOffset(date, tZone, false, false, config);
        }
        return setUTCOffset(date, 0, true, false, config);
    }
    return date;
}
/**
 * @param {?} date
 * @param {?=} input
 * @return {?}
 */
export function hasAlignedHourOffset(date, input) {
    const /** @type {?} */ _input = input ? getUTCOffset(input, { _isUTC: false }) : 0;
    return (getUTCOffset(date) - _input) % 60 === 0;
}
// DEPRECATED
/*export function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }

  const c = {};

  copyConfig(c, this);
  c = prepareConfig(c);

  if (c._a) {
    const other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() &&
      compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }

  return this._isDSTShifted;
}*/
// in Khronos
/*export function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}

export function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}

export function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2Zmc2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvb2Zmc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUVqRCw4QkFBOEIsS0FBYSxFQUFFLFNBQWlCO0lBQzVELGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLElBQVUsRUFBRSxNQUFNO1FBQzVELHFCQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ2hGLHFCQUFJLElBQUksR0FBRyxHQUFHLENBQUM7UUFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ1o7UUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkYsQ0FBQyxDQUFDO0NBQ0o7Ozs7QUFFRCxNQUFNO0lBQ0osb0JBQW9CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLG9CQUFvQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFJL0IsYUFBYSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0QyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtRQUM1RixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7Q0FDSjs7Ozs7QUFPRCx1QkFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUM7Ozs7OztBQUV0QywwQkFBMEIsT0FBZSxFQUFFLEdBQVc7SUFDcEQsdUJBQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUzQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCx1QkFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsdUJBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELHVCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsdUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFFbkQsTUFBTSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0NBQ2pDOzs7Ozs7O0FBR0QsTUFBTSwwQkFBMEIsS0FBVyxFQUFFLElBQVUsRUFDdkIsU0FBNEIsRUFBRTtJQUM1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELHVCQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBRTVCLHVCQUFNLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pELHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQzs7SUFFMUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7OztJQUlsQyxNQUFNLENBQUMsR0FBRyxDQUFDO0NBQ1o7Ozs7O0FBRUQsTUFBTSx3QkFBd0IsSUFBVTs7O0lBR3RDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQ3hEOzs7Ozs7QUFzQkQsTUFBTSx1QkFBdUIsSUFBVSxFQUFFLFNBQTRCLEVBQUU7SUFDckUsdUJBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN0RDs7Ozs7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsSUFBVSxFQUFFLEtBQXNCLEVBQUUsYUFBdUIsRUFBRSxXQUFxQixFQUFFLFNBQTRCLEVBQUU7SUFDN0ksdUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO0lBQ25DLHFCQUFJLFdBQVcsQ0FBQztJQUNoQixxQkFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25CLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFakIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUN0QjtJQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7SUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QixLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDNUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7U0FFL0Q7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7OztZQUdoQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0tBQ0Y7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2Q7Ozs7OztBQWtCRCxNQUFNLHlCQUF5QixJQUFVLEVBQUUsYUFBdUI7SUFDaEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQzdDOzs7OztBQUVELE1BQU0sK0JBQStCLElBQVU7SUFFN0MsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1dBQ2xFLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDdkU7Ozs7Ozs7QUFjRCxNQUFNLGtDQUFrQyxJQUFVLEVBQUUsS0FBYSxFQUFFLFNBQTRCLEVBQUU7SUFDL0YsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3RDtJQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsdUJBQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN4RDtRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ25EO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztDQUNiOzs7Ozs7QUFFRCxNQUFNLCtCQUErQixJQUFVLEVBQUUsS0FBWTtJQUMzRCx1QkFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRSxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNqRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoT2Zmc2V0LCBtYXRjaFNob3J0T2Zmc2V0IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xyXG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XHJcblxyXG5mdW5jdGlvbiBhZGRPZmZzZXRGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyk6IHZvaWQge1xyXG4gIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgY29uZmlnKTogc3RyaW5nIHtcclxuICAgIGxldCBvZmZzZXQgPSBnZXRVVENPZmZzZXQoZGF0ZSwge19pc1VUQzogY29uZmlnLmlzVVRDLCBfb2Zmc2V0OiBjb25maWcub2Zmc2V0fSk7XHJcbiAgICBsZXQgc2lnbiA9ICcrJztcclxuICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XHJcbiAgICAgIHNpZ24gPSAnLSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpZ24gKyB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICsgc2VwYXJhdG9yICsgemVyb0ZpbGwofn4ob2Zmc2V0KSAlIDYwLCAyKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPZmZzZXQoKSB7XHJcbiAgYWRkT2Zmc2V0Rm9ybWF0VG9rZW4oJ1onLCAnOicpO1xyXG4gIGFkZE9mZnNldEZvcm1hdFRva2VuKCdaWicsICcnKTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XHJcbiAgYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGNvbmZpZy5fdXNlVVRDID0gdHJ1ZTtcclxuICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxufVxyXG5cclxuLy8gSEVMUEVSU1xyXG5cclxuLy8gdGltZXpvbmUgY2h1bmtlclxyXG4vLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cclxuLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXHJcbmNvbnN0IGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xyXG5cclxuZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaGVyOiBSZWdFeHAsIHN0cjogc3RyaW5nKTogbnVtYmVyIHtcclxuICBjb25zdCBtYXRjaGVzID0gKHN0ciB8fCAnJykubWF0Y2gobWF0Y2hlcik7XHJcblxyXG4gIGlmIChtYXRjaGVzID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNodW5rID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xyXG4gIGNvbnN0IHBhcnRzID0gY2h1bmsubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsICcwJywgJzAnXTtcclxuICBjb25zdCBtaW51dGVzID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKSAqIDYwICsgdG9JbnQocGFydHNbMl0pO1xyXG4gIGNvbnN0IF9taW4gPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xyXG5cclxuICByZXR1cm4gbWludXRlcyA9PT0gMCA/IDAgOiBfbWluO1xyXG59XHJcblxyXG4vLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvem9uZSBlcXVpdmFsZW50IHRvIG1vZGVsLlxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0OiBEYXRlLCBkYXRlOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xyXG4gIGlmICghY29uZmlnLl9pc1VUQykge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gY2xvbmVEYXRlKGRhdGUpO1xyXG4gIC8vIHRvZG86IGlucHV0Ll9kIC0gcmVzLl9kICsgKChyZXMuX29mZnNldCB8fCAwKSAtIChpbnB1dC5fb2Zmc2V0IHx8IDApKSo2MDAwMFxyXG4gIGNvbnN0IG9mZnNldERpZmYgPSAoY29uZmlnLl9vZmZzZXQgfHwgMCkgKiA2MDAwMDtcclxuICBjb25zdCBkaWZmID0gaW5wdXQudmFsdWVPZigpIC0gcmVzLnZhbHVlT2YoKSArIG9mZnNldERpZmY7XHJcbiAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxyXG4gIHJlcy5zZXRUaW1lKHJlcy52YWx1ZU9mKCkgKyBkaWZmKTtcclxuICAvLyB0b2RvOiBhZGQgdGltZXpvbmUgaGFuZGxpbmdcclxuICAvLyBob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlT2Zmc2V0KGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXHJcbiAgcmV0dXJuIC1NYXRoLnJvdW5kKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xyXG59XHJcblxyXG4vLyBIT09LU1xyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBhIG1vbWVudCBpcyBtdXRhdGVkLlxyXG4vLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cclxuLy8gdG9kbzogaXQncyBmcm9tIG1vbWVudCB0aW1lem9uZXNcclxuLy8gaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4vLyB9O1xyXG5cclxuLy8gTU9NRU5UU1xyXG5cclxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XHJcbi8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XHJcbi8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcclxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxyXG4vL1xyXG4vLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcclxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XHJcbi8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cclxuLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXHJcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVVENPZmZzZXQoZGF0ZTogRGF0ZSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogbnVtYmVyIHtcclxuICBjb25zdCBfb2Zmc2V0ID0gY29uZmlnLl9vZmZzZXQgfHwgMDtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5faXNVVEMgPyBfb2Zmc2V0IDogZ2V0RGF0ZU9mZnNldChkYXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVUQ09mZnNldChkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyIHwgc3RyaW5nLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbiwga2VlcE1pbnV0ZXM/OiBib29sZWFuLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcclxuICBjb25zdCBvZmZzZXQgPSBjb25maWcuX29mZnNldCB8fCAwO1xyXG4gIGxldCBsb2NhbEFkanVzdDtcclxuICBsZXQgX2lucHV0ID0gaW5wdXQ7XHJcbiAgbGV0IF9kYXRlID0gZGF0ZTtcclxuXHJcbiAgaWYgKGlzU3RyaW5nKF9pbnB1dCkpIHtcclxuICAgIF9pbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgX2lucHV0KTtcclxuICAgIGlmIChfaW5wdXQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIF9kYXRlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoX2lucHV0KSAmJiBNYXRoLmFicyhfaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XHJcbiAgICBfaW5wdXQgPSBfaW5wdXQgKiA2MDtcclxuICB9XHJcblxyXG4gIGlmICghY29uZmlnLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XHJcbiAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQoX2RhdGUpO1xyXG4gIH1cclxuICBjb25maWcuX29mZnNldCA9IF9pbnB1dDtcclxuICBjb25maWcuX2lzVVRDID0gdHJ1ZTtcclxuICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xyXG4gICAgX2RhdGUgPSBhZGQoX2RhdGUsIGxvY2FsQWRqdXN0LCAnbWludXRlcycpO1xyXG4gIH1cclxuICBpZiAob2Zmc2V0ICE9PSBfaW5wdXQpIHtcclxuICAgIGlmICgha2VlcExvY2FsVGltZSB8fCBjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcclxuICAgICAgX2RhdGUgPSBhZGQoX2RhdGUsIF9pbnB1dCAtIG9mZnNldCwgJ21pbnV0ZXMnLCBjb25maWcuX2lzVVRDKTtcclxuICAgICAgLy8gYWRkU3VidHJhY3QodGhpcywgY3JlYXRlRHVyYXRpb24oX2lucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKCFjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcclxuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgLy8gdG9kbzogYWRkIHRpbWV6b25lIGhhbmRsaW5nXHJcbiAgICAgIC8vIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcclxuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBfZGF0ZTtcclxufVxyXG5cclxuLypcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFpvbmUoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcclxuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xyXG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgaW5wdXQgPSAtaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9VVEMoZGF0ZTogRGF0ZSwga2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBEYXRlIHtcclxuICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIDAsIGtlZXBMb2NhbFRpbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG5cclxuICByZXR1cm4gKGdldFVUQ09mZnNldChkYXRlKSA+IGdldFVUQ09mZnNldChzZXRNb250aChjbG9uZURhdGUoZGF0ZSksIDApKVxyXG4gICAgfHwgZ2V0VVRDT2Zmc2V0KGRhdGUpID4gZ2V0VVRDT2Zmc2V0KHNldE1vbnRoKGNsb25lRGF0ZShkYXRlKSwgNSkpKTtcclxufVxyXG5cclxuLypleHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbChkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4sIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKSB7XHJcbiAgaWYgKHRoaXMuX2lzVVRDKSB7XHJcbiAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcclxuICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcclxuICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XHJcbiAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcclxuICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgY29uZmlnLl90em0sIGZhbHNlLCB0cnVlLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgY29uc3QgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCBpbnB1dCk7XHJcbiAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIHRab25lLCBmYWxzZSwgZmFsc2UsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCAwLCB0cnVlLCBmYWxzZSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ/OiBEYXRlKSB7XHJcbiAgY29uc3QgX2lucHV0ID0gaW5wdXQgPyBnZXRVVENPZmZzZXQoaW5wdXQsIHsgX2lzVVRDOiBmYWxzZSB9KSA6IDA7XHJcblxyXG4gIHJldHVybiAoZ2V0VVRDT2Zmc2V0KGRhdGUpIC0gX2lucHV0KSAlIDYwID09PSAwO1xyXG59XHJcblxyXG5cclxuLy8gREVQUkVDQVRFRFxyXG4vKmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQoKSB7XHJcbiAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYyA9IHt9O1xyXG5cclxuICBjb3B5Q29uZmlnKGMsIHRoaXMpO1xyXG4gIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xyXG5cclxuICBpZiAoYy5fYSkge1xyXG4gICAgY29uc3Qgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xyXG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gdGhpcy5pc1ZhbGlkKCkgJiZcclxuICAgICAgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xyXG59Ki9cclxuXHJcbi8vIGluIEtocm9ub3NcclxuLypleHBvcnQgZnVuY3Rpb24gaXNMb2NhbCgpIHtcclxuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXRjT2Zmc2V0KCkge1xyXG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1V0YygpIHtcclxuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDAgOiBmYWxzZTtcclxufSovXHJcbiJdfQ==