/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
export const /** @type {?} */ jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input === '午後';
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    ordinal(num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2phLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBZ0I7SUFDbkMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RCxXQUFXLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqRSxRQUFRLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuRCxhQUFhLEVBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUMsV0FBVyxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hDLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLFdBQVc7UUFDaEIsR0FBRyxFQUFHLGlCQUFpQjtRQUN2QixJQUFJLEVBQUcsc0JBQXNCO1FBQzdCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLEdBQUcsRUFBRyxpQkFBaUI7UUFDdkIsSUFBSSxFQUFHLHNCQUFzQjtLQUM5QjtJQUNELGFBQWEsRUFBRSxRQUFROzs7OztJQUN2QixJQUFJLENBQUUsS0FBSztRQUNULE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDO0tBQ3ZCOzs7Ozs7O0lBQ0QsUUFBUSxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcsU0FBUztRQUNuQixPQUFPLEVBQUcsU0FBUztRQUNuQixRQUFRLEVBQUcsYUFBYTtRQUN4QixPQUFPLEVBQUcsU0FBUztRQUNuQixRQUFRLEVBQUcsYUFBYTtRQUN4QixRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0Qsc0JBQXNCLEVBQUcsVUFBVTs7Ozs7O0lBQ25DLE9BQU8sQ0FBRSxHQUFXLEVBQUUsTUFBYztRQUNsQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssS0FBSztnQkFDUixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQjtnQkFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLEtBQUs7UUFDZCxJQUFJLEVBQUcsS0FBSztRQUNaLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsTUFBTTtRQUNYLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsS0FBSztRQUNULEVBQUUsRUFBRyxNQUFNO1FBQ1gsQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztLQUNYO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEphcGFuZXNlIFtqYV1cclxuLy8hIGF1dGhvciA6IExJIExvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vYmFyeW9uXHJcblxyXG5leHBvcnQgY29uc3QgamFMb2NhbGU6IExvY2FsZURhdGEgPSAge1xyXG4gIGFiYnI6ICdqYScsXHJcbiAgbW9udGhzIDogJzHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0IDogJzHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzIDogJ+aXpeabnOaXpV/mnIjmm5zml6Vf54Gr5puc5pelX+awtOabnOaXpV/mnKjmm5zml6Vf6YeR5puc5pelX+Wcn+abnOaXpScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0IDogJ+aXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcnycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICfml6Vf5pyIX+eBq1/msLRf5pyoX+mHkV/lnJ8nLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICBMVCA6ICdISDptbScsXHJcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxyXG4gICAgTCA6ICdZWVlZL01NL0REJyxcclxuICAgIExMIDogJ1lZWVnlubRN5pyIROaXpScsXHJcbiAgICBMTEwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tJyxcclxuICAgIExMTEwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tIGRkZGQnLFxyXG4gICAgbCA6ICdZWVlZL01NL0REJyxcclxuICAgIGxsIDogJ1lZWVnlubRN5pyIROaXpScsXHJcbiAgICBsbGwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tJyxcclxuICAgIGxsbGwgOiAnWVlZWeW5tE3mnIhE5pelIEhIOm1tIGRkZGQnXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAv5Y2I5YmNfOWNiOW+jC9pLFxyXG4gIGlzUE0gKGlucHV0KSB7XHJcbiAgICByZXR1cm4gaW5wdXQgPT09ICfljYjlvownO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW0gKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCAxMikge1xyXG4gICAgICByZXR1cm4gJ+WNiOWJjSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ+WNiOW+jCc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhciA6IHtcclxuICAgIHNhbWVEYXkgOiAnW+S7iuaXpV0gTFQnLFxyXG4gICAgbmV4dERheSA6ICdb5piO5pelXSBMVCcsXHJcbiAgICBuZXh0V2VlayA6ICdb5p2l6YCxXWRkZGQgTFQnLFxyXG4gICAgbGFzdERheSA6ICdb5pio5pelXSBMVCcsXHJcbiAgICBsYXN0V2VlayA6ICdb5YmN6YCxXWRkZGQgTFQnLFxyXG4gICAgc2FtZUVsc2UgOiAnTCdcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2UgOiAvXFxkezEsMn3ml6UvLFxyXG4gIG9yZGluYWwgKG51bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xyXG4gICAgICBjYXNlICdkJzpcclxuICAgICAgY2FzZSAnRCc6XHJcbiAgICAgIGNhc2UgJ0RERCc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICfml6UnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgZnV0dXJlIDogJyVz5b6MJyxcclxuICAgIHBhc3QgOiAnJXPliY0nLFxyXG4gICAgcyA6ICfmlbDnp5InLFxyXG4gICAgc3MgOiAnJWTnp5InLFxyXG4gICAgbSA6ICcx5YiGJyxcclxuICAgIG1tIDogJyVk5YiGJyxcclxuICAgIGggOiAnMeaZgumWkycsXHJcbiAgICBoaCA6ICclZOaZgumWkycsXHJcbiAgICBkIDogJzHml6UnLFxyXG4gICAgZGQgOiAnJWTml6UnLFxyXG4gICAgTSA6ICcx44O25pyIJyxcclxuICAgIE1NIDogJyVk44O25pyIJyxcclxuICAgIHkgOiAnMeW5tCcsXHJcbiAgICB5eSA6ICclZOW5tCdcclxuICB9XHJcbn07XHJcbiJdfQ==