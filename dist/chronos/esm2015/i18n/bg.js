/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
export const /** @type {?} */ bgLocale = {
    abbr: 'bg',
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: function (d) {
            switch (d) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        ss: '%d секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (_num) {
        const /** @type {?} */ number = Number(_num);
        let /** @type {?} */ lastDigit = number % 10, /** @type {?} */
        last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        }
        else if (last2Digits === 0) {
            return number + '-ен';
        }
        else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        }
        else if (lastDigit === 1) {
            return number + '-ви';
        }
        else if (lastDigit === 2) {
            return number + '-ри';
        }
        else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        }
        else {
            return number + '-ти';
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2JnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLG1GQUFtRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEcsV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekUsUUFBUSxFQUFFLHdEQUF3RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0UsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLFVBQVUsQ0FBTTtZQUV4QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNWLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixNQUFNLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3RDLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixNQUFNLENBQUMsMkJBQTJCLENBQUM7YUFDdEM7U0FDRjtRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsVUFBVTtRQUNoQixDQUFDLEVBQUUsaUJBQWlCO1FBQ3BCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxPQUFPO1FBQ1YsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxXQUFXO0tBQ2hCO0lBQ0Qsc0JBQXNCLEVBQUUsNkJBQTZCO0lBQ3JELE9BQU8sRUFBRSxVQUFVLElBQVk7UUFFN0IsdUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixxQkFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLEVBQUU7UUFDekIsV0FBVyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IEtocm9ub3MgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEJ1bGdhcmlhbiBbYmddXHJcbi8vISBhdXRob3IgOiBJc2tyZW4gSXZvdiBDaGVybmV2IDogaHR0cHM6Ly9naXRodWIuY29tL2ljaGVybmV2XHJcbi8vISBhdXRob3IgOiBLdW5hbCBNYXJ3YWhhIDogaHR0cHM6Ly9naXRodWIuY29tL21hcndhaGFoYVxyXG4vLyEgYXV0aG9yIDogTWF0dCBHcmFuZGUgOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGdyYW5kZVxyXG4vLyEgYXV0aG9yIDogSXNhYWMgQ2FtYnJvbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2FtYnJvblxyXG4vLyEgYXV0aG9yIDogVmVuZWxpbiBNYW5jaGV2IDogaHR0cHM6Ly9naXRodWIuY29tL3ZtYW5jaGV2XHJcblxyXG5leHBvcnQgY29uc3QgYmdMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2JnJyxcclxuICBtb250aHM6ICfRj9C90YPQsNGA0Lhf0YTQtdCy0YDRg9Cw0YDQuF/QvNCw0YDRgl/QsNC/0YDQuNC7X9C80LDQuV/RjtC90Lhf0Y7Qu9C4X9Cw0LLQs9GD0YHRgl/RgdC10L/RgtC10LzQstGA0Lhf0L7QutGC0L7QvNCy0YDQuF/QvdC+0LXQvNCy0YDQuF/QtNC10LrQtdC80LLRgNC4Jy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAn0Y/QvdGAX9GE0LXQsl/QvNCw0YBf0LDQv9GAX9C80LDQuV/RjtC90Lhf0Y7Qu9C4X9Cw0LLQs1/RgdC10L9f0L7QutGCX9C90L7QtV/QtNC10LonLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICfQvdC10LTQtdC70Y9f0L/QvtC90LXQtNC10LvQvdC40Lpf0LLRgtC+0YDQvdC40Lpf0YHRgNGP0LTQsF/Rh9C10YLQstGK0YDRgtGK0Lpf0L/QtdGC0YrQul/RgdGK0LHQvtGC0LAnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ9C90LXQtF/Qv9C+0L1f0LLRgtC+X9GB0YDRj1/Rh9C10YJf0L/QtdGCX9GB0YrQsScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ9C90LRf0L/QvV/QstGCX9GB0YBf0YfRgl/Qv9GCX9GB0LEnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdELk1NLllZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdb0JTQvdC10YEg0LJdIExUJyxcclxuICAgIG5leHREYXk6ICdb0KPRgtGA0LUg0LJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBb0LJdIExUJyxcclxuICAgIGxhc3REYXk6ICdb0JLRh9C10YDQsCDQsl0gTFQnLFxyXG4gICAgbGFzdFdlZWs6IGZ1bmN0aW9uIChkOiBhbnkpIHtcclxuXHJcbiAgICAgIHN3aXRjaCAoZCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdb0JIg0LjQt9C80LjQvdCw0LvQsNGC0LBdIGRkZGQgW9CyXSBMVCc7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdb0JIg0LjQt9C80LjQvdCw0LvQuNGPXSBkZGRkIFvQsl0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICfRgdC70LXQtCAlcycsXHJcbiAgICBwYXN0OiAn0L/RgNC10LTQuCAlcycsXHJcbiAgICBzOiAn0L3Rj9C60L7Qu9C60L4g0YHQtdC60YPQvdC00LgnLFxyXG4gICAgc3M6ICclZCDRgdC10LrRg9C90LTQuCcsXHJcbiAgICBtOiAn0LzQuNC90YPRgtCwJyxcclxuICAgIG1tOiAnJWQg0LzQuNC90YPRgtC4JyxcclxuICAgIGg6ICfRh9Cw0YEnLFxyXG4gICAgaGg6ICclZCDRh9Cw0YHQsCcsXHJcbiAgICBkOiAn0LTQtdC9JyxcclxuICAgIGRkOiAnJWQg0LTQvdC4JyxcclxuICAgIE06ICfQvNC10YHQtdGGJyxcclxuICAgIE1NOiAnJWQg0LzQtdGB0LXRhtCwJyxcclxuICAgIHk6ICfQs9C+0LTQuNC90LAnLFxyXG4gICAgeXk6ICclZCDQs9C+0LTQuNC90LgnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKNC10LJ80LXQvXzRgtC4fNCy0Lh80YDQuHzQvNC4KS8sXHJcbiAgb3JkaW5hbDogZnVuY3Rpb24gKF9udW06IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgY29uc3QgbnVtYmVyID0gTnVtYmVyKF9udW0pO1xyXG5cclxuICAgIGxldCBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCxcclxuICAgICAgbGFzdDJEaWdpdHMgPSBudW1iZXIgJSAxMDA7XHJcblxyXG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3QtdCyJztcclxuICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bWJlciArICct0LXQvSc7XHJcbiAgICB9IGVsc2UgaWYgKGxhc3QyRGlnaXRzID4gMTAgJiYgbGFzdDJEaWdpdHMgPCAyMCkge1xyXG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3RgtC4JztcclxuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLdCy0LgnO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDIpIHtcclxuICAgICAgcmV0dXJuIG51bWJlciArICct0YDQuCc7XHJcbiAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gNyB8fCBsYXN0RGlnaXQgPT09IDgpIHtcclxuICAgICAgcmV0dXJuIG51bWJlciArICct0LzQuCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3RgtC4JztcclxuICAgIH1cclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiJdfQ==