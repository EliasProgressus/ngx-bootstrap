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
export const /** @type {?} */ heLocale = {
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
        /**
         * @param {?} num
         * @return {?}
         */
        hh(num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        /**
         * @param {?} num
         * @return {?}
         */
        dd(num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        /**
         * @param {?} num
         * @return {?}
         */
        MM(num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        /**
         * @param {?} num
         * @return {?}
         */
        yy(num) {
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
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLHlFQUF5RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUYsV0FBVyxFQUFFLDJEQUEyRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkYsUUFBUSxFQUFFLHNDQUFzQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0QsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEQsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxnQkFBZ0I7UUFDcEIsR0FBRyxFQUFFLHNCQUFzQjtRQUMzQixJQUFJLEVBQUUsNEJBQTRCO1FBQ2xDLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsdUJBQXVCO0tBQzlCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLFlBQVk7UUFDckIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLEtBQUs7Ozs7O1FBQ1IsRUFBRSxDQUFDLEdBQVc7WUFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2pCO1lBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDdEI7UUFDRCxDQUFDLEVBQUUsS0FBSzs7Ozs7UUFDUixFQUFFLENBQUMsR0FBVztZQUNaLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDakI7WUFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUNELENBQUMsRUFBRSxNQUFNOzs7OztRQUNULEVBQUUsQ0FBQyxHQUFXO1lBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNsQjtZQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO1FBQ0QsQ0FBQyxFQUFFLEtBQUs7Ozs7O1FBQ1IsRUFBRSxDQUFDLEdBQVc7WUFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2pCO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUNyQjtZQUNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO0tBQ0Y7SUFDRCxhQUFhLEVBQUUsK0RBQStEOzs7OztJQUM5RSxJQUFJLENBQUMsS0FBSztRQUNSLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEQ7Ozs7Ozs7SUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNyQjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2hCO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQzVDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1NBQzNDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBIZWJyZXcgW2hlXVxyXG4vLyEgYXV0aG9yIDogVG9tZXIgQ29oZW4gOiBodHRwczovL2dpdGh1Yi5jb20vdG9tZXJcclxuLy8hIGF1dGhvciA6IE1vc2hlIFNpbWFudG92IDogaHR0cHM6Ly9naXRodWIuY29tL0RldmVsb3BtZW50SUxcclxuLy8hIGF1dGhvciA6IFRhbCBBdGVyIDogaHR0cHM6Ly9naXRodWIuY29tL1RhbEF0ZXJcclxuXHJcbmV4cG9ydCBjb25zdCBoZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaGUnLFxyXG4gIG1vbnRoczogJ9eZ16DXldeQ16hf16TXkdeo15XXkNeoX9ee16jXpV/XkNek16jXmdecX9ee15DXmV/XmdeV16DXmV/XmdeV15zXmV/XkNeV15LXldeh15hf16HXpNeY157XkdeoX9eQ15XXp9eY15XXkdeoX9eg15XXkdee15HXqF/Xk9em157XkdeoJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAn15nXoNeV17Nf16TXkdeo17Nf157XqNelX9eQ16TXqNezX9ee15DXmV/XmdeV16DXmV/XmdeV15zXmV/XkNeV15LXs1/Xodek15jXs1/XkNeV16fXs1/XoNeV15HXs1/Xk9em157Xsycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ9eo15DXqdeV159f16nXoNeZX9ep15zXmdep15lf16jXkdeZ16LXmV/Xl9ee15nXqdeZX9ep15nXqdeZX9ep15HXqicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAn15DXs1/XkdezX9eS17Nf15PXs1/XlNezX9eV17Nf16nXsycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ9eQX9eRX9eSX9eTX9eUX9eVX9epJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBb15FdTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgW9eRXU1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBb15FdTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIGw6ICdEL00vWVlZWScsXHJcbiAgICBsbDogJ0QgTU1NIFlZWVknLFxyXG4gICAgbGxsOiAnRCBNTU0gWVlZWSBISDptbScsXHJcbiAgICBsbGxsOiAnZGRkLCBEIE1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdb15TXmdeV150g15HWvl1MVCcsXHJcbiAgICBuZXh0RGF5OiAnW9ee15fXqCDXkda+XUxUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBb15HXqdei15RdIExUJyxcclxuICAgIGxhc3REYXk6ICdb15DXqtee15XXnCDXkda+XUxUJyxcclxuICAgIGxhc3RXZWVrOiAnW9eR15nXldedXSBkZGRkIFvXlNeQ15fXqNeV158g15HXqdei15RdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAn15HXoteV15MgJXMnLFxyXG4gICAgcGFzdDogJ9ec16TXoNeZICVzJyxcclxuICAgIHM6ICfXnteh16TXqCDXqdeg15nXldeqJyxcclxuICAgIHNzOiAnJWQg16nXoNeZ15XXqicsXHJcbiAgICBtOiAn15PXp9eUJyxcclxuICAgIG1tOiAnJWQg15PXp9eV16onLFxyXG4gICAgaDogJ9ep16LXlCcsXHJcbiAgICBoaChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGlmIChudW0gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ9ep16LXqteZ15nXnSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bSArICcg16nXoteV16onO1xyXG4gICAgfSxcclxuICAgIGQ6ICfXmdeV150nLFxyXG4gICAgZGQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICBpZiAobnVtID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuICfXmdeV157XmdeZ150nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudW0gKyAnINeZ157XmdedJztcclxuICAgIH0sXHJcbiAgICBNOiAn15fXldeT16knLFxyXG4gICAgTU0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICBpZiAobnVtID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuICfXl9eV15PXqdeZ15nXnSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bSArICcg15fXldeT16nXmdedJztcclxuICAgIH0sXHJcbiAgICB5OiAn16nXoNeUJyxcclxuICAgIHl5KG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgaWYgKG51bSA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAn16nXoNeq15nXmdedJztcclxuICAgICAgfSBlbHNlIGlmIChudW0gJSAxMCA9PT0gMCAmJiBudW0gIT09IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bSArICcg16nXoNeUJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVtICsgJyDXqdeg15nXnSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAv15DXl9eUXCLXpnzXnNek16DXlFwi16Z815DXl9eo15kg15TXpteU16jXmdeZ151815zXpNeg15kg15TXpteU16jXmdeZ151815zXpNeg15XXqiDXkdeV16fXqHzXkdeR15XXp9eofNeR16LXqNeRL2ksXHJcbiAgaXNQTShpbnB1dCkge1xyXG4gICAgcmV0dXJuIC9eKNeQ15fXlFwi16Z815DXl9eo15kg15TXpteU16jXmdeZ151815HXoteo15EpJC8udGVzdChpbnB1dCk7XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgNSkge1xyXG4gICAgICByZXR1cm4gJ9ec16TXoNeV16og15HXlden16gnO1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTApIHtcclxuICAgICAgcmV0dXJuICfXkdeR15XXp9eoJztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ9ec16TXoNeUXCLXpicgOiAn15zXpNeg15kg15TXpteU16jXmdeZ150nO1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTgpIHtcclxuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAn15DXl9eUXCLXpicgOiAn15DXl9eo15kg15TXpteU16jXmdeZ150nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICfXkdei16jXkSc7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=