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
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
export var /** @type {?} */ itLocale = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQU9wRCxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLCtGQUErRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEgsV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekUsUUFBUSxFQUFFLDBEQUEwRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0UsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFROzs7O2tCQUFDLElBQVU7WUFDakIsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxDQUFDO29CQUNKLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQztnQkFDdEM7b0JBQ0UsTUFBTSxDQUFDLDRCQUE0QixDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTTs7OztRQUFOLFVBQU8sR0FBVztZQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUMxRTtRQUNELElBQUksRUFBRSxPQUFPO1FBQ2IsQ0FBQyxFQUFFLGdCQUFnQjtRQUNuQixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBJdGFsaWFuIFtpdF1cclxuLy8hIGF1dGhvciA6IExvcmVuem8gOiBodHRwczovL2dpdGh1Yi5jb20vYWxpZW1cclxuLy8hIGF1dGhvcjogTWF0dGlhIExhcmVudGlzOiBodHRwczovL2dpdGh1Yi5jb20vbm9zdGFsZ2lhelxyXG5cclxuZXhwb3J0IGNvbnN0IGl0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdpdCcsXHJcbiAgbW9udGhzOiAnZ2VubmFpb19mZWJicmFpb19tYXJ6b19hcHJpbGVfbWFnZ2lvX2dpdWdub19sdWdsaW9fYWdvc3RvX3NldHRlbWJyZV9vdHRvYnJlX25vdmVtYnJlX2RpY2VtYnJlJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnZ2VuX2ZlYl9tYXJfYXByX21hZ19naXVfbHVnX2Fnb19zZXRfb3R0X25vdl9kaWMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICdkb21lbmljYV9sdW5lZMOsX21hcnRlZMOsX21lcmNvbGVkw6xfZ2lvdmVkw6xfdmVuZXJkw6xfc2FiYXRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb21fbHVuX21hcl9tZXJfZ2lvX3Zlbl9zYWInLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tZV9naV92ZV9zYScuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbT2dnaSBhbGxlXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW0RvbWFuaSBhbGxlXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW2FsbGVdIExUJyxcclxuICAgIGxhc3REYXk6ICdbSWVyaSBhbGxlXSBMVCcsXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgcmV0dXJuICdbbGEgc2NvcnNhXSBkZGRkIFthbGxlXSBMVCc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiAnW2xvIHNjb3Jzb10gZGRkZCBbYWxsZV0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmUobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKCgvXlswLTldLiskLykudGVzdChudW0udG9TdHJpbmcoMTApKSA/ICd0cmEnIDogJ2luJykgKyAnICcgKyBudW07XHJcbiAgICB9LFxyXG4gICAgcGFzdDogJyVzIGZhJyxcclxuICAgIHM6ICdhbGN1bmkgc2Vjb25kaScsXHJcbiAgICBzczogJyVkIHNlY29uZGknLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0aScsXHJcbiAgICBoOiAndW5cXCdvcmEnLFxyXG4gICAgaGg6ICclZCBvcmUnLFxyXG4gICAgZDogJ3VuIGdpb3JubycsXHJcbiAgICBkZDogJyVkIGdpb3JuaScsXHJcbiAgICBNOiAndW4gbWVzZScsXHJcbiAgICBNTTogJyVkIG1lc2knLFxyXG4gICAgeTogJ3VuIGFubm8nLFxyXG4gICAgeXk6ICclZCBhbm5pJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxyXG4gIG9yZGluYWw6ICclZMK6JyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=