/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
export var /** @type {?} */ thLocale = {
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
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBV0EsTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtR0FBbUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RILFdBQVcsRUFBRSxnRUFBZ0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLGdEQUFnRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckUsYUFBYSxFQUFFLDZDQUE2QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O0lBQ3ZFLFdBQVcsRUFBRSx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE1BQU0sQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDO0tBQy9CO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNyQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsV0FBVztRQUNqQixDQUFDLEVBQUUsY0FBYztRQUNqQixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxPQUFPO1FBQ1YsRUFBRSxFQUFFLFFBQVE7UUFDWixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsT0FBTztLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbi8vIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyBsb2NhbGUgOiBUaGFpIFt0aF1cclxuLy8gYXV0aG9yIDogV2F0Y2hhcmFwb2wgU2FuaXR3b25nIDogaHR0cHM6Ly9naXRodWIuY29tL3R1bWl0XHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3RoJyxcclxuICBtb250aHM6ICfguKHguIHguKPguLLguITguKFf4LiB4Li44Lih4Lig4Liy4Lie4Lix4LiZ4LiY4LmMX+C4oeC4teC4meC4suC4hOC4oV/guYDguKHguKnguLLguKLguJlf4Lie4Lik4Lip4Lig4Liy4LiE4LihX+C4oeC4tOC4luC4uOC4meC4suC4ouC4mV/guIHguKPguIHguI7guLLguITguKFf4Liq4Li04LiH4Lir4Liy4LiE4LihX+C4geC4seC4meC4ouC4suC4ouC4mV/guJXguLjguKXguLLguITguKFf4Lie4Lik4Lio4LiI4Li04LiB4Liy4Lii4LiZX+C4mOC4seC4meC4p+C4suC4hOC4oScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ+C4oS7guIQuX+C4gS7guJ4uX+C4oeC4tS7guIQuX+C5gOC4oS7guKIuX+C4ni7guIQuX+C4oeC4tC7guKIuX+C4gS7guIQuX+C4qi7guIQuX+C4gS7guKIuX+C4lS7guIQuX+C4ni7guKIuX+C4mC7guIQuJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgd2Vla2RheXM6ICfguK3guLLguJfguLTguJXguKLguYxf4LiI4Lix4LiZ4LiX4Lij4LmMX+C4reC4seC4h+C4hOC4suC4o1/guJ7guLjguJhf4Lie4Lik4Lir4Lix4Liq4Lia4LiU4Li1X+C4qOC4uOC4geC4o+C5jF/guYDguKrguLLguKPguYwnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ+C4reC4suC4l+C4tOC4leC4ouC5jF/guIjguLHguJnguJfguKPguYxf4Lit4Lix4LiH4LiE4Liy4LijX+C4nuC4uOC4mF/guJ7guKTguKvguLHguKpf4Lio4Li44LiB4Lij4LmMX+C5gOC4quC4suC4o+C5jCcuc3BsaXQoJ18nKSwgLy8geWVzLCB0aHJlZSBjaGFyYWN0ZXJzIGRpZmZlcmVuY2VcclxuICB3ZWVrZGF5c01pbjogJ+C4reC4si5f4LiILl/guK0uX+C4ni5f4Lie4LikLl/guKguX+C4qi4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIOC5gOC4p+C4peC4siBIOm1tJyxcclxuICAgIExMTEw6ICfguKfguLHguJlkZGRk4LiX4Li14LmIIEQgTU1NTSBZWVlZIOC5gOC4p+C4peC4siBIOm1tJ1xyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL+C4geC5iOC4reC4meC5gOC4l+C4teC5iOC4ouC4h3zguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcvLFxyXG4gIGlzUE0oaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gJ+C4q+C4peC4seC4h+C5gOC4l+C4teC5iOC4ouC4hyc7XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuICfguIHguYjguK3guJnguYDguJfguLXguYjguKLguIcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICfguKvguKXguLHguIfguYDguJfguLXguYjguKLguIcnO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdb4Lin4Lix4LiZ4LiZ4Li14LmJIOC5gOC4p+C4peC4sl0gTFQnLFxyXG4gICAgbmV4dERheTogJ1vguJ7guKPguLjguYjguIfguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGRb4Lir4LiZ4LmJ4LiyIOC5gOC4p+C4peC4sl0gTFQnLFxyXG4gICAgbGFzdERheTogJ1vguYDguKHguLfguYjguK3guKfguLLguJnguJnguLXguYkg4LmA4Lin4Lil4LiyXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1vguKfguLHguJldZGRkZFvguJfguLXguYjguYHguKXguYnguKcg4LmA4Lin4Lil4LiyXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ+C4reC4teC4gSAlcycsXHJcbiAgICBwYXN0OiAnJXPguJfguLXguYjguYHguKXguYnguKcnLFxyXG4gICAgczogJ+C5hOC4oeC5iOC4geC4teC5iOC4p+C4tOC4meC4suC4l+C4tScsXHJcbiAgICBzczogJyVkIOC4p+C4tOC4meC4suC4l+C4tScsXHJcbiAgICBtOiAnMSDguJnguLLguJfguLUnLFxyXG4gICAgbW06ICclZCDguJnguLLguJfguLUnLFxyXG4gICAgaDogJzEg4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcclxuICAgIGhoOiAnJWQg4LiK4Lix4LmI4Lin4LmC4Lih4LiHJyxcclxuICAgIGQ6ICcxIOC4p+C4seC4mScsXHJcbiAgICBkZDogJyVkIOC4p+C4seC4mScsXHJcbiAgICBNOiAnMSDguYDguJTguLfguK3guJknLFxyXG4gICAgTU06ICclZCDguYDguJTguLfguK3guJknLFxyXG4gICAgeTogJzEg4Lib4Li1JyxcclxuICAgIHl5OiAnJWQg4Lib4Li1J1xyXG4gIH1cclxufTtcclxuIl19