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
export var /** @type {?} */ jaLocale = {
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
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === '午後';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
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
    ordinal: /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2phLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZ0I7SUFDbkMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RCxXQUFXLEVBQUcsd0NBQXdDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqRSxRQUFRLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNuRCxhQUFhLEVBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUMsV0FBVyxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hDLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLFdBQVc7UUFDaEIsR0FBRyxFQUFHLGlCQUFpQjtRQUN2QixJQUFJLEVBQUcsc0JBQXNCO1FBQzdCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLEdBQUcsRUFBRyxpQkFBaUI7UUFDdkIsSUFBSSxFQUFHLHNCQUFzQjtLQUM5QjtJQUNELGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLElBQUk7Ozs7Y0FBRSxLQUFLO1FBQ1QsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7S0FDdkI7SUFDRCxRQUFROzs7Ozs7Y0FBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2I7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBQ0QsUUFBUSxFQUFHO1FBQ1QsT0FBTyxFQUFHLFNBQVM7UUFDbkIsT0FBTyxFQUFHLFNBQVM7UUFDbkIsUUFBUSxFQUFHLGFBQWE7UUFDeEIsT0FBTyxFQUFHLFNBQVM7UUFDbkIsUUFBUSxFQUFHLGFBQWE7UUFDeEIsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELHNCQUFzQixFQUFHLFVBQVU7SUFDbkMsT0FBTzs7Ozs7SUFBUCxVQUFTLEdBQVcsRUFBRSxNQUFjO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CO2dCQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsS0FBSztRQUNkLElBQUksRUFBRyxLQUFLO1FBQ1osQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsS0FBSztRQUNULEVBQUUsRUFBRyxNQUFNO1FBQ1gsQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLE1BQU07UUFDWCxDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO0tBQ1g7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSmFwYW5lc2UgW2phXVxyXG4vLyEgYXV0aG9yIDogTEkgTG9uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJ5b25cclxuXHJcbmV4cG9ydCBjb25zdCBqYUxvY2FsZTogTG9jYWxlRGF0YSA9ICB7XHJcbiAgYWJicjogJ2phJyxcclxuICBtb250aHMgOiAnMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIgnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgOiAnMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIgnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiAn5pel5puc5pelX+aciOabnOaXpV/ngavmm5zml6Vf5rC05puc5pelX+acqOabnOaXpV/ph5Hmm5zml6Vf5Zyf5puc5pelJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAn5pelX+aciF/ngatf5rC0X+acqF/ph5Ff5ZyfJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ+aXpV/mnIhf54GrX+awtF/mnKhf6YeRX+Wcnycuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgIExUIDogJ0hIOm1tJyxcclxuICAgIExUUyA6ICdISDptbTpzcycsXHJcbiAgICBMIDogJ1lZWVkvTU0vREQnLFxyXG4gICAgTEwgOiAnWVlZWeW5tE3mnIhE5pelJyxcclxuICAgIExMTCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxyXG4gICAgTExMTCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0gZGRkZCcsXHJcbiAgICBsIDogJ1lZWVkvTU0vREQnLFxyXG4gICAgbGwgOiAnWVlZWeW5tE3mnIhE5pelJyxcclxuICAgIGxsbCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0nLFxyXG4gICAgbGxsbCA6ICdZWVlZ5bm0TeaciETml6UgSEg6bW0gZGRkZCdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/ljYjliY185Y2I5b6ML2ksXHJcbiAgaXNQTSAoaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gJ+WNiOW+jCc7XHJcbiAgfSxcclxuICBtZXJpZGllbSAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHJldHVybiAn5Y2I5YmNJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAn5Y2I5b6MJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgc2FtZURheSA6ICdb5LuK5pelXSBMVCcsXHJcbiAgICBuZXh0RGF5IDogJ1vmmI7ml6VdIExUJyxcclxuICAgIG5leHRXZWVrIDogJ1vmnaXpgLFdZGRkZCBMVCcsXHJcbiAgICBsYXN0RGF5IDogJ1vmmKjml6VdIExUJyxcclxuICAgIGxhc3RXZWVrIDogJ1vliY3pgLFdZGRkZCBMVCcsXHJcbiAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfeaXpS8sXHJcbiAgb3JkaW5hbCAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJ+aXpSc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnJXPlvownLFxyXG4gICAgcGFzdCA6ICclc+WJjScsXHJcbiAgICBzIDogJ+aVsOenkicsXHJcbiAgICBzcyA6ICclZOenkicsXHJcbiAgICBtIDogJzHliIYnLFxyXG4gICAgbW0gOiAnJWTliIYnLFxyXG4gICAgaCA6ICcx5pmC6ZaTJyxcclxuICAgIGhoIDogJyVk5pmC6ZaTJyxcclxuICAgIGQgOiAnMeaXpScsXHJcbiAgICBkZCA6ICclZOaXpScsXHJcbiAgICBNIDogJzHjg7bmnIgnLFxyXG4gICAgTU0gOiAnJWTjg7bmnIgnLFxyXG4gICAgeSA6ICcx5bm0JyxcclxuICAgIHl5IDogJyVk5bm0J1xyXG4gIH1cclxufTtcclxuIl19