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
let /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
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
export const /** @type {?} */ huLocale = {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
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
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2h1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTXBELHFCQUFJLFdBQVcsR0FBRywrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBQzdGLG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hGLEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRSxLQUFLLElBQUk7WUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRSxLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxLQUFLLElB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QyxJQUFJLENBQUM7U0FDdkM7S0FDRjtJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxtQkFBbUI7Ozs7O1FBQzdCLFFBQVEsQ0FBRSxJQUFVO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxFQUFHLG1CQUFtQjs7Ozs7UUFDN0IsUUFBUSxDQUFFLElBQVU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFDRCxRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFVBQVU7UUFDbkIsSUFBSSxFQUFHLElBQUk7UUFDWCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFNBQVM7S0FDZjtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFHLEtBQUs7SUFDZixJQUFJLEVBQUc7UUFDTCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNSO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSHVuZ2FyaWFuIFtodV1cclxuLy8hIGF1dGhvciA6IEFkYW0gQnJ1bm5lciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYnJ1bm5lclxyXG5cclxubGV0IHdlZWtFbmRpbmdzID0gJ3Zhc8Ohcm5hcCBow6l0ZsWRbiBrZWRkZW4gc3plcmTDoW4gY3PDvHTDtnJ0w7Zrw7ZuIHDDqW50ZWtlbiBzem9tYmF0b24nLnNwbGl0KCcgJyk7XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICBzd2l0Y2ggKGtleSkge1xyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgIHJldHVybiAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnbsOpaMOhbnkgbcOhc29kcGVyYycgOiAnbsOpaMOhbnkgbcOhc29kcGVyY2UnO1xyXG4gICAgY2FzZSAnc3MnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICcgbcOhc29kcGVyYycgOiAnIG3DoXNvZHBlcmNlJyk7XHJcbiAgICBjYXNlICdtJzpcclxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIHBlcmMnIDogJyBwZXJjZScpO1xyXG4gICAgY2FzZSAnbW0nOlxyXG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIHBlcmMnIDogJyBwZXJjZScpO1xyXG4gICAgY2FzZSAnaCc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDs3JhJyA6ICcgw7Nyw6FqYScpO1xyXG4gICAgY2FzZSAnaGgnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMOzcmEnIDogJyDDs3LDoWphJyk7XHJcbiAgICBjYXNlICdkJzpcclxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XHJcbiAgICBjYXNlICdkZCc6XHJcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcclxuICAgIGNhc2UgJ00nOlxyXG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMOzbmFwJyA6ICcgaMOzbmFwamEnKTtcclxuICAgIGNhc2UgJ01NJzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow7NuYXAnIDogJyBow7NuYXBqYScpO1xyXG4gICAgY2FzZSAneSc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDqXYnIDogJyDDqXZlJyk7XHJcbiAgICBjYXNlICd5eSc6XHJcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw6l2JyA6ICcgw6l2ZScpO1xyXG4gIH1cclxuICByZXR1cm4gJyc7XHJcbn1cclxuZnVuY3Rpb24gd2VlayhkYXRlOiBEYXRlLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIHJldHVybiAoaXNGdXR1cmUgPyAnJyA6ICdbbcO6bHRdICcpICsgJ1snICsgd2Vla0VuZGluZ3NbZ2V0RGF5T2ZXZWVrKGRhdGUpXSArICddIExUWy1rb3JdJztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGh1TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdodScsXHJcbiAgbW9udGhzIDogJ2phbnXDoXJfZmVicnXDoXJfbcOhcmNpdXNfw6FwcmlsaXNfbcOhanVzX2rDum5pdXNfasO6bGl1c19hdWd1c3p0dXNfc3plcHRlbWJlcl9va3TDs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA6ICdqYW5fZmViX23DoXJjX8OhcHJfbcOhal9qw7puX2rDumxfYXVnX3N6ZXB0X29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzIDogJ3Zhc8Ohcm5hcF9ow6l0ZsWRX2tlZGRfc3plcmRhX2Nzw7x0w7ZydMO2a19ww6ludGVrX3N6b21iYXQnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICd2YXNfaMOpdF9rZWRkX3N6ZV9jc8O8dF9ww6luX3N6bycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICd2X2hfa19zemVfY3NfcF9zem8nLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICBMVCA6ICdIOm1tJyxcclxuICAgIExUUyA6ICdIOm1tOnNzJyxcclxuICAgIEwgOiAnWVlZWS5NTS5ERC4nLFxyXG4gICAgTEwgOiAnWVlZWS4gTU1NTSBELicsXHJcbiAgICBMTEwgOiAnWVlZWS4gTU1NTSBELiBIOm1tJyxcclxuICAgIExMTEwgOiAnWVlZWS4gTU1NTSBELiwgZGRkZCBIOm1tJ1xyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL2RlfGR1L2ksXHJcbiAgaXNQTSAoaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW0gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91cnMgPCAxMikge1xyXG4gICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkZScgOiAnREUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZHUnIDogJ0RVJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgc2FtZURheSA6ICdbbWFdIExUWy1rb3JdJyxcclxuICAgIG5leHREYXkgOiAnW2hvbG5hcF0gTFRbLWtvcl0nLFxyXG4gICAgbmV4dFdlZWsgKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuIHdlZWsoZGF0ZSwgdHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgbGFzdERheSA6ICdbdGVnbmFwXSBMVFsta29yXScsXHJcbiAgICBsYXN0V2VlayAoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gd2VlayhkYXRlLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2UgOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZSA6IHtcclxuICAgIGZ1dHVyZSA6ICclcyBtw7psdmEnLFxyXG4gICAgcGFzdCA6ICclcycsXHJcbiAgICBzIDogdHJhbnNsYXRlLFxyXG4gICAgc3MgOiB0cmFuc2xhdGUsXHJcbiAgICBtIDogdHJhbnNsYXRlLFxyXG4gICAgbW0gOiB0cmFuc2xhdGUsXHJcbiAgICBoIDogdHJhbnNsYXRlLFxyXG4gICAgaGggOiB0cmFuc2xhdGUsXHJcbiAgICBkIDogdHJhbnNsYXRlLFxyXG4gICAgZGQgOiB0cmFuc2xhdGUsXHJcbiAgICBNIDogdHJhbnNsYXRlLFxyXG4gICAgTU0gOiB0cmFuc2xhdGUsXHJcbiAgICB5IDogdHJhbnNsYXRlLFxyXG4gICAgeXkgOiB0cmFuc2xhdGVcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXHJcbiAgb3JkaW5hbCA6ICclZC4nLFxyXG4gIHdlZWsgOiB7XHJcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiJdfQ==