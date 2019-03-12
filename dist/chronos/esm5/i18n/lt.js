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
var /** @type {?} */ units = {
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
    var /** @type {?} */ result = num + ' ';
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
export var /** @type {?} */ ltLocale = {
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
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2x0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EscUJBQU0sS0FBSyxHQUFHO0lBQ1osRUFBRSxFQUFHLDRCQUE0QjtJQUNqQyxDQUFDLEVBQUcsdUJBQXVCO0lBQzNCLEVBQUUsRUFBRSx5QkFBeUI7SUFDN0IsQ0FBQyxFQUFHLDBCQUEwQjtJQUM5QixFQUFFLEVBQUUsMkJBQTJCO0lBQy9CLENBQUMsRUFBRyxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixDQUFDLEVBQUcsc0JBQXNCO0lBQzFCLEVBQUUsRUFBRSwyQkFBMkI7SUFDL0IsQ0FBQyxFQUFHLGtCQUFrQjtJQUN0QixFQUFFLEVBQUUsa0JBQWtCO0NBQ3ZCLENBQUM7Ozs7Ozs7O0FBQ0YsMEJBQTBCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUMzRixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztLQUM1QjtJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0tBQzNEO0NBQ0Y7Ozs7Ozs7O0FBQ0QsMkJBQTJCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUM1RixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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T0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLFNBQVM7UUFDcEIsT0FBTyxFQUFHLFlBQVk7UUFDdEIsUUFBUSxFQUFHLG9CQUFvQjtRQUMvQixRQUFRLEVBQUcsR0FBRztLQUNqQjtJQUNELFlBQVksRUFBRztRQUNYLE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBRyxVQUFVO1FBQ2pCLENBQUMsRUFBRyxnQkFBZ0I7UUFDcEIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxpQkFBaUI7UUFDckIsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBRyxTQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUcsU0FBUztLQUNqQjtJQUNELHNCQUFzQixFQUFFLGFBQWE7SUFDckMsT0FBTzs7OztjQUFDLEdBQUc7UUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUN2QjtJQUNELElBQUksRUFBRztRQUNILEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDO0tBQ1Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogTGl0aHVhbmlhbiBbbHRdXHJcbi8vISBhdXRob3IgOiBTdGFuaXNsYXZhcyBHdWsgOiBodHRwczovL2dpdGh1Yi5jb20vaXhvc3RlclxyXG5cclxuY29uc3QgdW5pdHMgPSB7XHJcbiAgc3MgOiAnc2VrdW5kxJdfc2VrdW5kxb5pxbNfc2VrdW5kZXMnLFxyXG4gIG0gOiAnbWludXTEl19taW51dMSXc19taW51dMSZJyxcclxuICBtbTogJ21pbnV0xJdzX21pbnXEjWnFs19taW51dGVzJyxcclxuICBoIDogJ3ZhbGFuZGFfdmFsYW5kb3NfdmFsYW5kxIUnLFxyXG4gIGhoOiAndmFsYW5kb3NfdmFsYW5kxbNfdmFsYW5kYXMnLFxyXG4gIGQgOiAnZGllbmFfZGllbm9zX2RpZW7EhScsXHJcbiAgZGQ6ICdkaWVub3NfZGllbsWzX2RpZW5hcycsXHJcbiAgTSA6ICdtxJdudW9fbcSXbmVzaW9fbcSXbmVzxK8nLFxyXG4gIE1NOiAnbcSXbmVzaWFpX23El25lc2nFs19txJduZXNpdXMnLFxyXG4gIHkgOiAnbWV0YWlfbWV0xbNfbWV0dXMnLFxyXG4gIHl5OiAnbWV0YWlfbWV0xbNfbWV0dXMnXHJcbn07XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVNlY29uZHMobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIGlmICh3aXRob3V0U3VmZml4KSB7XHJcbiAgICAgIHJldHVybiAna2VsaW9zIHNla3VuZMSXcyc7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ2tlbGnFsyBzZWt1bmTFvmnFsycgOiAna2VsaWFzIHNla3VuZGVzJztcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlU2luZ3VsYXIobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybXMoa2V5KVswXSA6IChpc0Z1dHVyZSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcclxufVxyXG5mdW5jdGlvbiBzcGVjaWFsKG51bTogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIG51bSAlIDEwID09PSAwIHx8IChudW0gPiAxMCAmJiBudW0gPCAyMCk7XHJcbn1cclxuZnVuY3Rpb24gZm9ybXMoa2V5OiBzdHJpbmcpIHtcclxuICByZXR1cm4gdW5pdHNba2V5XS5zcGxpdCgnXycpO1xyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XHJcbiAgbGV0IHJlc3VsdCA9IG51bSArICcgJztcclxuICBpZiAobnVtID09PSAxKSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQgKyB0cmFuc2xhdGVTaW5ndWxhcihudW0sIHdpdGhvdXRTdWZmaXgsIGtleVswXSwgaXNGdXR1cmUpO1xyXG4gIH0gZWxzZSBpZiAod2l0aG91dFN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzBdKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICBpZiAoaXNGdXR1cmUpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKyBmb3JtcyhrZXkpWzFdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bSkgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsdExvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnbHQnLFxyXG4gIG1vbnRocyA6IHtcclxuICAgIGZvcm1hdDogJ3NhdXNpb192YXNhcmlvX2tvdm9fYmFsYW5kxb5pb19nZWd1xb7El3NfYmlyxb5lbGlvX2xpZXBvc19ydWdwasWrxI1pb19ydWdzxJdqb19zcGFsaW9fbGFwa3JpxI1pb19ncnVvZMW+aW8nLnNwbGl0KCdfJyksXHJcbiAgICBzdGFuZGFsb25lOiAnc2F1c2lzX3Zhc2FyaXNfa292YXNfYmFsYW5kaXNfZ2VndcW+xJdfYmlyxb5lbGlzX2xpZXBhX3J1Z3Bqxat0aXNfcnVnc8SXamlzX3NwYWxpc19sYXBrcml0aXNfZ3J1b2Rpcycuc3BsaXQoJ18nKSxcclxuICAgIGlzRm9ybWF0OiAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NP3xNTU1NPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrRFtvRF0/L1xyXG4gIH0sXHJcbiAgbW9udGhzU2hvcnQgOiAnc2F1X3Zhc19rb3ZfYmFsX2dlZ19iaXJfbGllX3JncF9yZ3Nfc3BhX2xhcF9ncmQnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiB7XHJcbiAgICAgIGZvcm1hdDogJ3Nla21hZGllbsSvX3Bpcm1hZGllbsSvX2FudHJhZGllbsSvX3RyZcSNaWFkaWVuxK9fa2V0dmlydGFkaWVuxK9fcGVua3RhZGllbsSvX8WhZcWhdGFkaWVuxK8nLnNwbGl0KCdfJyksXHJcbiAgICAgIHN0YW5kYWxvbmU6ICdzZWttYWRpZW5pc19waXJtYWRpZW5pc19hbnRyYWRpZW5pc190cmXEjWlhZGllbmlzX2tldHZpcnRhZGllbmlzX3Blbmt0YWRpZW5pc1/FoWXFoXRhZGllbmlzJy5zcGxpdCgnXycpLFxyXG4gICAgICBpc0Zvcm1hdDogL2RkZGQgSEg6bW0vXHJcbiAgfSxcclxuICB3ZWVrZGF5c1Nob3J0IDogJ1Nla19QaXJfQW50X1RyZV9LZXRfUGVuX8WgZcWhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ1NfUF9BX1RfS19Qbl/FoCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xyXG4gICAgICBMVCA6ICdISDptbScsXHJcbiAgICAgIExUUyA6ICdISDptbTpzcycsXHJcbiAgICAgIEwgOiAnWVlZWS1NTS1ERCcsXHJcbiAgICAgIExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXHJcbiAgICAgIExMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXHJcbiAgICAgIExMTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGRkLCBISDptbSBbdmFsLl0nLFxyXG4gICAgICBsIDogJ1lZWVktTU0tREQnLFxyXG4gICAgICBsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0nLFxyXG4gICAgICBsbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBISDptbSBbdmFsLl0nLFxyXG4gICAgICBsbGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgZGRkLCBISDptbSBbdmFsLl0nXHJcbiAgfSxcclxuICBjYWxlbmRhciA6IHtcclxuICAgICAgc2FtZURheSA6ICdbxaBpYW5kaWVuXSBMVCcsXHJcbiAgICAgIG5leHREYXkgOiAnW1J5dG9qXSBMVCcsXHJcbiAgICAgIG5leHRXZWVrIDogJ2RkZGQgTFQnLFxyXG4gICAgICBsYXN0RGF5IDogJ1tWYWthcl0gTFQnLFxyXG4gICAgICBsYXN0V2VlayA6ICdbUHJhxJdqdXPEr10gZGRkZCBMVCcsXHJcbiAgICAgIHNhbWVFbHNlIDogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICAgIGZ1dHVyZSA6ICdwbyAlcycsXHJcbiAgICAgIHBhc3QgOiAncHJpZcWhICVzJyxcclxuICAgICAgcyA6IHRyYW5zbGF0ZVNlY29uZHMsXHJcbiAgICAgIHNzIDogdHJhbnNsYXRlLFxyXG4gICAgICBtIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIG1tIDogdHJhbnNsYXRlLFxyXG4gICAgICBoIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIGhoIDogdHJhbnNsYXRlLFxyXG4gICAgICBkIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIGRkIDogdHJhbnNsYXRlLFxyXG4gICAgICBNIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIE1NIDogdHJhbnNsYXRlLFxyXG4gICAgICB5IDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIHl5IDogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tb2ppLyxcclxuICBvcmRpbmFsKG51bSkge1xyXG4gICAgICByZXR1cm4gbnVtICsgJy1vamknO1xyXG4gIH0sXHJcbiAgd2VlayA6IHtcclxuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiJdfQ==