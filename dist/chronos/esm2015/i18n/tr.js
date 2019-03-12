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
let /** @type {?} */ suffixes = {
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
export const /** @type {?} */ trLocale = {
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
    /**
     * @param {?} _num
     * @return {?}
     */
    ordinal(_num) {
        const /** @type {?} */ num = Number(_num);
        if (num === 0) {
            // special case for zero
            return num + '\'ıncı';
        }
        let /** @type {?} */ a = num % 10, /** @type {?} */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBLHFCQUFJLFFBQVEsR0FBOEI7SUFDeEMsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLENBQUMsRUFBRSxRQUFRO0lBQ1gsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLENBQUMsRUFBRSxPQUFPO0lBQ1YsQ0FBQyxFQUFFLE9BQU87SUFDVixFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxPQUFPO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLEdBQUcsRUFBRSxRQUFRO0lBQ2IsQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsUUFBUTtJQUNYLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0NBQ2IsQ0FBQztBQUVGLE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsNEVBQTRFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvRixXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsdURBQXVELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxPQUFPLEVBQUUsVUFBVTtRQUNuQixRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsVUFBVTtRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxlQUFlO1FBQ2xCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFFBQVE7S0FDYjtJQUNELHNCQUFzQixFQUFFLHVDQUF1Qzs7Ozs7SUFDL0QsT0FBTyxDQUFDLElBQVk7UUFDbEIsdUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDZCxNQUFNLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztTQUN2QjtRQUNELHFCQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUNkLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFEO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBUdXJraXNoIFt0cl1cclxuLy8hIGF1dGhvcnMgOiBFcmhhbiBHdW5kb2dhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9lcmhhbmd1bmRvZ2FuLFxyXG4vLyEgICAgICAgICAgIEJ1cmFrIFlpxJ9pdCBLYXlhOiBodHRwczovL2dpdGh1Yi5jb20vQllLXHJcblxyXG5sZXQgc3VmZml4ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgMTogJ1xcJ2luY2knLFxyXG4gIDU6ICdcXCdpbmNpJyxcclxuICA4OiAnXFwnaW5jaScsXHJcbiAgNzA6ICdcXCdpbmNpJyxcclxuICA4MDogJ1xcJ2luY2knLFxyXG4gIDI6ICdcXCduY2knLFxyXG4gIDc6ICdcXCduY2knLFxyXG4gIDIwOiAnXFwnbmNpJyxcclxuICA1MDogJ1xcJ25jaScsXHJcbiAgMzogJ1xcJ8O8bmPDvCcsXHJcbiAgNDogJ1xcJ8O8bmPDvCcsXHJcbiAgMTAwOiAnXFwnw7xuY8O8JyxcclxuICA2OiAnXFwnbmPEsScsXHJcbiAgOTogJ1xcJ3VuY3UnLFxyXG4gIDEwOiAnXFwndW5jdScsXHJcbiAgMzA6ICdcXCd1bmN1JyxcclxuICA2MDogJ1xcJ8SxbmPEsScsXHJcbiAgOTA6ICdcXCfEsW5jxLEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3RyJyxcclxuICBtb250aHM6ICdPY2FrX8WedWJhdF9NYXJ0X05pc2FuX01hecSxc19IYXppcmFuX1RlbW11el9BxJ91c3Rvc19FeWzDvGxfRWtpbV9LYXPEsW1fQXJhbMSxaycuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ09jYV/FnnViX01hcl9OaXNfTWF5X0hhel9UZW1fQcSfdV9FeWxfRWtpX0thc19BcmEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICdQYXphcl9QYXphcnRlc2lfU2FsxLFfw4dhcsWfYW1iYV9QZXLFn2VtYmVfQ3VtYV9DdW1hcnRlc2knLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ1Bhel9QdHNfU2FsX8OHYXJfUGVyX0N1bV9DdHMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdQel9QdF9TYV/Dh2FfUGVfQ3VfQ3QnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tidWfDvG4gc2FhdF0gTFQnLFxyXG4gICAgbmV4dERheTogJ1t5YXLEsW4gc2FhdF0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdbZ2VsZWNla10gZGRkZCBbc2FhdF0gTFQnLFxyXG4gICAgbGFzdERheTogJ1tkw7xuXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1tnZcOnZW5dIGRkZGQgW3NhYXRdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnJXMgc29ucmEnLFxyXG4gICAgcGFzdDogJyVzIMO2bmNlJyxcclxuICAgIHM6ICdiaXJrYcOnIHNhbml5ZScsXHJcbiAgICBzczogJyVkIHNhbml5ZScsXHJcbiAgICBtOiAnYmlyIGRha2lrYScsXHJcbiAgICBtbTogJyVkIGRha2lrYScsXHJcbiAgICBoOiAnYmlyIHNhYXQnLFxyXG4gICAgaGg6ICclZCBzYWF0JyxcclxuICAgIGQ6ICdiaXIgZ8O8bicsXHJcbiAgICBkZDogJyVkIGfDvG4nLFxyXG4gICAgTTogJ2JpciBheScsXHJcbiAgICBNTTogJyVkIGF5JyxcclxuICAgIHk6ICdiaXIgecSxbCcsXHJcbiAgICB5eTogJyVkIHnEsWwnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0nKGluY2l8bmNpfMO8bmPDvHxuY8SxfHVuY3V8xLFuY8SxKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgaWYgKG51bSA9PT0gMCkgeyAgLy8gc3BlY2lhbCBjYXNlIGZvciB6ZXJvXHJcbiAgICAgIHJldHVybiBudW0gKyAnXFwnxLFuY8SxJztcclxuICAgIH1cclxuICAgIGxldCBhID0gbnVtICUgMTAsXHJcbiAgICAgIGIgPSBudW0gJSAxMDAgLSBhLFxyXG4gICAgICBjID0gbnVtID49IDEwMCA/IDEwMCA6IG51bGw7XHJcbiAgICByZXR1cm4gbnVtICsgKHN1ZmZpeGVzW2FdIHx8IHN1ZmZpeGVzW2JdIHx8IHN1ZmZpeGVzW2NdKTtcclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiJdfQ==