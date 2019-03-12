/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getWeek } from '../units/week';
import { getDayOfWeek } from '../units/day-of-week';
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */
function plural(word, num) {
    let /** @type {?} */ forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    let /** @type {?} */ format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    return num + ' ' + plural(format[key], +num);
}
let /** @type {?} */ monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
export const /** @type {?} */ ruLocale = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        nextWeek(date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        lastWeek(date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural,
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: 'час',
        hh: relativeTimeWithPlural,
        d: 'день',
        dd: relativeTimeWithPlural,
        M: 'месяц',
        MM: relativeTimeWithPlural,
        y: 'год',
        yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        return /^(дня|вечера)$/.test(input);
    },
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    ordinal(_num, period) {
        const /** @type {?} */ num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return num + '-й';
            case 'D':
                return num + '-го';
            case 'w':
            case 'W':
                return num + '-я';
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3J1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQVFwRCxnQkFBZ0IsSUFBWSxFQUFFLEdBQVc7SUFDdkMscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3RKOzs7Ozs7O0FBRUQsZ0NBQWdDLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVc7SUFDOUUscUJBQUksTUFBTSxHQUE0QjtRQUNwQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBQ3ZFLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFDakUsRUFBRSxFQUFFLGdCQUFnQjtRQUNwQixFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsc0JBQXNC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SyxDQUFDO1lBQ3JCLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BCO2dCQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xyXG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBSdXNzaWFuIFtydV1cclxuLy8hIGF1dGhvciA6IFZpa3Rvcm1pbmF0b3IgOiBodHRwczovL2dpdGh1Yi5jb20vVmlrdG9ybWluYXRvclxyXG4vLyEgQXV0aG9yIDogTWVuZWxpb24gRWxlbnPDumxlIDogaHR0cHM6Ly9naXRodWIuY29tL09pcmVcclxuLy8hIGF1dGhvciA6INCa0L7RgNC10L3QsdC10YDQsyDQnNCw0YDQuiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zb2NrZXRwYWlyXHJcblxyXG5mdW5jdGlvbiBwbHVyYWwod29yZDogc3RyaW5nLCBudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgbGV0IGZvcm1zID0gd29yZC5zcGxpdCgnXycpO1xyXG4gIHJldHVybiBudW0gJSAxMCA9PT0gMSAmJiBudW0gJSAxMDAgIT09IDExID8gZm9ybXNbMF0gOiAobnVtICUgMTAgPj0gMiAmJiBudW0gJSAxMCA8PSA0ICYmIChudW0gJSAxMDAgPCAxMCB8fCBudW0gJSAxMDAgPj0gMjApID8gZm9ybXNbMV0gOiBmb3Jtc1syXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHNzOiB3aXRob3V0U3VmZml4ID8gJ9GB0LXQutGD0L3QtNCwX9GB0LXQutGD0L3QtNGLX9GB0LXQutGD0L3QtCcgOiAn0YHQtdC60YPQvdC00YNf0YHQtdC60YPQvdC00Ytf0YHQtdC60YPQvdC0JyxcclxuICAgIG1tOiB3aXRob3V0U3VmZml4ID8gJ9C80LjQvdGD0YLQsF/QvNC40L3Rg9GC0Ytf0LzQuNC90YPRgicgOiAn0LzQuNC90YPRgtGDX9C80LjQvdGD0YLRi1/QvNC40L3Rg9GCJyxcclxuICAgIGhoOiAn0YfQsNGBX9GH0LDRgdCwX9GH0LDRgdC+0LInLFxyXG4gICAgZGQ6ICfQtNC10L3RjF/QtNC90Y9f0LTQvdC10LknLFxyXG4gICAgTU06ICfQvNC10YHRj9GGX9C80LXRgdGP0YbQsF/QvNC10YHRj9GG0LXQsicsXHJcbiAgICB5eTogJ9Cz0L7QtF/Qs9C+0LTQsF/Qu9C10YInXHJcbiAgfTtcclxuICBpZiAoa2V5ID09PSAnbScpIHtcclxuICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ9C80LjQvdGD0YLQsCcgOiAn0LzQuNC90YPRgtGDJztcclxuICB9XHJcbiAgcmV0dXJuIG51bSArICcgJyArIHBsdXJhbChmb3JtYXRba2V5XSwgK251bSk7XHJcbn1cclxuXHJcbmxldCBtb250aHNQYXJzZSA9IFsvXtGP0L3Qsi9pLCAvXtGE0LXQsi9pLCAvXtC80LDRgC9pLCAvXtCw0L/RgC9pLCAvXtC80LBb0LnRj10vaSwgL17QuNGO0L0vaSwgL17QuNGO0LsvaSwgL17QsNCy0LMvaSwgL17RgdC10L0vaSwgL17QvtC60YIvaSwgL17QvdC+0Y8vaSwgL17QtNC10LovaV07XHJcblxyXG4vLyBodHRwOi8vbmV3LmdyYW1vdGEucnUvc3ByYXZrYS9ydWxlcy8xMzktcHJvcCA6IMKnIDEwM1xyXG4vLyDQodC+0LrRgNCw0YnQtdC90LjRjyDQvNC10YHRj9GG0LXQsjogaHR0cDovL25ldy5ncmFtb3RhLnJ1L3NwcmF2a2EvYnVyby9zZWFyY2gtYW5zd2VyP3M9MjQyNjM3XHJcbi8vIENMRFIgZGF0YTogICAgICAgICAgaHR0cDovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8yOC9zdW1tYXJ5L3J1Lmh0bWwjMTc1M1xyXG5leHBvcnQgY29uc3QgcnVMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3J1JyxcclxuICBtb250aHM6IHtcclxuICAgIGZvcm1hdDogJ9GP0L3QstCw0YDRj1/RhNC10LLRgNCw0LvRj1/QvNCw0YDRgtCwX9Cw0L/RgNC10LvRj1/QvNCw0Y9f0LjRjtC90Y9f0LjRjtC70Y9f0LDQstCz0YPRgdGC0LBf0YHQtdC90YLRj9Cx0YDRj1/QvtC60YLRj9Cx0YDRj1/QvdC+0Y/QsdGA0Y9f0LTQtdC60LDQsdGA0Y8nLnNwbGl0KCdfJyksXHJcbiAgICBzdGFuZGFsb25lOiAn0Y/QvdCy0LDRgNGMX9GE0LXQstGA0LDQu9GMX9C80LDRgNGCX9Cw0L/RgNC10LvRjF/QvNCw0Llf0LjRjtC90Yxf0LjRjtC70Yxf0LDQstCz0YPRgdGCX9GB0LXQvdGC0Y/QsdGA0Yxf0L7QutGC0Y/QsdGA0Yxf0L3QvtGP0LHRgNGMX9C00LXQutCw0LHRgNGMJy5zcGxpdCgnXycpXHJcbiAgfSxcclxuICBtb250aHNTaG9ydDoge1xyXG4gICAgLy8g0L/QviBDTERSINC40LzQtdC90L3QviBcItC40Y7Quy5cIiDQuCBcItC40Y7QvS5cIiwg0L3QviDQutCw0LrQvtC5INGB0LzRi9GB0Lsg0LzQtdC90Y/RgtGMINCx0YPQutCy0YMg0L3QsCDRgtC+0YfQutGDID9cclxuICAgIGZvcm1hdDogJ9GP0L3Qsi5f0YTQtdCy0YAuX9C80LDRgC5f0LDQv9GALl/QvNCw0Y9f0LjRjtC90Y9f0LjRjtC70Y9f0LDQstCzLl/RgdC10L3Rgi5f0L7QutGCLl/QvdC+0Y/QsS5f0LTQtdC6Licuc3BsaXQoJ18nKSxcclxuICAgIHN0YW5kYWxvbmU6ICfRj9C90LIuX9GE0LXQstGALl/QvNCw0YDRgl/QsNC/0YAuX9C80LDQuV/QuNGO0L3RjF/QuNGO0LvRjF/QsNCy0LMuX9GB0LXQvdGCLl/QvtC60YIuX9C90L7Rj9CxLl/QtNC10LouJy5zcGxpdCgnXycpXHJcbiAgfSxcclxuICB3ZWVrZGF5czoge1xyXG4gICAgc3RhbmRhbG9uZTogJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LVf0L/QvtC90LXQtNC10LvRjNC90LjQul/QstGC0L7RgNC90LjQul/RgdGA0LXQtNCwX9GH0LXRgtCy0LXRgNCzX9C/0Y/RgtC90LjRhtCwX9GB0YPQsdCx0L7RgtCwJy5zcGxpdCgnXycpLFxyXG4gICAgZm9ybWF0OiAn0LLQvtGB0LrRgNC10YHQtdC90YzQtV/Qv9C+0L3QtdC00LXQu9GM0L3QuNC6X9Cy0YLQvtGA0L3QuNC6X9GB0YDQtdC00YNf0YfQtdGC0LLQtdGA0LNf0L/Rj9GC0L3QuNGG0YNf0YHRg9Cx0LHQvtGC0YMnLnNwbGl0KCdfJyksXHJcbiAgICBpc0Zvcm1hdDogL1xcWyA/W9CS0LJdID8oPzrQv9GA0L7RiNC70YPRjnzRgdC70LXQtNGD0Y7RidGD0Y580Y3RgtGDKT8gP1xcXSA/ZGRkZC9cclxuICB9LFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfQstGBX9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAn0LLRgV/Qv9C9X9Cy0YJf0YHRgF/Rh9GCX9C/0YJf0YHQsScuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZSxcclxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG5cclxuICAvLyDQv9C+0LvQvdGL0LUg0L3QsNC30LLQsNC90LjRjyDRgSDQv9Cw0LTQtdC20LDQvNC4LCDQv9C+INGC0YDQuCDQsdGD0LrQstGLLCDQtNC70Y8g0L3QtdC60L7RgtC+0YDRi9GFLCDQv9C+IDQg0LHRg9C60LLRiywg0YHQvtC60YDQsNGJ0LXQvdC40Y8g0YEg0YLQvtGH0LrQvtC5INC4INCx0LXQtyDRgtC+0YfQutC4XHJcbiAgbW9udGhzUmVnZXg6IC9eKNGP0L3QstCw0YBb0YzRj1180Y/QvdCyXFwuP3zRhNC10LLRgNCw0Ltb0YzRj1180YTQtdCy0YA/XFwuP3zQvNCw0YDRgtCwP3zQvNCw0YBcXC4/fNCw0L/RgNC10Ltb0YzRj1180LDQv9GAXFwuP3zQvNCwW9C50Y9dfNC40Y7QvVvRjNGPXXzQuNGO0L1cXC4/fNC40Y7Qu1vRjNGPXXzQuNGO0LtcXC4/fNCw0LLQs9GD0YHRgtCwP3zQsNCy0LNcXC4/fNGB0LXQvdGC0Y/QsdGAW9GM0Y9dfNGB0LXQvdGCP1xcLj980L7QutGC0Y/QsdGAW9GM0Y9dfNC+0LrRglxcLj980L3QvtGP0LHRgFvRjNGPXXzQvdC+0Y/QsT9cXC4/fNC00LXQutCw0LHRgFvRjNGPXXzQtNC10LpcXC4/KS9pLFxyXG5cclxuICAvLyDQutC+0L/QuNGPINC/0YDQtdC00YvQtNGD0YnQtdCz0L5cclxuICBtb250aHNTaG9ydFJlZ2V4OiAvXijRj9C90LLQsNGAW9GM0Y9dfNGP0L3QslxcLj980YTQtdCy0YDQsNC7W9GM0Y9dfNGE0LXQstGAP1xcLj980LzQsNGA0YLQsD980LzQsNGAXFwuP3zQsNC/0YDQtdC7W9GM0Y9dfNCw0L/RgFxcLj980LzQsFvQudGPXXzQuNGO0L1b0YzRj1180LjRjtC9XFwuP3zQuNGO0Ltb0YzRj1180LjRjtC7XFwuP3zQsNCy0LPRg9GB0YLQsD980LDQstCzXFwuP3zRgdC10L3RgtGP0LHRgFvRjNGPXXzRgdC10L3Rgj9cXC4/fNC+0LrRgtGP0LHRgFvRjNGPXXzQvtC60YJcXC4/fNC90L7Rj9Cx0YBb0YzRj1180L3QvtGP0LE/XFwuP3zQtNC10LrQsNCx0YBb0YzRj1180LTQtdC6XFwuPykvaSxcclxuXHJcbiAgLy8g0L/QvtC70L3Ri9C1INC90LDQt9Cy0LDQvdC40Y8g0YEg0L/QsNC00LXQttCw0LzQuFxyXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXijRj9C90LLQsNGAW9GP0YxdfNGE0LXQstGA0LDQu1vRj9GMXXzQvNCw0YDRgtCwP3zQsNC/0YDQtdC7W9GP0YxdfNC80LBb0Y/QuV180LjRjtC9W9GP0YxdfNC40Y7Qu1vRj9GMXXzQsNCy0LPRg9GB0YLQsD980YHQtdC90YLRj9Cx0YBb0Y/RjF180L7QutGC0Y/QsdGAW9GP0YxdfNC90L7Rj9Cx0YBb0Y/RjF180LTQtdC60LDQsdGAW9GP0YxdKS9pLFxyXG5cclxuICAvLyDQktGL0YDQsNC20LXQvdC40LUsINC60L7RgtC+0YDQvtC1INGB0L7QvtGC0LLQtdGB0YLQstGD0LXRgiDRgtC+0LvRjNC60L4g0YHQvtC60YDQsNGJ0ZHQvdC90YvQvCDRhNC+0YDQvNCw0LxcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXijRj9C90LJcXC580YTQtdCy0YA/XFwufNC80LDRgFvRgi5dfNCw0L/RgFxcLnzQvNCwW9GP0LldfNC40Y7QvVvRjNGPLl180LjRjtC7W9GM0Y8uXXzQsNCy0LNcXC580YHQtdC90YI/XFwufNC+0LrRglxcLnzQvdC+0Y/QsT9cXC580LTQtdC6XFwuKS9pLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQuTU0uWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZINCzLicsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDQsy4sIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZINCzLiwgSDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW9Ch0LXQs9C+0LTQvdGPINCyXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW9CX0LDQstGC0YDQsCDQsl0gTFQnLFxyXG4gICAgbGFzdERheTogJ1vQktGH0LXRgNCwINCyXSBMVCcsXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlLCBub3c6IERhdGUpIHtcclxuICAgICAgaWYgKGdldFdlZWsobm93KSAhPT0gZ2V0V2VlayhkYXRlKSkge1xyXG4gICAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHJldHVybiAnW9CSINGB0LvQtdC00YPRjtGJ0LXQtV0gZGRkZCBb0LJdIExUJztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgcmV0dXJuICdb0JIg0YHQu9C10LTRg9GO0YnQuNC5XSBkZGRkIFvQsl0gTFQnO1xyXG4gICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICByZXR1cm4gJ1vQkiDRgdC70LXQtNGD0Y7RidGD0Y5dIGRkZGQgW9CyXSBMVCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDIpIHtcclxuICAgICAgICAgIHJldHVybiAnW9CS0L5dIGRkZGQgW9CyXSBMVCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnW9CSXSBkZGRkIFvQsl0gTFQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUsIG5vdzogRGF0ZSkge1xyXG4gICAgICBpZiAoZ2V0V2Vlayhub3cpICE9PSBnZXRXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgcmV0dXJuICdb0JIg0L/RgNC+0YjQu9C+0LVdIGRkZGQgW9CyXSBMVCc7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnW9CSINC/0YDQvtGI0LvRi9C5XSBkZGRkIFvQsl0gTFQnO1xyXG4gICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICByZXR1cm4gJ1vQkiDQv9GA0L7RiNC70YPRjl0gZGRkZCBb0LJdIExUJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGdldERheU9mV2VlayhkYXRlKSA9PT0gMikge1xyXG4gICAgICAgICAgcmV0dXJuICdb0JLQvl0gZGRkZCBb0LJdIExUJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdb0JJdIGRkZGQgW9CyXSBMVCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICfRh9C10YDQtdC3ICVzJyxcclxuICAgIHBhc3Q6ICclcyDQvdCw0LfQsNC0JyxcclxuICAgIHM6ICfQvdC10YHQutC+0LvRjNC60L4g0YHQtdC60YPQvdC0JyxcclxuICAgIHNzOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIG1tOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgaDogJ9GH0LDRgScsXHJcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIGQ6ICfQtNC10L3RjCcsXHJcbiAgICBkZDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIE06ICfQvNC10YHRj9GGJyxcclxuICAgIE1NOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgeTogJ9Cz0L7QtCcsXHJcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL9C90L7Rh9C4fNGD0YLRgNCwfNC00L3Rj3zQstC10YfQtdGA0LAvaSxcclxuICBpc1BNKGlucHV0KSB7XHJcbiAgICByZXR1cm4gL14o0LTQvdGPfNCy0LXRh9C10YDQsCkkLy50ZXN0KGlucHV0KTtcclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCA0KSB7XHJcbiAgICAgIHJldHVybiAn0L3QvtGH0LgnO1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuICfRg9GC0YDQsCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xyXG4gICAgICByZXR1cm4gJ9C00L3Rjyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ9Cy0LXRh9C10YDQsCc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKNC5fNCz0L580Y8pLyxcclxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnLdC5JztcclxuICAgICAgY2FzZSAnRCc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICct0LPQvic7XHJcbiAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICBjYXNlICdXJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJy3Rjyc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXX0=