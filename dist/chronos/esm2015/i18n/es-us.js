/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getHours, getMonth } from '../utils/date-getters';
//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
let /** @type {?} */ monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
let /** @type {?} */ monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
export const /** @type {?} */ esUsLocale = {
    abbr: 'es-us',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        else {
            return monthsShortDot[getMonth(date, isUTC)];
        }
    },
    monthsParseExact: true,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM [de] D [de] YYYY',
        LLL: 'MMMM [de] D [de] YYYY h:mm A',
        LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
    },
    calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMtdXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2VzLXVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU0zRCxxQkFBSSxjQUFjLEdBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlGLHFCQUFJLFdBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFL0UsTUFBTSxDQUFDLHVCQUFNLFVBQVUsR0FBZTtJQUNwQyxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSwwRkFBMEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7Ozs7O0lBQzdHLFdBQVcsQ0FBQyxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7UUFDckQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxDQUFDLGNBQWMsQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDOUM7S0FDRjtJQUNELGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLHNEQUFzRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0UsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsUUFBUTtRQUNaLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixHQUFHLEVBQUUsOEJBQThCO1FBQ25DLElBQUksRUFBRSxvQ0FBb0M7S0FDM0M7SUFDRCxRQUFRLEVBQUU7Ozs7O1FBQ1IsT0FBTyxDQUFDLElBQVU7WUFDaEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNuRTs7Ozs7UUFDRCxPQUFPLENBQUMsSUFBVTtZQUNoQixNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ3RFOzs7OztRQUNELFFBQVEsQ0FBQyxJQUFVO1lBQ2pCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDcEU7Ozs7O1FBQ0QsT0FBTyxDQUFDLElBQVU7WUFDaEIsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNwRTs7Ozs7UUFDRCxRQUFRLENBQUMsSUFBVTtZQUNqQixNQUFNLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDaEY7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxlQUFlO1FBQ2xCLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogU3BhbmlzaCAoVW5pdGVkIFN0YXRlcykgW2VzLXVzXVxyXG4vLyEgYXV0aG9yIDogYnVzdHRhIDogaHR0cHM6Ly9naXRodWIuY29tL2J1c3R0YVxyXG5cclxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2VuZS5fZmViLl9tYXIuX2Fici5fbWF5Ll9qdW4uX2p1bC5fYWdvLl9zZXAuX29jdC5fbm92Ll9kaWMuJy5zcGxpdCgnXycpO1xyXG5sZXQgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZXNVc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZXMtdXMnLFxyXG4gIG1vbnRoczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XHJcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDqXJjb2xlc19qdWV2ZXNfdmllcm5lc19zw6FiYWRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacOpLl9qdWUuX3ZpZS5fc8OhYi4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9taV9qdV92aV9zw6EnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ2g6bW0gQScsXHJcbiAgICBMVFM6ICdoOm1tOnNzIEEnLFxyXG4gICAgTDogJ01NL0REL1lZWVknLFxyXG4gICAgTEw6ICdNTU1NIFtkZV0gRCBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnTU1NTSBbZGVdIEQgW2RlXSBZWVlZIGg6bW0gQScsXHJcbiAgICBMTExMOiAnZGRkZCwgTU1NTSBbZGVdIEQgW2RlXSBZWVlZIGg6bW0gQSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1ttYcOxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VuICVzJyxcclxuICAgIHBhc3Q6ICdoYWNlICVzJyxcclxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcclxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxyXG4gICAgaDogJ3VuYSBob3JhJyxcclxuICAgIGhoOiAnJWQgaG9yYXMnLFxyXG4gICAgZDogJ3VuIGTDrWEnLFxyXG4gICAgZGQ6ICclZCBkw61hcycsXHJcbiAgICBNOiAndW4gbWVzJyxcclxuICAgIE1NOiAnJWQgbWVzZXMnLFxyXG4gICAgeTogJ3VuIGHDsW8nLFxyXG4gICAgeXk6ICclZCBhw7FvcydcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcK6LyxcclxuICBvcmRpbmFsOiAnJWTCuicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIl19