/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
export const /** @type {?} */ thLocale = {
    abbr: 'th',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return input === 'หลังเที่ยง';
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHVCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtR0FBbUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RILFdBQVcsRUFBRSxnRUFBZ0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLGdEQUFnRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckUsYUFBYSxFQUFFLDZDQUE2QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQ3ZFLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1Qjs7Ozs7SUFDdEMsSUFBSSxDQUFDLEtBQUs7UUFDUixNQUFNLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQztLQUMvQjs7Ozs7OztJQUNELFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ3JCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxjQUFjO1FBQ2pCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO0tBQ1o7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuLy8gbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vIGxvY2FsZSA6IFRoYWkgW3RoXVxyXG4vLyBhdXRob3IgOiBXYXRjaGFyYXBvbCBTYW5pdHdvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vdHVtaXRcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aExvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAndGgnLFxyXG4gIG1vbnRoczogJ+C4oeC4geC4o+C4suC4hOC4oV/guIHguLjguKHguKDguLLguJ7guLHguJnguJjguYxf4Lih4Li14LiZ4Liy4LiE4LihX+C5gOC4oeC4qeC4suC4ouC4mV/guJ7guKTguKnguKDguLLguITguKFf4Lih4Li04LiW4Li44LiZ4Liy4Lii4LiZX+C4geC4o+C4geC4juC4suC4hOC4oV/guKrguLTguIfguKvguLLguITguKFf4LiB4Lix4LiZ4Lii4Liy4Lii4LiZX+C4leC4uOC4peC4suC4hOC4oV/guJ7guKTguKjguIjguLTguIHguLLguKLguJlf4LiY4Lix4LiZ4Lin4Liy4LiE4LihJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAn4LihLuC4hC5f4LiBLuC4ni5f4Lih4Li1LuC4hC5f4LmA4LihLuC4oi5f4LieLuC4hC5f4Lih4Li0LuC4oi5f4LiBLuC4hC5f4LiqLuC4hC5f4LiBLuC4oi5f4LiVLuC4hC5f4LieLuC4oi5f4LiYLuC4hC4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ+C4reC4suC4l+C4tOC4leC4ouC5jF/guIjguLHguJnguJfguKPguYxf4Lit4Lix4LiH4LiE4Liy4LijX+C4nuC4uOC4mF/guJ7guKTguKvguLHguKrguJrguJTguLVf4Lio4Li44LiB4Lij4LmMX+C5gOC4quC4suC4o+C5jCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAn4Lit4Liy4LiX4Li04LiV4Lii4LmMX+C4iOC4seC4meC4l+C4o+C5jF/guK3guLHguIfguITguLLguKNf4Lie4Li44LiYX+C4nuC4pOC4q+C4seC4ql/guKjguLjguIHguKPguYxf4LmA4Liq4Liy4Lij4LmMJy5zcGxpdCgnXycpLCAvLyB5ZXMsIHRocmVlIGNoYXJhY3RlcnMgZGlmZmVyZW5jZVxyXG4gIHdlZWtkYXlzTWluOiAn4Lit4LiyLl/guIguX+C4rS5f4LieLl/guJ7guKQuX+C4qC5f4LiqLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkg4LmA4Lin4Lil4LiyIEg6bW0nLFxyXG4gICAgTExMTDogJ+C4p+C4seC4mWRkZGTguJfguLXguYggRCBNTU1NIFlZWVkg4LmA4Lin4Lil4LiyIEg6bW0nXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAv4LiB4LmI4Lit4LiZ4LmA4LiX4Li14LmI4Lii4LiHfOC4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hy8sXHJcbiAgaXNQTShpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0ID09PSAn4Lir4Lil4Lix4LiH4LmA4LiX4Li14LmI4Lii4LiHJztcclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCAxMikge1xyXG4gICAgICByZXR1cm4gJ+C4geC5iOC4reC4meC5gOC4l+C4teC5iOC4ouC4hyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ+C4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hyc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vguKfguLHguJnguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW+C4nuC4o+C4uOC5iOC4h+C4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZFvguKvguJnguYnguLIg4LmA4Lin4Lil4LiyXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW+C5gOC4oeC4t+C5iOC4reC4p+C4suC4meC4meC4teC5iSDguYDguKfguKXguLJdIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW+C4p+C4seC4mV1kZGRkW+C4l+C4teC5iOC5geC4peC5ieC4pyDguYDguKfguKXguLJdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAn4Lit4Li14LiBICVzJyxcclxuICAgIHBhc3Q6ICclc+C4l+C4teC5iOC5geC4peC5ieC4pycsXHJcbiAgICBzOiAn4LmE4Lih4LmI4LiB4Li14LmI4Lin4Li04LiZ4Liy4LiX4Li1JyxcclxuICAgIHNzOiAnJWQg4Lin4Li04LiZ4Liy4LiX4Li1JyxcclxuICAgIG06ICcxIOC4meC4suC4l+C4tScsXHJcbiAgICBtbTogJyVkIOC4meC4suC4l+C4tScsXHJcbiAgICBoOiAnMSDguIrguLHguYjguKfguYLguKHguIcnLFxyXG4gICAgaGg6ICclZCDguIrguLHguYjguKfguYLguKHguIcnLFxyXG4gICAgZDogJzEg4Lin4Lix4LiZJyxcclxuICAgIGRkOiAnJWQg4Lin4Lix4LiZJyxcclxuICAgIE06ICcxIOC5gOC4lOC4t+C4reC4mScsXHJcbiAgICBNTTogJyVkIOC5gOC4lOC4t+C4reC4mScsXHJcbiAgICB5OiAnMSDguJvguLUnLFxyXG4gICAgeXk6ICclZCDguJvguLUnXHJcbiAgfVxyXG59O1xyXG4iXX0=