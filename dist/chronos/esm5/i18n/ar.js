/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
var /** @type {?} */ symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
var /** @type {?} */ numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
var /** @type {?} */ pluralForm = function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
var ɵ0 = pluralForm;
var /** @type {?} */ plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
var /** @type {?} */ pluralize = function (u) {
    return function (num, withoutSuffix) {
        var /** @type {?} */ f = pluralForm(num);
        var /** @type {?} */ str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return (/** @type {?} */ (str)).replace(/%d/i, num.toString());
    };
};
var ɵ1 = pluralize;
var /** @type {?} */ months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];
export var /** @type {?} */ arLocale = {
    abbr: 'ar',
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return 'م' === input;
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2FyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBVUEscUJBQU0sU0FBUyxHQUE0QjtJQUN6QyxDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztDQUNQLENBQUM7QUFDRixxQkFBTSxTQUFTLEdBQTRCO0lBQ3pDLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0NBQ1QsQ0FBQztBQUNGLHFCQUFNLFVBQVUsR0FBRyxVQUFVLEdBQVc7SUFDdEMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFB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QUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN2QjtJQUNELFVBQVU7Ozs7Y0FBQyxHQUFXO1FBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQUs7WUFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN2QjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxFQUFFO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEFyYWJpYyBbYXJdXHJcbi8vISBhdXRob3IgOiBBYmRlbCBTYWlkOiBodHRwczovL2dpdGh1Yi5jb20vYWJkZWxzYWlkXHJcbi8vISBhdXRob3IgOiBBaG1lZCBFbGtoYXRpYlxyXG4vLyEgYXV0aG9yIDogZm9yYWJpIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JhYmlcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbmNvbnN0IHN5bWJvbE1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgMTogJ9mhJyxcclxuICAyOiAn2aInLFxyXG4gIDM6ICfZoycsXHJcbiAgNDogJ9mkJyxcclxuICA1OiAn2aUnLFxyXG4gIDY6ICfZpicsXHJcbiAgNzogJ9mnJyxcclxuICA4OiAn2agnLFxyXG4gIDk6ICfZqScsXHJcbiAgMDogJ9mgJ1xyXG59O1xyXG5jb25zdCBudW1iZXJNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICfZoSc6ICcxJyxcclxuICAn2aInOiAnMicsXHJcbiAgJ9mjJzogJzMnLFxyXG4gICfZpCc6ICc0JyxcclxuICAn2aUnOiAnNScsXHJcbiAgJ9mmJzogJzYnLFxyXG4gICfZpyc6ICc3JyxcclxuICAn2agnOiAnOCcsXHJcbiAgJ9mpJzogJzknLFxyXG4gICfZoCc6ICcwJ1xyXG59O1xyXG5jb25zdCBwbHVyYWxGb3JtID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gbnVtID09PSAwID8gMCA6IG51bSA9PT0gMSA/IDEgOiBudW0gPT09IDIgPyAyIDogbnVtICUgMTAwID49IDMgJiYgbnVtICUgMTAwIDw9IDEwID8gMyA6IG51bSAlIDEwMCA+PSAxMSA/IDQgOiA1O1xyXG59O1xyXG5jb25zdCBwbHVyYWxzOiB7W2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nLCBbc3RyaW5nLCBzdHJpbmddLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXX0gPSB7XHJcbiAgczogWyfYo9mC2YQg2YXZhiDYq9in2YbZitipJywgJ9ir2KfZhtmK2Kkg2YjYp9it2K/YqScsIFsn2KvYp9mG2YrYqtin2YYnLCAn2KvYp9mG2YrYqtmK2YYnXSwgJyVkINir2YjYp9mGJywgJyVkINir2KfZhtmK2KknLCAnJWQg2KvYp9mG2YrYqSddLFxyXG4gIG06IFsn2KPZgtmEINmF2YYg2K/ZgtmK2YLYqScsICfYr9mC2YrZgtipINmI2KfYrdiv2KknLCBbJ9iv2YLZitmC2KrYp9mGJywgJ9iv2YLZitmC2KrZitmGJ10sICclZCDYr9mC2KfYptmCJywgJyVkINiv2YLZitmC2KknLCAnJWQg2K/ZgtmK2YLYqSddLFxyXG4gIGg6IFsn2KPZgtmEINmF2YYg2LPYp9i52KknLCAn2LPYp9i52Kkg2YjYp9it2K/YqScsIFsn2LPYp9i52KrYp9mGJywgJ9iz2KfYudiq2YrZhiddLCAnJWQg2LPYp9i52KfYqicsICclZCDYs9in2LnYqScsICclZCDYs9in2LnYqSddLFxyXG4gIGQ6IFsn2KPZgtmEINmF2YYg2YrZiNmFJywgJ9mK2YjZhSDZiNin2K3YrycsIFsn2YrZiNmF2KfZhicsICfZitmI2YXZitmGJ10sICclZCDYo9mK2KfZhScsICclZCDZitmI2YXZi9inJywgJyVkINmK2YjZhSddLFxyXG4gIE06IFsn2KPZgtmEINmF2YYg2LTZh9ixJywgJ9i02YfYsSDZiNin2K3YrycsIFsn2LTZh9ix2KfZhicsICfYtNmH2LHZitmGJ10sICclZCDYo9i02YfYsScsICclZCDYtNmH2LHYpycsICclZCDYtNmH2LEnXSxcclxuICB5OiBbJ9ij2YLZhCDZhdmGINi52KfZhScsICfYudin2YUg2YjYp9it2K8nLCBbJ9i52KfZhdin2YYnLCAn2LnYp9mF2YrZhiddLCAnJWQg2KPYudmI2KfZhScsICclZCDYudin2YXZi9inJywgJyVkINi52KfZhSddXHJcbn07XHJcbmNvbnN0IHBsdXJhbGl6ZSA9IGZ1bmN0aW9uICh1OiBzdHJpbmcpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGYgPSBwbHVyYWxGb3JtKG51bSk7XHJcbiAgICBsZXQgc3RyID0gcGx1cmFsc1t1XVtwbHVyYWxGb3JtKG51bSldO1xyXG4gICAgaWYgKGYgPT09IDIpIHtcclxuICAgICAgc3RyID0gc3RyW3dpdGhvdXRTdWZmaXggPyAwIDogMV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChzdHIgYXMgc3RyaW5nKS5yZXBsYWNlKC8lZC9pLCBudW0udG9TdHJpbmcoKSk7XHJcbiAgfTtcclxufTtcclxuY29uc3QgbW9udGhzOiBzdHJpbmdbXSA9IFtcclxuICAn2YrZhtin2YrYsScsXHJcbiAgJ9mB2KjYsdin2YrYsScsXHJcbiAgJ9mF2KfYsdizJyxcclxuICAn2KPYqNix2YrZhCcsXHJcbiAgJ9mF2KfZitmIJyxcclxuICAn2YrZiNmG2YrZiCcsXHJcbiAgJ9mK2YjZhNmK2YgnLFxyXG4gICfYo9i62LPYt9izJyxcclxuICAn2LPYqNiq2YXYqNixJyxcclxuICAn2KPZg9iq2YjYqNixJyxcclxuICAn2YbZiNmB2YXYqNixJyxcclxuICAn2K/Zitiz2YXYqNixJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdhcicsXHJcbiAgbW9udGhzLFxyXG4gIG1vbnRoc1Nob3J0OiBtb250aHMsXHJcbiAgd2Vla2RheXM6ICfYp9mE2KPYrdivX9in2YTYpdir2YbZitmGX9in2YTYq9mE2KfYq9in2KFf2KfZhNij2LHYqNi52KfYoV/Yp9mE2K7ZhdmK2LNf2KfZhNis2YXYudipX9in2YTYs9io2KonLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ9ij2K3Yr1/Ypdir2YbZitmGX9ir2YTYp9ir2KfYoV/Yo9ix2KjYudin2KFf2K7ZhdmK2LNf2KzZhdi52Klf2LPYqNiqJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAn2K1f2YZf2Ktf2LFf2K5f2Kxf2LMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdEL1xcdTIwMEZNL1xcdTIwMEZZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAv2LV82YUvLFxyXG4gIGlzUE0oaW5wdXQpIHtcclxuICAgIHJldHVybiAn2YUnID09PSBpbnB1dDtcclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCAxMikge1xyXG4gICAgICByZXR1cm4gJ9i1JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAn2YUnO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdb2KfZhNmK2YjZhSDYudmG2K8g2KfZhNiz2KfYudipXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW9i62K/Zi9inINi52YbYryDYp9mE2LPYp9i52KldIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBb2LnZhtivINin2YTYs9in2LnYqV0gTFQnLFxyXG4gICAgbGFzdERheTogJ1vYo9mF2LMg2LnZhtivINin2YTYs9in2LnYqV0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdkZGRkIFvYudmG2K8g2KfZhNiz2KfYudipXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ9io2LnYryAlcycsXHJcbiAgICBwYXN0OiAn2YXZhtiwICVzJyxcclxuICAgIHM6IHBsdXJhbGl6ZSgncycpLFxyXG4gICAgc3M6IHBsdXJhbGl6ZSgncycpLFxyXG4gICAgbTogcGx1cmFsaXplKCdtJyksXHJcbiAgICBtbTogcGx1cmFsaXplKCdtJyksXHJcbiAgICBoOiBwbHVyYWxpemUoJ2gnKSxcclxuICAgIGhoOiBwbHVyYWxpemUoJ2gnKSxcclxuICAgIGQ6IHBsdXJhbGl6ZSgnZCcpLFxyXG4gICAgZGQ6IHBsdXJhbGl6ZSgnZCcpLFxyXG4gICAgTTogcGx1cmFsaXplKCdNJyksXHJcbiAgICBNTTogcGx1cmFsaXplKCdNJyksXHJcbiAgICB5OiBwbHVyYWxpemUoJ3knKSxcclxuICAgIHl5OiBwbHVyYWxpemUoJ3knKVxyXG4gIH0sXHJcbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9b2aHZotmj2aTZpdmm2afZqNmp2aBdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcclxuICAgIH0pLnJlcGxhY2UoL9iML2csICcsJyk7XHJcbiAgfSxcclxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XHJcbiAgICB9KS5yZXBsYWNlKC8sL2csICfYjCcpO1xyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiA2LCAvLyBTYXR1cmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiAxMiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIl19