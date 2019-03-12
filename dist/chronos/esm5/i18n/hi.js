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
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
var /** @type {?} */ symbolMap = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
}, /** @type {?} */
numberMap = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};
export var /** @type {?} */ hiLocale = {
    abbr: 'hi',
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        ss: '%d सेकंड',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVlBLHFCQUFJLFNBQVMsR0FBNEI7SUFDckMsQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7Q0FDUDtBQUNELFNBQVMsR0FBNEI7SUFDbkMsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDVCxDQUFDO0FBRUosTUFBTSxDQUFDLHFCQUFNLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSw2RUFBNkUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hHLFdBQVcsRUFBRSw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLHNEQUFzRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0UsYUFBYSxFQUFFLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0QsV0FBVyxFQUFFLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7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O1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDaEI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNkO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEhpbmRpIFtoaV1cclxuLy8hIGF1dGhvciA6IE1heWFuayBTaW5naGFsIDogaHR0cHM6Ly9naXRodWIuY29tL21heWFua3NpbmdoYWxcclxuXHJcbmxldCBzeW1ib2xNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgMTogJ+ClpycsXHJcbiAgICAyOiAn4KWoJyxcclxuICAgIDM6ICfgpaknLFxyXG4gICAgNDogJ+ClqicsXHJcbiAgICA1OiAn4KWrJyxcclxuICAgIDY6ICfgpawnLFxyXG4gICAgNzogJ+ClrScsXHJcbiAgICA4OiAn4KWuJyxcclxuICAgIDk6ICfgpa8nLFxyXG4gICAgMDogJ+ClpidcclxuICB9LFxyXG4gIG51bWJlck1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICAn4KWnJzogJzEnLFxyXG4gICAgJ+ClqCc6ICcyJyxcclxuICAgICfgpaknOiAnMycsXHJcbiAgICAn4KWqJzogJzQnLFxyXG4gICAgJ+Clqyc6ICc1JyxcclxuICAgICfgpawnOiAnNicsXHJcbiAgICAn4KWtJzogJzcnLFxyXG4gICAgJ+Clric6ICc4JyxcclxuICAgICfgpa8nOiAnOScsXHJcbiAgICAn4KWmJzogJzAnXHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaGknLFxyXG4gIG1vbnRoczogJ+CknOCkqOCkteCksOClgF/gpKvgpLzgpLDgpLXgpLDgpYBf4KSu4KS+4KSw4KWN4KSaX+CkheCkquCljeCksOCliOCksl/gpK7gpIhf4KSc4KWC4KSoX+CknOClgeCksuCkvuCkiF/gpIXgpJfgpLjgpY3gpKRf4KS44KS/4KSk4KSu4KWN4KSs4KSwX+CkheCkleCljeCkn+ClguCkrOCksF/gpKjgpLXgpK7gpY3gpKzgpLBf4KSm4KS/4KS44KSu4KWN4KSs4KSwJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAn4KSc4KSoLl/gpKvgpLzgpLAuX+CkruCkvuCksOCljeCkml/gpIXgpKrgpY3gpLDgpYguX+CkruCkiF/gpJzgpYLgpKhf4KSc4KWB4KSyLl/gpIXgpJcuX+CkuOCkv+CkpC5f4KSF4KSV4KWN4KSf4KWCLl/gpKjgpLUuX+CkpuCkv+CkuC4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ+CksOCkteCkv+CkteCkvuCksF/gpLjgpYvgpK7gpLXgpL7gpLBf4KSu4KSC4KSX4KSy4KS14KS+4KSwX+CkrOClgeCkp+CkteCkvuCksF/gpJfgpYHgpLDgpYLgpLXgpL7gpLBf4KS24KWB4KSV4KWN4KSw4KS14KS+4KSwX+CktuCkqOCkv+CkteCkvuCksCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAn4KSw4KS14KS/X+CkuOCli+Ckrl/gpK7gpILgpJfgpLJf4KSs4KWB4KSnX+Ckl+ClgeCksOClgl/gpLbgpYHgpJXgpY3gpLBf4KS24KSo4KS/Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAn4KSwX+CkuOCli1/gpK7gpIJf4KSs4KWBX+Ckl+ClgV/gpLbgpYFf4KS2Jy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0EgaDptbSDgpKzgpJzgpYcnLFxyXG4gICAgTFRTOiAnQSBoOm1tOnNzIOCkrOCknOClhycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZLCBBIGg6bW0g4KSs4KSc4KWHJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSwgQSBoOm1tIOCkrOCknOClhydcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW+CkhuCknF0gTFQnLFxyXG4gICAgbmV4dERheTogJ1vgpJXgpLJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCwgTFQnLFxyXG4gICAgbGFzdERheTogJ1vgpJXgpLJdIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW+CkquCkv+Ckm+CksuClh10gZGRkZCwgTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICclcyDgpK7gpYfgpIInLFxyXG4gICAgcGFzdDogJyVzIOCkquCkueCksuClhycsXHJcbiAgICBzOiAn4KSV4KWB4KSbIOCkueClgCDgpJXgpY3gpLfgpKMnLFxyXG4gICAgc3M6ICclZCDgpLjgpYfgpJXgpILgpKEnLFxyXG4gICAgbTogJ+Ckj+CklSDgpK7gpL/gpKjgpJ8nLFxyXG4gICAgbW06ICclZCDgpK7gpL/gpKjgpJ8nLFxyXG4gICAgaDogJ+Ckj+CklSDgpJjgpILgpJ/gpL4nLFxyXG4gICAgaGg6ICclZCDgpJjgpILgpJ/gpYcnLFxyXG4gICAgZDogJ+Ckj+CklSDgpKbgpL/gpKgnLFxyXG4gICAgZGQ6ICclZCDgpKbgpL/gpKgnLFxyXG4gICAgTTogJ+Ckj+CklSDgpK7gpLngpYDgpKjgpYcnLFxyXG4gICAgTU06ICclZCDgpK7gpLngpYDgpKjgpYcnLFxyXG4gICAgeTogJ+Ckj+CklSDgpLXgpLDgpY3gpLcnLFxyXG4gICAgeXk6ICclZCDgpLXgpLDgpY3gpLcnXHJcbiAgfSxcclxuICBwcmVwYXJzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vgpafgpajgpangpargpavgpazgpa3gpa7gpa/gpaZdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIEhpbmRpIG5vdGF0aW9uIGZvciBtZXJpZGllbXMgYXJlIHF1aXRlIGZ1enp5IGluIHByYWN0aWNlLiBXaGlsZSB0aGVyZSBleGlzdHNcclxuICAvLyBhIHJpZ2lkIG5vdGlvbiBvZiBhICdQYWhhcicgaXQgaXMgbm90IHVzZWQgYXMgcmlnaWRseSBpbiBtb2Rlcm4gSGluZGkuXHJcbiAgbWVyaWRpZW1QYXJzZTogL+CksOCkvuCkpHzgpLjgpYHgpKzgpLl84KSm4KWL4KSq4KS54KSwfOCktuCkvuCkri8sXHJcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XHJcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcclxuICAgICAgaG91ciA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVyaWRpZW0gPT09ICfgpLDgpL7gpKQnKSB7XHJcbiAgICAgIHJldHVybiBob3VyIDwgNCA/IGhvdXIgOiBob3VyICsgMTI7XHJcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAn4KS44KWB4KSs4KS5Jykge1xyXG4gICAgICByZXR1cm4gaG91cjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgpKbgpYvgpKrgpLngpLAnKSB7XHJcbiAgICAgIHJldHVybiBob3VyID49IDEwID8gaG91ciA6IGhvdXIgKyAxMjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfgpLbgpL7gpK4nKSB7XHJcbiAgICAgIHJldHVybiBob3VyICsgMTI7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgNCkge1xyXG4gICAgICByZXR1cm4gJ+CksOCkvuCkpCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xyXG4gICAgICByZXR1cm4gJ+CkuOClgeCkrOCkuSc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xyXG4gICAgICByZXR1cm4gJ+CkpuCli+CkquCkueCksCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAyMCkge1xyXG4gICAgICByZXR1cm4gJ+CktuCkvuCkric7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ+CksOCkvuCkpCc7XHJcbiAgICB9XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=