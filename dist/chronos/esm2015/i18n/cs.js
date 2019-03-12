/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
const /** @type {?} */ months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
const /** @type {?} */ monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    const /** @type {?} */ result = num + ' ';
    switch (key) {
        case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekund');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            else {
                return result + 'minutami';
            }
        // break;
        case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd':
            // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            else {
                return result + 'dny';
            }
        // break;
        case 'M':
            // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            else {
                return result + 'měsíci';
            }
        // break;
        case 'y':
            // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            else {
                return result + 'lety';
            }
    }
}
export const /** @type {?} */ csLocale = {
    abbr: 'cs',
    months,
    monthsShort,
    monthsParse: (function (months, monthsShort) {
        let /** @type {?} */ i, /** @type {?} */ _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months, monthsShort)),
    shortMonthsParse: (function (monthsShort) {
        let /** @type {?} */ i, /** @type {?} */ _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort)),
    longMonthsParse: (function (months) {
        let /** @type {?} */ i, /** @type {?} */ _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months)),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTXBELHVCQUFNLE1BQU0sR0FBYSxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEgsdUJBQU0sV0FBVyxHQUFhLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7QUFFM0YsZ0JBQWdCLEdBQVc7SUFDekIsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3ZEOzs7Ozs7OztBQUVELG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYsdUJBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFekIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN0RDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2FBQzdCOztRQUVILEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwRDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2FBQzVCOztRQUVILEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwRDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2FBQzVCOztRQUVILEtBQUssR0FBRzs7WUFDTixNQUFNLENBQUMsQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RELEtBQUssSUFBSTs7WUFDUCxFQUFFLENB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bWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBDemVjaCBbY3NdXHJcbi8vISBhdXRob3IgOiBwZXRyYmVsYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRyYmVsYVxyXG5cclxuY29uc3QgbW9udGhzOiBzdHJpbmdbXSA9ICdsZWRlbl/Dum5vcl9ixZllemVuX2R1YmVuX2t2xJt0ZW5fxI1lcnZlbl/EjWVydmVuZWNfc3JwZW5fesOhxZnDrV/FmcOtamVuX2xpc3RvcGFkX3Byb3NpbmVjJy5zcGxpdCgnXycpO1xyXG5jb25zdCBtb250aHNTaG9ydDogc3RyaW5nW10gPSAnbGVkX8O6bm9fYsWZZV9kdWJfa3bEm1/EjXZuX8SNdmNfc3JwX3rDocWZX8WZw61qX2xpc19wcm8nLnNwbGl0KCdfJyk7XHJcblxyXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gKG51bSA+IDEpICYmIChudW0gPCA1KSAmJiAofn4obnVtIC8gMTApICE9PSAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IHJlc3VsdCA9IG51bSArICcgJztcclxuXHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOiAgLy8gYSBmZXcgc2Vjb25kcyAvIGluIGEgZmV3IHNlY29uZHMgLyBhIGZldyBzZWNvbmRzIGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3DDoXIgc2VrdW5kJyA6ICdww6FyIHNla3VuZGFtaSc7XHJcbiAgICBjYXNlICdzcyc6IC8vIDkgc2Vjb25kcyAvIGluIDkgc2Vjb25kcyAvIDkgc2Vjb25kcyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla3VuZCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnc2VrdW5kYW1pJztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgICBjYXNlICdtJzogIC8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6IChpc0Z1dHVyZSA/ICdtaW51dHUnIDogJ21pbnV0b3UnKTtcclxuICAgIGNhc2UgJ21tJzogLy8gOSBtaW51dGVzIC8gaW4gOSBtaW51dGVzIC8gOSBtaW51dGVzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWludXR5JyA6ICdtaW51dCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbWludXRhbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ2gnOiAgLy8gYW4gaG91ciAvIGluIGFuIGhvdXIgLyBhbiBob3VyIGFnb1xyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdob2RpbmEnIDogKGlzRnV0dXJlID8gJ2hvZGludScgOiAnaG9kaW5vdScpO1xyXG4gICAgY2FzZSAnaGgnOiAvLyA5IGhvdXJzIC8gaW4gOSBob3VycyAvIDkgaG91cnMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdob2RpbnknIDogJ2hvZGluJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdob2RpbmFtaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAnZCc6ICAvLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXHJcbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnZGVuJyA6ICdkbmVtJztcclxuICAgIGNhc2UgJ2RkJzogLy8gOSBkYXlzIC8gaW4gOSBkYXlzIC8gOSBkYXlzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnZG55JyA6ICdkbsOtJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdkbnknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ00nOiAgLy8gYSBtb250aCAvIGluIGEgbW9udGggLyBhIG1vbnRoIGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ23Em3PDrWMnIDogJ23Em3PDrWNlbSc7XHJcbiAgICBjYXNlICdNTSc6IC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ23Em3PDrWNlJyA6ICdtxJtzw61jxa8nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ23Em3PDrWNpJztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgICBjYXNlICd5JzogIC8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdyb2snIDogJ3Jva2VtJztcclxuICAgIGNhc2UgJ3l5JzogLy8gOSB5ZWFycyAvIGluIDkgeWVhcnMgLyA5IHllYXJzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAncm9reScgOiAnbGV0Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdsZXR5JztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3NMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2NzJyxcclxuICBtb250aHMsXHJcbiAgbW9udGhzU2hvcnQsXHJcbiAgbW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzLCBtb250aHNTaG9ydCkge1xyXG4gICAgbGV0IGksIF9tb250aHNQYXJzZSA9IFtdO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgLy8gdXNlIGN1c3RvbSBwYXJzZXIgdG8gc29sdmUgcHJvYmxlbSB3aXRoIEp1bHkgKMSNZXJ2ZW5lYylcclxuICAgICAgX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNbaV0gKyAnJHxeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9tb250aHNQYXJzZTtcclxuICB9KG1vbnRocywgbW9udGhzU2hvcnQpKSxcclxuICBzaG9ydE1vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRoc1Nob3J0KSB7XHJcbiAgICBsZXQgaSwgX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIF9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNTaG9ydFtpXSArICckJywgJ2knKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfc2hvcnRNb250aHNQYXJzZTtcclxuICB9KG1vbnRoc1Nob3J0KSksXHJcbiAgbG9uZ01vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocykge1xyXG4gICAgbGV0IGksIF9sb25nTW9udGhzUGFyc2UgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIF9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1tpXSArICckJywgJ2knKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfbG9uZ01vbnRoc1BhcnNlO1xyXG4gIH0obW9udGhzKSksXHJcbiAgd2Vla2RheXM6ICduZWTEm2xlX3BvbmTEm2zDrV/DunRlcsO9X3N0xZllZGFfxI10dnJ0ZWtfcMOhdGVrX3NvYm90YScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnbmVfcG9fw7p0X3N0X8SNdF9ww6Ffc28nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICduZV9wb1/DunRfc3RfxI10X3DDoV9zbycuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxyXG4gICAgbDogJ0QuIE0uIFlZWVknXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tkbmVzIHZdIExUJyxcclxuICAgIG5leHREYXk6ICdbesOtdHJhIHZdIExUJyxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW3YgbmVkxJtsaSB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW3ZdIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2ZSBzdMWZZWR1IHZdIExUJztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2ZSDEjXR2cnRlayB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdbdiBww6F0ZWsgdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW3Ygc29ib3R1IHZdIExUJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhc3REYXk6ICdbdsSNZXJhIHZdIExUJyxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3UgbmVkxJtsaSB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsw6ldIGRkZGQgW3ZdIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHN0xZllZHUgdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMO9XSBkZGRkIFt2XSBMVCc7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWxvdSBzb2JvdHUgdl0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICd6YSAlcycsXHJcbiAgICBwYXN0OiAncMWZZWQgJXMnLFxyXG4gICAgczogdHJhbnNsYXRlLFxyXG4gICAgc3M6IHRyYW5zbGF0ZSxcclxuICAgIG06IHRyYW5zbGF0ZSxcclxuICAgIG1tOiB0cmFuc2xhdGUsXHJcbiAgICBoOiB0cmFuc2xhdGUsXHJcbiAgICBoaDogdHJhbnNsYXRlLFxyXG4gICAgZDogdHJhbnNsYXRlLFxyXG4gICAgZGQ6IHRyYW5zbGF0ZSxcclxuICAgIE06IHRyYW5zbGF0ZSxcclxuICAgIE1NOiB0cmFuc2xhdGUsXHJcbiAgICB5OiB0cmFuc2xhdGUsXHJcbiAgICB5eTogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWw6ICclZC4nLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iXX0=