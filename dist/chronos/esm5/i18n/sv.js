/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
export var /** @type {?} */ svLocale = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        var /** @type {?} */ b = num % 10, /** @type {?} */
        output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3N2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSx1RkFBdUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFHLFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pFLFFBQVEsRUFBRSxtREFBbUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSx5QkFBeUI7UUFDOUIsSUFBSSxFQUFFLDhCQUE4QjtRQUNwQyxHQUFHLEVBQUUsa0JBQWtCO1FBQ3ZCLElBQUksRUFBRSxzQkFBc0I7S0FDN0I7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsV0FBVztRQUNwQixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsV0FBVztRQUNwQixRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxjQUFjO1FBQ3BCLENBQUMsRUFBRSxnQkFBZ0I7UUFDbkIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsT0FBTztLQUNaO0lBQ0Qsc0JBQXNCLEVBQUUsY0FBYztJQUN0QyxPQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIscUJBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFO1FBQ2QsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDckI7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFN3ZWRpc2ggW3N2XVxyXG4vLyEgYXV0aG9yIDogSmVucyBBbG0gOiBodHRwczovL2dpdGh1Yi5jb20vdWxtdXNcclxuXHJcbmV4cG9ydCBjb25zdCBzdkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnc3YnLFxyXG4gIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFyc19hcHJpbF9tYWpfanVuaV9qdWxpX2F1Z3VzdGlfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdqYW5fZmViX21hcl9hcHJfbWFqX2p1bl9qdWxfYXVnX3NlcF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ3PDtm5kYWdfbcOlbmRhZ190aXNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDtnJkYWcnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ3PDtm5fbcOlbl90aXNfb25zX3Rvcl9mcmVfbMO2cicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ3PDtl9tw6VfdGlfb25fdG9fZnJfbMO2Jy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdZWVlZLU1NLUREJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nLFxyXG4gICAgbGxsOiAnRCBNTU0gWVlZWSBISDptbScsXHJcbiAgICBsbGxsOiAnZGRkIEQgTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tJZGFnXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW0ltb3Jnb25dIExUJyxcclxuICAgIGxhc3REYXk6ICdbSWfDpXJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnW1DDpV0gZGRkZCBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1tJXSBkZGRkW3NdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnb20gJXMnLFxyXG4gICAgcGFzdDogJ2bDtnIgJXMgc2VkYW4nLFxyXG4gICAgczogJ27DpWdyYSBzZWt1bmRlcicsXHJcbiAgICBzczogJyVkIHNla3VuZGVyJyxcclxuICAgIG06ICdlbiBtaW51dCcsXHJcbiAgICBtbTogJyVkIG1pbnV0ZXInLFxyXG4gICAgaDogJ2VuIHRpbW1lJyxcclxuICAgIGhoOiAnJWQgdGltbWFyJyxcclxuICAgIGQ6ICdlbiBkYWcnLFxyXG4gICAgZGQ6ICclZCBkYWdhcicsXHJcbiAgICBNOiAnZW4gbcOlbmFkJyxcclxuICAgIE1NOiAnJWQgbcOlbmFkZXInLFxyXG4gICAgeTogJ2V0dCDDpXInLFxyXG4gICAgeXk6ICclZCDDpXInXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXxhKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgbGV0IGIgPSBudW0gJSAxMCxcclxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAnZScgOlxyXG4gICAgICAgIChiID09PSAxKSA/ICdhJyA6XHJcbiAgICAgICAgICAoYiA9PT0gMikgPyAnYScgOlxyXG4gICAgICAgICAgICAoYiA9PT0gMykgPyAnZScgOiAnZSc7XHJcbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIl19