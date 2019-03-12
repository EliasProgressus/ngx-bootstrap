/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { changeTime } from './timepicker.utils';
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
export function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
export function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
export function getControlsValue(state) {
    var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
    return {
        hourStep: hourStep,
        minuteStep: minuteStep,
        secondsStep: secondsStep,
        readonlyInput: readonlyInput,
        disabled: disabled,
        mousewheel: mousewheel,
        arrowkeys: arrowkeys,
        showSpinners: showSpinners,
        showMeridian: showMeridian,
        showSeconds: showSeconds,
        meridians: meridians,
        min: min,
        max: max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
export function timepickerControls(value, state) {
    var /** @type {?} */ hoursPerDayHalf = 12;
    var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
    var /** @type {?} */ res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        var /** @type {?} */ _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            var /** @type {?} */ _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            var /** @type {?} */ _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        var /** @type {?} */ _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            var /** @type {?} */ _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            var /** @type {?} */ _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1jb250cm9scy51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsidGltZXBpY2tlci1jb250cm9scy51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7OztBQU9oRCxNQUFNLHlCQUNKLEtBQStCLEVBQy9CLEtBQXVCO0lBRXZCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0lBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYjs7Ozs7O0FBRUQsTUFBTSx5QkFDSixLQUFzQixFQUN0QixRQUE0QjtJQUU1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7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QUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzQixxQkFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDL0QsR0FBRyxDQUFDLG1CQUFtQixHQUFHLFdBQVc7Z0JBQ25DLENBQUMsQ0FBQyxHQUFHLEdBQUcsV0FBVztnQkFDbkIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUM7U0FDeEI7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDN0IscUJBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDO1NBQzlDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM3RTtLQUNGO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhbmdlVGltZSB9IGZyb20gJy4vdGltZXBpY2tlci51dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgVGltZUNoYW5nZUV2ZW50LFxyXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcclxuICBUaW1lcGlja2VyQ29udHJvbHNcclxufSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VWYWx1ZShcclxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxyXG4gIGV2ZW50PzogVGltZUNoYW5nZUV2ZW50XHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmIChzdGF0ZS5yZWFkb25seUlucHV0IHx8IHN0YXRlLmRpc2FibGVkKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5zb3VyY2UgPT09ICd3aGVlbCcgJiYgIXN0YXRlLm1vdXNld2hlZWwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5zb3VyY2UgPT09ICdrZXknICYmICFzdGF0ZS5hcnJvd2tleXMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VIb3VycyhcclxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxyXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFldmVudC5zdGVwKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudEhvdXJzKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudEhvdXJzKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZU1pbnV0ZXMoXHJcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcclxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghZXZlbnQuc3RlcCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudE1pbnV0ZXMpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRNaW51dGVzKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZVNlY29uZHMoXHJcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcclxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghZXZlbnQuc3RlcCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZXZlbnQuc3RlcCA+IDAgJiYgIWNvbnRyb2xzLmNhbkluY3JlbWVudFNlY29uZHMpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRTZWNvbmRzKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xzVmFsdWUoXHJcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZVxyXG4pOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUge1xyXG4gIGNvbnN0IHtcclxuICAgIGhvdXJTdGVwLFxyXG4gICAgbWludXRlU3RlcCxcclxuICAgIHNlY29uZHNTdGVwLFxyXG4gICAgcmVhZG9ubHlJbnB1dCxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgbW91c2V3aGVlbCxcclxuICAgIGFycm93a2V5cyxcclxuICAgIHNob3dTcGlubmVycyxcclxuICAgIHNob3dNZXJpZGlhbixcclxuICAgIHNob3dTZWNvbmRzLFxyXG4gICAgbWVyaWRpYW5zLFxyXG4gICAgbWluLFxyXG4gICAgbWF4XHJcbiAgfSA9IHN0YXRlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaG91clN0ZXAsXHJcbiAgICBtaW51dGVTdGVwLFxyXG4gICAgc2Vjb25kc1N0ZXAsXHJcbiAgICByZWFkb25seUlucHV0LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBtb3VzZXdoZWVsLFxyXG4gICAgYXJyb3drZXlzLFxyXG4gICAgc2hvd1NwaW5uZXJzLFxyXG4gICAgc2hvd01lcmlkaWFuLFxyXG4gICAgc2hvd1NlY29uZHMsXHJcbiAgICBtZXJpZGlhbnMsXHJcbiAgICBtaW4sXHJcbiAgICBtYXhcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGltZXBpY2tlckNvbnRyb2xzKFxyXG4gIHZhbHVlOiBEYXRlLFxyXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGVcclxuKTogVGltZXBpY2tlckNvbnRyb2xzIHtcclxuICBjb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcclxuICBjb25zdCB7IG1pbiwgbWF4LCBob3VyU3RlcCwgbWludXRlU3RlcCwgc2Vjb25kc1N0ZXAsIHNob3dTZWNvbmRzIH0gPSBzdGF0ZTtcclxuICBjb25zdCByZXM6IFRpbWVwaWNrZXJDb250cm9scyA9IHtcclxuICAgIGNhbkluY3JlbWVudEhvdXJzOiB0cnVlLFxyXG4gICAgY2FuSW5jcmVtZW50TWludXRlczogdHJ1ZSxcclxuICAgIGNhbkluY3JlbWVudFNlY29uZHM6IHRydWUsXHJcblxyXG4gICAgY2FuRGVjcmVtZW50SG91cnM6IHRydWUsXHJcbiAgICBjYW5EZWNyZW1lbnRNaW51dGVzOiB0cnVlLFxyXG4gICAgY2FuRGVjcmVtZW50U2Vjb25kczogdHJ1ZSxcclxuXHJcbiAgICBjYW5Ub2dnbGVNZXJpZGlhbjogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICAvLyBjb21wYXJlIGRhdGVzXHJcbiAgaWYgKG1heCkge1xyXG4gICAgY29uc3QgX25ld0hvdXIgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IGhvdXI6IGhvdXJTdGVwIH0pO1xyXG4gICAgcmVzLmNhbkluY3JlbWVudEhvdXJzID0gbWF4ID4gX25ld0hvdXI7XHJcblxyXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50SG91cnMpIHtcclxuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogbWludXRlU3RlcCB9KTtcclxuICAgICAgcmVzLmNhbkluY3JlbWVudE1pbnV0ZXMgPSBzaG93U2Vjb25kc1xyXG4gICAgICAgID8gbWF4ID4gX25ld01pbnV0ZXNcclxuICAgICAgICA6IG1heCA+PSBfbmV3TWludXRlcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRNaW51dGVzKSB7XHJcbiAgICAgIGNvbnN0IF9uZXdTZWNvbmRzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBzZWNvbmRzOiBzZWNvbmRzU3RlcCB9KTtcclxuICAgICAgcmVzLmNhbkluY3JlbWVudFNlY29uZHMgPSBtYXggPj0gX25ld1NlY29uZHM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmdldEhvdXJzKCkgPCBob3Vyc1BlckRheUhhbGYpIHtcclxuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiBob3Vyc1BlckRheUhhbGYgfSkgPCBtYXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobWluKSB7XHJcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJTdGVwIH0pO1xyXG4gICAgcmVzLmNhbkRlY3JlbWVudEhvdXJzID0gbWluIDwgX25ld0hvdXI7XHJcblxyXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50SG91cnMpIHtcclxuICAgICAgY29uc3QgX25ld01pbnV0ZXMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IG1pbnV0ZTogLW1pbnV0ZVN0ZXAgfSk7XHJcbiAgICAgIHJlcy5jYW5EZWNyZW1lbnRNaW51dGVzID0gc2hvd1NlY29uZHNcclxuICAgICAgICA/IG1pbiA8IF9uZXdNaW51dGVzXHJcbiAgICAgICAgOiBtaW4gPD0gX25ld01pbnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXMuY2FuRGVjcmVtZW50TWludXRlcykge1xyXG4gICAgICBjb25zdCBfbmV3U2Vjb25kcyA9IGNoYW5nZVRpbWUodmFsdWUsIHsgc2Vjb25kczogLXNlY29uZHNTdGVwIH0pO1xyXG4gICAgICByZXMuY2FuRGVjcmVtZW50U2Vjb25kcyA9IG1pbiA8PSBfbmV3U2Vjb25kcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA+PSBob3Vyc1BlckRheUhhbGYpIHtcclxuICAgICAgcmVzLmNhblRvZ2dsZU1lcmlkaWFuID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91cnNQZXJEYXlIYWxmIH0pID4gbWluO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG4iXX0=