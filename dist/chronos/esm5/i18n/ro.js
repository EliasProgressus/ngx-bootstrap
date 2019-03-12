/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    var /** @type {?} */ format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani'
    };
    var /** @type {?} */ separator = ' ';
    if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
        separator = ' de ';
    }
    return num + separator + format[key];
}
export var /** @type {?} */ roLocale = {
    abbr: 'ro',
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'peste %s',
        past: '%s în urmă',
        s: 'câteva secunde',
        ss: relativeTimeWithPlural,
        m: 'un minut',
        mm: relativeTimeWithPlural,
        h: 'o oră',
        hh: relativeTimeWithPlural,
        d: 'o zi',
        dd: relativeTimeWithPlural,
        M: 'o lună',
        MM: relativeTimeWithPlural,
        y: 'un an',
        yy: relativeTimeWithPlural
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3JvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFZQSxnQ0FBZ0MsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVztJQUM5RSxxQkFBSSxNQUFNLEdBQTJCO1FBQ25DLEVBQUUsRUFBRSxTQUFTO1FBQ2IsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxNQUFNO1FBQ1YsRUFBRSxFQUFFLE1BQU07UUFDVixFQUFFLEVBQUUsS0FBSztLQUNWLENBQUM7SUFFRixxQkFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxTQUFTLEdBQUcsTUFBTSxDQUFDO0tBQ3BCO0lBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3RDO0FBR0QsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtR0FBbUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RILFdBQVcsRUFBRSwrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEUsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsQ0FBQyxFQUFFLGdCQUFnQjtRQUNuQixFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxzQkFBc0I7UUFDMUIsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxzQkFBc0I7S0FDM0I7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8gISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8gISBsb2NhbGUgOiBSb21hbmlhbiBbcm9dXHJcbi8vISBhdXRob3IgOiBWbGFkIEd1cmRpZ2EgOiBodHRwczovL2dpdGh1Yi5jb20vZ3VyZGlnYVxyXG4vLyEgYXV0aG9yIDogVmFsZW50aW4gQWdhY2hpIDogaHR0cHM6Ly9naXRodWIuY29tL2F2YWx5XHJcbi8vICEgYXV0aG9yIDogRWFybGUgd2hpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS81ZWFybGVcclxuXHJcbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0OiB7W2tleTpzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgc3M6ICdzZWN1bmRlJyxcclxuICAgIG1tOiAnbWludXRlJyxcclxuICAgIGhoOiAnb3JlJyxcclxuICAgIGRkOiAnemlsZScsXHJcbiAgICBNTTogJ2x1bmknLFxyXG4gICAgeXk6ICdhbmknXHJcbiAgfTtcclxuXHJcbiAgbGV0IHNlcGFyYXRvciA9ICcgJztcclxuICBpZiAobnVtICUgMTAwID49IDIwIHx8IChudW0gPj0gMTAwICYmIG51bSAlIDEwMCA9PT0gMCkpIHtcclxuICAgIHNlcGFyYXRvciA9ICcgZGUgJztcclxuICB9XHJcbiAgcmV0dXJuIG51bSArIHNlcGFyYXRvciArIGZvcm1hdFtrZXldO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdybycsXHJcbiAgbW9udGhzOiAnaWFudWFyaWVfZmVicnVhcmllX21hcnRpZV9hcHJpbGllX21haV9pdW5pZV9pdWxpZV9hdWd1c3Rfc2VwdGVtYnJpZV9vY3RvbWJyaWVfbm9pZW1icmllX2RlY2VtYnJpZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ2lhbi5fZmVici5fbWFydC5fYXByLl9tYWlfaXVuLl9pdWwuX2F1Zy5fc2VwdC5fb2N0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ2R1bWluaWPEg19sdW5pX21hcsibaV9taWVyY3VyaV9qb2lfdmluZXJpX3PDom1ixIN0xIMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ0R1bV9MdW5fTWFyX01pZV9Kb2lfVmluX1PDom0nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdEdV9MdV9NYV9NaV9Kb19WaV9Tw6InLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW2F6aSBsYV0gTFQnLFxyXG4gICAgbmV4dERheTogJ1ttw6JpbmUgbGFdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbbGFdIExUJyxcclxuICAgIGxhc3REYXk6ICdbaWVyaSBsYV0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbZm9zdGFdIGRkZGQgW2xhXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ3Blc3RlICVzJyxcclxuICAgIHBhc3Q6ICclcyDDrm4gdXJtxIMnLFxyXG4gICAgczogJ2PDonRldmEgc2VjdW5kZScsXHJcbiAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIG06ICd1biBtaW51dCcsXHJcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIGg6ICdvIG9yxIMnLFxyXG4gICAgaGg6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICBkOiAnbyB6aScsXHJcbiAgICBkZDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIE06ICdvIGx1bsSDJyxcclxuICAgIE1NOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgeTogJ3VuIGFuJyxcclxuICAgIHl5OiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=