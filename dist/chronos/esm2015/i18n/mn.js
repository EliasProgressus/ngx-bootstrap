/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
        case 'ss':
            return num + (withoutSuffix ? ' секунд' : ' секундын');
        case 'm':
        case 'mm':
            return num + (withoutSuffix ? ' минут' : ' минутын');
        case 'h':
        case 'hh':
            return num + (withoutSuffix ? ' цаг' : ' цагийн');
        case 'd':
        case 'dd':
            return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
        case 'M':
        case 'MM':
            return num + (withoutSuffix ? ' сар' : ' сарын');
        case 'y':
        case 'yy':
            return num + (withoutSuffix ? ' жил' : ' жилийн');
        default:
            return num.toString(10);
    }
}
export const /** @type {?} */ mnLocale = {
    abbr: 'mn',
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY оны MMMMын D',
        LLL: 'YYYY оны MMMMын D HH:mm',
        LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: function (input) {
        return input === 'ҮХ';
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ҮӨ';
        }
        else {
            return 'ҮХ';
        }
    },
    calendar: {
        sameDay: '[Өнөөдөр] LT',
        nextDay: '[Маргааш] LT',
        nextWeek: '[Ирэх] dddd LT',
        lastDay: '[Өчигдөр] LT',
        lastWeek: '[Өнгөрсөн] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s дараа',
        past: '%s өмнө',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + ' өдөр';
            default:
                return num.toString(10);
        }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL21uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxtQkFBbUIsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQ3BGLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWixLQUFLLEdBQUc7WUFDTixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQzdELEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekQsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUk7WUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxJQUFJO1lBQ1AsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSTtZQUNQLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUk7WUFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxJQUFJO1lBQ1AsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRDtZQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNCO0NBQ0Y7QUFFRCxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLDhMQUE4TCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDak4sV0FBVyxFQUFFLDRFQUE0RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcEcsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixRQUFRLEVBQUUsNENBQTRDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqRSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxtQkFBbUI7UUFDdkIsR0FBRyxFQUFFLHlCQUF5QjtRQUM5QixJQUFJLEVBQUUsK0JBQStCO0tBQ3RDO0lBQ0QsYUFBYSxFQUFFLFFBQVE7SUFDdkIsSUFBSSxFQUFFLFVBQVUsS0FBSztRQUNuQixNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztLQUN2QjtJQUNELFFBQVEsRUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDYjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxjQUFjO0lBQ3RDLE9BQU8sRUFBRSxVQUFVLEdBQVcsRUFBRSxNQUFjO1FBQzVDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE1BQU0sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCO2dCQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IE1vbmdvbGlhbiBbbW5dXHJcbi8vISBhdXRob3IgOiBKYXZraGxhbnR1Z3MgTnlhbWRvcmogOiBodHRwczovL2dpdGh1Yi5jb20vamF2a2hhYW5qN1xyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcclxuICBzd2l0Y2ggKGtleSkge1xyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ9GF0Y3QtNGF0Y3QvSDRgdC10LrRg9C90LQnIDogJ9GF0Y3QtNGF0Y3QvSDRgdC10LrRg9C90LTRi9C9JztcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDRgdC10LrRg9C90LQnIDogJyDRgdC10LrRg9C90LTRi9C9Jyk7XHJcbiAgICBjYXNlICdtJzpcclxuICAgIGNhc2UgJ21tJzpcclxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDQvNC40L3Rg9GCJyA6ICcg0LzQuNC90YPRgtGL0L0nKTtcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgY2FzZSAnaGgnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnINGG0LDQsycgOiAnINGG0LDQs9C40LnQvScpO1xyXG4gICAgY2FzZSAnZCc6XHJcbiAgICBjYXNlICdkZCc6XHJcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcg06nQtNOp0YAnIDogJyDTqdC00YDQuNC50L0nKTtcclxuICAgIGNhc2UgJ00nOlxyXG4gICAgY2FzZSAnTU0nOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnINGB0LDRgCcgOiAnINGB0LDRgNGL0L0nKTtcclxuICAgIGNhc2UgJ3knOlxyXG4gICAgY2FzZSAneXknOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnINC20LjQuycgOiAnINC20LjQu9C40LnQvScpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW5Mb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ21uJyxcclxuICBtb250aHM6ICfQndGN0LPQtNKv0LPRjdGN0YAg0YHQsNGAX9Cl0L7RkdGA0LTRg9Cz0LDQsNGAINGB0LDRgF/Qk9GD0YDQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgF/QlNOp0YDTqdCy0LTSr9Cz0Y3RjdGAINGB0LDRgF/QotCw0LLQtNGD0LPQsNCw0YAg0YHQsNGAX9CX0YPRgNCz0LDQtNGD0LPQsNCw0YAg0YHQsNGAX9CU0L7Qu9C00YPQs9Cw0LDRgCDRgdCw0YBf0J3QsNC50LzQtNGD0LPQsNCw0YAg0YHQsNGAX9CV0YHQtNKv0LPRjdGN0YAg0YHQsNGAX9CQ0YDQsNCy0LTRg9Cz0LDQsNGAINGB0LDRgF/QkNGA0LLQsNC9INC90Y3Qs9C00q/Qs9GN0Y3RgCDRgdCw0YBf0JDRgNCy0LDQvSDRhdC+0ZHRgNC00YPQs9Cw0LDRgCDRgdCw0YAnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICcxINGB0LDRgF8yINGB0LDRgF8zINGB0LDRgF80INGB0LDRgF81INGB0LDRgF82INGB0LDRgF83INGB0LDRgF84INGB0LDRgF85INGB0LDRgF8xMCDRgdCw0YBfMTEg0YHQsNGAXzEyINGB0LDRgCcuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAn0J3Rj9C8X9CU0LDQstCw0LBf0JzRj9Cz0LzQsNGAX9Cb0YXQsNCz0LLQsF/Qn9Kv0YDRjdCyX9CR0LDQsNGB0LDQvV/QkdGP0LzQsdCwJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfQndGP0Lxf0JTQsNCyX9Cc0Y/Qs1/Qm9GF0LBf0J/Sr9GAX9CR0LDQsF/QkdGP0LwnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICfQndGPX9CU0LBf0JzRj1/Qm9GFX9Cf0q9f0JHQsF/QkdGPJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnWVlZWS1NTS1ERCcsXHJcbiAgICBMTDogJ1lZWVkg0L7QvdGLIE1NTU3Ri9C9IEQnLFxyXG4gICAgTExMOiAnWVlZWSDQvtC90YsgTU1NTdGL0L0gRCBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgWVlZWSDQvtC90YsgTU1NTdGL0L0gRCBISDptbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/SrtOofNKu0KUvaSxcclxuICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gJ9Ku0KUnO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuICfSrtOoJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAn0q7QpSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vTqNC906nTqdC006nRgF0gTFQnLFxyXG4gICAgbmV4dERheTogJ1vQnNCw0YDQs9Cw0LDRiF0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdb0JjRgNGN0YVdIGRkZGQgTFQnLFxyXG4gICAgbGFzdERheTogJ1vTqNGH0LjQs9C006nRgF0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdb06jQvdCz06nRgNGB06nQvV0gZGRkZCBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJyVzINC00LDRgNCw0LAnLFxyXG4gICAgcGFzdDogJyVzINOp0LzQvdOpJyxcclxuICAgIHM6IHRyYW5zbGF0ZSxcclxuICAgIHNzOiB0cmFuc2xhdGUsXHJcbiAgICBtOiB0cmFuc2xhdGUsXHJcbiAgICBtbTogdHJhbnNsYXRlLFxyXG4gICAgaDogdHJhbnNsYXRlLFxyXG4gICAgaGg6IHRyYW5zbGF0ZSxcclxuICAgIGQ6IHRyYW5zbGF0ZSxcclxuICAgIGRkOiB0cmFuc2xhdGUsXHJcbiAgICBNOiB0cmFuc2xhdGUsXHJcbiAgICBNTTogdHJhbnNsYXRlLFxyXG4gICAgeTogdHJhbnNsYXRlLFxyXG4gICAgeXk6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9INOp0LTTqdGALyxcclxuICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJyDTqdC006nRgCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=