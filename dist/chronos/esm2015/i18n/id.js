/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
export const /** @type {?} */ idLocale = {
    abbr: 'id',
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] HH.mm',
        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    meridiemHour(hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        }
        else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        }
        else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        }
        else if (hours < 15) {
            return 'siang';
        }
        else if (hours < 19) {
            return 'sore';
        }
        else {
            return 'malam';
        }
    },
    calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        ss: '%d detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLHdGQUF3RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUcsV0FBVyxFQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUUsUUFBUSxFQUFHLDRDQUE0QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEUsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0MsY0FBYyxFQUFHO1FBQ2YsRUFBRSxFQUFHLE9BQU87UUFDWixHQUFHLEVBQUcsVUFBVTtRQUNoQixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsYUFBYTtRQUNsQixHQUFHLEVBQUcsMkJBQTJCO1FBQ2pDLElBQUksRUFBRyxpQ0FBaUM7S0FDekM7SUFDRCxhQUFhLEVBQUUsdUJBQXVCOzs7Ozs7SUFDdEMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ3RDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7S0FDRjs7Ozs7OztJQUNELFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU87UUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2Y7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNoQjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2Y7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDaEI7S0FDRjtJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxxQkFBcUI7UUFDL0IsT0FBTyxFQUFHLGtCQUFrQjtRQUM1QixRQUFRLEVBQUcsaUJBQWlCO1FBQzVCLE9BQU8sRUFBRyxvQkFBb0I7UUFDOUIsUUFBUSxFQUFHLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFVBQVU7UUFDbkIsSUFBSSxFQUFHLGNBQWM7UUFDckIsQ0FBQyxFQUFHLGdCQUFnQjtRQUNwQixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsT0FBTztRQUNYLEVBQUUsRUFBRyxRQUFRO1FBQ2IsQ0FBQyxFQUFHLFFBQVE7UUFDWixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO0tBQ2hCO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUM7S0FDUjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSW5kb25lc2lhIFtpZF1cclxuLy8hIGF1dGhvciA6IFJvbXkgS3VzdW1hIDogaHR0cHM6Ly9naXRodWIuY29tL3JrdXN1bWFcclxuLy8hIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9pZC5qc1xyXG5cclxuZXhwb3J0IGNvbnN0IGlkTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdpZCcsXHJcbiAgbW9udGhzIDogJ0phbnVhcmlfRmVicnVhcmlfTWFyZXRfQXByaWxfTWVpX0p1bmlfSnVsaV9BZ3VzdHVzX1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0Rlc2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NZWlfSnVuX0p1bF9BZ3NfU2VwX09rdF9Ob3ZfRGVzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzIDogJ01pbmdndV9TZW5pbl9TZWxhc2FfUmFidV9LYW1pc19KdW1hdF9TYWJ0dScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0IDogJ01pbl9TZW5fU2VsX1JhYl9LYW1fSnVtX1NhYicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICdNZ19Tbl9TbF9SYl9LbV9KbV9TYicuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgIExUIDogJ0hILm1tJyxcclxuICAgIExUUyA6ICdISC5tbS5zcycsXHJcbiAgICBMIDogJ0REL01NL1lZWVknLFxyXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nLFxyXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJ1xyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL3BhZ2l8c2lhbmd8c29yZXxtYWxhbS8sXHJcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XHJcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcclxuICAgICAgaG91ciA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVyaWRpZW0gPT09ICdwYWdpJykge1xyXG4gICAgICByZXR1cm4gaG91cjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzaWFuZycpIHtcclxuICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xyXG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NvcmUnIHx8IG1lcmlkaWVtID09PSAnbWFsYW0nKSB7XHJcbiAgICAgIHJldHVybiBob3VyICsgMTI7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXJzIDwgMTEpIHtcclxuICAgICAgcmV0dXJuICdwYWdpJztcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xyXG4gICAgICByZXR1cm4gJ3NpYW5nJztcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxOSkge1xyXG4gICAgICByZXR1cm4gJ3NvcmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdtYWxhbSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhciA6IHtcclxuICAgIHNhbWVEYXkgOiAnW0hhcmkgaW5pIHB1a3VsXSBMVCcsXHJcbiAgICBuZXh0RGF5IDogJ1tCZXNvayBwdWt1bF0gTFQnLFxyXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbcHVrdWxdIExUJyxcclxuICAgIGxhc3REYXkgOiAnW0tlbWFyaW4gcHVrdWxdIExUJyxcclxuICAgIGxhc3RXZWVrIDogJ2RkZGQgW2xhbHUgcHVrdWxdIExUJyxcclxuICAgIHNhbWVFbHNlIDogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnZGFsYW0gJXMnLFxyXG4gICAgcGFzdCA6ICclcyB5YW5nIGxhbHUnLFxyXG4gICAgcyA6ICdiZWJlcmFwYSBkZXRpaycsXHJcbiAgICBzcyA6ICclZCBkZXRpaycsXHJcbiAgICBtIDogJ3NlbWVuaXQnLFxyXG4gICAgbW0gOiAnJWQgbWVuaXQnLFxyXG4gICAgaCA6ICdzZWphbScsXHJcbiAgICBoaCA6ICclZCBqYW0nLFxyXG4gICAgZCA6ICdzZWhhcmknLFxyXG4gICAgZGQgOiAnJWQgaGFyaScsXHJcbiAgICBNIDogJ3NlYnVsYW4nLFxyXG4gICAgTU0gOiAnJWQgYnVsYW4nLFxyXG4gICAgeSA6ICdzZXRhaHVuJyxcclxuICAgIHl5IDogJyVkIHRhaHVuJ1xyXG4gIH0sXHJcbiAgd2VlayA6IHtcclxuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuXHJcbiJdfQ==