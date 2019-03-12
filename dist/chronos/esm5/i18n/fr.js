/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
export var /** @type {?} */ frLocale = {
    abbr: 'fr',
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        var /** @type {?} */ num = Number(_num);
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return num + (num === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return num + (num === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return num + (num === 1 ? 're' : 'e');
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2ZyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxzRkFBc0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pHLFdBQVcsRUFBRSxnRUFBZ0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLHFEQUFxRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUUsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx3QkFBd0I7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRCxzQkFBc0IsRUFBRSxjQUFjO0lBQ3RDLE9BQU87Ozs7O0lBQVAsVUFBUSxJQUFZLEVBQUUsTUFBYztRQUNsQyxxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7WUFJZixLQUFLLEdBQUc7Z0JBQ04sTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBR3ZDLFFBQVE7WUFDUixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLLENBQUM7WUFDWCxLQUFLLEdBQUc7Z0JBQ04sTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBR3hDLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEZyZW5jaCBbZnJdXHJcbi8vISBhdXRob3IgOiBKb2huIEZpc2NoZXIgOiBodHRwczovL2dpdGh1Yi5jb20vamZyb2ZmaWNlXHJcblxyXG5leHBvcnQgY29uc3QgZnJMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2ZyJyxcclxuICBtb250aHM6ICdqYW52aWVyX2bDqXZyaWVyX21hcnNfYXZyaWxfbWFpX2p1aW5fanVpbGxldF9hb8O7dF9zZXB0ZW1icmVfb2N0b2JyZV9ub3ZlbWJyZV9kw6ljZW1icmUnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdqYW52Ll9mw6l2ci5fbWFyc19hdnIuX21haV9qdWluX2p1aWwuX2Fvw7t0X3NlcHQuX29jdC5fbm92Ll9kw6ljLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnZGltYW5jaGVfbHVuZGlfbWFyZGlfbWVyY3JlZGlfamV1ZGlfdmVuZHJlZGlfc2FtZWRpJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkaW0uX2x1bi5fbWFyLl9tZXIuX2pldS5fdmVuLl9zYW0uJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnZGlfbHVfbWFfbWVfamVfdmVfc2EnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tBdWpvdXJk4oCZaHVpIMOgXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW0RlbWFpbiDDoF0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDoF0gTFQnLFxyXG4gICAgbGFzdERheTogJ1tIaWVyIMOgXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ2RkZGQgW2Rlcm5pZXIgw6BdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnZGFucyAlcycsXHJcbiAgICBwYXN0OiAnaWwgeSBhICVzJyxcclxuICAgIHM6ICdxdWVscXVlcyBzZWNvbmRlcycsXHJcbiAgICBzczogJyVkIHNlY29uZGVzJyxcclxuICAgIG06ICd1bmUgbWludXRlJyxcclxuICAgIG1tOiAnJWQgbWludXRlcycsXHJcbiAgICBoOiAndW5lIGhldXJlJyxcclxuICAgIGhoOiAnJWQgaGV1cmVzJyxcclxuICAgIGQ6ICd1biBqb3VyJyxcclxuICAgIGRkOiAnJWQgam91cnMnLFxyXG4gICAgTTogJ3VuIG1vaXMnLFxyXG4gICAgTU06ICclZCBtb2lzJyxcclxuICAgIHk6ICd1biBhbicsXHJcbiAgICB5eTogJyVkIGFucydcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlcnwpLyxcclxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgLy8gVE9ETzogUmV0dXJuICdlJyB3aGVuIGRheSBvZiBtb250aCA+IDEuIE1vdmUgdGhpcyBjYXNlIGluc2lkZVxyXG4gICAgICAvLyBibG9jayBmb3IgbWFzY3VsaW5lIHdvcmRzIGJlbG93LlxyXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzMzNzVcclxuICAgICAgY2FzZSAnRCc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAnZXInIDogJycpO1xyXG5cclxuICAgICAgLy8gV29yZHMgd2l0aCBtYXNjdWxpbmUgZ3JhbW1hdGljYWwgZ2VuZGVyOiBtb2lzLCB0cmltZXN0cmUsIGpvdXJcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgIGNhc2UgJ1EnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICBjYXNlICdkJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdlcicgOiAnZScpO1xyXG5cclxuICAgICAgLy8gV29yZHMgd2l0aCBmZW1pbmluZSBncmFtbWF0aWNhbCBnZW5kZXI6IHNlbWFpbmVcclxuICAgICAgY2FzZSAndyc6XHJcbiAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ3JlJyA6ICdlJyk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG5cclxuIl19