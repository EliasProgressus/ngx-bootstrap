/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { defaultDayOfMonthOrdinalParse, defaultLocaleMonths, defaultLocaleMonthsShort, defaultLocaleWeekdays, defaultLocaleWeekdaysMin, defaultLocaleWeekdaysShort, defaultLongDateFormat, defaultOrdinal } from './locale.class';
import { defaultCalendar } from './calendar';
export var /** @type {?} */ defaultInvalidDate = 'Invalid date';
export var /** @type {?} */ defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
export var /** @type {?} */ defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
export var /** @type {?} */ defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};
export var /** @type {?} */ baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmRlZmF1bHRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsibG9jYWxlL2xvY2FsZS5kZWZhdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixtQkFBbUIsRUFDbkIsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUVsRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsTUFBTSxDQUFDLHFCQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztBQUVqRCxNQUFNLENBQUMscUJBQU0saUJBQWlCLEdBQUc7SUFDL0IsR0FBRyxFQUFFLENBQUM7O0lBQ04sR0FBRyxFQUFFLENBQUM7Q0FDUCxDQUFDO0FBRUYsTUFBTSxDQUFDLHFCQUFNLDBCQUEwQixHQUFHLGVBQWUsQ0FBQztBQUUxRCxNQUFNLENBQUMscUJBQU0sbUJBQW1CLEdBQTRCO0lBQzFELE1BQU0sRUFBRyxPQUFPO0lBQ2hCLElBQUksRUFBSyxRQUFRO0lBQ2pCLENBQUMsRUFBSSxlQUFlO0lBQ3BCLEVBQUUsRUFBRyxZQUFZO0lBQ2pCLENBQUMsRUFBSSxVQUFVO0lBQ2YsRUFBRSxFQUFHLFlBQVk7SUFDakIsQ0FBQyxFQUFJLFNBQVM7SUFDZCxFQUFFLEVBQUcsVUFBVTtJQUNmLENBQUMsRUFBSSxPQUFPO0lBQ1osRUFBRSxFQUFHLFNBQVM7SUFDZCxDQUFDLEVBQUksU0FBUztJQUNkLEVBQUUsRUFBRyxXQUFXO0lBQ2hCLENBQUMsRUFBSSxRQUFRO0lBQ2IsRUFBRSxFQUFHLFVBQVU7Q0FDaEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQWU7SUFDcEMsUUFBUSxFQUFFLGVBQWU7SUFDekIsY0FBYyxFQUFFLHFCQUFxQjtJQUNyQyxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLHNCQUFzQixFQUFFLDZCQUE2QjtJQUNyRCxZQUFZLEVBQUUsbUJBQW1CO0lBRWpDLE1BQU0sRUFBRSxtQkFBbUI7SUFDM0IsV0FBVyxFQUFFLHdCQUF3QjtJQUVyQyxJQUFJLEVBQUUsaUJBQWlCO0lBRXZCLFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQyxhQUFhLEVBQUUsMEJBQTBCO0lBRXpDLGFBQWEsRUFBRSwwQkFBMEI7Q0FDMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXHJcbiAgZGVmYXVsdExvY2FsZU1vbnRocyxcclxuICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXHJcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxyXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcclxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCwgZGVmYXVsdExvbmdEYXRlRm9ybWF0LCBkZWZhdWx0T3JkaW5hbCxcclxuICBMb2NhbGVEYXRhXHJcbn0gZnJvbSAnLi9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2VlayA9IHtcclxuICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gIGRveTogNiAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVsYXRpdmVUaW1lOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICBmdXR1cmUgOiAnaW4gJXMnLFxyXG4gIHBhc3QgICA6ICclcyBhZ28nLFxyXG4gIHMgIDogJ2EgZmV3IHNlY29uZHMnLFxyXG4gIHNzIDogJyVkIHNlY29uZHMnLFxyXG4gIG0gIDogJ2EgbWludXRlJyxcclxuICBtbSA6ICclZCBtaW51dGVzJyxcclxuICBoICA6ICdhbiBob3VyJyxcclxuICBoaCA6ICclZCBob3VycycsXHJcbiAgZCAgOiAnYSBkYXknLFxyXG4gIGRkIDogJyVkIGRheXMnLFxyXG4gIE0gIDogJ2EgbW9udGgnLFxyXG4gIE1NIDogJyVkIG1vbnRocycsXHJcbiAgeSAgOiAnYSB5ZWFyJyxcclxuICB5eSA6ICclZCB5ZWFycydcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnOiBMb2NhbGVEYXRhID0ge1xyXG4gIGNhbGVuZGFyOiBkZWZhdWx0Q2FsZW5kYXIsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcclxuICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxyXG4gIG9yZGluYWw6IGRlZmF1bHRPcmRpbmFsLFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxyXG4gIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcclxuXHJcbiAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxyXG4gIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXHJcblxyXG4gIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxyXG5cclxuICB3ZWVrZGF5czogZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxyXG4gIHdlZWtkYXlzTWluOiBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXHJcbiAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXHJcblxyXG4gIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlXHJcbn07XHJcbiJdfQ==