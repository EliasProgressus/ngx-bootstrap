/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
export const /** @type {?} */ koLocale = {
    abbr: 'ko',
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '일';
            case 'M':
                return num + '월';
            case 'w':
            case 'W':
                return num + '주';
            default:
                return num.toString(10);
        }
    },
    meridiemParse: /오전|오후/,
    isPM: function (token) {
        return token === '오후';
    },
    meridiem: function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia28uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2tvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUQsV0FBVyxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDakUsUUFBUSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkQsYUFBYSxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFDLFdBQVcsRUFBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsUUFBUTtRQUNiLEdBQUcsRUFBRyxXQUFXO1FBQ2pCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxlQUFlO1FBQ3BCLEdBQUcsRUFBRyxzQkFBc0I7UUFDNUIsSUFBSSxFQUFHLDJCQUEyQjtRQUNsQyxDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsZUFBZTtRQUNwQixHQUFHLEVBQUcsc0JBQXNCO1FBQzVCLElBQUksRUFBRywyQkFBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsT0FBTztRQUNqQixRQUFRLEVBQUcsU0FBUztRQUNwQixPQUFPLEVBQUcsT0FBTztRQUNqQixRQUFRLEVBQUcsYUFBYTtRQUN4QixRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLE1BQU07UUFDZixJQUFJLEVBQUcsTUFBTTtRQUNiLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLE1BQU07UUFDVixFQUFFLEVBQUcsTUFBTTtRQUNYLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsS0FBSztRQUNULEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsS0FBSztLQUNYO0lBQ0Qsc0JBQXNCLEVBQUcsZ0JBQWdCO0lBQ3pDLE9BQU8sRUFBRyxVQUFVLEdBQVcsRUFBRSxNQUFjO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssR0FBRztnQkFDTixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRztnQkFDTixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQjtnQkFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsYUFBYSxFQUFHLE9BQU87SUFDdkIsSUFBSSxFQUFHLFVBQVUsS0FBSztRQUNwQixNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztLQUN2QjtJQUNELFFBQVEsRUFBRyxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUN4QyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDaEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEtvcmVhbiBba29dXHJcbi8vISBhdXRob3IgOiBLeXVuZ3dvb2ssIFBhcmsgOiBodHRwczovL2dpdGh1Yi5jb20va3l1bmd3MDBrXHJcbi8vISBhdXRob3IgOiBKZWVleXVsIExlZSA8amVlZXl1bEBnbWFpbC5jb20+XHJcblxyXG5leHBvcnQgY29uc3Qga29Mb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2tvJyxcclxuICBtb250aHMgOiAnMeyblF8y7JuUXzPsm5RfNOyblF817JuUXzbsm5RfN+yblF847JuUXznsm5RfMTDsm5RfMTHsm5RfMTLsm5QnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgOiAnMeyblF8y7JuUXzPsm5RfNOyblF817JuUXzbsm5RfN+yblF847JuUXznsm5RfMTDsm5RfMTHsm5RfMTLsm5QnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiAn7J287JqU7J28X+yblOyalOydvF/tmZTsmpTsnbxf7IiY7JqU7J28X+uqqeyalOydvF/quIjsmpTsnbxf7Yag7JqU7J28Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAn7J28X+yblF/tmZRf7IiYX+uqqV/quIhf7YagJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ+ydvF/sm5Rf7ZmUX+yImF/rqqlf6riIX+2GoCcuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgIExUIDogJ0EgaDptbScsXHJcbiAgICBMVFMgOiAnQSBoOm1tOnNzJyxcclxuICAgIEwgOiAnWVlZWS5NTS5ERCcsXHJcbiAgICBMTCA6ICdZWVlZ64WEIE1NTU0gROydvCcsXHJcbiAgICBMTEwgOiAnWVlZWeuFhCBNTU1NIETsnbwgQSBoOm1tJyxcclxuICAgIExMTEwgOiAnWVlZWeuFhCBNTU1NIETsnbwgZGRkZCBBIGg6bW0nLFxyXG4gICAgbCA6ICdZWVlZLk1NLkREJyxcclxuICAgIGxsIDogJ1lZWVnrhYQgTU1NTSBE7J28JyxcclxuICAgIGxsbCA6ICdZWVlZ64WEIE1NTU0gROydvCBBIGg6bW0nLFxyXG4gICAgbGxsbCA6ICdZWVlZ64WEIE1NTU0gROydvCBkZGRkIEEgaDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgc2FtZURheSA6ICfsmKTripggTFQnLFxyXG4gICAgbmV4dERheSA6ICfrgrTsnbwgTFQnLFxyXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXHJcbiAgICBsYXN0RGF5IDogJ+yWtOygnCBMVCcsXHJcbiAgICBsYXN0V2VlayA6ICfsp4Drgpzso7wgZGRkZCBMVCcsXHJcbiAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgZnV0dXJlIDogJyVzIO2bhCcsXHJcbiAgICBwYXN0IDogJyVzIOyghCcsXHJcbiAgICBzIDogJ+uqhyDstIgnLFxyXG4gICAgc3MgOiAnJWTstIgnLFxyXG4gICAgbSA6ICcx67aEJyxcclxuICAgIG1tIDogJyVk67aEJyxcclxuICAgIGggOiAn7ZWcIOyLnOqwhCcsXHJcbiAgICBoaCA6ICclZOyLnOqwhCcsXHJcbiAgICBkIDogJ+2VmOujqCcsXHJcbiAgICBkZCA6ICclZOydvCcsXHJcbiAgICBNIDogJ+2VnCDri6wnLFxyXG4gICAgTU0gOiAnJWTri6wnLFxyXG4gICAgeSA6ICfsnbwg64WEJyxcclxuICAgIHl5IDogJyVk64WEJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfSjsnbx87JuUfOyjvCkvLFxyXG4gIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJ+ydvCc7XHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAn7JuUJztcclxuICAgICAgY2FzZSAndyc6XHJcbiAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAn7KO8JztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2UgOiAv7Jik7KCEfOyYpO2bhC8sXHJcbiAgaXNQTSA6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgcmV0dXJuIHRva2VuID09PSAn7Jik7ZuEJztcclxuICB9LFxyXG4gIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNVcHBlcikge1xyXG4gICAgcmV0dXJuIGhvdXIgPCAxMiA/ICfsmKTsoIQnIDogJ+yYpO2bhCc7XHJcbiAgfVxyXG59O1xyXG4iXX0=