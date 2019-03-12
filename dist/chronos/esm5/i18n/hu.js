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
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
var /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
}
export var /** @type {?} */ huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2h1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTXBELHFCQUFJLFdBQVcsR0FBRywrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBQzdGLG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hGLEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxLQUFLLElBQUk7WUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxLQUFLLElB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SUFBSSxDQUFDO1NBQ3ZDO0tBQ0Y7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcsZUFBZTtRQUN6QixPQUFPLEVBQUcsbUJBQW1CO1FBQzdCLFFBQVE7Ozs7a0JBQUUsSUFBVTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sRUFBRyxtQkFBbUI7UUFDN0IsUUFBUTs7OztrQkFBRSxJQUFVO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxVQUFVO1FBQ25CLElBQUksRUFBRyxJQUFJO1FBQ1gsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO0tBQ2Y7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRyxLQUFLO0lBQ2YsSUFBSSxFQUFHO1FBQ0wsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUM7S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEh1bmdhcmlhbiBbaHVdXHJcbi8vISBhdXRob3IgOiBBZGFtIEJydW5uZXIgOiBodHRwczovL2dpdGh1Yi5jb20vYWRhbWJydW5uZXJcclxuXHJcbmxldCB3ZWVrRW5kaW5ncyA9ICd2YXPDoXJuYXAgaMOpdGbFkW4ga2VkZGVuIHN6ZXJkw6FuIGNzw7x0w7ZydMO2a8O2biBww6ludGVrZW4gc3pvbWJhdG9uJy5zcGxpdCgnICcpO1xyXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOlxyXG4gICAgICByZXR1cm4gKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXgpID8gJ27DqWjDoW55IG3DoXNvZHBlcmMnIDogJ27DqWjDoW55IG3DoXNvZHBlcmNlJztcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgcmV0dXJuIG51bSArICgoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnIG3DoXNvZHBlcmMnIDogJyBtw6Fzb2RwZXJjZScpO1xyXG4gICAgY2FzZSAnbSc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcclxuICAgIGNhc2UgJ21tJzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw7NyYScgOiAnIMOzcsOhamEnKTtcclxuICAgIGNhc2UgJ2hoJzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDs3JhJyA6ICcgw7Nyw6FqYScpO1xyXG4gICAgY2FzZSAnZCc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xyXG4gICAgY2FzZSAnZGQnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XHJcbiAgICBjYXNlICdNJzpcclxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDs25hcCcgOiAnIGjDs25hcGphJyk7XHJcbiAgICBjYXNlICdNTSc6XHJcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMOzbmFwJyA6ICcgaMOzbmFwamEnKTtcclxuICAgIGNhc2UgJ3knOlxyXG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw6l2JyA6ICcgw6l2ZScpO1xyXG4gICAgY2FzZSAneXknOlxyXG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMOpdicgOiAnIMOpdmUnKTtcclxuICB9XHJcbiAgcmV0dXJuICcnO1xyXG59XHJcbmZ1bmN0aW9uIHdlZWsoZGF0ZTogRGF0ZSwgaXNGdXR1cmU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gKGlzRnV0dXJlID8gJycgOiAnW23Dumx0XSAnKSArICdbJyArIHdlZWtFbmRpbmdzW2dldERheU9mV2VlayhkYXRlKV0gKyAnXSBMVFsta29yXSc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaHUnLFxyXG4gIG1vbnRocyA6ICdqYW51w6FyX2ZlYnJ1w6FyX23DoXJjaXVzX8OhcHJpbGlzX23DoWp1c19qw7puaXVzX2rDumxpdXNfYXVndXN6dHVzX3N6ZXB0ZW1iZXJfb2t0w7NiZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgOiAnamFuX2ZlYl9tw6FyY1/DoXByX23DoWpfasO6bl9qw7psX2F1Z19zemVwdF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6ICd2YXPDoXJuYXBfaMOpdGbFkV9rZWRkX3N6ZXJkYV9jc8O8dMO2cnTDtmtfcMOpbnRla19zem9tYmF0Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAndmFzX2jDqXRfa2VkZF9zemVfY3PDvHRfcMOpbl9zem8nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAndl9oX2tfc3plX2NzX3Bfc3pvJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xyXG4gICAgTFQgOiAnSDptbScsXHJcbiAgICBMVFMgOiAnSDptbTpzcycsXHJcbiAgICBMIDogJ1lZWVkuTU0uREQuJyxcclxuICAgIExMIDogJ1lZWVkuIE1NTU0gRC4nLFxyXG4gICAgTExMIDogJ1lZWVkuIE1NTU0gRC4gSDptbScsXHJcbiAgICBMTExMIDogJ1lZWVkuIE1NTU0gRC4sIGRkZGQgSDptbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC9kZXxkdS9pLFxyXG4gIGlzUE0gKGlucHV0KSB7XHJcbiAgICByZXR1cm4gaW5wdXQuY2hhckF0KDEpLnRvTG93ZXJDYXNlKCkgPT09ICd1JztcclxuICB9LFxyXG4gIG1lcmlkaWVtIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXJzIDwgMTIpIHtcclxuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZGUnIDogJ0RFJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpc0xvd2VyID09PSB0cnVlID8gJ2R1JyA6ICdEVSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhciA6IHtcclxuICAgIHNhbWVEYXkgOiAnW21hXSBMVFsta29yXScsXHJcbiAgICBuZXh0RGF5IDogJ1tob2xuYXBdIExUWy1rb3JdJyxcclxuICAgIG5leHRXZWVrIChkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIGxhc3REYXkgOiAnW3RlZ25hcF0gTFRbLWtvcl0nLFxyXG4gICAgbGFzdFdlZWsgKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuIHdlZWsoZGF0ZSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlIDogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnJXMgbcO6bHZhJyxcclxuICAgIHBhc3QgOiAnJXMnLFxyXG4gICAgcyA6IHRyYW5zbGF0ZSxcclxuICAgIHNzIDogdHJhbnNsYXRlLFxyXG4gICAgbSA6IHRyYW5zbGF0ZSxcclxuICAgIG1tIDogdHJhbnNsYXRlLFxyXG4gICAgaCA6IHRyYW5zbGF0ZSxcclxuICAgIGhoIDogdHJhbnNsYXRlLFxyXG4gICAgZCA6IHRyYW5zbGF0ZSxcclxuICAgIGRkIDogdHJhbnNsYXRlLFxyXG4gICAgTSA6IHRyYW5zbGF0ZSxcclxuICAgIE1NIDogdHJhbnNsYXRlLFxyXG4gICAgeSA6IHRyYW5zbGF0ZSxcclxuICAgIHl5IDogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWwgOiAnJWQuJyxcclxuICB3ZWVrIDoge1xyXG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=