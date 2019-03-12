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
//! locale : Galician [gl]
//! author : Darío Beiró : https://github.com/quinobravo
let /** @type {?} */ monthsShortDot = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */
monthsShort = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
let /** @type {?} */ monthsParse = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
let /** @type {?} */ monthsRegex = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
export const /** @type {?} */ glLocale = {
    abbr: 'gl',
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
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
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
    monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay(date) {
            return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextDay(date) {
            return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek(date) {
            return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastDay(date) {
            return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek(date) {
            return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fai %s',
        s: 'uns segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'unha hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2dsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU0zRCxxQkFBSSxjQUFjLEdBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUMzRixXQUFXLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTdFLHFCQUFJLFdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gscUJBQUksV0FBVyxHQUFHLGdMQUFnTCxDQUFDO0FBRW5NLE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsd0ZBQXdGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7OztJQUMzRyxXQUFXLENBQUMsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDdkI7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsV0FBVztJQUNYLGdCQUFnQixFQUFFLFdBQVc7SUFDN0IsaUJBQWlCLEVBQUUsNEZBQTRGO0lBQy9HLHNCQUFzQixFQUFFLHlGQUF5RjtJQUNqSCxXQUFXO0lBQ1gsZUFBZSxFQUFFLFdBQVc7SUFDNUIsZ0JBQWdCLEVBQUUsV0FBVztJQUM3QixRQUFRLEVBQUUsa0RBQWtELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RSxhQUFhLEVBQUUsb0NBQW9DLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsR0FBRyxFQUFFLDRCQUE0QjtRQUNqQyxJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsUUFBUSxFQUFFOzs7OztRQUNSLE9BQU8sQ0FBQyxJQUFVO1lBQ2hCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDakU7Ozs7O1FBQ0QsT0FBTyxDQUFDLElBQVU7WUFDaEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNsRTs7Ozs7UUFDRCxRQUFRLENBQUMsSUFBVTtZQUNqQixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2pFOzs7OztRQUNELE9BQU8sQ0FBQyxJQUFVO1lBQ2hCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDakU7Ozs7O1FBQ0QsUUFBUSxDQUFDLElBQVU7WUFDakIsTUFBTSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQzVFO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxDQUFDLEVBQUUsY0FBYztRQUNqQixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEdhbGljaWFuIFtnbF1cclxuLy8hIGF1dGhvciA6IERhcsOtbyBCZWlyw7MgOiBodHRwczovL2dpdGh1Yi5jb20vcXVpbm9icmF2b1xyXG5cclxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ3hhbi5fZmViLl9tYXIuX2Fici5fbWFpLl94dcOxLl94dWwuX2Fnby5fc2V0Ll9vdXQuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA9ICd4YW5fZmViX21hcl9hYnJfbWFpX3h1w7FfeHVsX2Fnb19zZXRfb3V0X25vdl9kZWMnLnNwbGl0KCdfJyk7XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL154YW4vaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYWkvaSwgL154dcOxL2ksIC9eeHVsL2ksIC9eYWdvL2ksIC9ec2V0L2ksIC9eb3V0L2ksIC9ebm92L2ksIC9eZGVjL2ldO1xyXG5sZXQgbW9udGhzUmVnZXggPSAvXih4YW5laXJvfGZlYnJlaXJvfG1hcnpvfGFicmlsfG1haW98eHXDsW98eHVsbG98YWdvc3RvfHNldGVtYnJvfG91dHVicm98bm92ZW1icm98ZGVjZW1icm98eGFuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fHh1w7FcXC4/fHh1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG91dFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdnbCcsXHJcbiAgbW9udGhzOiAneGFuZWlyb19mZWJyZWlyb19tYXJ6b19hYnJpbF9tYWlvX3h1w7FvX3h1bGxvX2Fnb3N0b19zZXRlbWJyb19vdXR1YnJvX25vdmVtYnJvX2RlY2VtYnJvJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICB9LFxyXG4gIG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXih4YW5laXJvfGZlYnJlaXJvfG1hcnpvfGFicmlsfG1haW98eHXDsW98eHVsbG98YWdvc3RvfHNldGVtYnJvfG91dHVicm98bm92ZW1icm98ZGVjZW1icm8pL2ksXHJcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oeGFuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fHh1w7FcXC4/fHh1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG91dFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bnNfbWFydGVzX23DqXJjb3Jlc194b3Zlc192ZW5yZXNfc8OhYmFkbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbcOpci5feG92Ll92ZW4uX3PDoWIuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbcOpX3hvX3ZlX3PDoScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcclxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbaG94ZSDDoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbbWHDsWFuIMOhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdkZGRkIFvDoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbb250ZSDDoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW29dIGRkZGQgW3Bhc2FkbyDDoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VuICVzJyxcclxuICAgIHBhc3Q6ICdmYWkgJXMnLFxyXG4gICAgczogJ3VucyBzZWd1bmRvcycsXHJcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcclxuICAgIG06ICd1biBtaW51dG8nLFxyXG4gICAgbW06ICclZCBtaW51dG9zJyxcclxuICAgIGg6ICd1bmhhIGhvcmEnLFxyXG4gICAgaGg6ICclZCBob3JhcycsXHJcbiAgICBkOiAndW4gZMOtYScsXHJcbiAgICBkZDogJyVkIGTDrWFzJyxcclxuICAgIE06ICd1biBtZXMnLFxyXG4gICAgTU06ICclZCBtZXNlcycsXHJcbiAgICB5OiAndW4gYW5vJyxcclxuICAgIHl5OiAnJWQgYW5vcydcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcK6LyxcclxuICBvcmRpbmFsOiAnJWTCuicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIl19