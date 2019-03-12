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
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
var /** @type {?} */ monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_'), /** @type {?} */
monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
var /** @type {?} */ monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
var /** @type {?} */ monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
export var /** @type {?} */ caLocale = {
    abbr: 'ca',
    months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
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
    monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
    monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
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
            return '[avui a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[dema a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ahir a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [' + ('passada la ' + (getHours(date) !== 1) ? 'passades les' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        ss: '%d segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        var /** @type {?} */ output = (num > 4) ? 'é' :
            (num === 1 || num === 3) ? 'r' :
                (num === 2) ? 'n' :
                    (num === 4) ? 't' : 'é';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2EuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2NhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU0zRCxxQkFBSSxjQUFjLEdBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUMzRixXQUFXLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTdFLHFCQUFJLFdBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gscUJBQUksV0FBVyxHQUFHLDJLQUEySyxDQUFDO0FBRTlMLE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0RyxXQUFXOzs7Ozs7SUFBWCxVQUFZLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtRQUNyRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVixNQUFNLENBQUMsY0FBYyxDQUFDO1NBQ3ZCO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMs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LEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNyQjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogQ2F0YWxhbiBbY2FdXHJcbi8vISBhdXRob3IgOiBYYXZpZXIgQXJiYXQgOiBodHRwczovL2dpdGh1Yi5jb20vWGF2aXNhdXJ1c1JleFxyXG5cclxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2dlbi5fZmViLl9tYXIuX2Fici5fbWFpLl9qdW4uX2p1bC5fYWdvLl9zZXQuX29jdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0ID0gJ2VuZV9mZWJfbWFyX2Ficl9tYWlfanVuX2p1bF9hZ29fc2V0X29jdF9ub3ZfZGVzJy5zcGxpdCgnXycpO1xyXG5cclxubGV0IG1vbnRoc1BhcnNlID0gWy9eZ2VuL2ksIC9eZmViL2ksIC9ebWFyL2ksIC9eYWJyL2ksIC9ebWFpL2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYWdvL2ksIC9ec2V0L2ksIC9eb2N0L2ksIC9ebm92L2ksIC9eZGVzL2ldO1xyXG5sZXQgbW9udGhzUmVnZXggPSAvXihnZW5lcnxmZWJyZXJ8bWFyw6d8YWJyaWx8bWFpZ3xqdW55fGp1bGlvbHxhZ29zdHxzZXRlbWJyZXxvY3R1YnJlfG5vdmVtYnJlfGRlc2VtYnJlfGdlblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG9jdFxcLj98bm92XFwuP3xkZXNcXC4/KS9pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdjYScsXHJcbiAgbW9udGhzOiAnZ2VuZXJfZmVicmVyX21hcsOnX2FicmlsX21haWdfanVueV9qdWxpb2xfYWdvc3Rfc2V0ZW1icmVfb2N0dWJyZV9ub3ZlbWJyZV9kZXNlbWJyZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgfSxcclxuICBtb250aHNSZWdleCxcclxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcclxuICBtb250aHNTdHJpY3RSZWdleDogL14oZ2VuZXJ8ZmVicmVyfG1hcsOnfGFicmlsfG1haWd8anVueXxqdWxpb2x8YWdvc3R8c2V0ZW1icmV8b2N0dWJyZXxub3ZlbWJyZXxkZXNlbWJyZSkvaSxcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihnZW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2V0XFwuP3xvY3RcXC4/fG5vdlxcLj98ZGVzXFwuPykvaSxcclxuICBtb250aHNQYXJzZSxcclxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG4gIHdlZWtkYXlzOiAnZGl1bWVuZ2VfZGlsbHVuc19kaW1hcnRzX2RpbWVjcmVzX2Rpam91c19kaXZlbmRyZXNfZGlzc2FidGUnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ2RpdS5fZGlsLl9kaW0uX2RpeC5fZGlqLl9kaXYuX2Rpcy4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdkZ19kbF9kdF9kY19kal9kdl9kcycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcclxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbYXZ1aSBhICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbZGVtYSBhICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnZGRkZCBbYSAnICsgKCdsYScgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ2xlcycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW2FoaXIgYSAnICsgKCdsYScgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ2xlcycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tlbF0gZGRkZCBbJyArICgncGFzc2FkYSBsYSAnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdwYXNzYWRlcyBsZXMnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnZW4gJXMnLFxyXG4gICAgcGFzdDogJ2ZhICVzJyxcclxuICAgIHM6ICd1bnMgc2Vnb25zJyxcclxuICAgIHNzOiAnJWQgc2Vnb25zJyxcclxuICAgIG06ICd1biBtaW51dCcsXHJcbiAgICBtbTogJyVkIG1pbnV0cycsXHJcbiAgICBoOiAndW5hIGhvcmEnLFxyXG4gICAgaGg6ICclZCBob3JlcycsXHJcbiAgICBkOiAndW4gZGlhJyxcclxuICAgIGRkOiAnJWQgZGllcycsXHJcbiAgICBNOiAndW4gbWVzJyxcclxuICAgIE1NOiAnJWQgbWVzb3MnLFxyXG4gICAgeTogJ3VuIGFueScsXHJcbiAgICB5eTogJyVkIGFueXMnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXJ8b258ZXJ8cnR8w6kpLyxcclxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSAobnVtID4gNCkgPyAnw6knIDpcclxuICAgICAgICAobnVtID09PSAxIHx8IG51bSA9PT0gMykgPyAncicgOlxyXG4gICAgICAgICAgKG51bSA9PT0gMikgPyAnbicgOlxyXG4gICAgICAgICAgICAobnVtID09PSA0KSA/ICd0JyA6ICfDqSc7XHJcbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIl19