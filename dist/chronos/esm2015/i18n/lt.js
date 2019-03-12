/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
const /** @type {?} */ units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
};
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSeconds(num, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    }
    else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSingular(num, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
/**
 * @param {?} num
 * @return {?}
 */
function special(num) {
    return num % 10 === 0 || (num > 10 && num < 20);
}
/**
 * @param {?} key
 * @return {?}
 */
function forms(key) {
    return units[key].split('_');
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    let /** @type {?} */ result = num + ' ';
    if (num === 1) {
        return result + translateSingular(num, withoutSuffix, key[0], isFuture);
    }
    else if (withoutSuffix) {
        return result + (special(num) ? forms(key)[1] : forms(key)[0]);
    }
    else {
        if (isFuture) {
            return result + forms(key)[1];
        }
        else {
            return result + (special(num) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
export const /** @type {?} */ ltLocale = {
    abbr: 'lt',
    months: {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        ss: translate,
        m: translateSingular,
        mm: translate,
        h: translateSingular,
        hh: translate,
        d: translateSingular,
        dd: translate,
        M: translateSingular,
        MM: translate,
        y: translateSingular,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    /**
     * @param {?} num
     * @return {?}
     */
    ordinal(num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2x0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsdUJBQU0sS0FBSyxHQUFHO0lBQ1osRUFBRSxFQUFHLDRCQUE0QjtJQUNqQyxDQUFDLEVBQUcsdUJBQXVCO0lBQzNCLEVBQUUsRUFBRSx5QkFBeUI7SUFDN0IsQ0FBQyxFQUFHLDBCQUEwQjtJQUM5QixFQUFFLEVBQUUsMkJBQTJCO0lBQy9CLENBQUMsRUFBRyxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixDQUFDLEVBQUcsc0JBQXNCO0lBQzFCLEVBQUUsRUFBRSwyQkFBMkI7SUFDL0IsQ0FBQyxFQUFHLGtCQUFrQjtJQUN0QixFQUFFLEVBQUUsa0JBQWtCO0NBQ3ZCLENBQUM7Ozs7Ozs7O0FBQ0YsMEJBQTBCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUMzRixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztLQUM1QjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0tBQzNEO0NBQ0Y7Ozs7Ozs7O0FBQ0QsMkJBQTJCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUM1RixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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T0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLFNBQVM7UUFDcEIsT0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLG9CQUFvQjtRQUMvQixRQUFRLEVBQUcsR0FBRztLQUNqQjtJQUNELFlBQVksRUFBRztRQUNYLE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBRyxVQUFVO1FBQ2pCLENBQUMsRUFBRyxnQkFBZ0I7UUFDcEIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxpQkFBaUI7UUFDckIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztLQUNqQjtJQUNELHNCQUFzQixFQUFFLGFBQWE7Ozs7O0lBQ3JDLE9BQU8sQ0FBQyxHQUFHO1FBQ1AsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDdkI7SUFDRCxJQUFJLEVBQUc7UUFDSCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNWO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IExpdGh1YW5pYW4gW2x0XVxyXG4vLyEgYXV0aG9yIDogU3RhbmlzbGF2YXMgR3VrIDogaHR0cHM6Ly9naXRodWIuY29tL2l4b3N0ZXJcclxuXHJcbmNvbnN0IHVuaXRzID0ge1xyXG4gIHNzIDogJ3Nla3VuZMSXX3Nla3VuZMW+acWzX3Nla3VuZGVzJyxcclxuICBtIDogJ21pbnV0xJdfbWludXTEl3NfbWludXTEmScsXHJcbiAgbW06ICdtaW51dMSXc19taW51xI1pxbNfbWludXRlcycsXHJcbiAgaCA6ICd2YWxhbmRhX3ZhbGFuZG9zX3ZhbGFuZMSFJyxcclxuICBoaDogJ3ZhbGFuZG9zX3ZhbGFuZMWzX3ZhbGFuZGFzJyxcclxuICBkIDogJ2RpZW5hX2RpZW5vc19kaWVuxIUnLFxyXG4gIGRkOiAnZGllbm9zX2RpZW7Fs19kaWVuYXMnLFxyXG4gIE0gOiAnbcSXbnVvX23El25lc2lvX23El25lc8SvJyxcclxuICBNTTogJ23El25lc2lhaV9txJduZXNpxbNfbcSXbmVzaXVzJyxcclxuICB5IDogJ21ldGFpX21ldMWzX21ldHVzJyxcclxuICB5eTogJ21ldGFpX21ldMWzX21ldHVzJ1xyXG59O1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVTZWNvbmRzKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcclxuICBpZiAod2l0aG91dFN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gJ2tlbGlvcyBzZWt1bmTEl3MnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrZWxpxbMgc2VrdW5kxb5pxbMnIDogJ2tlbGlhcyBzZWt1bmRlcyc7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVNpbmd1bGFyKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1zKGtleSlbMF0gOiAoaXNGdXR1cmUgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XHJcbn1cclxuZnVuY3Rpb24gc3BlY2lhbChudW06IG51bWJlcikge1xyXG4gIHJldHVybiBudW0gJSAxMCA9PT0gMCB8fCAobnVtID4gMTAgJiYgbnVtIDwgMjApO1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1zKGtleTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHVuaXRzW2tleV0uc3BsaXQoJ18nKTtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIGxldCByZXN1bHQgPSBudW0gKyAnICc7XHJcbiAgaWYgKG51bSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgdHJhbnNsYXRlU2luZ3VsYXIobnVtLCB3aXRob3V0U3VmZml4LCBrZXlbMF0sIGlzRnV0dXJlKTtcclxuICB9IGVsc2UgaWYgKHdpdGhvdXRTdWZmaXgpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bSkgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVswXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgaWYgKGlzRnV0dXJlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZm9ybXMoa2V5KVsxXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW0pID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbHRMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2x0JyxcclxuICBtb250aHMgOiB7XHJcbiAgICBmb3JtYXQ6ICdzYXVzaW9fdmFzYXJpb19rb3ZvX2JhbGFuZMW+aW9fZ2VndcW+xJdzX2JpcsW+ZWxpb19saWVwb3NfcnVncGrFq8SNaW9fcnVnc8SXam9fc3BhbGlvX2xhcGtyacSNaW9fZ3J1b2TFvmlvJy5zcGxpdCgnXycpLFxyXG4gICAgc3RhbmRhbG9uZTogJ3NhdXNpc192YXNhcmlzX2tvdmFzX2JhbGFuZGlzX2dlZ3XFvsSXX2JpcsW+ZWxpc19saWVwYV9ydWdwasWrdGlzX3J1Z3PEl2ppc19zcGFsaXNfbGFwa3JpdGlzX2dydW9kaXMnLnNwbGl0KCdfJyksXHJcbiAgICBpc0Zvcm1hdDogL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT98TU1NTT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK0Rbb0RdPy9cclxuICB9LFxyXG4gIG1vbnRoc1Nob3J0IDogJ3NhdV92YXNfa292X2JhbF9nZWdfYmlyX2xpZV9yZ3BfcmdzX3NwYV9sYXBfZ3JkJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzIDoge1xyXG4gICAgICBmb3JtYXQ6ICdzZWttYWRpZW7Er19waXJtYWRpZW7Er19hbnRyYWRpZW7Er190cmXEjWlhZGllbsSvX2tldHZpcnRhZGllbsSvX3Blbmt0YWRpZW7Er1/FoWXFoXRhZGllbsSvJy5zcGxpdCgnXycpLFxyXG4gICAgICBzdGFuZGFsb25lOiAnc2VrbWFkaWVuaXNfcGlybWFkaWVuaXNfYW50cmFkaWVuaXNfdHJlxI1pYWRpZW5pc19rZXR2aXJ0YWRpZW5pc19wZW5rdGFkaWVuaXNfxaFlxaF0YWRpZW5pcycuc3BsaXQoJ18nKSxcclxuICAgICAgaXNGb3JtYXQ6IC9kZGRkIEhIOm1tL1xyXG4gIH0sXHJcbiAgd2Vla2RheXNTaG9ydCA6ICdTZWtfUGlyX0FudF9UcmVfS2V0X1Blbl/FoGXFoScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICdTX1BfQV9UX0tfUG5fxaAnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgICAgTFQgOiAnSEg6bW0nLFxyXG4gICAgICBMVFMgOiAnSEg6bW06c3MnLFxyXG4gICAgICBMIDogJ1lZWVktTU0tREQnLFxyXG4gICAgICBMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0nLFxyXG4gICAgICBMTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBISDptbSBbdmFsLl0nLFxyXG4gICAgICBMTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgZGRkZCwgSEg6bW0gW3ZhbC5dJyxcclxuICAgICAgbCA6ICdZWVlZLU1NLUREJyxcclxuICAgICAgbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcclxuICAgICAgbGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcclxuICAgICAgbGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZCwgSEg6bW0gW3ZhbC5dJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICAgIHNhbWVEYXkgOiAnW8WgaWFuZGllbl0gTFQnLFxyXG4gICAgICBuZXh0RGF5IDogJ1tSeXRval0gTFQnLFxyXG4gICAgICBuZXh0V2VlayA6ICdkZGRkIExUJyxcclxuICAgICAgbGFzdERheSA6ICdbVmFrYXJdIExUJyxcclxuICAgICAgbGFzdFdlZWsgOiAnW1ByYcSXanVzxK9dIGRkZGQgTFQnLFxyXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgICBmdXR1cmUgOiAncG8gJXMnLFxyXG4gICAgICBwYXN0IDogJ3ByaWXFoSAlcycsXHJcbiAgICAgIHMgOiB0cmFuc2xhdGVTZWNvbmRzLFxyXG4gICAgICBzcyA6IHRyYW5zbGF0ZSxcclxuICAgICAgbSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBtbSA6IHRyYW5zbGF0ZSxcclxuICAgICAgaCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBoaCA6IHRyYW5zbGF0ZSxcclxuICAgICAgZCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBkZCA6IHRyYW5zbGF0ZSxcclxuICAgICAgTSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBNTSA6IHRyYW5zbGF0ZSxcclxuICAgICAgeSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICB5eSA6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LW9qaS8sXHJcbiAgb3JkaW5hbChudW0pIHtcclxuICAgICAgcmV0dXJuIG51bSArICctb2ppJztcclxuICB9LFxyXG4gIHdlZWsgOiB7XHJcbiAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=