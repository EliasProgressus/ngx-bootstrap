/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
import { getDayOfWeek } from '../units/day-of-week';
/**
 * @param {?} number
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
            if (number === 1) {
                result += withoutSuffix ? 'sekundo' : 'sekundi';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            }
            else {
                result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
            }
            return result;
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            }
            else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            }
            else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            }
            else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            }
            else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            }
            else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}
export const /** @type {?} */ slLocale = {
    abbr: 'sl',
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay: '[včeraj ob] LT',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'čez %s',
        past: 'pred %s',
        s: processRelativeTime,
        ss: processRelativeTime,
        m: processRelativeTime,
        mm: processRelativeTime,
        h: processRelativeTime,
        hh: processRelativeTime,
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3NsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7QUFNcEQsNkJBQTZCLE1BQWMsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUNqRyxxQkFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osS0FBSyxHQUFHO1lBQ04sTUFBTSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDeEUsS0FBSyxJQUFJO1lBQ1AsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU0sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQ2pEO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7YUFDOUQ7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQzthQUM5RDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENB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QkFBbUI7UUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7UUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtLQUN4QjtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwta2V5LXF1b3Rlc1xyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBTbG92ZW5pYW4gW3NsXVxyXG4vLyEgYXV0aG9yIDogbWloYW4gOiBodHRwczovL2dpdGh1Yi5jb20vbWloYW5cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtYmVyOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgdmFyIHJlc3VsdCA9IG51bWJlciArICcgJztcclxuICBzd2l0Y2ggKGtleSkge1xyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ25la2FqIHNla3VuZCcgOiAnbmVrYWogc2VrdW5kYW1pJztcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ3Nla3VuZG8nIDogJ3Nla3VuZGknO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZGknIDogJ3Nla3VuZGFoJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kZScgOiAnc2VrdW5kYWgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZCcgOiAnc2VrdW5kJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgY2FzZSAnbSc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSBtaW51dGEnIDogJ2VubyBtaW51dG8nO1xyXG4gICAgY2FzZSAnbW0nOlxyXG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6ICdtaW51dG8nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0aScgOiAnbWludXRhbWEnO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dGUnIDogJ21pbnV0YW1pJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dCcgOiAnbWludXRhbWknO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICBjYXNlICdoJzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZW5hIHVyYScgOiAnZW5vIHVybyc7XHJcbiAgICBjYXNlICdoaCc6XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCA/ICd1cmEnIDogJ3Vybyc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJpJyA6ICd1cmFtYSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyZScgOiAndXJhbWknO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyJyA6ICd1cmFtaSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIGNhc2UgJ2QnOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbiBkYW4nIDogJ2VuaW0gZG5lbSc7XHJcbiAgICBjYXNlICdkZCc6XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkYW4nIDogJ2RuZW0nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RuaScgOiAnZG5ldm9tYSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2aSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIGNhc2UgJ00nOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbiBtZXNlYycgOiAnZW5pbSBtZXNlY2VtJztcclxuICAgIGNhc2UgJ01NJzpcclxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjJyA6ICdtZXNlY2VtJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2EnIDogJ21lc2VjZW1hJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNlJyA6ICdtZXNlY2knO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjZXYnIDogJ21lc2VjaSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIGNhc2UgJ3knOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbm8gbGV0bycgOiAnZW5pbSBsZXRvbSc7XHJcbiAgICBjYXNlICd5eSc6XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRvJyA6ICdsZXRvbSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0aScgOiAnbGV0b21hJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0YScgOiAnbGV0aSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0JyA6ICdsZXRpJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdzbCcsXHJcbiAgbW9udGhzOiAnamFudWFyX2ZlYnJ1YXJfbWFyZWNfYXByaWxfbWFqX2p1bmlqX2p1bGlqX2F2Z3VzdF9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqLl9qdW4uX2p1bC5fYXZnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgd2Vla2RheXM6ICduZWRlbGphX3BvbmVkZWxqZWtfdG9yZWtfc3JlZGFfxI1ldHJ0ZWtfcGV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICduZWQuX3Bvbi5fdG9yLl9zcmUuX8SNZXQuX3BldC5fc29iLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ25lX3BvX3RvX3NyX8SNZV9wZV9zbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW2RhbmVzIG9iXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW2p1dHJpIG9iXSBMVCcsXHJcblxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW3ZdIFtuZWRlbGpvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2XSBbc3JlZG9dIFtvYl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW3ZdIFtzb2JvdG9dIFtvYl0gTFQnO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW29iXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYXN0RGF5OiAnW3bEjWVyYWogb2JdIExUJyxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1twcmVqxaFuam9dIFtuZWRlbGpvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1twcmVqxaFuam9dIFtzcmVkb10gW29iXSBMVCc7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbcHJlasWhbmpvXSBbc29ib3RvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1twcmVqxaFuamldIGRkZGQgW29iXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ8SNZXogJXMnLFxyXG4gICAgcGFzdDogJ3ByZWQgJXMnLFxyXG4gICAgczogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIHNzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIG1tOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIGhoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIGRkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIHl5OiBwcm9jZXNzUmVsYXRpdmVUaW1lXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWw6ICclZC4nLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiJdfQ==