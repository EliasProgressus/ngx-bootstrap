/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
import { getDayOfWeek } from '../units/day-of-week';
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
export var /** @type {?} */ ptBrLocale = {
    abbr: 'pt-br',
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYnIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL3B0LWJyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBTXBELE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsMEZBQTBGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RyxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsZ0ZBQWdGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNyRyxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsR0FBRyxFQUFFLGtDQUFrQztRQUN2QyxJQUFJLEVBQUUsd0NBQXdDO0tBQy9DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsZUFBZTtRQUN4QixRQUFROzs7O2tCQUFDLElBQVU7WUFDakIsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsdUJBQXVCLENBQUMsQ0FBQztnQkFDekIsdUJBQXVCLENBQUM7U0FDM0I7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsVUFBVTtRQUNoQixDQUFDLEVBQUUsaUJBQWlCO1FBQ3BCLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxPQUFPLEVBQUUsS0FBSztDQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFBvcnR1Z3Vlc2UgKEJyYXppbCkgW3B0LWJyXVxyXG4vLyEgYXV0aG9yIDogQ2FpbyBSaWJlaXJvIFBlcmVpcmEgOiBodHRwczovL2dpdGh1Yi5jb20vY2Fpby1yaWJlaXJvLXBlcmVpcmFcclxuXHJcbmV4cG9ydCBjb25zdCBwdEJyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdwdC1icicsXHJcbiAgbW9udGhzOiAnSmFuZWlyb19GZXZlcmVpcm9fTWFyw6dvX0FicmlsX01haW9fSnVuaG9fSnVsaG9fQWdvc3RvX1NldGVtYnJvX091dHVicm9fTm92ZW1icm9fRGV6ZW1icm8nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdKYW5fRmV2X01hcl9BYnJfTWFpX0p1bl9KdWxfQWdvX1NldF9PdXRfTm92X0Rleicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ0RvbWluZ29fU2VndW5kYS1mZWlyYV9UZXLDp2EtZmVpcmFfUXVhcnRhLWZlaXJhX1F1aW50YS1mZWlyYV9TZXh0YS1mZWlyYV9Tw6FiYWRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdEb21fU2VnX1Rlcl9RdWFfUXVpX1NleF9Tw6FiJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnRG9fMsKqXzPCql80wqpfNcKqXzbCql9Tw6EnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcclxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBbw6BzXSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDoHNdIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbSG9qZSDDoHNdIExUJyxcclxuICAgIG5leHREYXk6ICdbQW1hbmjDoyDDoHNdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbw6BzXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW09udGVtIMOgc10gTFQnLFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gKGdldERheU9mV2VlayhkYXRlKSA9PT0gMCB8fCBnZXREYXlPZldlZWsoZGF0ZSkgPT09IDYpID9cclxuICAgICAgICAnW8OabHRpbW9dIGRkZGQgW8Ogc10gTFQnIDogLy8gU2F0dXJkYXkgKyBTdW5kYXlcclxuICAgICAgICAnW8OabHRpbWFdIGRkZGQgW8Ogc10gTFQnOyAvLyBNb25kYXkgLSBGcmlkYXlcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VtICVzJyxcclxuICAgIHBhc3Q6ICclcyBhdHLDoXMnLFxyXG4gICAgczogJ3BvdWNvcyBzZWd1bmRvcycsXHJcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcclxuICAgIG06ICd1bSBtaW51dG8nLFxyXG4gICAgbW06ICclZCBtaW51dG9zJyxcclxuICAgIGg6ICd1bWEgaG9yYScsXHJcbiAgICBoaDogJyVkIGhvcmFzJyxcclxuICAgIGQ6ICd1bSBkaWEnLFxyXG4gICAgZGQ6ICclZCBkaWFzJyxcclxuICAgIE06ICd1bSBtw6pzJyxcclxuICAgIE1NOiAnJWQgbWVzZXMnLFxyXG4gICAgeTogJ3VtIGFubycsXHJcbiAgICB5eTogJyVkIGFub3MnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3Cui8sXHJcbiAgb3JkaW5hbDogJyVkwronXHJcbn07XHJcbiJdfQ==