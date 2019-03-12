/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
// https://github.com/moment/moment/blob/develop/locale/fi.js
var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */
numbersFuture = [
    'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
    numbersPast[7], numbersPast[8], numbersPast[9]
];
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
            return isFuture ? 'sekunnin' : 'sekuntia';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(num, isFuture) + ' ' + result;
    return result;
}
/**
 * @param {?} num
 * @param {?} isFuture
 * @return {?}
 */
function verbalNumber(num, isFuture) {
    return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
}
export var /** @type {?} */ fiLocale = {
    abbr: 'fi',
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] HH.mm',
        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2ZpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQSxxQkFBSSxXQUFXLEdBQUcsdUVBQXVFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNsRyxhQUFhLEdBQUc7SUFDZCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0lBQ2xFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztDQUMvQyxDQUFDOzs7Ozs7OztBQUVKLG1CQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYscUJBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osS0FBSyxHQUFHO1lBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQzVELEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLEtBQUssSUFBSTtZQUNQLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQzdDLEtBQUssQ0FBQztRQUNSLEtBQUssR0FBRztZQUNOLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FB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QUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9maS5qc1xyXG5cclxudmFyIG51bWJlcnNQYXN0ID0gJ25vbGxhIHlrc2kga2Frc2kga29sbWUgbmVsasOkIHZpaXNpIGt1dXNpIHNlaXRzZW3DpG4ga2FoZGVrc2FuIHloZGVrc8Okbicuc3BsaXQoJyAnKSxcclxuICBudW1iZXJzRnV0dXJlID0gW1xyXG4gICAgJ25vbGxhJywgJ3loZGVuJywgJ2thaGRlbicsICdrb2xtZW4nLCAnbmVsasOkbicsICd2aWlkZW4nLCAna3V1ZGVuJyxcclxuICAgIG51bWJlcnNQYXN0WzddLCBudW1iZXJzUGFzdFs4XSwgbnVtYmVyc1Bhc3RbOV1cclxuICBdO1xyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIHZhciByZXN1bHQgPSAnJztcclxuICBzd2l0Y2ggKGtleSkge1xyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtdXV0YW1hbiBzZWt1bm5pbicgOiAnbXV1dGFtYSBzZWt1bnRpJztcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3Nla3VubmluJyA6ICdzZWt1bnRpYSc7XHJcbiAgICBjYXNlICdtJzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aSc7XHJcbiAgICBjYXNlICdtbSc6XHJcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aWEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndHVubmluJyA6ICd0dW50aSc7XHJcbiAgICBjYXNlICdoaCc6XHJcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3R1bm5pbicgOiAndHVudGlhJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdkJzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3DDpGl2w6RuJyA6ICdww6RpdsOkJztcclxuICAgIGNhc2UgJ2RkJzpcclxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAncMOkaXbDpG4nIDogJ3DDpGl2w6TDpCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnTSc6XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXNpJztcclxuICAgIGNhc2UgJ01NJzpcclxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXV0dGEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3knOlxyXG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndnVvZGVuJyA6ICd2dW9zaSc7XHJcbiAgICBjYXNlICd5eSc6XHJcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3Z1b2RlbicgOiAndnVvdHRhJztcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJlc3VsdCA9IHZlcmJhbE51bWJlcihudW0sIGlzRnV0dXJlKSArICcgJyArIHJlc3VsdDtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJiYWxOdW1iZXIobnVtOiBudW1iZXIsIGlzRnV0dXJlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIG51bSA8IDEwID8gKGlzRnV0dXJlID8gbnVtYmVyc0Z1dHVyZVtudW1dIDogbnVtYmVyc1Bhc3RbbnVtXSkgOiBudW07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZmknLFxyXG4gIG1vbnRoczogJ3RhbW1pa3V1X2hlbG1pa3V1X21hYWxpc2t1dV9odWh0aWt1dV90b3Vrb2t1dV9rZXPDpGt1dV9oZWluw6RrdXVfZWxva3V1X3N5eXNrdXVfbG9rYWt1dV9tYXJyYXNrdXVfam91bHVrdXUnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICd0YW1taV9oZWxtaV9tYWFsaXNfaHVodGlfdG91a29fa2Vzw6RfaGVpbsOkX2Vsb19zeXlzX2xva2FfbWFycmFzX2pvdWx1Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnc3VubnVudGFpX21hYW5hbnRhaV90aWlzdGFpX2tlc2tpdmlpa2tvX3RvcnN0YWlfcGVyamFudGFpX2xhdWFudGFpJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ3N1X21hX3RpX2tlX3RvX3BlX2xhJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hILm1tJyxcclxuICAgIExUUzogJ0hILm1tLnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRG8gTU1NTVt0YV0gWVlZWScsXHJcbiAgICBMTEw6ICdEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRG8gTU1NTVt0YV0gWVlZWSwgW2tsb10gSEgubW0nLFxyXG4gICAgbDogJ0QuTS5ZWVlZJyxcclxuICAgIGxsOiAnRG8gTU1NIFlZWVknLFxyXG4gICAgbGxsOiAnRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJyxcclxuICAgIGxsbGw6ICdkZGQsIERvIE1NTSBZWVlZLCBba2xvXSBISC5tbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW3TDpG7DpMOkbl0gW2tsb10gTFQnLFxyXG4gICAgbmV4dERheTogJ1todW9tZW5uYV0gW2tsb10gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtrbG9dIExUJyxcclxuICAgIGxhc3REYXk6ICdbZWlsZW5dIFtrbG9dIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW3ZpaW1lXSBkZGRkW25hXSBba2xvXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJyVzIHDDpMOkc3TDpCcsXHJcbiAgICBwYXN0OiAnJXMgc2l0dGVuJyxcclxuICAgIHM6IHRyYW5zbGF0ZSxcclxuICAgIHNzOiB0cmFuc2xhdGUsXHJcbiAgICBtOiB0cmFuc2xhdGUsXHJcbiAgICBtbTogdHJhbnNsYXRlLFxyXG4gICAgaDogdHJhbnNsYXRlLFxyXG4gICAgaGg6IHRyYW5zbGF0ZSxcclxuICAgIGQ6IHRyYW5zbGF0ZSxcclxuICAgIGRkOiB0cmFuc2xhdGUsXHJcbiAgICBNOiB0cmFuc2xhdGUsXHJcbiAgICBNTTogdHJhbnNsYXRlLFxyXG4gICAgeTogdHJhbnNsYXRlLFxyXG4gICAgeXk6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=