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
var /** @type {?} */ monthsShortDot = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */
monthsShort = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
var /** @type {?} */ monthsParse = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
var /** @type {?} */ monthsRegex = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
export var /** @type {?} */ glLocale = {
    abbr: 'gl',
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
    monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
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
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2dsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU0zRCxxQkFBSSxjQUFjLEdBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUMzRixXQUFXLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTdFLHFCQUFJLFdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gscUJBQUksV0FBVyxHQUFHLGdMQUFnTCxDQUFDO0FBRW5NLE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsd0ZBQXdGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMzRyxXQUFXOzs7Ozs7SUFBWCxVQUFZLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtRQUNyRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixNQUFNLENBQUMsY0FBYyxDQUFDO1NBQ3ZCO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMs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cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogR2FsaWNpYW4gW2dsXVxyXG4vLyEgYXV0aG9yIDogRGFyw61vIEJlaXLDsyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlub2JyYXZvXHJcblxyXG5sZXQgbW9udGhzU2hvcnREb3QgPSAneGFuLl9mZWIuX21hci5fYWJyLl9tYWkuX3h1w7EuX3h1bC5fYWdvLl9zZXQuX291dC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0ID0gJ3hhbl9mZWJfbWFyX2Ficl9tYWlfeHXDsV94dWxfYWdvX3NldF9vdXRfbm92X2RlYycuc3BsaXQoJ18nKTtcclxuXHJcbmxldCBtb250aHNQYXJzZSA9IFsvXnhhbi9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1haS9pLCAvXnh1w7EvaSwgL154dWwvaSwgL15hZ28vaSwgL15zZXQvaSwgL15vdXQvaSwgL15ub3YvaSwgL15kZWMvaV07XHJcbmxldCBtb250aHNSZWdleCA9IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcOxb3x4dWxsb3xhZ29zdG98c2V0ZW1icm98b3V0dWJyb3xub3ZlbWJyb3xkZWNlbWJyb3x4YW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98eHXDsVxcLj98eHVsXFwuP3xhZ29cXC4/fHNldFxcLj98b3V0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XHJcblxyXG5leHBvcnQgY29uc3QgZ2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2dsJyxcclxuICBtb250aHM6ICd4YW5laXJvX2ZlYnJlaXJvX21hcnpvX2FicmlsX21haW9feHXDsW9feHVsbG9fYWdvc3RvX3NldGVtYnJvX291dHVicm9fbm92ZW1icm9fZGVjZW1icm8nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gIH0sXHJcbiAgbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcOxb3x4dWxsb3xhZ29zdG98c2V0ZW1icm98b3V0dWJyb3xub3ZlbWJyb3xkZWNlbWJybykvaSxcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXih4YW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98eHXDsVxcLj98eHVsXFwuP3xhZ29cXC4/fHNldFxcLj98b3V0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXHJcbiAgbW9udGhzUGFyc2UsXHJcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuc19tYXJ0ZXNfbcOpcmNvcmVzX3hvdmVzX3ZlbnJlc19zw6FiYWRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tw6lyLl94b3YuX3Zlbi5fc8OhYi4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tw6lfeG9fdmVfc8OhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tob3hlIMOhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1ttYcOxYW4gw6EnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ2RkZGQgW8OhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tvbnRlIMOhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbb10gZGRkZCBbcGFzYWRvIMOhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnZW4gJXMnLFxyXG4gICAgcGFzdDogJ2ZhaSAlcycsXHJcbiAgICBzOiAndW5zIHNlZ3VuZG9zJyxcclxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxyXG4gICAgaDogJ3VuaGEgaG9yYScsXHJcbiAgICBoaDogJyVkIGhvcmFzJyxcclxuICAgIGQ6ICd1biBkw61hJyxcclxuICAgIGRkOiAnJWQgZMOtYXMnLFxyXG4gICAgTTogJ3VuIG1lcycsXHJcbiAgICBNTTogJyVkIG1lc2VzJyxcclxuICAgIHk6ICd1biBhbm8nLFxyXG4gICAgeXk6ICclZCBhbm9zJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9wrovLFxyXG4gIG9yZGluYWw6ICclZMK6JyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=