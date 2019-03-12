/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
export const /** @type {?} */ zhCnLocale = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    meridiemHour(hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        let /** @type {?} */ hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    ordinal(_num, period) {
        const /** @type {?} */ num = Number(_num);
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            case 'M':
                return num + '月';
            case 'w':
            case 'W':
                return num + '周';
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemgtY24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3poLWNuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMsdUJBQU0sVUFBVSxHQUFlO0lBQ3BDLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLHVDQUF1QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUQsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEUsUUFBUSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEQsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEQsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxXQUFXO1FBQ2YsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFdBQVc7UUFDZixHQUFHLEVBQUUsaUJBQWlCO1FBQ3RCLElBQUksRUFBRSxxQkFBcUI7S0FDNUI7SUFDRCxhQUFhLEVBQUUsbUJBQW1COzs7Ozs7SUFDbEMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUk7WUFDeEMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFB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b3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogQ2hpbmVzZSAoQ2hpbmEpIFt6aC1jbl1cclxuLy8hIGF1dGhvciA6IHN1dXBpYyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdXVwaWNcclxuLy8hIGF1dGhvciA6IFplbm8gWmVuZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5vemVuZ1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoQ25Mb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3poLWNuJyxcclxuICBtb250aHM6ICfkuIDmnIhf5LqM5pyIX+S4ieaciF/lm5vmnIhf5LqU5pyIX+WFreaciF/kuIPmnIhf5YWr5pyIX+S5neaciF/ljYHmnIhf5Y2B5LiA5pyIX+WNgeS6jOaciCcuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJzHmnIhfMuaciF8z5pyIXzTmnIhfNeaciF825pyIXzfmnIhfOOaciF855pyIXzEw5pyIXzEx5pyIXzEy5pyIJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAn5pif5pyf5pelX+aYn+acn+S4gF/mmJ/mnJ/kuoxf5pif5pyf5LiJX+aYn+acn+Wbm1/mmJ/mnJ/kupRf5pif5pyf5YWtJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICflkajml6Vf5ZGo5LiAX+WRqOS6jF/lkajkuIlf5ZGo5ZubX+WRqOS6lF/lkajlha0nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICfml6Vf5LiAX+S6jF/kuIlf5ZubX+S6lF/lha0nLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ1lZWVkvTU0vREQnLFxyXG4gICAgTEw6ICdZWVlZ5bm0TeaciETml6UnLFxyXG4gICAgTExMOiAnWVlZWeW5tE3mnIhE5pelQWjngrltbeWIhicsXHJcbiAgICBMTExMOiAnWVlZWeW5tE3mnIhE5pelZGRkZEFo54K5bW3liIYnLFxyXG4gICAgbDogJ1lZWVkvTS9EJyxcclxuICAgIGxsOiAnWVlZWeW5tE3mnIhE5pelJyxcclxuICAgIGxsbDogJ1lZWVnlubRN5pyIROaXpSBISDptbScsXHJcbiAgICBsbGxsOiAnWVlZWeW5tE3mnIhE5pelZGRkZCBISDptbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/lh4zmmah85pep5LiKfOS4iuWNiHzkuK3ljYh85LiL5Y2IfOaZmuS4ii8sXHJcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XHJcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcclxuICAgICAgaG91ciA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVyaWRpZW0gPT09ICflh4zmmagnIHx8IG1lcmlkaWVtID09PSAn5pep5LiKJyB8fFxyXG4gICAgICBtZXJpZGllbSA9PT0gJ+S4iuWNiCcpIHtcclxuICAgICAgcmV0dXJuIGhvdXI7XHJcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn5LiL5Y2IJyB8fCBtZXJpZGllbSA9PT0gJ+aZmuS4iicpIHtcclxuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vICfkuK3ljYgnXHJcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcclxuICAgIH1cclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgbGV0IGhtID0gaG91ciAqIDEwMCArIG1pbnV0ZTtcclxuICAgIGlmIChobSA8IDYwMCkge1xyXG4gICAgICByZXR1cm4gJ+WHjOaZqCc7XHJcbiAgICB9IGVsc2UgaWYgKGhtIDwgOTAwKSB7XHJcbiAgICAgIHJldHVybiAn5pep5LiKJztcclxuICAgIH0gZWxzZSBpZiAoaG0gPCAxMTMwKSB7XHJcbiAgICAgIHJldHVybiAn5LiK5Y2IJztcclxuICAgIH0gZWxzZSBpZiAoaG0gPCAxMjMwKSB7XHJcbiAgICAgIHJldHVybiAn5Lit5Y2IJztcclxuICAgIH0gZWxzZSBpZiAoaG0gPCAxODAwKSB7XHJcbiAgICAgIHJldHVybiAn5LiL5Y2IJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAn5pma5LiKJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW+S7iuWkqV1MVCcsXHJcbiAgICBuZXh0RGF5OiAnW+aYjuWkqV1MVCcsXHJcbiAgICBuZXh0V2VlazogJ1vkuItdZGRkZExUJyxcclxuICAgIGxhc3REYXk6ICdb5pio5aSpXUxUJyxcclxuICAgIGxhc3RXZWVrOiAnW+S4il1kZGRkTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KOaXpXzmnIh85ZGoKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZCkge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAn5pelJztcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICfmnIgnO1xyXG4gICAgICBjYXNlICd3JzpcclxuICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICflkagnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnJXPlhoUnLFxyXG4gICAgcGFzdDogJyVz5YmNJyxcclxuICAgIHM6ICflh6Dnp5InLFxyXG4gICAgc3M6ICclZCDnp5InLFxyXG4gICAgbTogJzEg5YiG6ZKfJyxcclxuICAgIG1tOiAnJWQg5YiG6ZKfJyxcclxuICAgIGg6ICcxIOWwj+aXticsXHJcbiAgICBoaDogJyVkIOWwj+aXticsXHJcbiAgICBkOiAnMSDlpKknLFxyXG4gICAgZGQ6ICclZCDlpKknLFxyXG4gICAgTTogJzEg5Liq5pyIJyxcclxuICAgIE1NOiAnJWQg5Liq5pyIJyxcclxuICAgIHk6ICcxIOW5tCcsXHJcbiAgICB5eTogJyVkIOW5tCdcclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIC8vIEdCL1QgNzQwOC0xOTk044CK5pWw5o2u5YWD5ZKM5Lqk5o2i5qC85byPwrfkv6Hmga/kuqTmjaLCt+aXpeacn+WSjOaXtumXtOihqOekuuazleOAi+S4jklTTyA4NjAxOjE5ODjnrYnmlYhcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiJdfQ==