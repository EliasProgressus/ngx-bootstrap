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
export var /** @type {?} */ idLocale = {
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
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
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
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLHdGQUF3RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUcsV0FBVyxFQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUUsUUFBUSxFQUFHLDRDQUE0QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEUsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0MsY0FBYyxFQUFHO1FBQ2YsRUFBRSxFQUFHLE9BQU87UUFDWixHQUFHLEVBQUcsVUFBVTtRQUNoQixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsYUFBYTtRQUNsQixHQUFHLEVBQUcsMkJBQTJCO1FBQ2pDLElBQUksRUFBRyxpQ0FBaUM7S0FDekM7SUFDRCxhQUFhLEVBQUUsdUJBQXVCO0lBQ3RDLFlBQVk7Ozs7O2NBQUMsSUFBSSxFQUFFLFFBQVE7UUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDdEM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtLQUNGO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDaEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUNmO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2hCO0tBQ0Y7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcscUJBQXFCO1FBQy9CLE9BQU8sRUFBRyxrQkFBa0I7UUFDNUIsUUFBUSxFQUFHLGlCQUFpQjtRQUM1QixPQUFPLEVBQUcsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRyxzQkFBc0I7UUFDakMsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxVQUFVO1FBQ25CLElBQUksRUFBRyxjQUFjO1FBQ3JCLENBQUMsRUFBRyxnQkFBZ0I7UUFDcEIsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLE9BQU87UUFDWCxFQUFFLEVBQUcsUUFBUTtRQUNiLENBQUMsRUFBRyxRQUFRO1FBQ1osRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO1FBQ2YsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsVUFBVTtLQUNoQjtJQUNELElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEluZG9uZXNpYSBbaWRdXHJcbi8vISBhdXRob3IgOiBSb215IEt1c3VtYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ya3VzdW1hXHJcbi8vISByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2Jsb2IvZGV2ZWxvcC9sb2NhbGUvaWQuanNcclxuXHJcbmV4cG9ydCBjb25zdCBpZExvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaWQnLFxyXG4gIG1vbnRocyA6ICdKYW51YXJpX0ZlYnJ1YXJpX01hcmV0X0FwcmlsX01laV9KdW5pX0p1bGlfQWd1c3R1c19TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWVpX0p1bl9KdWxfQWdzX1NlcF9Pa3RfTm92X0Rlcycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6ICdNaW5nZ3VfU2VuaW5fU2VsYXNhX1JhYnVfS2FtaXNfSnVtYXRfU2FidHUnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICdNaW5fU2VuX1NlbF9SYWJfS2FtX0p1bV9TYWInLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAnTWdfU25fU2xfUmJfS21fSm1fU2InLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICBMVCA6ICdISC5tbScsXHJcbiAgICBMVFMgOiAnSEgubW0uc3MnLFxyXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJyxcclxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC9wYWdpfHNpYW5nfHNvcmV8bWFsYW0vLFxyXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xyXG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XHJcbiAgICAgIGhvdXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lcmlkaWVtID09PSAncGFnaScpIHtcclxuICAgICAgcmV0dXJuIGhvdXI7XHJcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc2lhbmcnKSB7XHJcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzb3JlJyB8fCBtZXJpZGllbSA9PT0gJ21hbGFtJykge1xyXG4gICAgICByZXR1cm4gaG91ciArIDEyO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VycyA8IDExKSB7XHJcbiAgICAgIHJldHVybiAncGFnaSc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTUpIHtcclxuICAgICAgcmV0dXJuICdzaWFuZyc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTkpIHtcclxuICAgICAgcmV0dXJuICdzb3JlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbWFsYW0nO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICBzYW1lRGF5IDogJ1tIYXJpIGluaSBwdWt1bF0gTFQnLFxyXG4gICAgbmV4dERheSA6ICdbQmVzb2sgcHVrdWxdIExUJyxcclxuICAgIG5leHRXZWVrIDogJ2RkZGQgW3B1a3VsXSBMVCcsXHJcbiAgICBsYXN0RGF5IDogJ1tLZW1hcmluIHB1a3VsXSBMVCcsXHJcbiAgICBsYXN0V2VlayA6ICdkZGRkIFtsYWx1IHB1a3VsXSBMVCcsXHJcbiAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgZnV0dXJlIDogJ2RhbGFtICVzJyxcclxuICAgIHBhc3QgOiAnJXMgeWFuZyBsYWx1JyxcclxuICAgIHMgOiAnYmViZXJhcGEgZGV0aWsnLFxyXG4gICAgc3MgOiAnJWQgZGV0aWsnLFxyXG4gICAgbSA6ICdzZW1lbml0JyxcclxuICAgIG1tIDogJyVkIG1lbml0JyxcclxuICAgIGggOiAnc2VqYW0nLFxyXG4gICAgaGggOiAnJWQgamFtJyxcclxuICAgIGQgOiAnc2VoYXJpJyxcclxuICAgIGRkIDogJyVkIGhhcmknLFxyXG4gICAgTSA6ICdzZWJ1bGFuJyxcclxuICAgIE1NIDogJyVkIGJ1bGFuJyxcclxuICAgIHkgOiAnc2V0YWh1bicsXHJcbiAgICB5eSA6ICclZCB0YWh1bidcclxuICB9LFxyXG4gIHdlZWsgOiB7XHJcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iXX0=