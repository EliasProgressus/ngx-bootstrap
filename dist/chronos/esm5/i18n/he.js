/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
export var /** @type {?} */ heLocale = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        dd: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        MM: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        yy: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שנתיים';
            }
            else if (num % 10 === 0 && num !== 10) {
                return num + ' שנה';
            }
            return num + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        }
        else if (hour < 10) {
            return 'בבוקר';
        }
        else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        }
        else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        }
        else {
            return 'בערב';
        }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLHlFQUF5RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUYsV0FBVyxFQUFFLDJEQUEyRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkYsUUFBUSxFQUFFLHNDQUFzQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0QsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEQsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxnQkFBZ0I7UUFDcEIsR0FBRyxFQUFFLHNCQUFzQjtRQUMzQixJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLFlBQVk7UUFDckIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFOzs7O1FBQUYsVUFBRyxHQUFXO1lBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNqQjtZQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFOzs7O1FBQUYsVUFBRyxHQUFXO1lBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNqQjtZQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFOzs7O1FBQUYsVUFBRyxHQUFXO1lBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNsQjtZQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO1FBQ0QsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFOzs7O1FBQUYsVUFBRyxHQUFXO1lBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNqQjtZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7YUFDckI7WUFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsYUFBYSxFQUFFLCtEQUErRDtJQUM5RSxJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEQ7SUFDRCxRQUFROzs7Ozs7Y0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ3JCO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDaEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7U0FDNUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7U0FDM0M7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDZjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEhlYnJldyBbaGVdXHJcbi8vISBhdXRob3IgOiBUb21lciBDb2hlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS90b21lclxyXG4vLyEgYXV0aG9yIDogTW9zaGUgU2ltYW50b3YgOiBodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxvcG1lbnRJTFxyXG4vLyEgYXV0aG9yIDogVGFsIEF0ZXIgOiBodHRwczovL2dpdGh1Yi5jb20vVGFsQXRlclxyXG5cclxuZXhwb3J0IGNvbnN0IGhlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdoZScsXHJcbiAgbW9udGhzOiAn15nXoNeV15DXqF/XpNeR16jXldeQ16hf157XqNelX9eQ16TXqNeZ15xf157XkNeZX9eZ15XXoNeZX9eZ15XXnNeZX9eQ15XXkteV16HXmF/Xodek15jXnteR16hf15DXlden15jXldeR16hf16DXldeR157XkdeoX9eT16bXnteR16gnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICfXmdeg15XXs1/XpNeR16jXs1/Xnteo16Vf15DXpNeo17Nf157XkNeZX9eZ15XXoNeZX9eZ15XXnNeZX9eQ15XXktezX9eh16TXmNezX9eQ15XXp9ezX9eg15XXkdezX9eT16bXntezJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAn16jXkNep15XXn1/Xqdeg15lf16nXnNeZ16nXmV/XqNeR15nXoteZX9eX157Xmdep15lf16nXmdep15lf16nXkdeqJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfXkNezX9eR17Nf15LXs1/Xk9ezX9eU17Nf15XXs1/XqdezJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAn15Bf15Ff15Jf15Nf15Rf15Vf16knLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFvXkV1NTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBb15FdTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIFvXkV1NTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgbDogJ0QvTS9ZWVlZJyxcclxuICAgIGxsOiAnRCBNTU0gWVlZWScsXHJcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcclxuICAgIGxsbGw6ICdkZGQsIEQgTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vXlNeZ15XXnSDXkda+XUxUJyxcclxuICAgIG5leHREYXk6ICdb157Xl9eoINeR1r5dTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvXkdep16LXlF0gTFQnLFxyXG4gICAgbGFzdERheTogJ1vXkNeq157XldecINeR1r5dTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdb15HXmdeV151dIGRkZGQgW9eU15DXl9eo15XXnyDXkdep16LXlF0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICfXkdei15XXkyAlcycsXHJcbiAgICBwYXN0OiAn15zXpNeg15kgJXMnLFxyXG4gICAgczogJ9ee16HXpNeoINep16DXmdeV16onLFxyXG4gICAgc3M6ICclZCDXqdeg15nXldeqJyxcclxuICAgIG06ICfXk9en15QnLFxyXG4gICAgbW06ICclZCDXk9en15XXqicsXHJcbiAgICBoOiAn16nXoteUJyxcclxuICAgIGhoKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgaWYgKG51bSA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAn16nXoteq15nXmdedJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVtICsgJyDXqdei15XXqic7XHJcbiAgICB9LFxyXG4gICAgZDogJ9eZ15XXnScsXHJcbiAgICBkZChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGlmIChudW0gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ9eZ15XXnteZ15nXnSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bSArICcg15nXnteZ150nO1xyXG4gICAgfSxcclxuICAgIE06ICfXl9eV15PXqScsXHJcbiAgICBNTShudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGlmIChudW0gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ9eX15XXk9ep15nXmdedJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVtICsgJyDXl9eV15PXqdeZ150nO1xyXG4gICAgfSxcclxuICAgIHk6ICfXqdeg15QnLFxyXG4gICAgeXkobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICBpZiAobnVtID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuICfXqdeg16rXmdeZ150nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bSAlIDEwID09PSAwICYmIG51bSAhPT0gMTApIHtcclxuICAgICAgICByZXR1cm4gbnVtICsgJyDXqdeg15QnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudW0gKyAnINep16DXmdedJztcclxuICAgIH1cclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/XkNeX15RcItemfNec16TXoNeUXCLXpnzXkNeX16jXmSDXlNem15TXqNeZ15nXnXzXnNek16DXmSDXlNem15TXqNeZ15nXnXzXnNek16DXldeqINeR15XXp9eofNeR15HXlden16h815HXoteo15EvaSxcclxuICBpc1BNKGlucHV0KSB7XHJcbiAgICByZXR1cm4gL14o15DXl9eUXCLXpnzXkNeX16jXmSDXlNem15TXqNeZ15nXnXzXkdei16jXkSkkLy50ZXN0KGlucHV0KTtcclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCA1KSB7XHJcbiAgICAgIHJldHVybiAn15zXpNeg15XXqiDXkdeV16fXqCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xyXG4gICAgICByZXR1cm4gJ9eR15HXlden16gnO1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAn15zXpNeg15RcItemJyA6ICfXnNek16DXmSDXlNem15TXqNeZ15nXnSc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxOCkge1xyXG4gICAgICByZXR1cm4gaXNMb3dlciA/ICfXkNeX15RcItemJyA6ICfXkNeX16jXmSDXlNem15TXqNeZ15nXnSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ9eR16LXqNeRJztcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==