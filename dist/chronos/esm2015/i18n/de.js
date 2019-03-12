/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    const /** @type {?} */ format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
export const /** @type {?} */ deLocale = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSw2QkFBNkIsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQzlGLHVCQUFNLE1BQU0sR0FBd0M7UUFDbEQsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUNwQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO1FBQ3BDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7UUFDL0IsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDO0tBQ3hDLENBQUM7SUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4RDtBQUVELE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsb0ZBQW9GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RyxXQUFXLEVBQUUsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xGLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGNBQWM7UUFDbEIsR0FBRyxFQUFFLG9CQUFvQjtRQUN6QixJQUFJLEVBQUUsMEJBQTBCO0tBQ2pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsR0FBRztRQUNiLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw4QkFBOEI7S0FDekM7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO1FBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7S0FDeEI7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEdlcm1hbiBbZGVdXHJcbi8vISBhdXRob3IgOiBsbHVjaHMgOiBodHRwczovL2dpdGh1Yi5jb20vbGx1Y2hzXHJcbi8vISBhdXRob3I6IE1lbmVsaW9uIEVsZW5zw7psZTogaHR0cHM6Ly9naXRodWIuY29tL09pcmVcclxuLy8hIGF1dGhvciA6IE1pa29sYWogRGFkZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL21pazAxYWpcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgY29uc3QgZm9ybWF0OiB7IFtrZXk6IHN0cmluZ106IFtzdHJpbmcsIHN0cmluZ10gfSA9IHtcclxuICAgICdtJzogWydlaW5lIE1pbnV0ZScsICdlaW5lciBNaW51dGUnXSxcclxuICAgICdoJzogWydlaW5lIFN0dW5kZScsICdlaW5lciBTdHVuZGUnXSxcclxuICAgICdkJzogWydlaW4gVGFnJywgJ2VpbmVtIFRhZyddLFxyXG4gICAgJ2RkJzogW251bSArICcgVGFnZScsIG51bSArICcgVGFnZW4nXSxcclxuICAgICdNJzogWydlaW4gTW9uYXQnLCAnZWluZW0gTW9uYXQnXSxcclxuICAgICdNTSc6IFtudW0gKyAnIE1vbmF0ZScsIG51bSArICcgTW9uYXRlbiddLFxyXG4gICAgJ3knOiBbJ2VpbiBKYWhyJywgJ2VpbmVtIEphaHInXSxcclxuICAgICd5eSc6IFtudW0gKyAnIEphaHJlJywgbnVtICsgJyBKYWhyZW4nXVxyXG4gIH07XHJcbiAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtYXRba2V5XVswXSA6IGZvcm1hdFtrZXldWzFdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2RlJyxcclxuICBtb250aHM6ICdKYW51YXJfRmVicnVhcl9Nw6Ryel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ0phbi5fRmViLl9Nw6Ryel9BcHIuX01haV9KdW5pX0p1bGlfQXVnLl9TZXAuX09rdC5fTm92Ll9EZXouJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgd2Vla2RheXM6ICdTb25udGFnX01vbnRhZ19EaWVuc3RhZ19NaXR0d29jaF9Eb25uZXJzdGFnX0ZyZWl0YWdfU2Ftc3RhZycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnU28uX01vLl9EaS5fTWkuX0RvLl9Gci5fU2EuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnU29fTW9fRGlfTWlfRG9fRnJfU2EnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbaGV1dGUgdW1dIExUIFtVaHJdJyxcclxuICAgIHNhbWVFbHNlOiAnTCcsXHJcbiAgICBuZXh0RGF5OiAnW21vcmdlbiB1bV0gTFQgW1Vocl0nLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFt1bV0gTFQgW1Vocl0nLFxyXG4gICAgbGFzdERheTogJ1tnZXN0ZXJuIHVtXSBMVCBbVWhyXScsXHJcbiAgICBsYXN0V2VlazogJ1tsZXR6dGVuXSBkZGRkIFt1bV0gTFQgW1Vocl0nXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2luICVzJyxcclxuICAgIHBhc3Q6ICd2b3IgJXMnLFxyXG4gICAgczogJ2VpbiBwYWFyIFNla3VuZGVuJyxcclxuICAgIHNzOiAnJWQgU2VrdW5kZW4nLFxyXG4gICAgbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIG1tOiAnJWQgTWludXRlbicsXHJcbiAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgaGg6ICclZCBTdHVuZGVuJyxcclxuICAgIGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBNTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=