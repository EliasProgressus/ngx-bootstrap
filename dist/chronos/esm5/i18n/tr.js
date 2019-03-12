/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
var /** @type {?} */ suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};
export var /** @type {?} */ trLocale = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        if (num === 0) {
            // special case for zero
            return num + '\'ıncı';
        }
        var /** @type {?} */ a = num % 10, /** @type {?} */
        b = num % 100 - a, /** @type {?} */
        c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBLHFCQUFJLFFBQVEsR0FBOEI7SUFDeEMsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLENBQUMsRUFBRSxRQUFRO0lBQ1gsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLENBQUMsRUFBRSxPQUFPO0lBQ1YsQ0FBQyxFQUFFLE9BQU87SUFDVixFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxPQUFPO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLEdBQUcsRUFBRSxRQUFRO0lBQ2IsQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsUUFBUTtJQUNYLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsNEVBQTRFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRixXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsdURBQXVELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsVUFBVTtRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxlQUFlO1FBQ2xCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNELHNCQUFzQixFQUFFLHVDQUF1QztJQUMvRCxPQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ2QsTUFBTSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7U0FDdkI7UUFDRCxxQkFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7UUFDZCxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5QixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxRDtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogVHVya2lzaCBbdHJdXHJcbi8vISBhdXRob3JzIDogRXJoYW4gR3VuZG9nYW4gOiBodHRwczovL2dpdGh1Yi5jb20vZXJoYW5ndW5kb2dhbixcclxuLy8hICAgICAgICAgICBCdXJhayBZacSfaXQgS2F5YTogaHR0cHM6Ly9naXRodWIuY29tL0JZS1xyXG5cclxubGV0IHN1ZmZpeGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gIDE6ICdcXCdpbmNpJyxcclxuICA1OiAnXFwnaW5jaScsXHJcbiAgODogJ1xcJ2luY2knLFxyXG4gIDcwOiAnXFwnaW5jaScsXHJcbiAgODA6ICdcXCdpbmNpJyxcclxuICAyOiAnXFwnbmNpJyxcclxuICA3OiAnXFwnbmNpJyxcclxuICAyMDogJ1xcJ25jaScsXHJcbiAgNTA6ICdcXCduY2knLFxyXG4gIDM6ICdcXCfDvG5jw7wnLFxyXG4gIDQ6ICdcXCfDvG5jw7wnLFxyXG4gIDEwMDogJ1xcJ8O8bmPDvCcsXHJcbiAgNjogJ1xcJ25jxLEnLFxyXG4gIDk6ICdcXCd1bmN1JyxcclxuICAxMDogJ1xcJ3VuY3UnLFxyXG4gIDMwOiAnXFwndW5jdScsXHJcbiAgNjA6ICdcXCfEsW5jxLEnLFxyXG4gIDkwOiAnXFwnxLFuY8SxJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICd0cicsXHJcbiAgbW9udGhzOiAnT2Nha1/FnnViYXRfTWFydF9OaXNhbl9NYXnEsXNfSGF6aXJhbl9UZW1tdXpfQcSfdXN0b3NfRXlsw7xsX0VraW1fS2FzxLFtX0FyYWzEsWsnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdPY2FfxZ51Yl9NYXJfTmlzX01heV9IYXpfVGVtX0HEn3VfRXlsX0VraV9LYXNfQXJhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnUGF6YXJfUGF6YXJ0ZXNpX1NhbMSxX8OHYXLFn2FtYmFfUGVyxZ9lbWJlX0N1bWFfQ3VtYXJ0ZXNpJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdQYXpfUHRzX1NhbF/Dh2FyX1Blcl9DdW1fQ3RzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnUHpfUHRfU2Ffw4dhX1BlX0N1X0N0Jy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbYnVnw7xuIHNhYXRdIExUJyxcclxuICAgIG5leHREYXk6ICdbeWFyxLFuIHNhYXRdIExUJyxcclxuICAgIG5leHRXZWVrOiAnW2dlbGVjZWtdIGRkZGQgW3NhYXRdIExUJyxcclxuICAgIGxhc3REYXk6ICdbZMO8bl0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbZ2XDp2VuXSBkZGRkIFtzYWF0XSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJyVzIHNvbnJhJyxcclxuICAgIHBhc3Q6ICclcyDDtm5jZScsXHJcbiAgICBzOiAnYmlya2HDpyBzYW5peWUnLFxyXG4gICAgc3M6ICclZCBzYW5peWUnLFxyXG4gICAgbTogJ2JpciBkYWtpa2EnLFxyXG4gICAgbW06ICclZCBkYWtpa2EnLFxyXG4gICAgaDogJ2JpciBzYWF0JyxcclxuICAgIGhoOiAnJWQgc2FhdCcsXHJcbiAgICBkOiAnYmlyIGfDvG4nLFxyXG4gICAgZGQ6ICclZCBnw7xuJyxcclxuICAgIE06ICdiaXIgYXknLFxyXG4gICAgTU06ICclZCBheScsXHJcbiAgICB5OiAnYmlyIHnEsWwnLFxyXG4gICAgeXk6ICclZCB5xLFsJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9JyhpbmNpfG5jaXzDvG5jw7x8bmPEsXx1bmN1fMSxbmPEsSkvLFxyXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcclxuICAgIGlmIChudW0gPT09IDApIHsgIC8vIHNwZWNpYWwgY2FzZSBmb3IgemVyb1xyXG4gICAgICByZXR1cm4gbnVtICsgJ1xcJ8SxbmPEsSc7XHJcbiAgICB9XHJcbiAgICBsZXQgYSA9IG51bSAlIDEwLFxyXG4gICAgICBiID0gbnVtICUgMTAwIC0gYSxcclxuICAgICAgYyA9IG51bSA+PSAxMDAgPyAxMDAgOiBudWxsO1xyXG4gICAgcmV0dXJuIG51bSArIChzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSB8fCBzdWZmaXhlc1tjXSk7XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=