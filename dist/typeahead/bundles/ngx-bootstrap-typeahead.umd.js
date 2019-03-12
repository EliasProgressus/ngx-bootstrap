(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/forms'), require('rxjs'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/typeahead', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/forms', 'rxjs', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].typeahead = {}),global.ng.core,global.utils,global.ng.forms,global.rxjs,global.componentLoader,global.positioning,global.rxjs.operators,global.ng.common));
}(this, (function (exports,core,utils,forms,rxjs,componentLoader,positioning,operators,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /* tslint:disable */
    var /** @type {?} */ latinMap = {
        'Á': 'A',
        'Ă': 'A',
        'Ắ': 'A',
        'Ặ': 'A',
        'Ằ': 'A',
        'Ẳ': 'A',
        'Ẵ': 'A',
        'Ǎ': 'A',
        'Â': 'A',
        'Ấ': 'A',
        'Ậ': 'A',
        'Ầ': 'A',
        'Ẩ': 'A',
        'Ẫ': 'A',
        'Ä': 'A',
        'Ǟ': 'A',
        'Ȧ': 'A',
        'Ǡ': 'A',
        'Ạ': 'A',
        'Ȁ': 'A',
        'À': 'A',
        'Ả': 'A',
        'Ȃ': 'A',
        'Ā': 'A',
        'Ą': 'A',
        'Å': 'A',
        'Ǻ': 'A',
        'Ḁ': 'A',
        'Ⱥ': 'A',
        'Ã': 'A',
        'Ꜳ': 'AA',
        'Æ': 'AE',
        'Ǽ': 'AE',
        'Ǣ': 'AE',
        'Ꜵ': 'AO',
        'Ꜷ': 'AU',
        'Ꜹ': 'AV',
        'Ꜻ': 'AV',
        'Ꜽ': 'AY',
        'Ḃ': 'B',
        'Ḅ': 'B',
        'Ɓ': 'B',
        'Ḇ': 'B',
        'Ƀ': 'B',
        'Ƃ': 'B',
        'Ć': 'C',
        'Č': 'C',
        'Ç': 'C',
        'Ḉ': 'C',
        'Ĉ': 'C',
        'Ċ': 'C',
        'Ƈ': 'C',
        'Ȼ': 'C',
        'Ď': 'D',
        'Ḑ': 'D',
        'Ḓ': 'D',
        'Ḋ': 'D',
        'Ḍ': 'D',
        'Ɗ': 'D',
        'Ḏ': 'D',
        'ǲ': 'D',
        'ǅ': 'D',
        'Đ': 'D',
        'Ƌ': 'D',
        'Ǳ': 'DZ',
        'Ǆ': 'DZ',
        'É': 'E',
        'Ĕ': 'E',
        'Ě': 'E',
        'Ȩ': 'E',
        'Ḝ': 'E',
        'Ê': 'E',
        'Ế': 'E',
        'Ệ': 'E',
        'Ề': 'E',
        'Ể': 'E',
        'Ễ': 'E',
        'Ḙ': 'E',
        'Ë': 'E',
        'Ė': 'E',
        'Ẹ': 'E',
        'Ȅ': 'E',
        'È': 'E',
        'Ẻ': 'E',
        'Ȇ': 'E',
        'Ē': 'E',
        'Ḗ': 'E',
        'Ḕ': 'E',
        'Ę': 'E',
        'Ɇ': 'E',
        'Ẽ': 'E',
        'Ḛ': 'E',
        'Ꝫ': 'ET',
        'Ḟ': 'F',
        'Ƒ': 'F',
        'Ǵ': 'G',
        'Ğ': 'G',
        'Ǧ': 'G',
        'Ģ': 'G',
        'Ĝ': 'G',
        'Ġ': 'G',
        'Ɠ': 'G',
        'Ḡ': 'G',
        'Ǥ': 'G',
        'Ḫ': 'H',
        'Ȟ': 'H',
        'Ḩ': 'H',
        'Ĥ': 'H',
        'Ⱨ': 'H',
        'Ḧ': 'H',
        'Ḣ': 'H',
        'Ḥ': 'H',
        'Ħ': 'H',
        'Í': 'I',
        'Ĭ': 'I',
        'Ǐ': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ḯ': 'I',
        'İ': 'I',
        'Ị': 'I',
        'Ȉ': 'I',
        'Ì': 'I',
        'Ỉ': 'I',
        'Ȋ': 'I',
        'Ī': 'I',
        'Į': 'I',
        'Ɨ': 'I',
        'Ĩ': 'I',
        'Ḭ': 'I',
        'Ꝺ': 'D',
        'Ꝼ': 'F',
        'Ᵹ': 'G',
        'Ꞃ': 'R',
        'Ꞅ': 'S',
        'Ꞇ': 'T',
        'Ꝭ': 'IS',
        'Ĵ': 'J',
        'Ɉ': 'J',
        'Ḱ': 'K',
        'Ǩ': 'K',
        'Ķ': 'K',
        'Ⱪ': 'K',
        'Ꝃ': 'K',
        'Ḳ': 'K',
        'Ƙ': 'K',
        'Ḵ': 'K',
        'Ꝁ': 'K',
        'Ꝅ': 'K',
        'Ĺ': 'L',
        'Ƚ': 'L',
        'Ľ': 'L',
        'Ļ': 'L',
        'Ḽ': 'L',
        'Ḷ': 'L',
        'Ḹ': 'L',
        'Ⱡ': 'L',
        'Ꝉ': 'L',
        'Ḻ': 'L',
        'Ŀ': 'L',
        'Ɫ': 'L',
        'ǈ': 'L',
        'Ł': 'L',
        'Ǉ': 'LJ',
        'Ḿ': 'M',
        'Ṁ': 'M',
        'Ṃ': 'M',
        'Ɱ': 'M',
        'Ń': 'N',
        'Ň': 'N',
        'Ņ': 'N',
        'Ṋ': 'N',
        'Ṅ': 'N',
        'Ṇ': 'N',
        'Ǹ': 'N',
        'Ɲ': 'N',
        'Ṉ': 'N',
        'Ƞ': 'N',
        'ǋ': 'N',
        'Ñ': 'N',
        'Ǌ': 'NJ',
        'Ó': 'O',
        'Ŏ': 'O',
        'Ǒ': 'O',
        'Ô': 'O',
        'Ố': 'O',
        'Ộ': 'O',
        'Ồ': 'O',
        'Ổ': 'O',
        'Ỗ': 'O',
        'Ö': 'O',
        'Ȫ': 'O',
        'Ȯ': 'O',
        'Ȱ': 'O',
        'Ọ': 'O',
        'Ő': 'O',
        'Ȍ': 'O',
        'Ò': 'O',
        'Ỏ': 'O',
        'Ơ': 'O',
        'Ớ': 'O',
        'Ợ': 'O',
        'Ờ': 'O',
        'Ở': 'O',
        'Ỡ': 'O',
        'Ȏ': 'O',
        'Ꝋ': 'O',
        'Ꝍ': 'O',
        'Ō': 'O',
        'Ṓ': 'O',
        'Ṑ': 'O',
        'Ɵ': 'O',
        'Ǫ': 'O',
        'Ǭ': 'O',
        'Ø': 'O',
        'Ǿ': 'O',
        'Õ': 'O',
        'Ṍ': 'O',
        'Ṏ': 'O',
        'Ȭ': 'O',
        'Ƣ': 'OI',
        'Ꝏ': 'OO',
        'Ɛ': 'E',
        'Ɔ': 'O',
        'Ȣ': 'OU',
        'Ṕ': 'P',
        'Ṗ': 'P',
        'Ꝓ': 'P',
        'Ƥ': 'P',
        'Ꝕ': 'P',
        'Ᵽ': 'P',
        'Ꝑ': 'P',
        'Ꝙ': 'Q',
        'Ꝗ': 'Q',
        'Ŕ': 'R',
        'Ř': 'R',
        'Ŗ': 'R',
        'Ṙ': 'R',
        'Ṛ': 'R',
        'Ṝ': 'R',
        'Ȑ': 'R',
        'Ȓ': 'R',
        'Ṟ': 'R',
        'Ɍ': 'R',
        'Ɽ': 'R',
        'Ꜿ': 'C',
        'Ǝ': 'E',
        'Ś': 'S',
        'Ṥ': 'S',
        'Š': 'S',
        'Ṧ': 'S',
        'Ş': 'S',
        'Ŝ': 'S',
        'Ș': 'S',
        'Ṡ': 'S',
        'Ṣ': 'S',
        'Ṩ': 'S',
        'Ť': 'T',
        'Ţ': 'T',
        'Ṱ': 'T',
        'Ț': 'T',
        'Ⱦ': 'T',
        'Ṫ': 'T',
        'Ṭ': 'T',
        'Ƭ': 'T',
        'Ṯ': 'T',
        'Ʈ': 'T',
        'Ŧ': 'T',
        'Ɐ': 'A',
        'Ꞁ': 'L',
        'Ɯ': 'M',
        'Ʌ': 'V',
        'Ꜩ': 'TZ',
        'Ú': 'U',
        'Ŭ': 'U',
        'Ǔ': 'U',
        'Û': 'U',
        'Ṷ': 'U',
        'Ü': 'U',
        'Ǘ': 'U',
        'Ǚ': 'U',
        'Ǜ': 'U',
        'Ǖ': 'U',
        'Ṳ': 'U',
        'Ụ': 'U',
        'Ű': 'U',
        'Ȕ': 'U',
        'Ù': 'U',
        'Ủ': 'U',
        'Ư': 'U',
        'Ứ': 'U',
        'Ự': 'U',
        'Ừ': 'U',
        'Ử': 'U',
        'Ữ': 'U',
        'Ȗ': 'U',
        'Ū': 'U',
        'Ṻ': 'U',
        'Ų': 'U',
        'Ů': 'U',
        'Ũ': 'U',
        'Ṹ': 'U',
        'Ṵ': 'U',
        'Ꝟ': 'V',
        'Ṿ': 'V',
        'Ʋ': 'V',
        'Ṽ': 'V',
        'Ꝡ': 'VY',
        'Ẃ': 'W',
        'Ŵ': 'W',
        'Ẅ': 'W',
        'Ẇ': 'W',
        'Ẉ': 'W',
        'Ẁ': 'W',
        'Ⱳ': 'W',
        'Ẍ': 'X',
        'Ẋ': 'X',
        'Ý': 'Y',
        'Ŷ': 'Y',
        'Ÿ': 'Y',
        'Ẏ': 'Y',
        'Ỵ': 'Y',
        'Ỳ': 'Y',
        'Ƴ': 'Y',
        'Ỷ': 'Y',
        'Ỿ': 'Y',
        'Ȳ': 'Y',
        'Ɏ': 'Y',
        'Ỹ': 'Y',
        'Ź': 'Z',
        'Ž': 'Z',
        'Ẑ': 'Z',
        'Ⱬ': 'Z',
        'Ż': 'Z',
        'Ẓ': 'Z',
        'Ȥ': 'Z',
        'Ẕ': 'Z',
        'Ƶ': 'Z',
        'Ĳ': 'IJ',
        'Œ': 'OE',
        'ᴀ': 'A',
        'ᴁ': 'AE',
        'ʙ': 'B',
        'ᴃ': 'B',
        'ᴄ': 'C',
        'ᴅ': 'D',
        'ᴇ': 'E',
        'ꜰ': 'F',
        'ɢ': 'G',
        'ʛ': 'G',
        'ʜ': 'H',
        'ɪ': 'I',
        'ʁ': 'R',
        'ᴊ': 'J',
        'ᴋ': 'K',
        'ʟ': 'L',
        'ᴌ': 'L',
        'ᴍ': 'M',
        'ɴ': 'N',
        'ᴏ': 'O',
        'ɶ': 'OE',
        'ᴐ': 'O',
        'ᴕ': 'OU',
        'ᴘ': 'P',
        'ʀ': 'R',
        'ᴎ': 'N',
        'ᴙ': 'R',
        'ꜱ': 'S',
        'ᴛ': 'T',
        'ⱻ': 'E',
        'ᴚ': 'R',
        'ᴜ': 'U',
        'ᴠ': 'V',
        'ᴡ': 'W',
        'ʏ': 'Y',
        'ᴢ': 'Z',
        'á': 'a',
        'ă': 'a',
        'ắ': 'a',
        'ặ': 'a',
        'ằ': 'a',
        'ẳ': 'a',
        'ẵ': 'a',
        'ǎ': 'a',
        'â': 'a',
        'ấ': 'a',
        'ậ': 'a',
        'ầ': 'a',
        'ẩ': 'a',
        'ẫ': 'a',
        'ä': 'a',
        'ǟ': 'a',
        'ȧ': 'a',
        'ǡ': 'a',
        'ạ': 'a',
        'ȁ': 'a',
        'à': 'a',
        'ả': 'a',
        'ȃ': 'a',
        'ā': 'a',
        'ą': 'a',
        'ᶏ': 'a',
        'ẚ': 'a',
        'å': 'a',
        'ǻ': 'a',
        'ḁ': 'a',
        'ⱥ': 'a',
        'ã': 'a',
        'ꜳ': 'aa',
        'æ': 'ae',
        'ǽ': 'ae',
        'ǣ': 'ae',
        'ꜵ': 'ao',
        'ꜷ': 'au',
        'ꜹ': 'av',
        'ꜻ': 'av',
        'ꜽ': 'ay',
        'ḃ': 'b',
        'ḅ': 'b',
        'ɓ': 'b',
        'ḇ': 'b',
        'ᵬ': 'b',
        'ᶀ': 'b',
        'ƀ': 'b',
        'ƃ': 'b',
        'ɵ': 'o',
        'ć': 'c',
        'č': 'c',
        'ç': 'c',
        'ḉ': 'c',
        'ĉ': 'c',
        'ɕ': 'c',
        'ċ': 'c',
        'ƈ': 'c',
        'ȼ': 'c',
        'ď': 'd',
        'ḑ': 'd',
        'ḓ': 'd',
        'ȡ': 'd',
        'ḋ': 'd',
        'ḍ': 'd',
        'ɗ': 'd',
        'ᶑ': 'd',
        'ḏ': 'd',
        'ᵭ': 'd',
        'ᶁ': 'd',
        'đ': 'd',
        'ɖ': 'd',
        'ƌ': 'd',
        'ı': 'i',
        'ȷ': 'j',
        'ɟ': 'j',
        'ʄ': 'j',
        'ǳ': 'dz',
        'ǆ': 'dz',
        'é': 'e',
        'ĕ': 'e',
        'ě': 'e',
        'ȩ': 'e',
        'ḝ': 'e',
        'ê': 'e',
        'ế': 'e',
        'ệ': 'e',
        'ề': 'e',
        'ể': 'e',
        'ễ': 'e',
        'ḙ': 'e',
        'ë': 'e',
        'ė': 'e',
        'ẹ': 'e',
        'ȅ': 'e',
        'è': 'e',
        'ẻ': 'e',
        'ȇ': 'e',
        'ē': 'e',
        'ḗ': 'e',
        'ḕ': 'e',
        'ⱸ': 'e',
        'ę': 'e',
        'ᶒ': 'e',
        'ɇ': 'e',
        'ẽ': 'e',
        'ḛ': 'e',
        'ꝫ': 'et',
        'ḟ': 'f',
        'ƒ': 'f',
        'ᵮ': 'f',
        'ᶂ': 'f',
        'ǵ': 'g',
        'ğ': 'g',
        'ǧ': 'g',
        'ģ': 'g',
        'ĝ': 'g',
        'ġ': 'g',
        'ɠ': 'g',
        'ḡ': 'g',
        'ᶃ': 'g',
        'ǥ': 'g',
        'ḫ': 'h',
        'ȟ': 'h',
        'ḩ': 'h',
        'ĥ': 'h',
        'ⱨ': 'h',
        'ḧ': 'h',
        'ḣ': 'h',
        'ḥ': 'h',
        'ɦ': 'h',
        'ẖ': 'h',
        'ħ': 'h',
        'ƕ': 'hv',
        'í': 'i',
        'ĭ': 'i',
        'ǐ': 'i',
        'î': 'i',
        'ï': 'i',
        'ḯ': 'i',
        'ị': 'i',
        'ȉ': 'i',
        'ì': 'i',
        'ỉ': 'i',
        'ȋ': 'i',
        'ī': 'i',
        'į': 'i',
        'ᶖ': 'i',
        'ɨ': 'i',
        'ĩ': 'i',
        'ḭ': 'i',
        'ꝺ': 'd',
        'ꝼ': 'f',
        'ᵹ': 'g',
        'ꞃ': 'r',
        'ꞅ': 's',
        'ꞇ': 't',
        'ꝭ': 'is',
        'ǰ': 'j',
        'ĵ': 'j',
        'ʝ': 'j',
        'ɉ': 'j',
        'ḱ': 'k',
        'ǩ': 'k',
        'ķ': 'k',
        'ⱪ': 'k',
        'ꝃ': 'k',
        'ḳ': 'k',
        'ƙ': 'k',
        'ḵ': 'k',
        'ᶄ': 'k',
        'ꝁ': 'k',
        'ꝅ': 'k',
        'ĺ': 'l',
        'ƚ': 'l',
        'ɬ': 'l',
        'ľ': 'l',
        'ļ': 'l',
        'ḽ': 'l',
        'ȴ': 'l',
        'ḷ': 'l',
        'ḹ': 'l',
        'ⱡ': 'l',
        'ꝉ': 'l',
        'ḻ': 'l',
        'ŀ': 'l',
        'ɫ': 'l',
        'ᶅ': 'l',
        'ɭ': 'l',
        'ł': 'l',
        'ǉ': 'lj',
        'ſ': 's',
        'ẜ': 's',
        'ẛ': 's',
        'ẝ': 's',
        'ḿ': 'm',
        'ṁ': 'm',
        'ṃ': 'm',
        'ɱ': 'm',
        'ᵯ': 'm',
        'ᶆ': 'm',
        'ń': 'n',
        'ň': 'n',
        'ņ': 'n',
        'ṋ': 'n',
        'ȵ': 'n',
        'ṅ': 'n',
        'ṇ': 'n',
        'ǹ': 'n',
        'ɲ': 'n',
        'ṉ': 'n',
        'ƞ': 'n',
        'ᵰ': 'n',
        'ᶇ': 'n',
        'ɳ': 'n',
        'ñ': 'n',
        'ǌ': 'nj',
        'ó': 'o',
        'ŏ': 'o',
        'ǒ': 'o',
        'ô': 'o',
        'ố': 'o',
        'ộ': 'o',
        'ồ': 'o',
        'ổ': 'o',
        'ỗ': 'o',
        'ö': 'o',
        'ȫ': 'o',
        'ȯ': 'o',
        'ȱ': 'o',
        'ọ': 'o',
        'ő': 'o',
        'ȍ': 'o',
        'ò': 'o',
        'ỏ': 'o',
        'ơ': 'o',
        'ớ': 'o',
        'ợ': 'o',
        'ờ': 'o',
        'ở': 'o',
        'ỡ': 'o',
        'ȏ': 'o',
        'ꝋ': 'o',
        'ꝍ': 'o',
        'ⱺ': 'o',
        'ō': 'o',
        'ṓ': 'o',
        'ṑ': 'o',
        'ǫ': 'o',
        'ǭ': 'o',
        'ø': 'o',
        'ǿ': 'o',
        'õ': 'o',
        'ṍ': 'o',
        'ṏ': 'o',
        'ȭ': 'o',
        'ƣ': 'oi',
        'ꝏ': 'oo',
        'ɛ': 'e',
        'ᶓ': 'e',
        'ɔ': 'o',
        'ᶗ': 'o',
        'ȣ': 'ou',
        'ṕ': 'p',
        'ṗ': 'p',
        'ꝓ': 'p',
        'ƥ': 'p',
        'ᵱ': 'p',
        'ᶈ': 'p',
        'ꝕ': 'p',
        'ᵽ': 'p',
        'ꝑ': 'p',
        'ꝙ': 'q',
        'ʠ': 'q',
        'ɋ': 'q',
        'ꝗ': 'q',
        'ŕ': 'r',
        'ř': 'r',
        'ŗ': 'r',
        'ṙ': 'r',
        'ṛ': 'r',
        'ṝ': 'r',
        'ȑ': 'r',
        'ɾ': 'r',
        'ᵳ': 'r',
        'ȓ': 'r',
        'ṟ': 'r',
        'ɼ': 'r',
        'ᵲ': 'r',
        'ᶉ': 'r',
        'ɍ': 'r',
        'ɽ': 'r',
        'ↄ': 'c',
        'ꜿ': 'c',
        'ɘ': 'e',
        'ɿ': 'r',
        'ś': 's',
        'ṥ': 's',
        'š': 's',
        'ṧ': 's',
        'ş': 's',
        'ŝ': 's',
        'ș': 's',
        'ṡ': 's',
        'ṣ': 's',
        'ṩ': 's',
        'ʂ': 's',
        'ᵴ': 's',
        'ᶊ': 's',
        'ȿ': 's',
        'ɡ': 'g',
        'ᴑ': 'o',
        'ᴓ': 'o',
        'ᴝ': 'u',
        'ť': 't',
        'ţ': 't',
        'ṱ': 't',
        'ț': 't',
        'ȶ': 't',
        'ẗ': 't',
        'ⱦ': 't',
        'ṫ': 't',
        'ṭ': 't',
        'ƭ': 't',
        'ṯ': 't',
        'ᵵ': 't',
        'ƫ': 't',
        'ʈ': 't',
        'ŧ': 't',
        'ᵺ': 'th',
        'ɐ': 'a',
        'ᴂ': 'ae',
        'ǝ': 'e',
        'ᵷ': 'g',
        'ɥ': 'h',
        'ʮ': 'h',
        'ʯ': 'h',
        'ᴉ': 'i',
        'ʞ': 'k',
        'ꞁ': 'l',
        'ɯ': 'm',
        'ɰ': 'm',
        'ᴔ': 'oe',
        'ɹ': 'r',
        'ɻ': 'r',
        'ɺ': 'r',
        'ⱹ': 'r',
        'ʇ': 't',
        'ʌ': 'v',
        'ʍ': 'w',
        'ʎ': 'y',
        'ꜩ': 'tz',
        'ú': 'u',
        'ŭ': 'u',
        'ǔ': 'u',
        'û': 'u',
        'ṷ': 'u',
        'ü': 'u',
        'ǘ': 'u',
        'ǚ': 'u',
        'ǜ': 'u',
        'ǖ': 'u',
        'ṳ': 'u',
        'ụ': 'u',
        'ű': 'u',
        'ȕ': 'u',
        'ù': 'u',
        'ủ': 'u',
        'ư': 'u',
        'ứ': 'u',
        'ự': 'u',
        'ừ': 'u',
        'ử': 'u',
        'ữ': 'u',
        'ȗ': 'u',
        'ū': 'u',
        'ṻ': 'u',
        'ų': 'u',
        'ᶙ': 'u',
        'ů': 'u',
        'ũ': 'u',
        'ṹ': 'u',
        'ṵ': 'u',
        'ᵫ': 'ue',
        'ꝸ': 'um',
        'ⱴ': 'v',
        'ꝟ': 'v',
        'ṿ': 'v',
        'ʋ': 'v',
        'ᶌ': 'v',
        'ⱱ': 'v',
        'ṽ': 'v',
        'ꝡ': 'vy',
        'ẃ': 'w',
        'ŵ': 'w',
        'ẅ': 'w',
        'ẇ': 'w',
        'ẉ': 'w',
        'ẁ': 'w',
        'ⱳ': 'w',
        'ẘ': 'w',
        'ẍ': 'x',
        'ẋ': 'x',
        'ᶍ': 'x',
        'ý': 'y',
        'ŷ': 'y',
        'ÿ': 'y',
        'ẏ': 'y',
        'ỵ': 'y',
        'ỳ': 'y',
        'ƴ': 'y',
        'ỷ': 'y',
        'ỿ': 'y',
        'ȳ': 'y',
        'ẙ': 'y',
        'ɏ': 'y',
        'ỹ': 'y',
        'ź': 'z',
        'ž': 'z',
        'ẑ': 'z',
        'ʑ': 'z',
        'ⱬ': 'z',
        'ż': 'z',
        'ẓ': 'z',
        'ȥ': 'z',
        'ẕ': 'z',
        'ᵶ': 'z',
        'ᶎ': 'z',
        'ʐ': 'z',
        'ƶ': 'z',
        'ɀ': 'z',
        'ﬀ': 'ff',
        'ﬃ': 'ffi',
        'ﬄ': 'ffl',
        'ﬁ': 'fi',
        'ﬂ': 'fl',
        'ĳ': 'ij',
        'œ': 'oe',
        'ﬆ': 'st',
        'ₐ': 'a',
        'ₑ': 'e',
        'ᵢ': 'i',
        'ⱼ': 'j',
        'ₒ': 'o',
        'ᵣ': 'r',
        'ᵤ': 'u',
        'ᵥ': 'v',
        'ₓ': 'x'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadOptions = (function () {
        function TypeaheadOptions(options) {
            Object.assign(this, options);
        }
        return TypeaheadOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadMatch = (function () {
        // tslint:disable-next-line:no-any
        function TypeaheadMatch(item, value, header) {
            if (value === void 0) {
                value = item;
            }
            if (header === void 0) {
                header = false;
            }
            this.item = item;
            this.value = value;
            this.header = header;
        }
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.isHeader = /**
         * @return {?}
         */
            function () {
                return this.header;
            };
        /**
         * @return {?}
         */
        TypeaheadMatch.prototype.toString = /**
         * @return {?}
         */
            function () {
                return this.value;
            };
        return TypeaheadMatch;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function latinize(str) {
        if (!str) {
            return '';
        }
        return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
            return latinMap[a] || a;
        });
    }
    /**
     * @param {?} queryToEscape
     * @return {?}
     */
    function escapeRegexp(queryToEscape) {
        // Regex: capture the whole query string and replace it with the string
        // that will be used to match the results, for example if the capture is
        // 'a' the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * @param {?} str
     * @param {?=} wordRegexDelimiters
     * @param {?=} phraseRegexDelimiters
     * @return {?}
     */
    function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
        if (wordRegexDelimiters === void 0) {
            wordRegexDelimiters = ' ';
        }
        if (phraseRegexDelimiters === void 0) {
            phraseRegexDelimiters = '';
        }
        /* tslint:enable */
        var /** @type {?} */ regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
            ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
        var /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
        var /** @type {?} */ result = [];
        var /** @type {?} */ preTokenizedLength = preTokenized.length;
        var /** @type {?} */ token;
        var /** @type {?} */ replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
        for (var /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
            token = preTokenized[i];
            if (token && token.length && token !== wordRegexDelimiters) {
                result.push(token.replace(replacePhraseDelimiters, ''));
            }
        }
        return result;
    }
    /**
     * @param {?} object
     * @param {?} option
     * @return {?}
     */
    function getValueFromObject(object, option) {
        if (!option || typeof object !== 'object') {
            return object.toString();
        }
        if (option.endsWith('()')) {
            var /** @type {?} */ functionName = option.slice(0, option.length - 2);
            return object[functionName]().toString();
        }
        var /** @type {?} */ properties = option
            .replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '');
        var /** @type {?} */ propertiesArray = properties.split('.');
        try {
            for (var propertiesArray_1 = __values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
                var property = propertiesArray_1_1.value;
                if (property in object) {
                    // tslint:disable-next-line
                    object = object[property];
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return))
                    _a.call(propertiesArray_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        if (!object) {
            return '';
        }
        return object.toString();
        var e_1, _a;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadContainerComponent = (function () {
        function TypeaheadContainerComponent(element, renderer) {
            this.renderer = renderer;
            this.isFocused = false;
            this._matches = [];
            this.isScrolledIntoView = function (elem) {
                var /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
                var /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
                var /** @type {?} */ elemTop = elem.offsetTop;
                var /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
                return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
            };
            this.element = element;
        }
        Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
            get: /**
             * @return {?}
             */ function () {
                return this._active;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
            get: /**
             * @return {?}
             */ function () {
                return this._matches;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var _this = this;
                this._matches = value;
                this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
                if (this.typeaheadScrollable) {
                    setTimeout(function () {
                        _this.setScrollableMode();
                    });
                }
                if (this._matches.length > 0) {
                    this._active = this._matches[0];
                    if (this._active.isHeader()) {
                        this.nextActiveMatch();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
            // tslint:disable-next-line:no-any
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.optionsListTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadScrollable", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadScrollable : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "typeaheadOptionsInScrollableView", {
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
            // tslint:disable-next-line:no-any
            get: /**
             * @return {?}
             */ function () {
                return this.parent ? this.parent.typeaheadItemTemplate : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} isActiveItemChanged
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActiveMatch = /**
         * @param {?=} isActiveItemChanged
         * @return {?}
         */
            function (isActiveItemChanged) {
                if (this._active && this.parent.typeaheadSelectFirstItem) {
                    this.selectMatch(this._active);
                }
                if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
                    this.selectMatch(this._active);
                }
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.prevActiveMatch = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ index = this.matches.indexOf(this._active);
                this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
                if (this._active.isHeader()) {
                    this.prevActiveMatch();
                }
                if (this.typeaheadScrollable) {
                    this.scrollPrevious(index);
                }
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.nextActiveMatch = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ index = this.matches.indexOf(this._active);
                this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
                if (this.typeaheadScrollable) {
                    this.scrollNext(index);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectActive = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.isFocused = true;
                this._active = value;
            };
        /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.highlight = /**
         * @param {?} match
         * @param {?} query
         * @return {?}
         */
            function (match, query) {
                var /** @type {?} */ itemStr = match.value;
                var /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
                    ? latinize(itemStr)
                    : itemStr).toLowerCase();
                var /** @type {?} */ startIdx;
                var /** @type {?} */ tokenLen;
                // Replaces the capture string with the same string inside of a "strong" tag
                if (typeof query === 'object') {
                    var /** @type {?} */ queryLen = query.length;
                    for (var /** @type {?} */ i = 0; i < queryLen; i += 1) {
                        // query[i] is already latinized and lower case
                        startIdx = itemStrHelper.indexOf(query[i]);
                        tokenLen = query[i].length;
                        if (startIdx >= 0 && tokenLen > 0) {
                            itemStr =
                                itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                    ("" + itemStr.substring(startIdx + tokenLen));
                            itemStrHelper =
                                itemStrHelper.substring(0, startIdx) + "        " + ' '.repeat(tokenLen) + "         " +
                                    ("" + itemStrHelper.substring(startIdx + tokenLen));
                        }
                    }
                }
                else if (query) {
                    // query is already latinized and lower case
                    startIdx = itemStrHelper.indexOf(query);
                    tokenLen = query.length;
                    if (startIdx >= 0 && tokenLen > 0) {
                        itemStr =
                            itemStr.substring(0, startIdx) + "<strong>" + itemStr.substring(startIdx, startIdx + tokenLen) + "</strong>" +
                                ("" + itemStr.substring(startIdx + tokenLen));
                    }
                }
                return itemStr;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.focusLost = /**
         * @return {?}
         */
            function () {
                this.isFocused = false;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.isActive = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this._active === value;
            };
        /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.selectMatch = /**
         * @param {?} value
         * @param {?=} e
         * @return {?}
         */
            function (value, e) {
                var _this = this;
                if (e === void 0) {
                    e = void 0;
                }
                if (e) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                this.parent.changeModel(value);
                setTimeout(function () { return _this.parent.typeaheadOnSelect.emit(value); }, 0);
                return false;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.setScrollableMode = /**
         * @return {?}
         */
            function () {
                if (!this.ulElement) {
                    this.ulElement = this.element;
                }
                if (this.liElements.first) {
                    var /** @type {?} */ ulStyles = utils.Utils.getStyles(this.ulElement.nativeElement);
                    var /** @type {?} */ liStyles = utils.Utils.getStyles(this.liElements.first.nativeElement);
                    var /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                        .replace('px', ''));
                    var /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                        .replace('px', ''));
                    var /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                        .replace('px', ''));
                    var /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
                    this.guiHeight = height + ulPaddingTop + ulPaddingBottom + "px";
                }
                this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollPrevious = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (index === 0) {
                    this.scrollToBottom();
                    return;
                }
                if (this.liElements) {
                    var /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
                    if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                        this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
                    }
                }
            };
        /**
         * @param {?} index
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollNext = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (index + 1 > this.matches.length - 1) {
                    this.scrollToTop();
                    return;
                }
                if (this.liElements) {
                    var /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
                    if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                        this.ulElement.nativeElement.scrollTop =
                            liElement.nativeElement.offsetTop -
                                Number(this.ulElement.nativeElement.offsetHeight) +
                                Number(liElement.nativeElement.offsetHeight);
                    }
                }
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToBottom = /**
         * @return {?}
         */
            function () {
                this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
            };
        /**
         * @return {?}
         */
        TypeaheadContainerComponent.prototype.scrollToTop = /**
         * @return {?}
         */
            function () {
                this.ulElement.nativeElement.scrollTop = 0;
            };
        TypeaheadContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'typeahead-container',
                        // tslint:disable-next-line
                        template: "<!-- inject options list template -->\r\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\r\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\r\n\r\n<!-- default options item template -->\r\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 3 options list template -->\r\n<ng-template #bs3Template>\r\n  <ul class=\"dropdown-menu\"\r\n      #ulElement\r\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\r\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\r\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\r\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\r\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\r\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n        </a>\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 4 options list template -->\r\n<ng-template #bs4Template>\r\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\r\n    <ng-template [ngIf]=\"!match.isHeader()\">\r\n      <button #liElements\r\n              class=\"dropdown-item\"\r\n              (click)=\"selectMatch(match, $event)\"\r\n              (mouseenter)=\"selectActive(match)\"\r\n              [class.active]=\"isActive(match)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n      </button>\r\n    </ng-template>\r\n  </ng-template>\r\n</ng-template>\r\n",
                        host: {
                            class: 'dropdown open',
                            '[class.dropdown-menu]': 'isBs4',
                            '[style.overflow-y]': "isBs4 && needScrollbar ? 'scroll': 'visible'",
                            '[style.height]': "isBs4 && needScrollbar ? guiHeight: 'auto'",
                            '[style.visibility]': "typeaheadScrollable ? 'hidden' : 'visible'",
                            '[class.dropup]': 'dropup',
                            style: 'position: absolute;display: block;'
                        },
                        styles: ["\n    :host.dropdown {\n      z-index: 1000;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TypeaheadContainerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        TypeaheadContainerComponent.propDecorators = {
            "ulElement": [{ type: core.ViewChild, args: ['ulElement',] },],
            "liElements": [{ type: core.ViewChildren, args: ['liElements',] },],
            "focusLost": [{ type: core.HostListener, args: ['mouseleave',] }, { type: core.HostListener, args: ['blur',] },],
        };
        return TypeaheadContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Default values provider for typeahead
     */
    var TypeaheadConfig = (function () {
        function TypeaheadConfig() {
            /**
             * sets use adaptive position
             */
            this.adaptivePosition = false;
            /**
             * used to hide results on blur
             */
            this.hideResultsOnBlur = true;
            /**
             * used to choose the first item in typeahead container
             */
            this.selectFirstItem = true;
            /**
             * used to choose set minimal no of characters that needs to
             * be entered before typeahead kicks-in
             */
            this.minLength = 1;
        }
        TypeaheadConfig.decorators = [
            { type: core.Injectable }
        ];
        return TypeaheadConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadDirective = (function () {
        function TypeaheadDirective(cis, config, changeDetection, element, ngControl, positionService, renderer, viewContainerRef) {
            this.changeDetection = changeDetection;
            this.element = element;
            this.ngControl = ngControl;
            this.positionService = positionService;
            this.renderer = renderer;
            /**
             * minimal no of characters that needs to be entered before
             * typeahead kicks-in. When set to 0, typeahead shows on focus with full
             * list of options (limited as normal by typeaheadOptionsLimit)
             */
            this.typeaheadMinLength = void 0;
            /**
             * should be used only in case of typeahead attribute is array.
             * If true - loading of options will be async, otherwise - sync.
             * true make sense if options array is large.
             */
            this.typeaheadAsync = void 0;
            /**
             * match latin symbols.
             * If true the word súper would match super and vice versa.
             */
            this.typeaheadLatinize = true;
            /**
             * Can be use to search words by inserting a single white space between each characters
             *  for example 'C a l i f o r n i a' will match 'California'.
             */
            this.typeaheadSingleWords = true;
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to break words. Defaults to space.
             */
            this.typeaheadWordDelimiters = ' ';
            /**
             * should be used only in case typeaheadSingleWords attribute is true.
             * Sets the word delimiter to match exact phrase.
             * Defaults to simple and double quotes.
             */
            this.typeaheadPhraseDelimiters = '\'"';
            /**
             * specifies if typeahead is scrollable
             */
            this.typeaheadScrollable = false;
            /**
             * specifies number of options to show in scroll view
             */
            this.typeaheadOptionsInScrollableView = 5;
            /**
             * fired when an options list was opened and the user clicked Tab
             * If a value equal true, it will be chosen first or active item in the list
             * If value equal false, it will be chosen an active item in the list or nothing
             */
            this.typeaheadSelectFirstItem = true;
            /**
             * fired when 'busy' state of this component was changed,
             * fired on async mode only, returns boolean
             */
            this.typeaheadLoading = new core.EventEmitter();
            /**
             * fired on every key event and returns true
             * in case of matches are not detected
             */
            this.typeaheadNoResults = new core.EventEmitter();
            /**
             * fired when option was selected, return object with data of this option
             */
            this.typeaheadOnSelect = new core.EventEmitter();
            /**
             * fired when blur event occurs. returns the active item
             */
            this.typeaheadOnBlur = new core.EventEmitter();
            /**
             * This attribute indicates that the dropdown should be opened upwards
             */
            this.dropup = false;
            this.isActiveItemChanged = false;
            this.isTypeaheadOptionsListActive = false;
            // tslint:disable-next-line:no-any
            this.keyUpEventEmitter = new core.EventEmitter();
            this.placement = 'bottom-left';
            this._subscriptions = [];
            this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
                .provide({ provide: TypeaheadConfig, useValue: config });
            Object.assign(this, { typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
                typeaheadSelectFirstItem: config.selectFirstItem,
                typeaheadMinLength: config.minLength,
                adaptivePosition: config.adaptivePosition
            });
        }
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
                this.typeaheadMinLength =
                    this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
                this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
                // async should be false in case of array
                if (this.typeaheadAsync === undefined &&
                    !(rxjs.isObservable(this.typeahead))) {
                    this.typeaheadAsync = false;
                }
                if (rxjs.isObservable(this.typeahead)) {
                    this.typeaheadAsync = true;
                }
                if (this.typeaheadAsync) {
                    this.asyncActions();
                }
                else {
                    this.syncActions();
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        TypeaheadDirective.prototype.onInput = /**
         * @param {?} e
         * @return {?}
         */
            // tslint:disable-next-line:no-any
            function (e) {
                // For `<input>`s, use the `value` property. For others that don't have a
                // `value` (such as `<span contenteditable="true">`), use either
                // `textContent` or `innerText` (depending on which one is supported, i.e.
                // Firefox or IE).
                var /** @type {?} */ value = e.target.value !== undefined
                    ? e.target.value
                    : e.target.textContent !== undefined
                        ? e.target.textContent
                        : e.target.innerText;
                if (value != null && value.trim().length >= this.typeaheadMinLength) {
                    this.typeaheadLoading.emit(true);
                    this.keyUpEventEmitter.emit(e.target.value);
                }
                else {
                    this.typeaheadLoading.emit(false);
                    this.typeaheadNoResults.emit(false);
                    this.hide();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TypeaheadDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._container) {
                    // esc
                    /* tslint:disable-next-line: deprecation */
                    if (event.keyCode === 27 || event.key === 'Escape') {
                        this.hide();
                        return;
                    }
                    // up
                    /* tslint:disable-next-line: deprecation */
                    if (event.keyCode === 38 || event.key === 'ArrowUp') {
                        this.isActiveItemChanged = true;
                        this._container.prevActiveMatch();
                        return;
                    }
                    // down
                    /* tslint:disable-next-line: deprecation */
                    if (event.keyCode === 40 || event.key === 'ArrowDown') {
                        this.isActiveItemChanged = true;
                        this._container.nextActiveMatch();
                        return;
                    }
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onFocus = /**
         * @return {?}
         */
            function () {
                if (this.typeaheadMinLength === 0) {
                    this.typeaheadLoading.emit(true);
                    this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                if (this._container && !this._container.isFocused) {
                    this.typeaheadOnBlur.emit(this._container.active);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TypeaheadDirective.prototype.onKeydown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // no container - no problems
                if (!this._container) {
                    return;
                }
                /* tslint:disable-next-line: deprecation */
                if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
                    event.preventDefault();
                    if (this.typeaheadSelectFirstItem) {
                        this._container.selectActiveMatch();
                        return;
                    }
                    if (!this.typeaheadSelectFirstItem) {
                        this._container.selectActiveMatch(this.isActiveItemChanged);
                        this.isActiveItemChanged = false;
                        this.hide();
                    }
                }
            };
        /**
         * @param {?} match
         * @return {?}
         */
        TypeaheadDirective.prototype.changeModel = /**
         * @param {?} match
         * @return {?}
         */
            function (match) {
                var /** @type {?} */ valueStr = match.value;
                this.ngControl.viewToModelUpdate(valueStr);
                (this.ngControl.control).setValue(valueStr);
                this.changeDetection.markForCheck();
                this.hide();
            };
        Object.defineProperty(TypeaheadDirective.prototype, "matches", {
            get: /**
             * @return {?}
             */ function () {
                return this._matches;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.show = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.positionService.setOptions({
                    modifiers: {
                        flip: {
                            enabled: this.adaptivePosition
                        }
                    }
                });
                this._typeahead
                    .attach(TypeaheadContainerComponent)
                    .to(this.container)
                    .position({ attachment: (this.dropup ? 'top' : 'bottom') + " left" })
                    .show({
                    typeaheadRef: this,
                    placement: this.placement,
                    animation: false,
                    dropup: this.dropup
                });
                this._outsideClickListener = this.renderer.listen('document', 'click', function (e) {
                    if (_this.typeaheadMinLength === 0 && _this.element.nativeElement.contains(e.target)) {
                        return undefined;
                    }
                    if (!_this.typeaheadHideResultsOnBlur || _this.element.nativeElement.contains(e.target)) {
                        return undefined;
                    }
                    _this.onOutsideClick();
                });
                this._container = this._typeahead.instance;
                this._container.parent = this;
                // This improves the speed as it won't have to be done for each list item
                var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
                    ? latinize(this.ngControl.control.value)
                    : this.ngControl.control.value)
                    .toString()
                    .toLowerCase();
                this._container.query = this.typeaheadSingleWords
                    ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                    : normalizedQuery;
                this._container.matches = this._matches;
                this.element.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.hide = /**
         * @return {?}
         */
            function () {
                if (this._typeahead.isShown) {
                    this._typeahead.hide();
                    this._outsideClickListener();
                    this._container = null;
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.onOutsideClick = /**
         * @return {?}
         */
            function () {
                if (this._container && !this._container.isFocused) {
                    this.hide();
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    // clean up subscriptions
                    for (var _a = __values(this._subscriptions), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._typeahead.dispose();
                var e_1, _c;
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.asyncActions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscriptions.push(this.keyUpEventEmitter
                    .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.switchMap(function () { return _this.typeahead; }))
                    .subscribe(function (matches) {
                    _this.finalizeAsyncCall(matches);
                }));
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.syncActions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subscriptions.push(this.keyUpEventEmitter
                    .pipe(operators.debounceTime(this.typeaheadWaitMs), operators.mergeMap(function (value) {
                    var /** @type {?} */ normalizedQuery = _this.normalizeQuery(value);
                    return rxjs.from(_this.typeahead)
                        .pipe(operators.filter(function (option) {
                        return (option &&
                            _this.testMatch(_this.normalizeOption(option), normalizedQuery));
                    }), operators.toArray());
                }))
                    .subscribe(function (matches) {
                    _this.finalizeAsyncCall(matches);
                }));
            };
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeOption = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                var /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
                var /** @type {?} */ normalizedOption = this.typeaheadLatinize
                    ? latinize(optionValue)
                    : optionValue;
                return normalizedOption.toLowerCase();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TypeaheadDirective.prototype.normalizeQuery = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                // If singleWords, break model here to not be doing extra work on each
                // iteration
                var /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
                    ? latinize(value)
                    : value)
                    .toString()
                    .toLowerCase();
                normalizedQuery = this.typeaheadSingleWords
                    ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                    : normalizedQuery;
                return normalizedQuery;
            };
        /**
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
        TypeaheadDirective.prototype.testMatch = /**
         * @param {?} match
         * @param {?} test
         * @return {?}
         */
            function (match, test) {
                var /** @type {?} */ spaceLength;
                if (typeof test === 'object') {
                    spaceLength = test.length;
                    for (var /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                        if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                            return false;
                        }
                    }
                    return true;
                }
                return match.indexOf(test) >= 0;
            };
        /**
         * @param {?} matches
         * @return {?}
         */
        TypeaheadDirective.prototype.finalizeAsyncCall = /**
         * @param {?} matches
         * @return {?}
         */
            function (matches) {
                this.prepareMatches(matches || []);
                this.typeaheadLoading.emit(false);
                this.typeaheadNoResults.emit(!this.hasMatches());
                if (!this.hasMatches()) {
                    this.hide();
                    return;
                }
                if (this._container) {
                    // fix: remove usage of ngControl internals
                    var /** @type {?} */ _controlValue = (this.typeaheadLatinize
                        ? latinize(this.ngControl.control.value)
                        : this.ngControl.control.value) || '';
                    // This improves the speed as it won't have to be done for each list item
                    var /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
                    this._container.query = this.typeaheadSingleWords
                        ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                        : normalizedQuery;
                    this._container.matches = this._matches;
                }
                else {
                    this.show();
                }
            };
        /**
         * @param {?} options
         * @return {?}
         */
        TypeaheadDirective.prototype.prepareMatches = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                var /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
                if (this.typeaheadGroupField) {
                    var /** @type {?} */ matches_1 = [];
                    // extract all group names
                    var /** @type {?} */ groups = limited
                        .map(function (option) {
                        return getValueFromObject(option, _this.typeaheadGroupField);
                    })
                        .filter(function (v, i, a) { return a.indexOf(v) === i; });
                    groups.forEach(function (group) {
                        // add group header to array of matches
                        // add group header to array of matches
                        matches_1.push(new TypeaheadMatch(group, group, true));
                        // add each item of group to array of matches
                        // add each item of group to array of matches
                        matches_1 = matches_1.concat(limited
                            .filter(
                        // tslint:disable-next-line:no-any
                        // tslint:disable-next-line:no-any
                        function (option) {
                            return getValueFromObject(option, _this.typeaheadGroupField) === group;
                        })
                            .map(
                        // tslint:disable-next-line:no-any
                        // tslint:disable-next-line:no-any
                        function (option) {
                            return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                        }));
                    });
                    this._matches = matches_1;
                }
                else {
                    this._matches = limited.map(
                    // tslint:disable-next-line:no-any
                    // tslint:disable-next-line:no-any
                    function (option) {
                        return new TypeaheadMatch(option, getValueFromObject(option, _this.typeaheadOptionField));
                    });
                }
            };
        /**
         * @return {?}
         */
        TypeaheadDirective.prototype.hasMatches = /**
         * @return {?}
         */
            function () {
                return this._matches.length > 0;
            };
        TypeaheadDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
        ];
        /** @nocollapse */
        TypeaheadDirective.ctorParameters = function () {
            return [
                { type: componentLoader.ComponentLoaderFactory, },
                { type: TypeaheadConfig, },
                { type: core.ChangeDetectorRef, },
                { type: core.ElementRef, },
                { type: forms.NgControl, },
                { type: positioning.PositioningService, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
            ];
        };
        TypeaheadDirective.propDecorators = {
            "typeahead": [{ type: core.Input },],
            "typeaheadMinLength": [{ type: core.Input },],
            "adaptivePosition": [{ type: core.Input },],
            "typeaheadWaitMs": [{ type: core.Input },],
            "typeaheadOptionsLimit": [{ type: core.Input },],
            "typeaheadOptionField": [{ type: core.Input },],
            "typeaheadGroupField": [{ type: core.Input },],
            "typeaheadAsync": [{ type: core.Input },],
            "typeaheadLatinize": [{ type: core.Input },],
            "typeaheadSingleWords": [{ type: core.Input },],
            "typeaheadWordDelimiters": [{ type: core.Input },],
            "typeaheadPhraseDelimiters": [{ type: core.Input },],
            "typeaheadItemTemplate": [{ type: core.Input },],
            "optionsListTemplate": [{ type: core.Input },],
            "typeaheadScrollable": [{ type: core.Input },],
            "typeaheadOptionsInScrollableView": [{ type: core.Input },],
            "typeaheadHideResultsOnBlur": [{ type: core.Input },],
            "typeaheadSelectFirstItem": [{ type: core.Input },],
            "typeaheadLoading": [{ type: core.Output },],
            "typeaheadNoResults": [{ type: core.Output },],
            "typeaheadOnSelect": [{ type: core.Output },],
            "typeaheadOnBlur": [{ type: core.Output },],
            "container": [{ type: core.Input },],
            "dropup": [{ type: core.Input },],
            "onInput": [{ type: core.HostListener, args: ['input', ['$event'],] },],
            "onChange": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
            "onFocus": [{ type: core.HostListener, args: ['click',] }, { type: core.HostListener, args: ['focus',] },],
            "onBlur": [{ type: core.HostListener, args: ['blur',] },],
            "onKeydown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
        };
        return TypeaheadDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TypeaheadModule = (function () {
        function TypeaheadModule() {
        }
        /**
         * @return {?}
         */
        TypeaheadModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TypeaheadModule,
                    providers: [componentLoader.ComponentLoaderFactory, positioning.PositioningService, TypeaheadConfig]
                };
            };
        TypeaheadModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                        exports: [TypeaheadContainerComponent, TypeaheadDirective],
                        entryComponents: [TypeaheadContainerComponent]
                    },] }
        ];
        return TypeaheadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.latinMap = latinMap;
    exports.TypeaheadOptions = TypeaheadOptions;
    exports.TypeaheadMatch = TypeaheadMatch;
    exports.escapeRegexp = escapeRegexp;
    exports.getValueFromObject = getValueFromObject;
    exports.tokenize = tokenize;
    exports.latinize = latinize;
    exports.TypeaheadContainerComponent = TypeaheadContainerComponent;
    exports.TypeaheadDirective = TypeaheadDirective;
    exports.TypeaheadModule = TypeaheadModule;
    exports.TypeaheadConfig = TypeaheadConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10eXBlYWhlYWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC9sYXRpbi1tYXAudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1vcHRpb25zLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtbWF0Y2guY2xhc3MudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtdXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXHJcbmV4cG9ydCBjb25zdCBsYXRpbk1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICfDg8KBJzogJ0EnLFxyXG4gICAgJ8OEwoInOiAnQScsXHJcbiAgICAnw6HCusKuJzogJ0EnLFxyXG4gICAgJ8OhwrrCtic6ICdBJyxcclxuICAgICfDocK6wrAnOiAnQScsXHJcbiAgICAnw6HCusKyJzogJ0EnLFxyXG4gICAgJ8OhwrrCtCc6ICdBJyxcclxuICAgICfDh8KNJzogJ0EnLFxyXG4gICAgJ8ODwoInOiAnQScsXHJcbiAgICAnw6HCusKkJzogJ0EnLFxyXG4gICAgJ8OhwrrCrCc6ICdBJyxcclxuICAgICfDocK6wqYnOiAnQScsXHJcbiAgICAnw6HCusKoJzogJ0EnLFxyXG4gICAgJ8OhwrrCqic6ICdBJyxcclxuICAgICfDg8KEJzogJ0EnLFxyXG4gICAgJ8OHwp4nOiAnQScsXHJcbiAgICAnw4jCpic6ICdBJyxcclxuICAgICfDh8KgJzogJ0EnLFxyXG4gICAgJ8OhwrrCoCc6ICdBJyxcclxuICAgICfDiMKAJzogJ0EnLFxyXG4gICAgJ8ODwoAnOiAnQScsXHJcbiAgICAnw6HCusKiJzogJ0EnLFxyXG4gICAgJ8OIwoInOiAnQScsXHJcbiAgICAnw4TCgCc6ICdBJyxcclxuICAgICfDhMKEJzogJ0EnLFxyXG4gICAgJ8ODwoUnOiAnQScsXHJcbiAgICAnw4fCuic6ICdBJyxcclxuICAgICfDocK4woAnOiAnQScsXHJcbiAgICAnw4jCuic6ICdBJyxcclxuICAgICfDg8KDJzogJ0EnLFxyXG4gICAgJ8OqwpzCsic6ICdBQScsXHJcbiAgICAnw4PChic6ICdBRScsXHJcbiAgICAnw4fCvCc6ICdBRScsXHJcbiAgICAnw4fCoic6ICdBRScsXHJcbiAgICAnw6rCnMK0JzogJ0FPJyxcclxuICAgICfDqsKcwrYnOiAnQVUnLFxyXG4gICAgJ8OqwpzCuCc6ICdBVicsXHJcbiAgICAnw6rCnMK6JzogJ0FWJyxcclxuICAgICfDqsKcwrwnOiAnQVknLFxyXG4gICAgJ8OhwrjCgic6ICdCJyxcclxuICAgICfDocK4woQnOiAnQicsXHJcbiAgICAnw4bCgSc6ICdCJyxcclxuICAgICfDocK4woYnOiAnQicsXHJcbiAgICAnw4nCgyc6ICdCJyxcclxuICAgICfDhsKCJzogJ0InLFxyXG4gICAgJ8OEwoYnOiAnQycsXHJcbiAgICAnw4TCjCc6ICdDJyxcclxuICAgICfDg8KHJzogJ0MnLFxyXG4gICAgJ8OhwrjCiCc6ICdDJyxcclxuICAgICfDhMKIJzogJ0MnLFxyXG4gICAgJ8OEwoonOiAnQycsXHJcbiAgICAnw4bChyc6ICdDJyxcclxuICAgICfDiMK7JzogJ0MnLFxyXG4gICAgJ8OEwo4nOiAnRCcsXHJcbiAgICAnw6HCuMKQJzogJ0QnLFxyXG4gICAgJ8OhwrjCkic6ICdEJyxcclxuICAgICfDocK4woonOiAnRCcsXHJcbiAgICAnw6HCuMKMJzogJ0QnLFxyXG4gICAgJ8OGwoonOiAnRCcsXHJcbiAgICAnw6HCuMKOJzogJ0QnLFxyXG4gICAgJ8OHwrInOiAnRCcsXHJcbiAgICAnw4fChSc6ICdEJyxcclxuICAgICfDhMKQJzogJ0QnLFxyXG4gICAgJ8OGwosnOiAnRCcsXHJcbiAgICAnw4fCsSc6ICdEWicsXHJcbiAgICAnw4fChCc6ICdEWicsXHJcbiAgICAnw4PCiSc6ICdFJyxcclxuICAgICfDhMKUJzogJ0UnLFxyXG4gICAgJ8OEwponOiAnRScsXHJcbiAgICAnw4jCqCc6ICdFJyxcclxuICAgICfDocK4wpwnOiAnRScsXHJcbiAgICAnw4PCiic6ICdFJyxcclxuICAgICfDocK6wr4nOiAnRScsXHJcbiAgICAnw6HCu8KGJzogJ0UnLFxyXG4gICAgJ8OhwrvCgCc6ICdFJyxcclxuICAgICfDocK7woInOiAnRScsXHJcbiAgICAnw6HCu8KEJzogJ0UnLFxyXG4gICAgJ8OhwrjCmCc6ICdFJyxcclxuICAgICfDg8KLJzogJ0UnLFxyXG4gICAgJ8OEwpYnOiAnRScsXHJcbiAgICAnw6HCusK4JzogJ0UnLFxyXG4gICAgJ8OIwoQnOiAnRScsXHJcbiAgICAnw4PCiCc6ICdFJyxcclxuICAgICfDocK6wronOiAnRScsXHJcbiAgICAnw4jChic6ICdFJyxcclxuICAgICfDhMKSJzogJ0UnLFxyXG4gICAgJ8OhwrjClic6ICdFJyxcclxuICAgICfDocK4wpQnOiAnRScsXHJcbiAgICAnw4TCmCc6ICdFJyxcclxuICAgICfDicKGJzogJ0UnLFxyXG4gICAgJ8OhwrrCvCc6ICdFJyxcclxuICAgICfDocK4wponOiAnRScsXHJcbiAgICAnw6rCncKqJzogJ0VUJyxcclxuICAgICfDocK4wp4nOiAnRicsXHJcbiAgICAnw4bCkSc6ICdGJyxcclxuICAgICfDh8K0JzogJ0cnLFxyXG4gICAgJ8OEwp4nOiAnRycsXHJcbiAgICAnw4fCpic6ICdHJyxcclxuICAgICfDhMKiJzogJ0cnLFxyXG4gICAgJ8OEwpwnOiAnRycsXHJcbiAgICAnw4TCoCc6ICdHJyxcclxuICAgICfDhsKTJzogJ0cnLFxyXG4gICAgJ8OhwrjCoCc6ICdHJyxcclxuICAgICfDh8KkJzogJ0cnLFxyXG4gICAgJ8OhwrjCqic6ICdIJyxcclxuICAgICfDiMKeJzogJ0gnLFxyXG4gICAgJ8OhwrjCqCc6ICdIJyxcclxuICAgICfDhMKkJzogJ0gnLFxyXG4gICAgJ8OiwrHCpyc6ICdIJyxcclxuICAgICfDocK4wqYnOiAnSCcsXHJcbiAgICAnw6HCuMKiJzogJ0gnLFxyXG4gICAgJ8OhwrjCpCc6ICdIJyxcclxuICAgICfDhMKmJzogJ0gnLFxyXG4gICAgJ8ODwo0nOiAnSScsXHJcbiAgICAnw4TCrCc6ICdJJyxcclxuICAgICfDh8KPJzogJ0knLFxyXG4gICAgJ8ODwo4nOiAnSScsXHJcbiAgICAnw4PCjyc6ICdJJyxcclxuICAgICfDocK4wq4nOiAnSScsXHJcbiAgICAnw4TCsCc6ICdJJyxcclxuICAgICfDocK7woonOiAnSScsXHJcbiAgICAnw4jCiCc6ICdJJyxcclxuICAgICfDg8KMJzogJ0knLFxyXG4gICAgJ8OhwrvCiCc6ICdJJyxcclxuICAgICfDiMKKJzogJ0knLFxyXG4gICAgJ8OEwqonOiAnSScsXHJcbiAgICAnw4TCric6ICdJJyxcclxuICAgICfDhsKXJzogJ0knLFxyXG4gICAgJ8OEwqgnOiAnSScsXHJcbiAgICAnw6HCuMKsJzogJ0knLFxyXG4gICAgJ8Oqwp3CuSc6ICdEJyxcclxuICAgICfDqsKdwrsnOiAnRicsXHJcbiAgICAnw6rCncK9JzogJ0cnLFxyXG4gICAgJ8Oqwp7Cgic6ICdSJyxcclxuICAgICfDqsKewoQnOiAnUycsXHJcbiAgICAnw6rCnsKGJzogJ1QnLFxyXG4gICAgJ8Oqwp3CrCc6ICdJUycsXHJcbiAgICAnw4TCtCc6ICdKJyxcclxuICAgICfDicKIJzogJ0onLFxyXG4gICAgJ8OhwrjCsCc6ICdLJyxcclxuICAgICfDh8KoJzogJ0snLFxyXG4gICAgJ8OEwrYnOiAnSycsXHJcbiAgICAnw6LCscKpJzogJ0snLFxyXG4gICAgJ8Oqwp3Cgic6ICdLJyxcclxuICAgICfDocK4wrInOiAnSycsXHJcbiAgICAnw4bCmCc6ICdLJyxcclxuICAgICfDocK4wrQnOiAnSycsXHJcbiAgICAnw6rCncKAJzogJ0snLFxyXG4gICAgJ8Oqwp3ChCc6ICdLJyxcclxuICAgICfDhMK5JzogJ0wnLFxyXG4gICAgJ8OIwr0nOiAnTCcsXHJcbiAgICAnw4TCvSc6ICdMJyxcclxuICAgICfDhMK7JzogJ0wnLFxyXG4gICAgJ8OhwrjCvCc6ICdMJyxcclxuICAgICfDocK4wrYnOiAnTCcsXHJcbiAgICAnw6HCuMK4JzogJ0wnLFxyXG4gICAgJ8OiwrHCoCc6ICdMJyxcclxuICAgICfDqsKdwognOiAnTCcsXHJcbiAgICAnw6HCuMK6JzogJ0wnLFxyXG4gICAgJ8OEwr8nOiAnTCcsXHJcbiAgICAnw6LCscKiJzogJ0wnLFxyXG4gICAgJ8OHwognOiAnTCcsXHJcbiAgICAnw4XCgSc6ICdMJyxcclxuICAgICfDh8KHJzogJ0xKJyxcclxuICAgICfDocK4wr4nOiAnTScsXHJcbiAgICAnw6HCucKAJzogJ00nLFxyXG4gICAgJ8OhwrnCgic6ICdNJyxcclxuICAgICfDosKxwq4nOiAnTScsXHJcbiAgICAnw4XCgyc6ICdOJyxcclxuICAgICfDhcKHJzogJ04nLFxyXG4gICAgJ8OFwoUnOiAnTicsXHJcbiAgICAnw6HCucKKJzogJ04nLFxyXG4gICAgJ8OhwrnChCc6ICdOJyxcclxuICAgICfDocK5woYnOiAnTicsXHJcbiAgICAnw4fCuCc6ICdOJyxcclxuICAgICfDhsKdJzogJ04nLFxyXG4gICAgJ8OhwrnCiCc6ICdOJyxcclxuICAgICfDiMKgJzogJ04nLFxyXG4gICAgJ8OHwosnOiAnTicsXHJcbiAgICAnw4PCkSc6ICdOJyxcclxuICAgICfDh8KKJzogJ05KJyxcclxuICAgICfDg8KTJzogJ08nLFxyXG4gICAgJ8OFwo4nOiAnTycsXHJcbiAgICAnw4fCkSc6ICdPJyxcclxuICAgICfDg8KUJzogJ08nLFxyXG4gICAgJ8OhwrvCkCc6ICdPJyxcclxuICAgICfDocK7wpgnOiAnTycsXHJcbiAgICAnw6HCu8KSJzogJ08nLFxyXG4gICAgJ8OhwrvClCc6ICdPJyxcclxuICAgICfDocK7wpYnOiAnTycsXHJcbiAgICAnw4PClic6ICdPJyxcclxuICAgICfDiMKqJzogJ08nLFxyXG4gICAgJ8OIwq4nOiAnTycsXHJcbiAgICAnw4jCsCc6ICdPJyxcclxuICAgICfDocK7wownOiAnTycsXHJcbiAgICAnw4XCkCc6ICdPJyxcclxuICAgICfDiMKMJzogJ08nLFxyXG4gICAgJ8ODwpInOiAnTycsXHJcbiAgICAnw6HCu8KOJzogJ08nLFxyXG4gICAgJ8OGwqAnOiAnTycsXHJcbiAgICAnw6HCu8KaJzogJ08nLFxyXG4gICAgJ8OhwrvCoic6ICdPJyxcclxuICAgICfDocK7wpwnOiAnTycsXHJcbiAgICAnw6HCu8KeJzogJ08nLFxyXG4gICAgJ8OhwrvCoCc6ICdPJyxcclxuICAgICfDiMKOJzogJ08nLFxyXG4gICAgJ8Oqwp3Ciic6ICdPJyxcclxuICAgICfDqsKdwownOiAnTycsXHJcbiAgICAnw4XCjCc6ICdPJyxcclxuICAgICfDocK5wpInOiAnTycsXHJcbiAgICAnw6HCucKQJzogJ08nLFxyXG4gICAgJ8OGwp8nOiAnTycsXHJcbiAgICAnw4fCqic6ICdPJyxcclxuICAgICfDh8KsJzogJ08nLFxyXG4gICAgJ8ODwpgnOiAnTycsXHJcbiAgICAnw4fCvic6ICdPJyxcclxuICAgICfDg8KVJzogJ08nLFxyXG4gICAgJ8OhwrnCjCc6ICdPJyxcclxuICAgICfDocK5wo4nOiAnTycsXHJcbiAgICAnw4jCrCc6ICdPJyxcclxuICAgICfDhsKiJzogJ09JJyxcclxuICAgICfDqsKdwo4nOiAnT08nLFxyXG4gICAgJ8OGwpAnOiAnRScsXHJcbiAgICAnw4bChic6ICdPJyxcclxuICAgICfDiMKiJzogJ09VJyxcclxuICAgICfDocK5wpQnOiAnUCcsXHJcbiAgICAnw6HCucKWJzogJ1AnLFxyXG4gICAgJ8Oqwp3Ckic6ICdQJyxcclxuICAgICfDhsKkJzogJ1AnLFxyXG4gICAgJ8Oqwp3ClCc6ICdQJyxcclxuICAgICfDosKxwqMnOiAnUCcsXHJcbiAgICAnw6rCncKQJzogJ1AnLFxyXG4gICAgJ8Oqwp3CmCc6ICdRJyxcclxuICAgICfDqsKdwpYnOiAnUScsXHJcbiAgICAnw4XClCc6ICdSJyxcclxuICAgICfDhcKYJzogJ1InLFxyXG4gICAgJ8OFwpYnOiAnUicsXHJcbiAgICAnw6HCucKYJzogJ1InLFxyXG4gICAgJ8OhwrnCmic6ICdSJyxcclxuICAgICfDocK5wpwnOiAnUicsXHJcbiAgICAnw4jCkCc6ICdSJyxcclxuICAgICfDiMKSJzogJ1InLFxyXG4gICAgJ8OhwrnCnic6ICdSJyxcclxuICAgICfDicKMJzogJ1InLFxyXG4gICAgJ8OiwrHCpCc6ICdSJyxcclxuICAgICfDqsKcwr4nOiAnQycsXHJcbiAgICAnw4bCjic6ICdFJyxcclxuICAgICfDhcKaJzogJ1MnLFxyXG4gICAgJ8OhwrnCpCc6ICdTJyxcclxuICAgICfDhcKgJzogJ1MnLFxyXG4gICAgJ8OhwrnCpic6ICdTJyxcclxuICAgICfDhcKeJzogJ1MnLFxyXG4gICAgJ8OFwpwnOiAnUycsXHJcbiAgICAnw4jCmCc6ICdTJyxcclxuICAgICfDocK5wqAnOiAnUycsXHJcbiAgICAnw6HCucKiJzogJ1MnLFxyXG4gICAgJ8OhwrnCqCc6ICdTJyxcclxuICAgICfDhcKkJzogJ1QnLFxyXG4gICAgJ8OFwqInOiAnVCcsXHJcbiAgICAnw6HCucKwJzogJ1QnLFxyXG4gICAgJ8OIwponOiAnVCcsXHJcbiAgICAnw4jCvic6ICdUJyxcclxuICAgICfDocK5wqonOiAnVCcsXHJcbiAgICAnw6HCucKsJzogJ1QnLFxyXG4gICAgJ8OGwqwnOiAnVCcsXHJcbiAgICAnw6HCucKuJzogJ1QnLFxyXG4gICAgJ8OGwq4nOiAnVCcsXHJcbiAgICAnw4XCpic6ICdUJyxcclxuICAgICfDosKxwq8nOiAnQScsXHJcbiAgICAnw6rCnsKAJzogJ0wnLFxyXG4gICAgJ8OGwpwnOiAnTScsXHJcbiAgICAnw4nChSc6ICdWJyxcclxuICAgICfDqsKcwqgnOiAnVFonLFxyXG4gICAgJ8ODwponOiAnVScsXHJcbiAgICAnw4XCrCc6ICdVJyxcclxuICAgICfDh8KTJzogJ1UnLFxyXG4gICAgJ8ODwpsnOiAnVScsXHJcbiAgICAnw6HCucK2JzogJ1UnLFxyXG4gICAgJ8ODwpwnOiAnVScsXHJcbiAgICAnw4fClyc6ICdVJyxcclxuICAgICfDh8KZJzogJ1UnLFxyXG4gICAgJ8OHwpsnOiAnVScsXHJcbiAgICAnw4fClSc6ICdVJyxcclxuICAgICfDocK5wrInOiAnVScsXHJcbiAgICAnw6HCu8KkJzogJ1UnLFxyXG4gICAgJ8OFwrAnOiAnVScsXHJcbiAgICAnw4jClCc6ICdVJyxcclxuICAgICfDg8KZJzogJ1UnLFxyXG4gICAgJ8OhwrvCpic6ICdVJyxcclxuICAgICfDhsKvJzogJ1UnLFxyXG4gICAgJ8OhwrvCqCc6ICdVJyxcclxuICAgICfDocK7wrAnOiAnVScsXHJcbiAgICAnw6HCu8KqJzogJ1UnLFxyXG4gICAgJ8OhwrvCrCc6ICdVJyxcclxuICAgICfDocK7wq4nOiAnVScsXHJcbiAgICAnw4jClic6ICdVJyxcclxuICAgICfDhcKqJzogJ1UnLFxyXG4gICAgJ8OhwrnCuic6ICdVJyxcclxuICAgICfDhcKyJzogJ1UnLFxyXG4gICAgJ8OFwq4nOiAnVScsXHJcbiAgICAnw4XCqCc6ICdVJyxcclxuICAgICfDocK5wrgnOiAnVScsXHJcbiAgICAnw6HCucK0JzogJ1UnLFxyXG4gICAgJ8Oqwp3Cnic6ICdWJyxcclxuICAgICfDocK5wr4nOiAnVicsXHJcbiAgICAnw4bCsic6ICdWJyxcclxuICAgICfDocK5wrwnOiAnVicsXHJcbiAgICAnw6rCncKgJzogJ1ZZJyxcclxuICAgICfDocK6woInOiAnVycsXHJcbiAgICAnw4XCtCc6ICdXJyxcclxuICAgICfDocK6woQnOiAnVycsXHJcbiAgICAnw6HCusKGJzogJ1cnLFxyXG4gICAgJ8OhwrrCiCc6ICdXJyxcclxuICAgICfDocK6woAnOiAnVycsXHJcbiAgICAnw6LCscKyJzogJ1cnLFxyXG4gICAgJ8OhwrrCjCc6ICdYJyxcclxuICAgICfDocK6woonOiAnWCcsXHJcbiAgICAnw4PCnSc6ICdZJyxcclxuICAgICfDhcK2JzogJ1knLFxyXG4gICAgJ8OFwrgnOiAnWScsXHJcbiAgICAnw6HCusKOJzogJ1knLFxyXG4gICAgJ8OhwrvCtCc6ICdZJyxcclxuICAgICfDocK7wrInOiAnWScsXHJcbiAgICAnw4bCsyc6ICdZJyxcclxuICAgICfDocK7wrYnOiAnWScsXHJcbiAgICAnw6HCu8K+JzogJ1knLFxyXG4gICAgJ8OIwrInOiAnWScsXHJcbiAgICAnw4nCjic6ICdZJyxcclxuICAgICfDocK7wrgnOiAnWScsXHJcbiAgICAnw4XCuSc6ICdaJyxcclxuICAgICfDhcK9JzogJ1onLFxyXG4gICAgJ8OhwrrCkCc6ICdaJyxcclxuICAgICfDosKxwqsnOiAnWicsXHJcbiAgICAnw4XCuyc6ICdaJyxcclxuICAgICfDocK6wpInOiAnWicsXHJcbiAgICAnw4jCpCc6ICdaJyxcclxuICAgICfDocK6wpQnOiAnWicsXHJcbiAgICAnw4bCtSc6ICdaJyxcclxuICAgICfDhMKyJzogJ0lKJyxcclxuICAgICfDhcKSJzogJ09FJyxcclxuICAgICfDocK0woAnOiAnQScsXHJcbiAgICAnw6HCtMKBJzogJ0FFJyxcclxuICAgICfDisKZJzogJ0InLFxyXG4gICAgJ8OhwrTCgyc6ICdCJyxcclxuICAgICfDocK0woQnOiAnQycsXHJcbiAgICAnw6HCtMKFJzogJ0QnLFxyXG4gICAgJ8OhwrTChyc6ICdFJyxcclxuICAgICfDqsKcwrAnOiAnRicsXHJcbiAgICAnw4nCoic6ICdHJyxcclxuICAgICfDisKbJzogJ0cnLFxyXG4gICAgJ8OKwpwnOiAnSCcsXHJcbiAgICAnw4nCqic6ICdJJyxcclxuICAgICfDisKBJzogJ1InLFxyXG4gICAgJ8OhwrTCiic6ICdKJyxcclxuICAgICfDocK0wosnOiAnSycsXHJcbiAgICAnw4rCnyc6ICdMJyxcclxuICAgICfDocK0wownOiAnTCcsXHJcbiAgICAnw6HCtMKNJzogJ00nLFxyXG4gICAgJ8OJwrQnOiAnTicsXHJcbiAgICAnw6HCtMKPJzogJ08nLFxyXG4gICAgJ8OJwrYnOiAnT0UnLFxyXG4gICAgJ8OhwrTCkCc6ICdPJyxcclxuICAgICfDocK0wpUnOiAnT1UnLFxyXG4gICAgJ8OhwrTCmCc6ICdQJyxcclxuICAgICfDisKAJzogJ1InLFxyXG4gICAgJ8OhwrTCjic6ICdOJyxcclxuICAgICfDocK0wpknOiAnUicsXHJcbiAgICAnw6rCnMKxJzogJ1MnLFxyXG4gICAgJ8OhwrTCmyc6ICdUJyxcclxuICAgICfDosKxwrsnOiAnRScsXHJcbiAgICAnw6HCtMKaJzogJ1InLFxyXG4gICAgJ8OhwrTCnCc6ICdVJyxcclxuICAgICfDocK0wqAnOiAnVicsXHJcbiAgICAnw6HCtMKhJzogJ1cnLFxyXG4gICAgJ8OKwo8nOiAnWScsXHJcbiAgICAnw6HCtMKiJzogJ1onLFxyXG4gICAgJ8ODwqEnOiAnYScsXHJcbiAgICAnw4TCgyc6ICdhJyxcclxuICAgICfDocK6wq8nOiAnYScsXHJcbiAgICAnw6HCusK3JzogJ2EnLFxyXG4gICAgJ8OhwrrCsSc6ICdhJyxcclxuICAgICfDocK6wrMnOiAnYScsXHJcbiAgICAnw6HCusK1JzogJ2EnLFxyXG4gICAgJ8OHwo4nOiAnYScsXHJcbiAgICAnw4PCoic6ICdhJyxcclxuICAgICfDocK6wqUnOiAnYScsXHJcbiAgICAnw6HCusKtJzogJ2EnLFxyXG4gICAgJ8OhwrrCpyc6ICdhJyxcclxuICAgICfDocK6wqknOiAnYScsXHJcbiAgICAnw6HCusKrJzogJ2EnLFxyXG4gICAgJ8ODwqQnOiAnYScsXHJcbiAgICAnw4fCnyc6ICdhJyxcclxuICAgICfDiMKnJzogJ2EnLFxyXG4gICAgJ8OHwqEnOiAnYScsXHJcbiAgICAnw6HCusKhJzogJ2EnLFxyXG4gICAgJ8OIwoEnOiAnYScsXHJcbiAgICAnw4PCoCc6ICdhJyxcclxuICAgICfDocK6wqMnOiAnYScsXHJcbiAgICAnw4jCgyc6ICdhJyxcclxuICAgICfDhMKBJzogJ2EnLFxyXG4gICAgJ8OEwoUnOiAnYScsXHJcbiAgICAnw6HCtsKPJzogJ2EnLFxyXG4gICAgJ8OhwrrCmic6ICdhJyxcclxuICAgICfDg8KlJzogJ2EnLFxyXG4gICAgJ8OHwrsnOiAnYScsXHJcbiAgICAnw6HCuMKBJzogJ2EnLFxyXG4gICAgJ8OiwrHCpSc6ICdhJyxcclxuICAgICfDg8KjJzogJ2EnLFxyXG4gICAgJ8OqwpzCsyc6ICdhYScsXHJcbiAgICAnw4PCpic6ICdhZScsXHJcbiAgICAnw4fCvSc6ICdhZScsXHJcbiAgICAnw4fCoyc6ICdhZScsXHJcbiAgICAnw6rCnMK1JzogJ2FvJyxcclxuICAgICfDqsKcwrcnOiAnYXUnLFxyXG4gICAgJ8OqwpzCuSc6ICdhdicsXHJcbiAgICAnw6rCnMK7JzogJ2F2JyxcclxuICAgICfDqsKcwr0nOiAnYXknLFxyXG4gICAgJ8OhwrjCgyc6ICdiJyxcclxuICAgICfDocK4woUnOiAnYicsXHJcbiAgICAnw4nCkyc6ICdiJyxcclxuICAgICfDocK4wocnOiAnYicsXHJcbiAgICAnw6HCtcKsJzogJ2InLFxyXG4gICAgJ8OhwrbCgCc6ICdiJyxcclxuICAgICfDhsKAJzogJ2InLFxyXG4gICAgJ8OGwoMnOiAnYicsXHJcbiAgICAnw4nCtSc6ICdvJyxcclxuICAgICfDhMKHJzogJ2MnLFxyXG4gICAgJ8OEwo0nOiAnYycsXHJcbiAgICAnw4PCpyc6ICdjJyxcclxuICAgICfDocK4woknOiAnYycsXHJcbiAgICAnw4TCiSc6ICdjJyxcclxuICAgICfDicKVJzogJ2MnLFxyXG4gICAgJ8OEwosnOiAnYycsXHJcbiAgICAnw4bCiCc6ICdjJyxcclxuICAgICfDiMK8JzogJ2MnLFxyXG4gICAgJ8OEwo8nOiAnZCcsXHJcbiAgICAnw6HCuMKRJzogJ2QnLFxyXG4gICAgJ8OhwrjCkyc6ICdkJyxcclxuICAgICfDiMKhJzogJ2QnLFxyXG4gICAgJ8OhwrjCiyc6ICdkJyxcclxuICAgICfDocK4wo0nOiAnZCcsXHJcbiAgICAnw4nClyc6ICdkJyxcclxuICAgICfDocK2wpEnOiAnZCcsXHJcbiAgICAnw6HCuMKPJzogJ2QnLFxyXG4gICAgJ8OhwrXCrSc6ICdkJyxcclxuICAgICfDocK2woEnOiAnZCcsXHJcbiAgICAnw4TCkSc6ICdkJyxcclxuICAgICfDicKWJzogJ2QnLFxyXG4gICAgJ8OGwownOiAnZCcsXHJcbiAgICAnw4TCsSc6ICdpJyxcclxuICAgICfDiMK3JzogJ2onLFxyXG4gICAgJ8OJwp8nOiAnaicsXHJcbiAgICAnw4rChCc6ICdqJyxcclxuICAgICfDh8KzJzogJ2R6JyxcclxuICAgICfDh8KGJzogJ2R6JyxcclxuICAgICfDg8KpJzogJ2UnLFxyXG4gICAgJ8OEwpUnOiAnZScsXHJcbiAgICAnw4TCmyc6ICdlJyxcclxuICAgICfDiMKpJzogJ2UnLFxyXG4gICAgJ8OhwrjCnSc6ICdlJyxcclxuICAgICfDg8KqJzogJ2UnLFxyXG4gICAgJ8OhwrrCvyc6ICdlJyxcclxuICAgICfDocK7wocnOiAnZScsXHJcbiAgICAnw6HCu8KBJzogJ2UnLFxyXG4gICAgJ8OhwrvCgyc6ICdlJyxcclxuICAgICfDocK7woUnOiAnZScsXHJcbiAgICAnw6HCuMKZJzogJ2UnLFxyXG4gICAgJ8ODwqsnOiAnZScsXHJcbiAgICAnw4TClyc6ICdlJyxcclxuICAgICfDocK6wrknOiAnZScsXHJcbiAgICAnw4jChSc6ICdlJyxcclxuICAgICfDg8KoJzogJ2UnLFxyXG4gICAgJ8OhwrrCuyc6ICdlJyxcclxuICAgICfDiMKHJzogJ2UnLFxyXG4gICAgJ8OEwpMnOiAnZScsXHJcbiAgICAnw6HCuMKXJzogJ2UnLFxyXG4gICAgJ8OhwrjClSc6ICdlJyxcclxuICAgICfDosKxwrgnOiAnZScsXHJcbiAgICAnw4TCmSc6ICdlJyxcclxuICAgICfDocK2wpInOiAnZScsXHJcbiAgICAnw4nChyc6ICdlJyxcclxuICAgICfDocK6wr0nOiAnZScsXHJcbiAgICAnw6HCuMKbJzogJ2UnLFxyXG4gICAgJ8Oqwp3Cqyc6ICdldCcsXHJcbiAgICAnw6HCuMKfJzogJ2YnLFxyXG4gICAgJ8OGwpInOiAnZicsXHJcbiAgICAnw6HCtcKuJzogJ2YnLFxyXG4gICAgJ8OhwrbCgic6ICdmJyxcclxuICAgICfDh8K1JzogJ2cnLFxyXG4gICAgJ8OEwp8nOiAnZycsXHJcbiAgICAnw4fCpyc6ICdnJyxcclxuICAgICfDhMKjJzogJ2cnLFxyXG4gICAgJ8OEwp0nOiAnZycsXHJcbiAgICAnw4TCoSc6ICdnJyxcclxuICAgICfDicKgJzogJ2cnLFxyXG4gICAgJ8OhwrjCoSc6ICdnJyxcclxuICAgICfDocK2woMnOiAnZycsXHJcbiAgICAnw4fCpSc6ICdnJyxcclxuICAgICfDocK4wqsnOiAnaCcsXHJcbiAgICAnw4jCnyc6ICdoJyxcclxuICAgICfDocK4wqknOiAnaCcsXHJcbiAgICAnw4TCpSc6ICdoJyxcclxuICAgICfDosKxwqgnOiAnaCcsXHJcbiAgICAnw6HCuMKnJzogJ2gnLFxyXG4gICAgJ8OhwrjCoyc6ICdoJyxcclxuICAgICfDocK4wqUnOiAnaCcsXHJcbiAgICAnw4nCpic6ICdoJyxcclxuICAgICfDocK6wpYnOiAnaCcsXHJcbiAgICAnw4TCpyc6ICdoJyxcclxuICAgICfDhsKVJzogJ2h2JyxcclxuICAgICfDg8KtJzogJ2knLFxyXG4gICAgJ8OEwq0nOiAnaScsXHJcbiAgICAnw4fCkCc6ICdpJyxcclxuICAgICfDg8KuJzogJ2knLFxyXG4gICAgJ8ODwq8nOiAnaScsXHJcbiAgICAnw6HCuMKvJzogJ2knLFxyXG4gICAgJ8OhwrvCiyc6ICdpJyxcclxuICAgICfDiMKJJzogJ2knLFxyXG4gICAgJ8ODwqwnOiAnaScsXHJcbiAgICAnw6HCu8KJJzogJ2knLFxyXG4gICAgJ8OIwosnOiAnaScsXHJcbiAgICAnw4TCqyc6ICdpJyxcclxuICAgICfDhMKvJzogJ2knLFxyXG4gICAgJ8OhwrbClic6ICdpJyxcclxuICAgICfDicKoJzogJ2knLFxyXG4gICAgJ8OEwqknOiAnaScsXHJcbiAgICAnw6HCuMKtJzogJ2knLFxyXG4gICAgJ8Oqwp3Cuic6ICdkJyxcclxuICAgICfDqsKdwrwnOiAnZicsXHJcbiAgICAnw6HCtcK5JzogJ2cnLFxyXG4gICAgJ8Oqwp7Cgyc6ICdyJyxcclxuICAgICfDqsKewoUnOiAncycsXHJcbiAgICAnw6rCnsKHJzogJ3QnLFxyXG4gICAgJ8Oqwp3CrSc6ICdpcycsXHJcbiAgICAnw4fCsCc6ICdqJyxcclxuICAgICfDhMK1JzogJ2onLFxyXG4gICAgJ8OKwp0nOiAnaicsXHJcbiAgICAnw4nCiSc6ICdqJyxcclxuICAgICfDocK4wrEnOiAnaycsXHJcbiAgICAnw4fCqSc6ICdrJyxcclxuICAgICfDhMK3JzogJ2snLFxyXG4gICAgJ8OiwrHCqic6ICdrJyxcclxuICAgICfDqsKdwoMnOiAnaycsXHJcbiAgICAnw6HCuMKzJzogJ2snLFxyXG4gICAgJ8OGwpknOiAnaycsXHJcbiAgICAnw6HCuMK1JzogJ2snLFxyXG4gICAgJ8OhwrbChCc6ICdrJyxcclxuICAgICfDqsKdwoEnOiAnaycsXHJcbiAgICAnw6rCncKFJzogJ2snLFxyXG4gICAgJ8OEwronOiAnbCcsXHJcbiAgICAnw4bCmic6ICdsJyxcclxuICAgICfDicKsJzogJ2wnLFxyXG4gICAgJ8OEwr4nOiAnbCcsXHJcbiAgICAnw4TCvCc6ICdsJyxcclxuICAgICfDocK4wr0nOiAnbCcsXHJcbiAgICAnw4jCtCc6ICdsJyxcclxuICAgICfDocK4wrcnOiAnbCcsXHJcbiAgICAnw6HCuMK5JzogJ2wnLFxyXG4gICAgJ8OiwrHCoSc6ICdsJyxcclxuICAgICfDqsKdwoknOiAnbCcsXHJcbiAgICAnw6HCuMK7JzogJ2wnLFxyXG4gICAgJ8OFwoAnOiAnbCcsXHJcbiAgICAnw4nCqyc6ICdsJyxcclxuICAgICfDocK2woUnOiAnbCcsXHJcbiAgICAnw4nCrSc6ICdsJyxcclxuICAgICfDhcKCJzogJ2wnLFxyXG4gICAgJ8OHwoknOiAnbGonLFxyXG4gICAgJ8OFwr8nOiAncycsXHJcbiAgICAnw6HCusKcJzogJ3MnLFxyXG4gICAgJ8OhwrrCmyc6ICdzJyxcclxuICAgICfDocK6wp0nOiAncycsXHJcbiAgICAnw6HCuMK/JzogJ20nLFxyXG4gICAgJ8OhwrnCgSc6ICdtJyxcclxuICAgICfDocK5woMnOiAnbScsXHJcbiAgICAnw4nCsSc6ICdtJyxcclxuICAgICfDocK1wq8nOiAnbScsXHJcbiAgICAnw6HCtsKGJzogJ20nLFxyXG4gICAgJ8OFwoQnOiAnbicsXHJcbiAgICAnw4XCiCc6ICduJyxcclxuICAgICfDhcKGJzogJ24nLFxyXG4gICAgJ8OhwrnCiyc6ICduJyxcclxuICAgICfDiMK1JzogJ24nLFxyXG4gICAgJ8OhwrnChSc6ICduJyxcclxuICAgICfDocK5wocnOiAnbicsXHJcbiAgICAnw4fCuSc6ICduJyxcclxuICAgICfDicKyJzogJ24nLFxyXG4gICAgJ8OhwrnCiSc6ICduJyxcclxuICAgICfDhsKeJzogJ24nLFxyXG4gICAgJ8OhwrXCsCc6ICduJyxcclxuICAgICfDocK2wocnOiAnbicsXHJcbiAgICAnw4nCsyc6ICduJyxcclxuICAgICfDg8KxJzogJ24nLFxyXG4gICAgJ8OHwownOiAnbmonLFxyXG4gICAgJ8ODwrMnOiAnbycsXHJcbiAgICAnw4XCjyc6ICdvJyxcclxuICAgICfDh8KSJzogJ28nLFxyXG4gICAgJ8ODwrQnOiAnbycsXHJcbiAgICAnw6HCu8KRJzogJ28nLFxyXG4gICAgJ8OhwrvCmSc6ICdvJyxcclxuICAgICfDocK7wpMnOiAnbycsXHJcbiAgICAnw6HCu8KVJzogJ28nLFxyXG4gICAgJ8OhwrvClyc6ICdvJyxcclxuICAgICfDg8K2JzogJ28nLFxyXG4gICAgJ8OIwqsnOiAnbycsXHJcbiAgICAnw4jCryc6ICdvJyxcclxuICAgICfDiMKxJzogJ28nLFxyXG4gICAgJ8OhwrvCjSc6ICdvJyxcclxuICAgICfDhcKRJzogJ28nLFxyXG4gICAgJ8OIwo0nOiAnbycsXHJcbiAgICAnw4PCsic6ICdvJyxcclxuICAgICfDocK7wo8nOiAnbycsXHJcbiAgICAnw4bCoSc6ICdvJyxcclxuICAgICfDocK7wpsnOiAnbycsXHJcbiAgICAnw6HCu8KjJzogJ28nLFxyXG4gICAgJ8OhwrvCnSc6ICdvJyxcclxuICAgICfDocK7wp8nOiAnbycsXHJcbiAgICAnw6HCu8KhJzogJ28nLFxyXG4gICAgJ8OIwo8nOiAnbycsXHJcbiAgICAnw6rCncKLJzogJ28nLFxyXG4gICAgJ8Oqwp3CjSc6ICdvJyxcclxuICAgICfDosKxwronOiAnbycsXHJcbiAgICAnw4XCjSc6ICdvJyxcclxuICAgICfDocK5wpMnOiAnbycsXHJcbiAgICAnw6HCucKRJzogJ28nLFxyXG4gICAgJ8OHwqsnOiAnbycsXHJcbiAgICAnw4fCrSc6ICdvJyxcclxuICAgICfDg8K4JzogJ28nLFxyXG4gICAgJ8OHwr8nOiAnbycsXHJcbiAgICAnw4PCtSc6ICdvJyxcclxuICAgICfDocK5wo0nOiAnbycsXHJcbiAgICAnw6HCucKPJzogJ28nLFxyXG4gICAgJ8OIwq0nOiAnbycsXHJcbiAgICAnw4bCoyc6ICdvaScsXHJcbiAgICAnw6rCncKPJzogJ29vJyxcclxuICAgICfDicKbJzogJ2UnLFxyXG4gICAgJ8OhwrbCkyc6ICdlJyxcclxuICAgICfDicKUJzogJ28nLFxyXG4gICAgJ8OhwrbClyc6ICdvJyxcclxuICAgICfDiMKjJzogJ291JyxcclxuICAgICfDocK5wpUnOiAncCcsXHJcbiAgICAnw6HCucKXJzogJ3AnLFxyXG4gICAgJ8Oqwp3Ckyc6ICdwJyxcclxuICAgICfDhsKlJzogJ3AnLFxyXG4gICAgJ8OhwrXCsSc6ICdwJyxcclxuICAgICfDocK2wognOiAncCcsXHJcbiAgICAnw6rCncKVJzogJ3AnLFxyXG4gICAgJ8OhwrXCvSc6ICdwJyxcclxuICAgICfDqsKdwpEnOiAncCcsXHJcbiAgICAnw6rCncKZJzogJ3EnLFxyXG4gICAgJ8OKwqAnOiAncScsXHJcbiAgICAnw4nCiyc6ICdxJyxcclxuICAgICfDqsKdwpcnOiAncScsXHJcbiAgICAnw4XClSc6ICdyJyxcclxuICAgICfDhcKZJzogJ3InLFxyXG4gICAgJ8OFwpcnOiAncicsXHJcbiAgICAnw6HCucKZJzogJ3InLFxyXG4gICAgJ8OhwrnCmyc6ICdyJyxcclxuICAgICfDocK5wp0nOiAncicsXHJcbiAgICAnw4jCkSc6ICdyJyxcclxuICAgICfDicK+JzogJ3InLFxyXG4gICAgJ8OhwrXCsyc6ICdyJyxcclxuICAgICfDiMKTJzogJ3InLFxyXG4gICAgJ8OhwrnCnyc6ICdyJyxcclxuICAgICfDicK8JzogJ3InLFxyXG4gICAgJ8OhwrXCsic6ICdyJyxcclxuICAgICfDocK2woknOiAncicsXHJcbiAgICAnw4nCjSc6ICdyJyxcclxuICAgICfDicK9JzogJ3InLFxyXG4gICAgJ8OiwobChCc6ICdjJyxcclxuICAgICfDqsKcwr8nOiAnYycsXHJcbiAgICAnw4nCmCc6ICdlJyxcclxuICAgICfDicK/JzogJ3InLFxyXG4gICAgJ8OFwpsnOiAncycsXHJcbiAgICAnw6HCucKlJzogJ3MnLFxyXG4gICAgJ8OFwqEnOiAncycsXHJcbiAgICAnw6HCucKnJzogJ3MnLFxyXG4gICAgJ8OFwp8nOiAncycsXHJcbiAgICAnw4XCnSc6ICdzJyxcclxuICAgICfDiMKZJzogJ3MnLFxyXG4gICAgJ8OhwrnCoSc6ICdzJyxcclxuICAgICfDocK5wqMnOiAncycsXHJcbiAgICAnw6HCucKpJzogJ3MnLFxyXG4gICAgJ8OKwoInOiAncycsXHJcbiAgICAnw6HCtcK0JzogJ3MnLFxyXG4gICAgJ8OhwrbCiic6ICdzJyxcclxuICAgICfDiMK/JzogJ3MnLFxyXG4gICAgJ8OJwqEnOiAnZycsXHJcbiAgICAnw6HCtMKRJzogJ28nLFxyXG4gICAgJ8OhwrTCkyc6ICdvJyxcclxuICAgICfDocK0wp0nOiAndScsXHJcbiAgICAnw4XCpSc6ICd0JyxcclxuICAgICfDhcKjJzogJ3QnLFxyXG4gICAgJ8OhwrnCsSc6ICd0JyxcclxuICAgICfDiMKbJzogJ3QnLFxyXG4gICAgJ8OIwrYnOiAndCcsXHJcbiAgICAnw6HCusKXJzogJ3QnLFxyXG4gICAgJ8OiwrHCpic6ICd0JyxcclxuICAgICfDocK5wqsnOiAndCcsXHJcbiAgICAnw6HCucKtJzogJ3QnLFxyXG4gICAgJ8OGwq0nOiAndCcsXHJcbiAgICAnw6HCucKvJzogJ3QnLFxyXG4gICAgJ8OhwrXCtSc6ICd0JyxcclxuICAgICfDhsKrJzogJ3QnLFxyXG4gICAgJ8OKwognOiAndCcsXHJcbiAgICAnw4XCpyc6ICd0JyxcclxuICAgICfDocK1wronOiAndGgnLFxyXG4gICAgJ8OJwpAnOiAnYScsXHJcbiAgICAnw6HCtMKCJzogJ2FlJyxcclxuICAgICfDh8KdJzogJ2UnLFxyXG4gICAgJ8OhwrXCtyc6ICdnJyxcclxuICAgICfDicKlJzogJ2gnLFxyXG4gICAgJ8OKwq4nOiAnaCcsXHJcbiAgICAnw4rCryc6ICdoJyxcclxuICAgICfDocK0woknOiAnaScsXHJcbiAgICAnw4rCnic6ICdrJyxcclxuICAgICfDqsKewoEnOiAnbCcsXHJcbiAgICAnw4nCryc6ICdtJyxcclxuICAgICfDicKwJzogJ20nLFxyXG4gICAgJ8OhwrTClCc6ICdvZScsXHJcbiAgICAnw4nCuSc6ICdyJyxcclxuICAgICfDicK7JzogJ3InLFxyXG4gICAgJ8OJwronOiAncicsXHJcbiAgICAnw6LCscK5JzogJ3InLFxyXG4gICAgJ8OKwocnOiAndCcsXHJcbiAgICAnw4rCjCc6ICd2JyxcclxuICAgICfDisKNJzogJ3cnLFxyXG4gICAgJ8OKwo4nOiAneScsXHJcbiAgICAnw6rCnMKpJzogJ3R6JyxcclxuICAgICfDg8K6JzogJ3UnLFxyXG4gICAgJ8OFwq0nOiAndScsXHJcbiAgICAnw4fClCc6ICd1JyxcclxuICAgICfDg8K7JzogJ3UnLFxyXG4gICAgJ8OhwrnCtyc6ICd1JyxcclxuICAgICfDg8K8JzogJ3UnLFxyXG4gICAgJ8OHwpgnOiAndScsXHJcbiAgICAnw4fCmic6ICd1JyxcclxuICAgICfDh8KcJzogJ3UnLFxyXG4gICAgJ8OHwpYnOiAndScsXHJcbiAgICAnw6HCucKzJzogJ3UnLFxyXG4gICAgJ8OhwrvCpSc6ICd1JyxcclxuICAgICfDhcKxJzogJ3UnLFxyXG4gICAgJ8OIwpUnOiAndScsXHJcbiAgICAnw4PCuSc6ICd1JyxcclxuICAgICfDocK7wqcnOiAndScsXHJcbiAgICAnw4bCsCc6ICd1JyxcclxuICAgICfDocK7wqknOiAndScsXHJcbiAgICAnw6HCu8KxJzogJ3UnLFxyXG4gICAgJ8OhwrvCqyc6ICd1JyxcclxuICAgICfDocK7wq0nOiAndScsXHJcbiAgICAnw6HCu8KvJzogJ3UnLFxyXG4gICAgJ8OIwpcnOiAndScsXHJcbiAgICAnw4XCqyc6ICd1JyxcclxuICAgICfDocK5wrsnOiAndScsXHJcbiAgICAnw4XCsyc6ICd1JyxcclxuICAgICfDocK2wpknOiAndScsXHJcbiAgICAnw4XCryc6ICd1JyxcclxuICAgICfDhcKpJzogJ3UnLFxyXG4gICAgJ8OhwrnCuSc6ICd1JyxcclxuICAgICfDocK5wrUnOiAndScsXHJcbiAgICAnw6HCtcKrJzogJ3VlJyxcclxuICAgICfDqsKdwrgnOiAndW0nLFxyXG4gICAgJ8OiwrHCtCc6ICd2JyxcclxuICAgICfDqsKdwp8nOiAndicsXHJcbiAgICAnw6HCucK/JzogJ3YnLFxyXG4gICAgJ8OKwosnOiAndicsXHJcbiAgICAnw6HCtsKMJzogJ3YnLFxyXG4gICAgJ8OiwrHCsSc6ICd2JyxcclxuICAgICfDocK5wr0nOiAndicsXHJcbiAgICAnw6rCncKhJzogJ3Z5JyxcclxuICAgICfDocK6woMnOiAndycsXHJcbiAgICAnw4XCtSc6ICd3JyxcclxuICAgICfDocK6woUnOiAndycsXHJcbiAgICAnw6HCusKHJzogJ3cnLFxyXG4gICAgJ8OhwrrCiSc6ICd3JyxcclxuICAgICfDocK6woEnOiAndycsXHJcbiAgICAnw6LCscKzJzogJ3cnLFxyXG4gICAgJ8OhwrrCmCc6ICd3JyxcclxuICAgICfDocK6wo0nOiAneCcsXHJcbiAgICAnw6HCusKLJzogJ3gnLFxyXG4gICAgJ8OhwrbCjSc6ICd4JyxcclxuICAgICfDg8K9JzogJ3knLFxyXG4gICAgJ8OFwrcnOiAneScsXHJcbiAgICAnw4PCvyc6ICd5JyxcclxuICAgICfDocK6wo8nOiAneScsXHJcbiAgICAnw6HCu8K1JzogJ3knLFxyXG4gICAgJ8OhwrvCsyc6ICd5JyxcclxuICAgICfDhsK0JzogJ3knLFxyXG4gICAgJ8OhwrvCtyc6ICd5JyxcclxuICAgICfDocK7wr8nOiAneScsXHJcbiAgICAnw4jCsyc6ICd5JyxcclxuICAgICfDocK6wpknOiAneScsXHJcbiAgICAnw4nCjyc6ICd5JyxcclxuICAgICfDocK7wrknOiAneScsXHJcbiAgICAnw4XCuic6ICd6JyxcclxuICAgICfDhcK+JzogJ3onLFxyXG4gICAgJ8OhwrrCkSc6ICd6JyxcclxuICAgICfDisKRJzogJ3onLFxyXG4gICAgJ8OiwrHCrCc6ICd6JyxcclxuICAgICfDhcK8JzogJ3onLFxyXG4gICAgJ8OhwrrCkyc6ICd6JyxcclxuICAgICfDiMKlJzogJ3onLFxyXG4gICAgJ8OhwrrClSc6ICd6JyxcclxuICAgICfDocK1wrYnOiAneicsXHJcbiAgICAnw6HCtsKOJzogJ3onLFxyXG4gICAgJ8OKwpAnOiAneicsXHJcbiAgICAnw4bCtic6ICd6JyxcclxuICAgICfDicKAJzogJ3onLFxyXG4gICAgJ8OvwqzCgCc6ICdmZicsXHJcbiAgICAnw6/CrMKDJzogJ2ZmaScsXHJcbiAgICAnw6/CrMKEJzogJ2ZmbCcsXHJcbiAgICAnw6/CrMKBJzogJ2ZpJyxcclxuICAgICfDr8KswoInOiAnZmwnLFxyXG4gICAgJ8OEwrMnOiAnaWonLFxyXG4gICAgJ8OFwpMnOiAnb2UnLFxyXG4gICAgJ8OvwqzChic6ICdzdCcsXHJcbiAgICAnw6LCgsKQJzogJ2EnLFxyXG4gICAgJ8OiwoLCkSc6ICdlJyxcclxuICAgICfDocK1wqInOiAnaScsXHJcbiAgICAnw6LCscK8JzogJ2onLFxyXG4gICAgJ8OiwoLCkic6ICdvJyxcclxuICAgICfDocK1wqMnOiAncicsXHJcbiAgICAnw6HCtcKkJzogJ3UnLFxyXG4gICAgJ8OhwrXCpSc6ICd2JyxcclxuICAgICfDosKCwpMnOiAneCdcclxufTtcclxuIiwiaW1wb3J0IHsgVHlwZWFoZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRPcHRpb25zIHtcclxuICBwbGFjZW1lbnQ6IHN0cmluZztcclxuICBhbmltYXRpb246IGJvb2xlYW47XHJcbiAgdHlwZWFoZWFkUmVmOiBUeXBlYWhlYWREaXJlY3RpdmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFR5cGVhaGVhZE9wdGlvbnMpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUeXBlYWhlYWRNYXRjaCB7XHJcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICByZWFkb25seSBpdGVtOiBhbnk7XHJcbiAgcHJvdGVjdGVkIGhlYWRlcjogYm9vbGVhbjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdHJ1Y3RvcihpdGVtOiBhbnksIHZhbHVlOiBzdHJpbmcgPSBpdGVtLCBoZWFkZXIgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgaXNIZWFkZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWFkZXI7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgbGF0aW5NYXAgfSBmcm9tICcuL2xhdGluLW1hcCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGF0aW5pemUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGlmICghc3RyKSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1teQS1aYS16MC05XFxbXFxdIF0vZywgZnVuY3Rpb24gKGE6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbGF0aW5NYXBbYV0gfHwgYTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIFJlZ2V4OiBjYXB0dXJlIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nXHJcbiAgLy8gdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWF0Y2ggdGhlIHJlc3VsdHMsIGZvciBleGFtcGxlIGlmIHRoZSBjYXB0dXJlIGlzXHJcbiAgLy8gJ2EnIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcclxuICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xyXG59XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUoc3RyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkUmVnZXhEZWxpbWl0ZXJzID0gJyAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGhyYXNlUmVnZXhEZWxpbWl0ZXJzID0gJycpOiBBcnJheTxzdHJpbmc+IHtcclxuICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgY29uc3QgcmVnZXhTdHIgPSBgKD86WyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0pKFteJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSspYCArXHJcbiAgICBgKD86WyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0pfChbXiR7d29yZFJlZ2V4RGVsaW1pdGVyc31dKylgO1xyXG4gIGNvbnN0IHByZVRva2VuaXplZDogc3RyaW5nW10gPSBzdHIuc3BsaXQobmV3IFJlZ0V4cChyZWdleFN0ciwgJ2cnKSk7XHJcbiAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbnN0IHByZVRva2VuaXplZExlbmd0aDogbnVtYmVyID0gcHJlVG9rZW5pemVkLmxlbmd0aDtcclxuICBsZXQgdG9rZW46IHN0cmluZztcclxuICBjb25zdCByZXBsYWNlUGhyYXNlRGVsaW1pdGVycyA9IG5ldyBSZWdFeHAoYFske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dK2AsICdnJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlVG9rZW5pemVkTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIHRva2VuID0gcHJlVG9rZW5pemVkW2ldO1xyXG4gICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCAmJiB0b2tlbiAhPT0gd29yZFJlZ2V4RGVsaW1pdGVycykge1xyXG4gICAgICByZXN1bHQucHVzaCh0b2tlbi5yZXBsYWNlKHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzLCAnJykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGcm9tT2JqZWN0KG9iamVjdDogYW55LCBvcHRpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKCFvcHRpb24gfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb24uZW5kc1dpdGgoJygpJykpIHtcclxuICAgIGNvbnN0IGZ1bmN0aW9uTmFtZSA9IG9wdGlvbi5zbGljZSgwLCBvcHRpb24ubGVuZ3RoIC0gMik7XHJcblxyXG4gICAgcmV0dXJuIG9iamVjdFtmdW5jdGlvbk5hbWVdKCkudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb3BlcnRpZXM6IHN0cmluZyA9IG9wdGlvblxyXG4gICAgLnJlcGxhY2UoL1xcWyhcXHcrKVxcXS9nLCAnLiQxJylcclxuICAgIC5yZXBsYWNlKC9eXFwuLywgJycpO1xyXG4gIGNvbnN0IHByb3BlcnRpZXNBcnJheTogc3RyaW5nW10gPSBwcm9wZXJ0aWVzLnNwbGl0KCcuJyk7XHJcblxyXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydGllc0FycmF5KSB7XHJcbiAgICBpZiAocHJvcGVydHkgaW4gb2JqZWN0KSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICBvYmplY3QgPSBvYmplY3RbcHJvcGVydHldO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIW9iamVjdCkge3JldHVybiAnJzsgfVxyXG5cclxuICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0JzMywgVXRpbHMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgbGF0aW5pemUgfSBmcm9tICcuL3R5cGVhaGVhZC11dGlscyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE1hdGNoIH0gZnJvbSAnLi90eXBlYWhlYWQtbWF0Y2guY2xhc3MnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0eXBlYWhlYWQtY29udGFpbmVyJyxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICB0ZW1wbGF0ZVVybDogJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdkcm9wZG93biBvcGVuJyxcclxuICAgICdbY2xhc3MuZHJvcGRvd24tbWVudV0nOiAnaXNCczQnLFxyXG4gICAgJ1tzdHlsZS5vdmVyZmxvdy15XScgOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/ICdzY3JvbGwnOiAndmlzaWJsZSdgLFxyXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogYGlzQnM0ICYmIG5lZWRTY3JvbGxiYXIgPyBndWlIZWlnaHQ6ICdhdXRvJ2AsXHJcbiAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogYHR5cGVhaGVhZFNjcm9sbGFibGUgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ2AsXHJcbiAgICAnW2NsYXNzLmRyb3B1cF0nOiAnZHJvcHVwJyxcclxuICAgIHN0eWxlOiAncG9zaXRpb246IGFic29sdXRlO2Rpc3BsYXk6IGJsb2NrOydcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QuZHJvcGRvd24ge1xyXG4gICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgfVxyXG4gIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQge1xyXG4gIHBhcmVudDogVHlwZWFoZWFkRGlyZWN0aXZlO1xyXG4gIHF1ZXJ5OiBzdHJpbmdbXSB8IHN0cmluZztcclxuICBlbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIHRvcDogc3RyaW5nO1xyXG4gIGxlZnQ6IHN0cmluZztcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgZHJvcHVwOiBib29sZWFuO1xyXG4gIGd1aUhlaWdodDogc3RyaW5nO1xyXG4gIG5lZWRTY3JvbGxiYXI6IGJvb2xlYW47XHJcblxyXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfYWN0aXZlOiBUeXBlYWhlYWRNYXRjaDtcclxuICBwcm90ZWN0ZWQgX21hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10gPSBbXTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndWxFbGVtZW50JylcclxuICBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZHJlbignbGlFbGVtZW50cycpXHJcbiAgcHJpdmF0ZSBsaUVsZW1lbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjdGl2ZSgpOiBUeXBlYWhlYWRNYXRjaCB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1hdGNoZXMoKTogVHlwZWFoZWFkTWF0Y2hbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcztcclxuICB9XHJcblxyXG4gIHNldCBtYXRjaGVzKHZhbHVlOiBUeXBlYWhlYWRNYXRjaFtdKSB7XHJcbiAgICB0aGlzLl9tYXRjaGVzID0gdmFsdWU7XHJcbiAgICB0aGlzLm5lZWRTY3JvbGxiYXIgPSB0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUgJiYgdGhpcy50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA8IHRoaXMubWF0Y2hlcy5sZW5ndGg7XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsYWJsZU1vZGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX21hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLl9tYXRjaGVzWzBdO1xyXG4gICAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcclxuICAgICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0IG9wdGlvbnNMaXN0VGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5vcHRpb25zTGlzdFRlbXBsYXRlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGVhaGVhZFNjcm9sbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRTY3JvbGxhYmxlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0IHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA6IDU7XHJcbiAgfVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgZ2V0IGl0ZW1UZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZEl0ZW1UZW1wbGF0ZSA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKGlzQWN0aXZlSXRlbUNoYW5nZWQ/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMucGFyZW50LnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xyXG4gICAgICB0aGlzLnNlbGVjdE1hdGNoKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnBhcmVudC50eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0gJiYgaXNBY3RpdmVJdGVtQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdE1hdGNoKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2QWN0aXZlTWF0Y2goKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXHJcbiAgICAgIGluZGV4IC0gMSA8IDAgPyB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMVxyXG4gICAgICBdO1xyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XHJcbiAgICAgIHRoaXMucHJldkFjdGl2ZU1hdGNoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUHJldmlvdXMoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dEFjdGl2ZU1hdGNoKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLl9hY3RpdmUpO1xyXG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5tYXRjaGVzW1xyXG4gICAgICBpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFcclxuICAgICAgXTtcclxuICAgIGlmICh0aGlzLl9hY3RpdmUuaXNIZWFkZXIoKSkge1xyXG4gICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSkge1xyXG4gICAgICB0aGlzLnNjcm9sbE5leHQoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWN0aXZlKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHQobWF0Y2g6IFR5cGVhaGVhZE1hdGNoLCBxdWVyeTogc3RyaW5nW10gfCBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IGl0ZW1TdHI6IHN0cmluZyA9IG1hdGNoLnZhbHVlO1xyXG4gICAgbGV0IGl0ZW1TdHJIZWxwZXI6IHN0cmluZyA9ICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC50eXBlYWhlYWRMYXRpbml6ZVxyXG4gICAgICA/IGxhdGluaXplKGl0ZW1TdHIpXHJcbiAgICAgIDogaXRlbVN0cikudG9Mb3dlckNhc2UoKTtcclxuICAgIGxldCBzdGFydElkeDogbnVtYmVyO1xyXG4gICAgbGV0IHRva2VuTGVuOiBudW1iZXI7XHJcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcclxuICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5TGVuOiBudW1iZXIgPSBxdWVyeS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlMZW47IGkgKz0gMSkge1xyXG4gICAgICAgIC8vIHF1ZXJ5W2ldIGlzIGFscmVhZHkgbGF0aW5pemVkIGFuZCBsb3dlciBjYXNlXHJcbiAgICAgICAgc3RhcnRJZHggPSBpdGVtU3RySGVscGVyLmluZGV4T2YocXVlcnlbaV0pO1xyXG4gICAgICAgIHRva2VuTGVuID0gcXVlcnlbaV0ubGVuZ3RoO1xyXG4gICAgICAgIGlmIChzdGFydElkeCA+PSAwICYmIHRva2VuTGVuID4gMCkge1xyXG4gICAgICAgICAgaXRlbVN0ciA9XHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX08c3Ryb25nPiR7aXRlbVN0ci5zdWJzdHJpbmcoc3RhcnRJZHgsIHN0YXJ0SWR4ICsgdG9rZW5MZW4pfTwvc3Ryb25nPmAgK1xyXG4gICAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xyXG4gICAgICAgICAgaXRlbVN0ckhlbHBlciA9XHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHJIZWxwZXIuc3Vic3RyaW5nKDAsIHN0YXJ0SWR4KX0gICAgICAgICR7JyAnLnJlcGVhdCh0b2tlbkxlbil9ICAgICAgICAgYCArXHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHJIZWxwZXIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5KSB7XHJcbiAgICAgIC8vIHF1ZXJ5IGlzIGFscmVhZHkgbGF0aW5pemVkIGFuZCBsb3dlciBjYXNlXHJcbiAgICAgIHN0YXJ0SWR4ID0gaXRlbVN0ckhlbHBlci5pbmRleE9mKHF1ZXJ5KTtcclxuICAgICAgdG9rZW5MZW4gPSBxdWVyeS5sZW5ndGg7XHJcbiAgICAgIGlmIChzdGFydElkeCA+PSAwICYmIHRva2VuTGVuID4gMCkge1xyXG4gICAgICAgIGl0ZW1TdHIgPVxyXG4gICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfTxzdHJvbmc+JHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCwgc3RhcnRJZHggKyB0b2tlbkxlbil9PC9zdHJvbmc+YCArXHJcbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCArIHRva2VuTGVuKX1gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdHI7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBmb2N1c0xvc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUodmFsdWU6IFR5cGVhaGVhZE1hdGNoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlID09PSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdE1hdGNoKHZhbHVlOiBUeXBlYWhlYWRNYXRjaCwgZTogRXZlbnQgPSB2b2lkIDApOiBib29sZWFuIHtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIHRoaXMucGFyZW50LmNoYW5nZU1vZGVsKHZhbHVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wYXJlbnQudHlwZWFoZWFkT25TZWxlY3QuZW1pdCh2YWx1ZSksIDApO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbGFibGVNb2RlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnVsRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnVsRWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMuZmlyc3QpIHtcclxuICAgICAgY29uc3QgdWxTdHlsZXMgPSBVdGlscy5nZXRTdHlsZXModGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IGxpU3R5bGVzID0gVXRpbHMuZ2V0U3R5bGVzKHRoaXMubGlFbGVtZW50cy5maXJzdC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgY29uc3QgdWxQYWRkaW5nQm90dG9tID0gcGFyc2VGbG9hdCgodWxTdHlsZXNbJ3BhZGRpbmctYm90dG9tJ10gPyB1bFN0eWxlc1sncGFkZGluZy1ib3R0b20nXSA6ICcnKVxyXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XHJcbiAgICAgIGNvbnN0IHVsUGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoKHVsU3R5bGVzWydwYWRkaW5nLXRvcCddID8gdWxTdHlsZXNbJ3BhZGRpbmctdG9wJ10gOiAnMCcpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuICAgICAgY29uc3Qgb3B0aW9uSGVpZ2h0ID0gcGFyc2VGbG9hdCgobGlTdHlsZXMuaGVpZ2h0ID8gbGlTdHlsZXMuaGVpZ2h0IDogJzAnKVxyXG4gICAgICAgIC5yZXBsYWNlKCdweCcsICcnKSk7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMudHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcgKiBvcHRpb25IZWlnaHQ7XHJcbiAgICAgIHRoaXMuZ3VpSGVpZ2h0ID0gYCR7aGVpZ2h0ICsgdWxQYWRkaW5nVG9wICsgdWxQYWRkaW5nQm90dG9tfXB4YDtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFByZXZpb3VzKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5saUVsZW1lbnRzKSB7XHJcbiAgICAgIGNvbnN0IGxpRWxlbWVudCA9IHRoaXMubGlFbGVtZW50cy50b0FycmF5KClbaW5kZXggLSAxXTtcclxuICAgICAgaWYgKGxpRWxlbWVudCAmJiAhdGhpcy5pc1Njcm9sbGVkSW50b1ZpZXcobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbE5leHQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGluZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcclxuICAgICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5saUVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleCArIDFdO1xyXG4gICAgICBpZiAobGlFbGVtZW50ICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhsaUVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9XHJcbiAgICAgICAgICBsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLVxyXG4gICAgICAgICAgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArXHJcbiAgICAgICAgICBOdW1iZXIobGlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgaXNTY3JvbGxlZEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCBjb250YWluZXJWaWV3VG9wOiBudW1iZXIgPSB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdCb3R0b20gPSBjb250YWluZXJWaWV3VG9wICsgTnVtYmVyKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgIGNvbnN0IGVsZW1Ub3AgPSBlbGVtLm9mZnNldFRvcDtcclxuICAgIGNvbnN0IGVsZW1Cb3R0b20gPSBlbGVtVG9wICsgZWxlbS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBjb250YWluZXJWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBjb250YWluZXJWaWV3VG9wKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcclxuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiogRGVmYXVsdCB2YWx1ZXMgcHJvdmlkZXIgZm9yIHR5cGVhaGVhZCAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb25maWcge1xyXG4gIC8qKiBzZXRzIHVzZSBhZGFwdGl2ZSBwb3NpdGlvbiAqL1xyXG4gIGFkYXB0aXZlUG9zaXRpb24gPSBmYWxzZTtcclxuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdHMgb24gYmx1ciAqL1xyXG4gIGhpZGVSZXN1bHRzT25CbHVyID0gdHJ1ZTtcclxuICAvKiogdXNlZCB0byBjaG9vc2UgdGhlIGZpcnN0IGl0ZW0gaW4gdHlwZWFoZWFkIGNvbnRhaW5lciAqL1xyXG4gIHNlbGVjdEZpcnN0SXRlbSA9IHRydWU7XHJcbiAgLyoqIHVzZWQgdG8gY2hvb3NlIHNldCBtaW5pbWFsIG5vIG9mIGNoYXJhY3RlcnMgdGhhdCBuZWVkcyB0b1xyXG4gICAqIGJlIGVudGVyZWQgYmVmb3JlIHR5cGVhaGVhZCBraWNrcy1pblxyXG4gICAqL1xyXG4gIG1pbkxlbmd0aCA9IDE7XHJcbn1cclxuIiwiLyogdHNsaW50OmRpc2FibGU6bWF4LWZpbGUtbGluZS1jb3VudCAqL1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgZnJvbSwgU3Vic2NyaXB0aW9uLCBpc09ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE1hdGNoIH0gZnJvbSAnLi90eXBlYWhlYWQtbWF0Y2guY2xhc3MnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRDb25maWcgfSBmcm9tICcuL3R5cGVhaGVhZC5jb25maWcnO1xyXG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21PYmplY3QsIGxhdGluaXplLCB0b2tlbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtZXJnZU1hcCwgc3dpdGNoTWFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbdHlwZWFoZWFkXScsIGV4cG9ydEFzOiAnYnMtdHlwZWFoZWFkJ30pXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIG9wdGlvbnMgc291cmNlLCBjYW4gYmUgQXJyYXkgb2Ygc3RyaW5ncywgb2JqZWN0cyBvclxyXG4gICAqIGFuIE9ic2VydmFibGUgZm9yIGV4dGVybmFsIG1hdGNoaW5nIHByb2Nlc3NcclxuICAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSB0eXBlYWhlYWQ6IGFueTtcclxuICAvKiogbWluaW1hbCBubyBvZiBjaGFyYWN0ZXJzIHRoYXQgbmVlZHMgdG8gYmUgZW50ZXJlZCBiZWZvcmVcclxuICAgKiB0eXBlYWhlYWQga2lja3MtaW4uIFdoZW4gc2V0IHRvIDAsIHR5cGVhaGVhZCBzaG93cyBvbiBmb2N1cyB3aXRoIGZ1bGxcclxuICAgKiBsaXN0IG9mIG9wdGlvbnMgKGxpbWl0ZWQgYXMgbm9ybWFsIGJ5IHR5cGVhaGVhZE9wdGlvbnNMaW1pdClcclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRNaW5MZW5ndGg6IG51bWJlciA9IHZvaWQgMDtcclxuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cclxuICBASW5wdXQoKSBhZGFwdGl2ZVBvc2l0aW9uOiBib29sZWFuO1xyXG4gIC8qKiBtaW5pbWFsIHdhaXQgdGltZSBhZnRlciBsYXN0IGNoYXJhY3RlciB0eXBlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkV2FpdE1zOiBudW1iZXI7XHJcbiAgLyoqIG1heGltdW0gbGVuZ3RoIG9mIG9wdGlvbnMgaXRlbXMgbGlzdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25zTGltaXQ6IG51bWJlcjtcclxuICAvKiogd2hlbiBvcHRpb25zIHNvdXJjZSBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGUgbmFtZSBvZiBmaWVsZFxyXG4gICAqIHRoYXQgY29udGFpbnMgdGhlIG9wdGlvbnMgdmFsdWUsIHdlIHVzZSBhcnJheSBpdGVtIGFzIG9wdGlvbiBpbiBjYXNlXHJcbiAgICogb2YgdGhpcyBmaWVsZCBpcyBtaXNzaW5nLiBTdXBwb3J0cyBuZXN0ZWQgcHJvcGVydGllcyBhbmQgbWV0aG9kcy5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25GaWVsZDogc3RyaW5nO1xyXG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkIHRoYXRcclxuICAgKiBjb250YWlucyB0aGUgZ3JvdXAgdmFsdWUsIG1hdGNoZXMgYXJlIGdyb3VwZWQgYnkgdGhpcyBmaWVsZCB3aGVuIHNldC5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRHcm91cEZpZWxkOiBzdHJpbmc7XHJcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSBvZiB0eXBlYWhlYWQgYXR0cmlidXRlIGlzIGFycmF5LlxyXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cclxuICAgKiB0cnVlIG1ha2Ugc2Vuc2UgaWYgb3B0aW9ucyBhcnJheSBpcyBsYXJnZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYzogYm9vbGVhbiA9IHZvaWQgMDtcclxuICAvKiogbWF0Y2ggbGF0aW4gc3ltYm9scy5cclxuICAgKiBJZiB0cnVlIHRoZSB3b3JkIHPDg8K6cGVyIHdvdWxkIG1hdGNoIHN1cGVyIGFuZCB2aWNlIHZlcnNhLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZExhdGluaXplID0gdHJ1ZTtcclxuICAvKiogQ2FuIGJlIHVzZSB0byBzZWFyY2ggd29yZHMgYnkgaW5zZXJ0aW5nIGEgc2luZ2xlIHdoaXRlIHNwYWNlIGJldHdlZW4gZWFjaCBjaGFyYWN0ZXJzXHJcbiAgICogIGZvciBleGFtcGxlICdDIGEgbCBpIGYgbyByIG4gaSBhJyB3aWxsIG1hdGNoICdDYWxpZm9ybmlhJy5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRTaW5nbGVXb3JkcyA9IHRydWU7XHJcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cclxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBicmVhayB3b3Jkcy4gRGVmYXVsdHMgdG8gc3BhY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkV29yZERlbGltaXRlcnMgPSAnICc7XHJcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cclxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBtYXRjaCBleGFjdCBwaHJhc2UuXHJcbiAgICogRGVmYXVsdHMgdG8gc2ltcGxlIGFuZCBkb3VibGUgcXVvdGVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFBocmFzZURlbGltaXRlcnMgPSAnXFwnXCInO1xyXG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gaXRlbSB0ZW1wbGF0ZS5cclxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXMgZXhwb3NlZCBhcmUgY2FsbGVkIGl0ZW0gYW5kIGluZGV4O1xyXG4gICAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIG9wdGlvbnMgbGlzdCB0ZW1wbGF0ZS5cclxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXM6IG1hdGNoZXMsIGl0ZW1UZW1wbGF0ZSwgcXVlcnlcclxuICAgKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBvcHRpb25zTGlzdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiBzcGVjaWZpZXMgaWYgdHlwZWFoZWFkIGlzIHNjcm9sbGFibGUgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkU2Nyb2xsYWJsZSA9IGZhbHNlO1xyXG4gIC8qKiBzcGVjaWZpZXMgbnVtYmVyIG9mIG9wdGlvbnMgdG8gc2hvdyBpbiBzY3JvbGwgdmlldyAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA9IDU7XHJcbiAgLyoqIHVzZWQgdG8gaGlkZSByZXN1bHQgb24gYmx1ciAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyOiBib29sZWFuO1xyXG4gIC8qKiBmaXJlZCB3aGVuIGFuIG9wdGlvbnMgbGlzdCB3YXMgb3BlbmVkIGFuZCB0aGUgdXNlciBjbGlja2VkIFRhYlxyXG4gICAqIElmIGEgdmFsdWUgZXF1YWwgdHJ1ZSwgaXQgd2lsbCBiZSBjaG9zZW4gZmlyc3Qgb3IgYWN0aXZlIGl0ZW0gaW4gdGhlIGxpc3RcclxuICAgKiBJZiB2YWx1ZSBlcXVhbCBmYWxzZSwgaXQgd2lsbCBiZSBjaG9zZW4gYW4gYWN0aXZlIGl0ZW0gaW4gdGhlIGxpc3Qgb3Igbm90aGluZ1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSA9IHRydWU7XHJcbiAgLyoqIGZpcmVkIHdoZW4gJ2J1c3knIHN0YXRlIG9mIHRoaXMgY29tcG9uZW50IHdhcyBjaGFuZ2VkLFxyXG4gICAqIGZpcmVkIG9uIGFzeW5jIG1vZGUgb25seSwgcmV0dXJucyBib29sZWFuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHR5cGVhaGVhZExvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgLyoqIGZpcmVkIG9uIGV2ZXJ5IGtleSBldmVudCBhbmQgcmV0dXJucyB0cnVlXHJcbiAgICogaW4gY2FzZSBvZiBtYXRjaGVzIGFyZSBub3QgZGV0ZWN0ZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgdHlwZWFoZWFkTm9SZXN1bHRzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIG9wdGlvbiB3YXMgc2VsZWN0ZWQsIHJldHVybiBvYmplY3Qgd2l0aCBkYXRhIG9mIHRoaXMgb3B0aW9uICovXHJcbiAgQE91dHB1dCgpIHR5cGVhaGVhZE9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxUeXBlYWhlYWRNYXRjaD4oKTtcclxuICAvKiogZmlyZWQgd2hlbiBibHVyIGV2ZW50IG9jY3Vycy4gcmV0dXJucyB0aGUgYWN0aXZlIGl0ZW0gKi9cclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdHlwZWFoZWFkIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cclxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSBkcm9wZG93biBzaG91bGQgYmUgb3BlbmVkIHVwd2FyZHMgKi9cclxuICBASW5wdXQoKSBkcm9wdXAgPSBmYWxzZTtcclxuXHJcbiAgLy8gbm90IHlldCBpbXBsZW1lbnRlZFxyXG4gIC8qKiBpZiBmYWxzZSByZXN0cmljdCBtb2RlbCB2YWx1ZXMgdG8gdGhlIG9uZXMgc2VsZWN0ZWQgZnJvbSB0aGUgcG9wdXAgb25seSB3aWxsIGJlIHByb3ZpZGVkICovXHJcbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEVkaXRhYmxlOmJvb2xlYW47XHJcbiAgLyoqIGlmIGZhbHNlIHRoZSBmaXJzdCBtYXRjaCBhdXRvbWF0aWNhbGx5IHdpbGwgbm90IGJlIGZvY3VzZWQgYXMgeW91IHR5cGUgKi9cclxuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRm9jdXNGaXJzdDpib29sZWFuO1xyXG4gIC8qKiBmb3JtYXQgdGhlIG5nLW1vZGVsIHJlc3VsdCBhZnRlciBzZWxlY3Rpb24gKi9cclxuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkSW5wdXRGb3JtYXR0ZXI6YW55O1xyXG4gIC8qKiBpZiB0cnVlIGF1dG9tYXRpY2FsbHkgc2VsZWN0IGFuIGl0ZW0gd2hlbiB0aGVyZSBpcyBvbmUgb3B0aW9uIHRoYXQgZXhhY3RseSBtYXRjaGVzIHRoZSB1c2VyIGlucHV0ICovXHJcbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uRXhhY3Q6Ym9vbGVhbjtcclxuICAvKiogIGlmIHRydWUgc2VsZWN0IHRoZSBjdXJyZW50bHkgaGlnaGxpZ2h0ZWQgbWF0Y2ggb24gYmx1ciAqL1xyXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRTZWxlY3RPbkJsdXI6Ym9vbGVhbjtcclxuICAvKiogIGlmIGZhbHNlIGRvbid0IGZvY3VzIHRoZSBpbnB1dCBlbGVtZW50IHRoZSB0eXBlYWhlYWQgZGlyZWN0aXZlIGlzIGFzc29jaWF0ZWQgd2l0aCBvbiBzZWxlY3Rpb24gKi9cclxuICAgIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c09uU2VsZWN0OmJvb2xlYW47XHJcblxyXG4gIF9jb250YWluZXI6IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudDtcclxuICBpc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gZmFsc2U7XHJcbiAgaXNUeXBlYWhlYWRPcHRpb25zTGlzdEFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJvdGVjdGVkIGtleVVwRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwcm90ZWN0ZWQgX21hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW107XHJcbiAgcHJvdGVjdGVkIHBsYWNlbWVudCA9ICdib3R0b20tbGVmdCc7XHJcbiAgLy8gcHJvdGVjdGVkIHBvcHVwOkNvbXBvbmVudFJlZjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBwcml2YXRlIF90eXBlYWhlYWQ6IENvbXBvbmVudExvYWRlcjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBfb3V0c2lkZUNsaWNrTGlzdGVuZXI6IEZ1bmN0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcclxuICAgIGNvbmZpZzogVHlwZWFoZWFkQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgcG9zaXRpb25TZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5fdHlwZWFoZWFkID0gY2lzLmNyZWF0ZUxvYWRlcjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICByZW5kZXJlclxyXG4gICAgKVxyXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IFR5cGVhaGVhZENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9KTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsXHJcbiAgICAgIHsgdHlwZWFoZWFkSGlkZVJlc3VsdHNPbkJsdXI6IGNvbmZpZy5oaWRlUmVzdWx0c09uQmx1cixcclxuICAgICAgICAgICAgICAgdHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtOiBjb25maWcuc2VsZWN0Rmlyc3RJdGVtLFxyXG4gICAgICAgICAgICAgICB0eXBlYWhlYWRNaW5MZW5ndGg6IGNvbmZpZy5taW5MZW5ndGgsXHJcbiAgICAgICAgICAgICAgIGFkYXB0aXZlUG9zaXRpb246IGNvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbnNMaW1pdCA9IHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0IHx8IDIwO1xyXG5cclxuICAgIHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID1cclxuICAgICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IHZvaWQgMCA/IDEgOiB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aDtcclxuXHJcbiAgICB0aGlzLnR5cGVhaGVhZFdhaXRNcyA9IHRoaXMudHlwZWFoZWFkV2FpdE1zIHx8IDA7XHJcblxyXG4gICAgLy8gYXN5bmMgc2hvdWxkIGJlIGZhbHNlIGluIGNhc2Ugb2YgYXJyYXlcclxuICAgIGlmIChcclxuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICEoaXNPYnNlcnZhYmxlKHRoaXMudHlwZWFoZWFkKSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh0aGlzLnR5cGVhaGVhZCkpIHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkQXN5bmMpIHtcclxuICAgICAgdGhpcy5hc3luY0FjdGlvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3luY0FjdGlvbnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25JbnB1dChlOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIEZvciBgPGlucHV0PmBzLCB1c2UgdGhlIGB2YWx1ZWAgcHJvcGVydHkuIEZvciBvdGhlcnMgdGhhdCBkb24ndCBoYXZlIGFcclxuICAgIC8vIGB2YWx1ZWAgKHN1Y2ggYXMgYDxzcGFuIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj5gKSwgdXNlIGVpdGhlclxyXG4gICAgLy8gYHRleHRDb250ZW50YCBvciBgaW5uZXJUZXh0YCAoZGVwZW5kaW5nIG9uIHdoaWNoIG9uZSBpcyBzdXBwb3J0ZWQsIGkuZS5cclxuICAgIC8vIEZpcmVmb3ggb3IgSUUpLlxyXG4gICAgY29uc3QgdmFsdWUgPVxyXG4gICAgICBlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIDogZS50YXJnZXQudGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZS50YXJnZXQudGV4dENvbnRlbnRcclxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dDtcclxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPj0gdGhpcy50eXBlYWhlYWRNaW5MZW5ndGgpIHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzLmVtaXQoZmFsc2UpO1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcclxuICBvbkNoYW5nZShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xyXG4gICAgICAvLyBlc2NcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwXHJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJldkFjdGl2ZU1hdGNoKCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZG93blxyXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSA0MCB8fCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIubmV4dEFjdGl2ZU1hdGNoKCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcclxuICBvbkZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyLmVtaXQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiAhdGhpcy5fY29udGFpbmVyLmlzRm9jdXNlZCkge1xyXG4gICAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KHRoaXMuX2NvbnRhaW5lci5hY3RpdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBubyBjb250YWluZXIgLSBubyBwcm9ibGVtc1xyXG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghdGhpcy50eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2godGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkKTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlSXRlbUNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTW9kZWwobWF0Y2g6IFR5cGVhaGVhZE1hdGNoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZVN0cjogc3RyaW5nID0gbWF0Y2gudmFsdWU7XHJcbiAgICB0aGlzLm5nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh2YWx1ZVN0cik7XHJcbiAgICAodGhpcy5uZ0NvbnRyb2wuY29udHJvbCkuc2V0VmFsdWUodmFsdWVTdHIpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXM7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuYWRhcHRpdmVQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdHlwZWFoZWFkXHJcbiAgICAgIC5hdHRhY2goVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAvLyB0b2RvOiBhZGQgYXBwZW5kIHRvIGJvZHksIGFmdGVyIHVwZGF0aW5nIHBvc2l0aW9uaW5nIHNlcnZpY2VcclxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxyXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IGAke3RoaXMuZHJvcHVwID8gJ3RvcCcgOiAnYm90dG9tJ30gbGVmdGB9KVxyXG4gICAgICAuc2hvdyh7XHJcbiAgICAgICAgdHlwZWFoZWFkUmVmOiB0aGlzLFxyXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICBkcm9wdXA6IHRoaXMuZHJvcHVwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoID09PSAwICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyIHx8IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbk91dHNpZGVDbGljaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5fdHlwZWFoZWFkLmluc3RhbmNlO1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnBhcmVudCA9IHRoaXM7XHJcbiAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXHJcbiAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxyXG4gICAgICA/IGxhdGluaXplKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXHJcbiAgICAgIDogdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcclxuICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLl9jb250YWluZXIucXVlcnkgPSB0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzXHJcbiAgICAgID8gdG9rZW5pemUoXHJcbiAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkV29yZERlbGltaXRlcnMsXHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXHJcbiAgICAgIClcclxuICAgICAgOiBub3JtYWxpemVkUXVlcnk7XHJcbiAgICB0aGlzLl9jb250YWluZXIubWF0Y2hlcyA9IHRoaXMuX21hdGNoZXM7XHJcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl90eXBlYWhlYWQuaXNTaG93bikge1xyXG4gICAgICB0aGlzLl90eXBlYWhlYWQuaGlkZSgpO1xyXG4gICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PdXRzaWRlQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBjbGVhbiB1cCBzdWJzY3JpcHRpb25zXHJcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdHlwZWFoZWFkLmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBhc3luY0FjdGlvbnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXJcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnR5cGVhaGVhZFdhaXRNcyksXHJcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy50eXBlYWhlYWQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcclxuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3luY0FjdGlvbnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goXHJcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXJcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLnR5cGVhaGVhZFdhaXRNcyksXHJcbiAgICAgICAgICBtZXJnZU1hcCgodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUXVlcnkgPSB0aGlzLm5vcm1hbGl6ZVF1ZXJ5KHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHRoaXMudHlwZWFoZWFkKVxyXG4gICAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKChvcHRpb246IFR5cGVhaGVhZE1hdGNoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdE1hdGNoKHRoaXMubm9ybWFsaXplT3B0aW9uKG9wdGlvbiksIG5vcm1hbGl6ZWRRdWVyeSlcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgdG9BcnJheSgpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pID0+IHtcclxuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZU9wdGlvbihvcHRpb246IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBvcHRpb25WYWx1ZTogc3RyaW5nID0gZ2V0VmFsdWVGcm9tT2JqZWN0KFxyXG4gICAgICBvcHRpb24sXHJcbiAgICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGRcclxuICAgICk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkT3B0aW9uID0gdGhpcy50eXBlYWhlYWRMYXRpbml6ZVxyXG4gICAgICA/IGxhdGluaXplKG9wdGlvblZhbHVlKVxyXG4gICAgICA6IG9wdGlvblZhbHVlO1xyXG5cclxuICAgIHJldHVybiBub3JtYWxpemVkT3B0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbm9ybWFsaXplUXVlcnkodmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIC8vIElmIHNpbmdsZVdvcmRzLCBicmVhayBtb2RlbCBoZXJlIHRvIG5vdCBiZSBkb2luZyBleHRyYSB3b3JrIG9uIGVhY2hcclxuICAgIC8vIGl0ZXJhdGlvblxyXG4gICAgbGV0IG5vcm1hbGl6ZWRRdWVyeTogc3RyaW5nIHwgc3RyaW5nW10gPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxyXG4gICAgICA/IGxhdGluaXplKHZhbHVlKVxyXG4gICAgICA6IHZhbHVlKVxyXG4gICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgIG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcclxuICAgICAgPyB0b2tlbml6ZShcclxuICAgICAgICBub3JtYWxpemVkUXVlcnksXHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcclxuICAgICAgKVxyXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcclxuXHJcbiAgICByZXR1cm4gbm9ybWFsaXplZFF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRlc3RNYXRjaChtYXRjaDogc3RyaW5nLCB0ZXN0OiBzdHJpbmdbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHNwYWNlTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBzcGFjZUxlbmd0aCA9IHRlc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYWNlTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAodGVzdFtpXS5sZW5ndGggPiAwICYmIG1hdGNoLmluZGV4T2YodGVzdFtpXSkgPCAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWF0Y2guaW5kZXhPZih0ZXN0KSA+PSAwO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10pOiB2b2lkIHtcclxuICAgIHRoaXMucHJlcGFyZU1hdGNoZXMobWF0Y2hlcyB8fCBbXSk7XHJcblxyXG4gICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQoZmFsc2UpO1xyXG4gICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdCghdGhpcy5oYXNNYXRjaGVzKCkpO1xyXG5cclxuICAgIGlmICghdGhpcy5oYXNNYXRjaGVzKCkpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xyXG4gICAgICAvLyBmaXg6IHJlbW92ZSB1c2FnZSBvZiBuZ0NvbnRyb2wgaW50ZXJuYWxzXHJcbiAgICAgIGNvbnN0IF9jb250cm9sVmFsdWUgPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxyXG4gICAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcclxuICAgICAgICA6IHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpIHx8ICcnO1xyXG4gICAgICAvLyBUaGlzIGltcHJvdmVzIHRoZSBzcGVlZCBhcyBpdCB3b24ndCBoYXZlIHRvIGJlIGRvbmUgZm9yIGVhY2ggbGlzdCBpdGVtXHJcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IF9jb250cm9sVmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucXVlcnkgPSB0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzXHJcbiAgICAgICAgPyB0b2tlbml6ZShcclxuICAgICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcclxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkV29yZERlbGltaXRlcnMsXHJcbiAgICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcclxuICAgICAgICApXHJcbiAgICAgICAgOiBub3JtYWxpemVkUXVlcnk7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHByZXBhcmVNYXRjaGVzKG9wdGlvbnM6IFR5cGVhaGVhZE1hdGNoW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpbWl0ZWQ6IFR5cGVhaGVhZE1hdGNoW10gPSBvcHRpb25zLnNsaWNlKDAsIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0KTtcclxuXHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSB7XHJcbiAgICAgIGxldCBtYXRjaGVzOiBUeXBlYWhlYWRNYXRjaFtdID0gW107XHJcblxyXG4gICAgICAvLyBleHRyYWN0IGFsbCBncm91cCBuYW1lc1xyXG4gICAgICBjb25zdCBncm91cHMgPSBsaW1pdGVkXHJcbiAgICAgICAgLm1hcCgob3B0aW9uOiBUeXBlYWhlYWRNYXRjaCkgPT5cclxuICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZClcclxuICAgICAgICApXHJcbiAgICAgICAgLmZpbHRlcigodjogc3RyaW5nLCBpOiBudW1iZXIsIGE6IHN0cmluZ1tdKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xyXG5cclxuICAgICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBhZGQgZ3JvdXAgaGVhZGVyIHRvIGFycmF5IG9mIG1hdGNoZXNcclxuICAgICAgICBtYXRjaGVzLnB1c2gobmV3IFR5cGVhaGVhZE1hdGNoKGdyb3VwLCBncm91cCwgdHJ1ZSkpO1xyXG5cclxuICAgICAgICAvLyBhZGQgZWFjaCBpdGVtIG9mIGdyb3VwIHRvIGFycmF5IG9mIG1hdGNoZXNcclxuICAgICAgICBtYXRjaGVzID0gbWF0Y2hlcy5jb25jYXQoXHJcbiAgICAgICAgICBsaW1pdGVkXHJcbiAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgICAgICAgIChvcHRpb246IGFueSkgPT5cclxuICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZCkgPT09IGdyb3VwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgICAgICAgKG9wdGlvbjogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxyXG4gICAgICAgICAgICAgICAgICBvcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkT3B0aW9uRmllbGQpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbWF0Y2hlcyA9IGxpbWl0ZWQubWFwKFxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICAob3B0aW9uOiBhbnkpID0+XHJcbiAgICAgICAgICBuZXcgVHlwZWFoZWFkTWF0Y2goXHJcbiAgICAgICAgICAgIG9wdGlvbixcclxuICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcclxuICAgICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYXNNYXRjaGVzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXMubGVuZ3RoID4gMDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWREaXJlY3RpdmUgfSBmcm9tICcuL3R5cGVhaGVhZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZENvbmZpZyB9IGZyb20gJy4vdHlwZWFoZWFkLmNvbmZpZyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCwgVHlwZWFoZWFkRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50LCBUeXBlYWhlYWREaXJlY3RpdmVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1R5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogVHlwZWFoZWFkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2UsIFR5cGVhaGVhZENvbmZpZ11cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwiaXNCczMiLCJVdGlscyIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJWaWV3Q2hpbGQiLCJWaWV3Q2hpbGRyZW4iLCJIb3N0TGlzdGVuZXIiLCJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiaXNPYnNlcnZhYmxlIiwiZGVib3VuY2VUaW1lIiwic3dpdGNoTWFwIiwibWVyZ2VNYXAiLCJmcm9tIiwiZmlsdGVyIiwidG9BcnJheSIsIkRpcmVjdGl2ZSIsIkNvbXBvbmVudExvYWRlckZhY3RvcnkiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk5nQ29udHJvbCIsIlBvc2l0aW9uaW5nU2VydmljZSIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHlCQUFhLFFBQVEsR0FBOEI7UUFDL0MsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxLQUFLO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztLQUNYOzs7Ozs7QUN4ekJELFFBQUE7UUFLRSwwQkFB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