import { Component, ElementRef, HostListener, ViewChild, ViewChildren, Renderer2, Injectable, ChangeDetectorRef, Directive, EventEmitter, Input, Output, ViewContainerRef, NgModule } from '@angular/core';
import { isBs3, Utils } from 'ngx-bootstrap/utils';
import { NgControl } from '@angular/forms';
import { from, isObservable } from 'rxjs';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { debounceTime, filter, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable */
const /** @type {?} */ latinMap = {
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
class TypeaheadOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        Object.assign(this, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadMatch {
    /**
     * @param {?} item
     * @param {?=} value
     * @param {?=} header
     */
    constructor(item, value = item, header = false) {
        this.item = item;
        this.value = value;
        this.header = header;
    }
    /**
     * @return {?}
     */
    isHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.value;
    }
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
function tokenize(str, wordRegexDelimiters = ' ', phraseRegexDelimiters = '') {
    /* tslint:enable */
    const /** @type {?} */ regexStr = `(?:[${phraseRegexDelimiters}])([^${phraseRegexDelimiters}]+)` +
        `(?:[${phraseRegexDelimiters}])|([^${wordRegexDelimiters}]+)`;
    const /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
    const /** @type {?} */ result = [];
    const /** @type {?} */ preTokenizedLength = preTokenized.length;
    let /** @type {?} */ token;
    const /** @type {?} */ replacePhraseDelimiters = new RegExp(`[${phraseRegexDelimiters}]+`, 'g');
    for (let /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
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
        const /** @type {?} */ functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    const /** @type {?} */ properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    const /** @type {?} */ propertiesArray = properties.split('.');
    for (const /** @type {?} */ property of propertiesArray) {
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadContainerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.renderer = renderer;
        this.isFocused = false;
        this._matches = [];
        this.isScrolledIntoView = function (elem) {
            const /** @type {?} */ containerViewTop = this.ulElement.nativeElement.scrollTop;
            const /** @type {?} */ containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            const /** @type {?} */ elemTop = elem.offsetTop;
            const /** @type {?} */ elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        };
        this.element = element;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set matches(value) {
        this._matches = value;
        this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
        if (this.typeaheadScrollable) {
            setTimeout(() => {
                this.setScrollableMode();
            });
        }
        if (this._matches.length > 0) {
            this._active = this._matches[0];
            if (this._active.isHeader()) {
                this.nextActiveMatch();
            }
        }
    }
    /**
     * @return {?}
     */
    get optionsListTemplate() {
        return this.parent ? this.parent.optionsListTemplate : undefined;
    }
    /**
     * @return {?}
     */
    get typeaheadScrollable() {
        return this.parent ? this.parent.typeaheadScrollable : false;
    }
    /**
     * @return {?}
     */
    get typeaheadOptionsInScrollableView() {
        return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
    }
    /**
     * @return {?}
     */
    get itemTemplate() {
        return this.parent ? this.parent.typeaheadItemTemplate : undefined;
    }
    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    selectActiveMatch(isActiveItemChanged) {
        if (this._active && this.parent.typeaheadSelectFirstItem) {
            this.selectMatch(this._active);
        }
        if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
            this.selectMatch(this._active);
        }
    }
    /**
     * @return {?}
     */
    prevActiveMatch() {
        const /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    }
    /**
     * @return {?}
     */
    nextActiveMatch() {
        const /** @type {?} */ index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectActive(value) {
        this.isFocused = true;
        this._active = value;
    }
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    highlight(match, query) {
        let /** @type {?} */ itemStr = match.value;
        let /** @type {?} */ itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        let /** @type {?} */ startIdx;
        let /** @type {?} */ tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            const /** @type {?} */ queryLen = query.length;
            for (let /** @type {?} */ i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                            `${itemStr.substring(startIdx + tokenLen)}`;
                    itemStrHelper =
                        `${itemStrHelper.substring(0, startIdx)}        ${' '.repeat(tokenLen)}         ` +
                            `${itemStrHelper.substring(startIdx + tokenLen)}`;
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                        `${itemStr.substring(startIdx + tokenLen)}`;
            }
        }
        return itemStr;
    }
    /**
     * @return {?}
     */
    focusLost() {
        this.isFocused = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isActive(value) {
        return this._active === value;
    }
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    selectMatch(value, e = void 0) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(() => this.parent.typeaheadOnSelect.emit(value), 0);
        return false;
    }
    /**
     * @return {?}
     */
    setScrollableMode() {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            const /** @type {?} */ ulStyles = Utils.getStyles(this.ulElement.nativeElement);
            const /** @type {?} */ liStyles = Utils.getStyles(this.liElements.first.nativeElement);
            const /** @type {?} */ ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            const /** @type {?} */ ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            const /** @type {?} */ optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            const /** @type {?} */ height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = `${height + ulPaddingTop + ulPaddingBottom}px`;
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollPrevious(index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            const /** @type {?} */ liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollNext(index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            const /** @type {?} */ liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    }
    /**
     * @return {?}
     */
    scrollToTop() {
        this.ulElement.nativeElement.scrollTop = 0;
    }
}
TypeaheadContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'typeahead-container',
                // tslint:disable-next-line
                template: "<!-- inject options list template -->\r\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\r\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\r\n\r\n<!-- default options item template -->\r\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 3 options list template -->\r\n<ng-template #bs3Template>\r\n  <ul class=\"dropdown-menu\"\r\n      #ulElement\r\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\r\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\r\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\r\n      <li #liElements *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\r\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\r\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n        </a>\r\n      </li>\r\n    </ng-template>\r\n  </ul>\r\n</ng-template>\r\n\r\n<!-- Bootstrap 4 options list template -->\r\n<ng-template #bs4Template>\r\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\r\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\r\n    <ng-template [ngIf]=\"!match.isHeader()\">\r\n      <button #liElements\r\n              class=\"dropdown-item\"\r\n              (click)=\"selectMatch(match, $event)\"\r\n              (mouseenter)=\"selectActive(match)\"\r\n              [class.active]=\"isActive(match)\">\r\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\r\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\r\n      </button>\r\n    </ng-template>\r\n  </ng-template>\r\n</ng-template>\r\n",
                host: {
                    class: 'dropdown open',
                    '[class.dropdown-menu]': 'isBs4',
                    '[style.overflow-y]': `isBs4 && needScrollbar ? 'scroll': 'visible'`,
                    '[style.height]': `isBs4 && needScrollbar ? guiHeight: 'auto'`,
                    '[style.visibility]': `typeaheadScrollable ? 'hidden' : 'visible'`,
                    '[class.dropup]': 'dropup',
                    style: 'position: absolute;display: block;'
                },
                styles: [`
    :host.dropdown {
      z-index: 1000;
    }
  `]
            }] }
];
/** @nocollapse */
TypeaheadContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TypeaheadContainerComponent.propDecorators = {
    "ulElement": [{ type: ViewChild, args: ['ulElement',] },],
    "liElements": [{ type: ViewChildren, args: ['liElements',] },],
    "focusLost": [{ type: HostListener, args: ['mouseleave',] }, { type: HostListener, args: ['blur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for typeahead
 */
class TypeaheadConfig {
    constructor() {
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
}
TypeaheadConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadDirective {
    /**
     * @param {?} cis
     * @param {?} config
     * @param {?} changeDetection
     * @param {?} element
     * @param {?} ngControl
     * @param {?} positionService
     * @param {?} renderer
     * @param {?} viewContainerRef
     */
    constructor(cis, config, changeDetection, element, ngControl, positionService, renderer, viewContainerRef) {
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
        this.typeaheadLoading = new EventEmitter();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new EventEmitter();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new EventEmitter();
        /**
         * fired when blur event occurs. returns the active item
         */
        this.typeaheadOnBlur = new EventEmitter();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isActiveItemChanged = false;
        this.isTypeaheadOptionsListActive = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new EventEmitter();
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
    ngOnInit() {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(isObservable(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (isObservable(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    onInput(e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        const /** @type {?} */ value = e.target.value !== undefined
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
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
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
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
    }
    /**
     * @param {?} match
     * @return {?}
     */
    changeModel(match) {
        const /** @type {?} */ valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @return {?}
     */
    show() {
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
            .position({ attachment: `${this.dropup ? 'top' : 'bottom'} left` })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (e) => {
            if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!this.typeaheadHideResultsOnBlur || this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            this.onOutsideClick();
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        const /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hide() {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    }
    /**
     * @return {?}
     */
    onOutsideClick() {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions
        for (const /** @type {?} */ sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    }
    /**
     * @return {?}
     */
    asyncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), switchMap(() => this.typeahead))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @return {?}
     */
    syncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((value) => {
            const /** @type {?} */ normalizedQuery = this.normalizeQuery(value);
            return from(this.typeahead)
                .pipe(filter((option) => {
                return (option &&
                    this.testMatch(this.normalizeOption(option), normalizedQuery));
            }), toArray());
        }))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    normalizeOption(option) {
        const /** @type {?} */ optionValue = getValueFromObject(option, this.typeaheadOptionField);
        const /** @type {?} */ normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    normalizeQuery(value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        let /** @type {?} */ normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    }
    /**
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    testMatch(match, test) {
        let /** @type {?} */ spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (let /** @type {?} */ i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    finalizeAsyncCall(matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            const /** @type {?} */ _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            const /** @type {?} */ normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    prepareMatches(options) {
        const /** @type {?} */ limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            let /** @type {?} */ matches = [];
            // extract all group names
            const /** @type {?} */ groups = limited
                .map((option) => getValueFromObject(option, this.typeaheadGroupField))
                .filter((v, i, a) => a.indexOf(v) === i);
            groups.forEach((group) => {
                // add group header to array of matches
                matches.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches = matches.concat(limited
                    .filter(
                // tslint:disable-next-line:no-any
                (option) => getValueFromObject(option, this.typeaheadGroupField) === group)
                    .map(
                // tslint:disable-next-line:no-any
                (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
            });
            this._matches = matches;
        }
        else {
            this._matches = limited.map(
            // tslint:disable-next-line:no-any
            (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)));
        }
    }
    /**
     * @return {?}
     */
    hasMatches() {
        return this._matches.length > 0;
    }
}
TypeaheadDirective.decorators = [
    { type: Directive, args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
];
/** @nocollapse */
TypeaheadDirective.ctorParameters = () => [
    { type: ComponentLoaderFactory, },
    { type: TypeaheadConfig, },
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: NgControl, },
    { type: PositioningService, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
];
TypeaheadDirective.propDecorators = {
    "typeahead": [{ type: Input },],
    "typeaheadMinLength": [{ type: Input },],
    "adaptivePosition": [{ type: Input },],
    "typeaheadWaitMs": [{ type: Input },],
    "typeaheadOptionsLimit": [{ type: Input },],
    "typeaheadOptionField": [{ type: Input },],
    "typeaheadGroupField": [{ type: Input },],
    "typeaheadAsync": [{ type: Input },],
    "typeaheadLatinize": [{ type: Input },],
    "typeaheadSingleWords": [{ type: Input },],
    "typeaheadWordDelimiters": [{ type: Input },],
    "typeaheadPhraseDelimiters": [{ type: Input },],
    "typeaheadItemTemplate": [{ type: Input },],
    "optionsListTemplate": [{ type: Input },],
    "typeaheadScrollable": [{ type: Input },],
    "typeaheadOptionsInScrollableView": [{ type: Input },],
    "typeaheadHideResultsOnBlur": [{ type: Input },],
    "typeaheadSelectFirstItem": [{ type: Input },],
    "typeaheadLoading": [{ type: Output },],
    "typeaheadNoResults": [{ type: Output },],
    "typeaheadOnSelect": [{ type: Output },],
    "typeaheadOnBlur": [{ type: Output },],
    "container": [{ type: Input },],
    "dropup": [{ type: Input },],
    "onInput": [{ type: HostListener, args: ['input', ['$event'],] },],
    "onChange": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    "onFocus": [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['focus',] },],
    "onBlur": [{ type: HostListener, args: ['blur',] },],
    "onKeydown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TypeaheadModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TypeaheadModule,
            providers: [ComponentLoaderFactory, PositioningService, TypeaheadConfig]
        };
    }
}
TypeaheadModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                exports: [TypeaheadContainerComponent, TypeaheadDirective],
                entryComponents: [TypeaheadContainerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { latinMap, TypeaheadOptions, TypeaheadMatch, escapeRegexp, getValueFromObject, tokenize, latinize, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadModule, TypeaheadConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10eXBlYWhlYWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL2xhdGluLW1hcC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLW9wdGlvbnMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvdHlwZWFoZWFkL3R5cGVhaGVhZC1tYXRjaC5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZC90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvdHlwZWFoZWFkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5leHBvcnQgY29uc3QgbGF0aW5NYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAnw4PCgSc6ICdBJyxcclxuICAgICfDhMKCJzogJ0EnLFxyXG4gICAgJ8OhwrrCric6ICdBJyxcclxuICAgICfDocK6wrYnOiAnQScsXHJcbiAgICAnw6HCusKwJzogJ0EnLFxyXG4gICAgJ8OhwrrCsic6ICdBJyxcclxuICAgICfDocK6wrQnOiAnQScsXHJcbiAgICAnw4fCjSc6ICdBJyxcclxuICAgICfDg8KCJzogJ0EnLFxyXG4gICAgJ8OhwrrCpCc6ICdBJyxcclxuICAgICfDocK6wqwnOiAnQScsXHJcbiAgICAnw6HCusKmJzogJ0EnLFxyXG4gICAgJ8OhwrrCqCc6ICdBJyxcclxuICAgICfDocK6wqonOiAnQScsXHJcbiAgICAnw4PChCc6ICdBJyxcclxuICAgICfDh8KeJzogJ0EnLFxyXG4gICAgJ8OIwqYnOiAnQScsXHJcbiAgICAnw4fCoCc6ICdBJyxcclxuICAgICfDocK6wqAnOiAnQScsXHJcbiAgICAnw4jCgCc6ICdBJyxcclxuICAgICfDg8KAJzogJ0EnLFxyXG4gICAgJ8OhwrrCoic6ICdBJyxcclxuICAgICfDiMKCJzogJ0EnLFxyXG4gICAgJ8OEwoAnOiAnQScsXHJcbiAgICAnw4TChCc6ICdBJyxcclxuICAgICfDg8KFJzogJ0EnLFxyXG4gICAgJ8OHwronOiAnQScsXHJcbiAgICAnw6HCuMKAJzogJ0EnLFxyXG4gICAgJ8OIwronOiAnQScsXHJcbiAgICAnw4PCgyc6ICdBJyxcclxuICAgICfDqsKcwrInOiAnQUEnLFxyXG4gICAgJ8ODwoYnOiAnQUUnLFxyXG4gICAgJ8OHwrwnOiAnQUUnLFxyXG4gICAgJ8OHwqInOiAnQUUnLFxyXG4gICAgJ8OqwpzCtCc6ICdBTycsXHJcbiAgICAnw6rCnMK2JzogJ0FVJyxcclxuICAgICfDqsKcwrgnOiAnQVYnLFxyXG4gICAgJ8OqwpzCuic6ICdBVicsXHJcbiAgICAnw6rCnMK8JzogJ0FZJyxcclxuICAgICfDocK4woInOiAnQicsXHJcbiAgICAnw6HCuMKEJzogJ0InLFxyXG4gICAgJ8OGwoEnOiAnQicsXHJcbiAgICAnw6HCuMKGJzogJ0InLFxyXG4gICAgJ8OJwoMnOiAnQicsXHJcbiAgICAnw4bCgic6ICdCJyxcclxuICAgICfDhMKGJzogJ0MnLFxyXG4gICAgJ8OEwownOiAnQycsXHJcbiAgICAnw4PChyc6ICdDJyxcclxuICAgICfDocK4wognOiAnQycsXHJcbiAgICAnw4TCiCc6ICdDJyxcclxuICAgICfDhMKKJzogJ0MnLFxyXG4gICAgJ8OGwocnOiAnQycsXHJcbiAgICAnw4jCuyc6ICdDJyxcclxuICAgICfDhMKOJzogJ0QnLFxyXG4gICAgJ8OhwrjCkCc6ICdEJyxcclxuICAgICfDocK4wpInOiAnRCcsXHJcbiAgICAnw6HCuMKKJzogJ0QnLFxyXG4gICAgJ8OhwrjCjCc6ICdEJyxcclxuICAgICfDhsKKJzogJ0QnLFxyXG4gICAgJ8OhwrjCjic6ICdEJyxcclxuICAgICfDh8KyJzogJ0QnLFxyXG4gICAgJ8OHwoUnOiAnRCcsXHJcbiAgICAnw4TCkCc6ICdEJyxcclxuICAgICfDhsKLJzogJ0QnLFxyXG4gICAgJ8OHwrEnOiAnRFonLFxyXG4gICAgJ8OHwoQnOiAnRFonLFxyXG4gICAgJ8ODwoknOiAnRScsXHJcbiAgICAnw4TClCc6ICdFJyxcclxuICAgICfDhMKaJzogJ0UnLFxyXG4gICAgJ8OIwqgnOiAnRScsXHJcbiAgICAnw6HCuMKcJzogJ0UnLFxyXG4gICAgJ8ODwoonOiAnRScsXHJcbiAgICAnw6HCusK+JzogJ0UnLFxyXG4gICAgJ8OhwrvChic6ICdFJyxcclxuICAgICfDocK7woAnOiAnRScsXHJcbiAgICAnw6HCu8KCJzogJ0UnLFxyXG4gICAgJ8OhwrvChCc6ICdFJyxcclxuICAgICfDocK4wpgnOiAnRScsXHJcbiAgICAnw4PCiyc6ICdFJyxcclxuICAgICfDhMKWJzogJ0UnLFxyXG4gICAgJ8OhwrrCuCc6ICdFJyxcclxuICAgICfDiMKEJzogJ0UnLFxyXG4gICAgJ8ODwognOiAnRScsXHJcbiAgICAnw6HCusK6JzogJ0UnLFxyXG4gICAgJ8OIwoYnOiAnRScsXHJcbiAgICAnw4TCkic6ICdFJyxcclxuICAgICfDocK4wpYnOiAnRScsXHJcbiAgICAnw6HCuMKUJzogJ0UnLFxyXG4gICAgJ8OEwpgnOiAnRScsXHJcbiAgICAnw4nChic6ICdFJyxcclxuICAgICfDocK6wrwnOiAnRScsXHJcbiAgICAnw6HCuMKaJzogJ0UnLFxyXG4gICAgJ8Oqwp3Cqic6ICdFVCcsXHJcbiAgICAnw6HCuMKeJzogJ0YnLFxyXG4gICAgJ8OGwpEnOiAnRicsXHJcbiAgICAnw4fCtCc6ICdHJyxcclxuICAgICfDhMKeJzogJ0cnLFxyXG4gICAgJ8OHwqYnOiAnRycsXHJcbiAgICAnw4TCoic6ICdHJyxcclxuICAgICfDhMKcJzogJ0cnLFxyXG4gICAgJ8OEwqAnOiAnRycsXHJcbiAgICAnw4bCkyc6ICdHJyxcclxuICAgICfDocK4wqAnOiAnRycsXHJcbiAgICAnw4fCpCc6ICdHJyxcclxuICAgICfDocK4wqonOiAnSCcsXHJcbiAgICAnw4jCnic6ICdIJyxcclxuICAgICfDocK4wqgnOiAnSCcsXHJcbiAgICAnw4TCpCc6ICdIJyxcclxuICAgICfDosKxwqcnOiAnSCcsXHJcbiAgICAnw6HCuMKmJzogJ0gnLFxyXG4gICAgJ8OhwrjCoic6ICdIJyxcclxuICAgICfDocK4wqQnOiAnSCcsXHJcbiAgICAnw4TCpic6ICdIJyxcclxuICAgICfDg8KNJzogJ0knLFxyXG4gICAgJ8OEwqwnOiAnSScsXHJcbiAgICAnw4fCjyc6ICdJJyxcclxuICAgICfDg8KOJzogJ0knLFxyXG4gICAgJ8ODwo8nOiAnSScsXHJcbiAgICAnw6HCuMKuJzogJ0knLFxyXG4gICAgJ8OEwrAnOiAnSScsXHJcbiAgICAnw6HCu8KKJzogJ0knLFxyXG4gICAgJ8OIwognOiAnSScsXHJcbiAgICAnw4PCjCc6ICdJJyxcclxuICAgICfDocK7wognOiAnSScsXHJcbiAgICAnw4jCiic6ICdJJyxcclxuICAgICfDhMKqJzogJ0knLFxyXG4gICAgJ8OEwq4nOiAnSScsXHJcbiAgICAnw4bClyc6ICdJJyxcclxuICAgICfDhMKoJzogJ0knLFxyXG4gICAgJ8OhwrjCrCc6ICdJJyxcclxuICAgICfDqsKdwrknOiAnRCcsXHJcbiAgICAnw6rCncK7JzogJ0YnLFxyXG4gICAgJ8Oqwp3CvSc6ICdHJyxcclxuICAgICfDqsKewoInOiAnUicsXHJcbiAgICAnw6rCnsKEJzogJ1MnLFxyXG4gICAgJ8Oqwp7Chic6ICdUJyxcclxuICAgICfDqsKdwqwnOiAnSVMnLFxyXG4gICAgJ8OEwrQnOiAnSicsXHJcbiAgICAnw4nCiCc6ICdKJyxcclxuICAgICfDocK4wrAnOiAnSycsXHJcbiAgICAnw4fCqCc6ICdLJyxcclxuICAgICfDhMK2JzogJ0snLFxyXG4gICAgJ8OiwrHCqSc6ICdLJyxcclxuICAgICfDqsKdwoInOiAnSycsXHJcbiAgICAnw6HCuMKyJzogJ0snLFxyXG4gICAgJ8OGwpgnOiAnSycsXHJcbiAgICAnw6HCuMK0JzogJ0snLFxyXG4gICAgJ8Oqwp3CgCc6ICdLJyxcclxuICAgICfDqsKdwoQnOiAnSycsXHJcbiAgICAnw4TCuSc6ICdMJyxcclxuICAgICfDiMK9JzogJ0wnLFxyXG4gICAgJ8OEwr0nOiAnTCcsXHJcbiAgICAnw4TCuyc6ICdMJyxcclxuICAgICfDocK4wrwnOiAnTCcsXHJcbiAgICAnw6HCuMK2JzogJ0wnLFxyXG4gICAgJ8OhwrjCuCc6ICdMJyxcclxuICAgICfDosKxwqAnOiAnTCcsXHJcbiAgICAnw6rCncKIJzogJ0wnLFxyXG4gICAgJ8OhwrjCuic6ICdMJyxcclxuICAgICfDhMK/JzogJ0wnLFxyXG4gICAgJ8OiwrHCoic6ICdMJyxcclxuICAgICfDh8KIJzogJ0wnLFxyXG4gICAgJ8OFwoEnOiAnTCcsXHJcbiAgICAnw4fChyc6ICdMSicsXHJcbiAgICAnw6HCuMK+JzogJ00nLFxyXG4gICAgJ8OhwrnCgCc6ICdNJyxcclxuICAgICfDocK5woInOiAnTScsXHJcbiAgICAnw6LCscKuJzogJ00nLFxyXG4gICAgJ8OFwoMnOiAnTicsXHJcbiAgICAnw4XChyc6ICdOJyxcclxuICAgICfDhcKFJzogJ04nLFxyXG4gICAgJ8OhwrnCiic6ICdOJyxcclxuICAgICfDocK5woQnOiAnTicsXHJcbiAgICAnw6HCucKGJzogJ04nLFxyXG4gICAgJ8OHwrgnOiAnTicsXHJcbiAgICAnw4bCnSc6ICdOJyxcclxuICAgICfDocK5wognOiAnTicsXHJcbiAgICAnw4jCoCc6ICdOJyxcclxuICAgICfDh8KLJzogJ04nLFxyXG4gICAgJ8ODwpEnOiAnTicsXHJcbiAgICAnw4fCiic6ICdOSicsXHJcbiAgICAnw4PCkyc6ICdPJyxcclxuICAgICfDhcKOJzogJ08nLFxyXG4gICAgJ8OHwpEnOiAnTycsXHJcbiAgICAnw4PClCc6ICdPJyxcclxuICAgICfDocK7wpAnOiAnTycsXHJcbiAgICAnw6HCu8KYJzogJ08nLFxyXG4gICAgJ8OhwrvCkic6ICdPJyxcclxuICAgICfDocK7wpQnOiAnTycsXHJcbiAgICAnw6HCu8KWJzogJ08nLFxyXG4gICAgJ8ODwpYnOiAnTycsXHJcbiAgICAnw4jCqic6ICdPJyxcclxuICAgICfDiMKuJzogJ08nLFxyXG4gICAgJ8OIwrAnOiAnTycsXHJcbiAgICAnw6HCu8KMJzogJ08nLFxyXG4gICAgJ8OFwpAnOiAnTycsXHJcbiAgICAnw4jCjCc6ICdPJyxcclxuICAgICfDg8KSJzogJ08nLFxyXG4gICAgJ8OhwrvCjic6ICdPJyxcclxuICAgICfDhsKgJzogJ08nLFxyXG4gICAgJ8OhwrvCmic6ICdPJyxcclxuICAgICfDocK7wqInOiAnTycsXHJcbiAgICAnw6HCu8KcJzogJ08nLFxyXG4gICAgJ8OhwrvCnic6ICdPJyxcclxuICAgICfDocK7wqAnOiAnTycsXHJcbiAgICAnw4jCjic6ICdPJyxcclxuICAgICfDqsKdwoonOiAnTycsXHJcbiAgICAnw6rCncKMJzogJ08nLFxyXG4gICAgJ8OFwownOiAnTycsXHJcbiAgICAnw6HCucKSJzogJ08nLFxyXG4gICAgJ8OhwrnCkCc6ICdPJyxcclxuICAgICfDhsKfJzogJ08nLFxyXG4gICAgJ8OHwqonOiAnTycsXHJcbiAgICAnw4fCrCc6ICdPJyxcclxuICAgICfDg8KYJzogJ08nLFxyXG4gICAgJ8OHwr4nOiAnTycsXHJcbiAgICAnw4PClSc6ICdPJyxcclxuICAgICfDocK5wownOiAnTycsXHJcbiAgICAnw6HCucKOJzogJ08nLFxyXG4gICAgJ8OIwqwnOiAnTycsXHJcbiAgICAnw4bCoic6ICdPSScsXHJcbiAgICAnw6rCncKOJzogJ09PJyxcclxuICAgICfDhsKQJzogJ0UnLFxyXG4gICAgJ8OGwoYnOiAnTycsXHJcbiAgICAnw4jCoic6ICdPVScsXHJcbiAgICAnw6HCucKUJzogJ1AnLFxyXG4gICAgJ8OhwrnClic6ICdQJyxcclxuICAgICfDqsKdwpInOiAnUCcsXHJcbiAgICAnw4bCpCc6ICdQJyxcclxuICAgICfDqsKdwpQnOiAnUCcsXHJcbiAgICAnw6LCscKjJzogJ1AnLFxyXG4gICAgJ8Oqwp3CkCc6ICdQJyxcclxuICAgICfDqsKdwpgnOiAnUScsXHJcbiAgICAnw6rCncKWJzogJ1EnLFxyXG4gICAgJ8OFwpQnOiAnUicsXHJcbiAgICAnw4XCmCc6ICdSJyxcclxuICAgICfDhcKWJzogJ1InLFxyXG4gICAgJ8OhwrnCmCc6ICdSJyxcclxuICAgICfDocK5wponOiAnUicsXHJcbiAgICAnw6HCucKcJzogJ1InLFxyXG4gICAgJ8OIwpAnOiAnUicsXHJcbiAgICAnw4jCkic6ICdSJyxcclxuICAgICfDocK5wp4nOiAnUicsXHJcbiAgICAnw4nCjCc6ICdSJyxcclxuICAgICfDosKxwqQnOiAnUicsXHJcbiAgICAnw6rCnMK+JzogJ0MnLFxyXG4gICAgJ8OGwo4nOiAnRScsXHJcbiAgICAnw4XCmic6ICdTJyxcclxuICAgICfDocK5wqQnOiAnUycsXHJcbiAgICAnw4XCoCc6ICdTJyxcclxuICAgICfDocK5wqYnOiAnUycsXHJcbiAgICAnw4XCnic6ICdTJyxcclxuICAgICfDhcKcJzogJ1MnLFxyXG4gICAgJ8OIwpgnOiAnUycsXHJcbiAgICAnw6HCucKgJzogJ1MnLFxyXG4gICAgJ8OhwrnCoic6ICdTJyxcclxuICAgICfDocK5wqgnOiAnUycsXHJcbiAgICAnw4XCpCc6ICdUJyxcclxuICAgICfDhcKiJzogJ1QnLFxyXG4gICAgJ8OhwrnCsCc6ICdUJyxcclxuICAgICfDiMKaJzogJ1QnLFxyXG4gICAgJ8OIwr4nOiAnVCcsXHJcbiAgICAnw6HCucKqJzogJ1QnLFxyXG4gICAgJ8OhwrnCrCc6ICdUJyxcclxuICAgICfDhsKsJzogJ1QnLFxyXG4gICAgJ8OhwrnCric6ICdUJyxcclxuICAgICfDhsKuJzogJ1QnLFxyXG4gICAgJ8OFwqYnOiAnVCcsXHJcbiAgICAnw6LCscKvJzogJ0EnLFxyXG4gICAgJ8Oqwp7CgCc6ICdMJyxcclxuICAgICfDhsKcJzogJ00nLFxyXG4gICAgJ8OJwoUnOiAnVicsXHJcbiAgICAnw6rCnMKoJzogJ1RaJyxcclxuICAgICfDg8KaJzogJ1UnLFxyXG4gICAgJ8OFwqwnOiAnVScsXHJcbiAgICAnw4fCkyc6ICdVJyxcclxuICAgICfDg8KbJzogJ1UnLFxyXG4gICAgJ8OhwrnCtic6ICdVJyxcclxuICAgICfDg8KcJzogJ1UnLFxyXG4gICAgJ8OHwpcnOiAnVScsXHJcbiAgICAnw4fCmSc6ICdVJyxcclxuICAgICfDh8KbJzogJ1UnLFxyXG4gICAgJ8OHwpUnOiAnVScsXHJcbiAgICAnw6HCucKyJzogJ1UnLFxyXG4gICAgJ8OhwrvCpCc6ICdVJyxcclxuICAgICfDhcKwJzogJ1UnLFxyXG4gICAgJ8OIwpQnOiAnVScsXHJcbiAgICAnw4PCmSc6ICdVJyxcclxuICAgICfDocK7wqYnOiAnVScsXHJcbiAgICAnw4bCryc6ICdVJyxcclxuICAgICfDocK7wqgnOiAnVScsXHJcbiAgICAnw6HCu8KwJzogJ1UnLFxyXG4gICAgJ8OhwrvCqic6ICdVJyxcclxuICAgICfDocK7wqwnOiAnVScsXHJcbiAgICAnw6HCu8KuJzogJ1UnLFxyXG4gICAgJ8OIwpYnOiAnVScsXHJcbiAgICAnw4XCqic6ICdVJyxcclxuICAgICfDocK5wronOiAnVScsXHJcbiAgICAnw4XCsic6ICdVJyxcclxuICAgICfDhcKuJzogJ1UnLFxyXG4gICAgJ8OFwqgnOiAnVScsXHJcbiAgICAnw6HCucK4JzogJ1UnLFxyXG4gICAgJ8OhwrnCtCc6ICdVJyxcclxuICAgICfDqsKdwp4nOiAnVicsXHJcbiAgICAnw6HCucK+JzogJ1YnLFxyXG4gICAgJ8OGwrInOiAnVicsXHJcbiAgICAnw6HCucK8JzogJ1YnLFxyXG4gICAgJ8Oqwp3CoCc6ICdWWScsXHJcbiAgICAnw6HCusKCJzogJ1cnLFxyXG4gICAgJ8OFwrQnOiAnVycsXHJcbiAgICAnw6HCusKEJzogJ1cnLFxyXG4gICAgJ8OhwrrChic6ICdXJyxcclxuICAgICfDocK6wognOiAnVycsXHJcbiAgICAnw6HCusKAJzogJ1cnLFxyXG4gICAgJ8OiwrHCsic6ICdXJyxcclxuICAgICfDocK6wownOiAnWCcsXHJcbiAgICAnw6HCusKKJzogJ1gnLFxyXG4gICAgJ8ODwp0nOiAnWScsXHJcbiAgICAnw4XCtic6ICdZJyxcclxuICAgICfDhcK4JzogJ1knLFxyXG4gICAgJ8OhwrrCjic6ICdZJyxcclxuICAgICfDocK7wrQnOiAnWScsXHJcbiAgICAnw6HCu8KyJzogJ1knLFxyXG4gICAgJ8OGwrMnOiAnWScsXHJcbiAgICAnw6HCu8K2JzogJ1knLFxyXG4gICAgJ8OhwrvCvic6ICdZJyxcclxuICAgICfDiMKyJzogJ1knLFxyXG4gICAgJ8OJwo4nOiAnWScsXHJcbiAgICAnw6HCu8K4JzogJ1knLFxyXG4gICAgJ8OFwrknOiAnWicsXHJcbiAgICAnw4XCvSc6ICdaJyxcclxuICAgICfDocK6wpAnOiAnWicsXHJcbiAgICAnw6LCscKrJzogJ1onLFxyXG4gICAgJ8OFwrsnOiAnWicsXHJcbiAgICAnw6HCusKSJzogJ1onLFxyXG4gICAgJ8OIwqQnOiAnWicsXHJcbiAgICAnw6HCusKUJzogJ1onLFxyXG4gICAgJ8OGwrUnOiAnWicsXHJcbiAgICAnw4TCsic6ICdJSicsXHJcbiAgICAnw4XCkic6ICdPRScsXHJcbiAgICAnw6HCtMKAJzogJ0EnLFxyXG4gICAgJ8OhwrTCgSc6ICdBRScsXHJcbiAgICAnw4rCmSc6ICdCJyxcclxuICAgICfDocK0woMnOiAnQicsXHJcbiAgICAnw6HCtMKEJzogJ0MnLFxyXG4gICAgJ8OhwrTChSc6ICdEJyxcclxuICAgICfDocK0wocnOiAnRScsXHJcbiAgICAnw6rCnMKwJzogJ0YnLFxyXG4gICAgJ8OJwqInOiAnRycsXHJcbiAgICAnw4rCmyc6ICdHJyxcclxuICAgICfDisKcJzogJ0gnLFxyXG4gICAgJ8OJwqonOiAnSScsXHJcbiAgICAnw4rCgSc6ICdSJyxcclxuICAgICfDocK0woonOiAnSicsXHJcbiAgICAnw6HCtMKLJzogJ0snLFxyXG4gICAgJ8OKwp8nOiAnTCcsXHJcbiAgICAnw6HCtMKMJzogJ0wnLFxyXG4gICAgJ8OhwrTCjSc6ICdNJyxcclxuICAgICfDicK0JzogJ04nLFxyXG4gICAgJ8OhwrTCjyc6ICdPJyxcclxuICAgICfDicK2JzogJ09FJyxcclxuICAgICfDocK0wpAnOiAnTycsXHJcbiAgICAnw6HCtMKVJzogJ09VJyxcclxuICAgICfDocK0wpgnOiAnUCcsXHJcbiAgICAnw4rCgCc6ICdSJyxcclxuICAgICfDocK0wo4nOiAnTicsXHJcbiAgICAnw6HCtMKZJzogJ1InLFxyXG4gICAgJ8OqwpzCsSc6ICdTJyxcclxuICAgICfDocK0wpsnOiAnVCcsXHJcbiAgICAnw6LCscK7JzogJ0UnLFxyXG4gICAgJ8OhwrTCmic6ICdSJyxcclxuICAgICfDocK0wpwnOiAnVScsXHJcbiAgICAnw6HCtMKgJzogJ1YnLFxyXG4gICAgJ8OhwrTCoSc6ICdXJyxcclxuICAgICfDisKPJzogJ1knLFxyXG4gICAgJ8OhwrTCoic6ICdaJyxcclxuICAgICfDg8KhJzogJ2EnLFxyXG4gICAgJ8OEwoMnOiAnYScsXHJcbiAgICAnw6HCusKvJzogJ2EnLFxyXG4gICAgJ8OhwrrCtyc6ICdhJyxcclxuICAgICfDocK6wrEnOiAnYScsXHJcbiAgICAnw6HCusKzJzogJ2EnLFxyXG4gICAgJ8OhwrrCtSc6ICdhJyxcclxuICAgICfDh8KOJzogJ2EnLFxyXG4gICAgJ8ODwqInOiAnYScsXHJcbiAgICAnw6HCusKlJzogJ2EnLFxyXG4gICAgJ8OhwrrCrSc6ICdhJyxcclxuICAgICfDocK6wqcnOiAnYScsXHJcbiAgICAnw6HCusKpJzogJ2EnLFxyXG4gICAgJ8OhwrrCqyc6ICdhJyxcclxuICAgICfDg8KkJzogJ2EnLFxyXG4gICAgJ8OHwp8nOiAnYScsXHJcbiAgICAnw4jCpyc6ICdhJyxcclxuICAgICfDh8KhJzogJ2EnLFxyXG4gICAgJ8OhwrrCoSc6ICdhJyxcclxuICAgICfDiMKBJzogJ2EnLFxyXG4gICAgJ8ODwqAnOiAnYScsXHJcbiAgICAnw6HCusKjJzogJ2EnLFxyXG4gICAgJ8OIwoMnOiAnYScsXHJcbiAgICAnw4TCgSc6ICdhJyxcclxuICAgICfDhMKFJzogJ2EnLFxyXG4gICAgJ8OhwrbCjyc6ICdhJyxcclxuICAgICfDocK6wponOiAnYScsXHJcbiAgICAnw4PCpSc6ICdhJyxcclxuICAgICfDh8K7JzogJ2EnLFxyXG4gICAgJ8OhwrjCgSc6ICdhJyxcclxuICAgICfDosKxwqUnOiAnYScsXHJcbiAgICAnw4PCoyc6ICdhJyxcclxuICAgICfDqsKcwrMnOiAnYWEnLFxyXG4gICAgJ8ODwqYnOiAnYWUnLFxyXG4gICAgJ8OHwr0nOiAnYWUnLFxyXG4gICAgJ8OHwqMnOiAnYWUnLFxyXG4gICAgJ8OqwpzCtSc6ICdhbycsXHJcbiAgICAnw6rCnMK3JzogJ2F1JyxcclxuICAgICfDqsKcwrknOiAnYXYnLFxyXG4gICAgJ8OqwpzCuyc6ICdhdicsXHJcbiAgICAnw6rCnMK9JzogJ2F5JyxcclxuICAgICfDocK4woMnOiAnYicsXHJcbiAgICAnw6HCuMKFJzogJ2InLFxyXG4gICAgJ8OJwpMnOiAnYicsXHJcbiAgICAnw6HCuMKHJzogJ2InLFxyXG4gICAgJ8OhwrXCrCc6ICdiJyxcclxuICAgICfDocK2woAnOiAnYicsXHJcbiAgICAnw4bCgCc6ICdiJyxcclxuICAgICfDhsKDJzogJ2InLFxyXG4gICAgJ8OJwrUnOiAnbycsXHJcbiAgICAnw4TChyc6ICdjJyxcclxuICAgICfDhMKNJzogJ2MnLFxyXG4gICAgJ8ODwqcnOiAnYycsXHJcbiAgICAnw6HCuMKJJzogJ2MnLFxyXG4gICAgJ8OEwoknOiAnYycsXHJcbiAgICAnw4nClSc6ICdjJyxcclxuICAgICfDhMKLJzogJ2MnLFxyXG4gICAgJ8OGwognOiAnYycsXHJcbiAgICAnw4jCvCc6ICdjJyxcclxuICAgICfDhMKPJzogJ2QnLFxyXG4gICAgJ8OhwrjCkSc6ICdkJyxcclxuICAgICfDocK4wpMnOiAnZCcsXHJcbiAgICAnw4jCoSc6ICdkJyxcclxuICAgICfDocK4wosnOiAnZCcsXHJcbiAgICAnw6HCuMKNJzogJ2QnLFxyXG4gICAgJ8OJwpcnOiAnZCcsXHJcbiAgICAnw6HCtsKRJzogJ2QnLFxyXG4gICAgJ8OhwrjCjyc6ICdkJyxcclxuICAgICfDocK1wq0nOiAnZCcsXHJcbiAgICAnw6HCtsKBJzogJ2QnLFxyXG4gICAgJ8OEwpEnOiAnZCcsXHJcbiAgICAnw4nClic6ICdkJyxcclxuICAgICfDhsKMJzogJ2QnLFxyXG4gICAgJ8OEwrEnOiAnaScsXHJcbiAgICAnw4jCtyc6ICdqJyxcclxuICAgICfDicKfJzogJ2onLFxyXG4gICAgJ8OKwoQnOiAnaicsXHJcbiAgICAnw4fCsyc6ICdkeicsXHJcbiAgICAnw4fChic6ICdkeicsXHJcbiAgICAnw4PCqSc6ICdlJyxcclxuICAgICfDhMKVJzogJ2UnLFxyXG4gICAgJ8OEwpsnOiAnZScsXHJcbiAgICAnw4jCqSc6ICdlJyxcclxuICAgICfDocK4wp0nOiAnZScsXHJcbiAgICAnw4PCqic6ICdlJyxcclxuICAgICfDocK6wr8nOiAnZScsXHJcbiAgICAnw6HCu8KHJzogJ2UnLFxyXG4gICAgJ8OhwrvCgSc6ICdlJyxcclxuICAgICfDocK7woMnOiAnZScsXHJcbiAgICAnw6HCu8KFJzogJ2UnLFxyXG4gICAgJ8OhwrjCmSc6ICdlJyxcclxuICAgICfDg8KrJzogJ2UnLFxyXG4gICAgJ8OEwpcnOiAnZScsXHJcbiAgICAnw6HCusK5JzogJ2UnLFxyXG4gICAgJ8OIwoUnOiAnZScsXHJcbiAgICAnw4PCqCc6ICdlJyxcclxuICAgICfDocK6wrsnOiAnZScsXHJcbiAgICAnw4jChyc6ICdlJyxcclxuICAgICfDhMKTJzogJ2UnLFxyXG4gICAgJ8OhwrjClyc6ICdlJyxcclxuICAgICfDocK4wpUnOiAnZScsXHJcbiAgICAnw6LCscK4JzogJ2UnLFxyXG4gICAgJ8OEwpknOiAnZScsXHJcbiAgICAnw6HCtsKSJzogJ2UnLFxyXG4gICAgJ8OJwocnOiAnZScsXHJcbiAgICAnw6HCusK9JzogJ2UnLFxyXG4gICAgJ8OhwrjCmyc6ICdlJyxcclxuICAgICfDqsKdwqsnOiAnZXQnLFxyXG4gICAgJ8OhwrjCnyc6ICdmJyxcclxuICAgICfDhsKSJzogJ2YnLFxyXG4gICAgJ8OhwrXCric6ICdmJyxcclxuICAgICfDocK2woInOiAnZicsXHJcbiAgICAnw4fCtSc6ICdnJyxcclxuICAgICfDhMKfJzogJ2cnLFxyXG4gICAgJ8OHwqcnOiAnZycsXHJcbiAgICAnw4TCoyc6ICdnJyxcclxuICAgICfDhMKdJzogJ2cnLFxyXG4gICAgJ8OEwqEnOiAnZycsXHJcbiAgICAnw4nCoCc6ICdnJyxcclxuICAgICfDocK4wqEnOiAnZycsXHJcbiAgICAnw6HCtsKDJzogJ2cnLFxyXG4gICAgJ8OHwqUnOiAnZycsXHJcbiAgICAnw6HCuMKrJzogJ2gnLFxyXG4gICAgJ8OIwp8nOiAnaCcsXHJcbiAgICAnw6HCuMKpJzogJ2gnLFxyXG4gICAgJ8OEwqUnOiAnaCcsXHJcbiAgICAnw6LCscKoJzogJ2gnLFxyXG4gICAgJ8OhwrjCpyc6ICdoJyxcclxuICAgICfDocK4wqMnOiAnaCcsXHJcbiAgICAnw6HCuMKlJzogJ2gnLFxyXG4gICAgJ8OJwqYnOiAnaCcsXHJcbiAgICAnw6HCusKWJzogJ2gnLFxyXG4gICAgJ8OEwqcnOiAnaCcsXHJcbiAgICAnw4bClSc6ICdodicsXHJcbiAgICAnw4PCrSc6ICdpJyxcclxuICAgICfDhMKtJzogJ2knLFxyXG4gICAgJ8OHwpAnOiAnaScsXHJcbiAgICAnw4PCric6ICdpJyxcclxuICAgICfDg8KvJzogJ2knLFxyXG4gICAgJ8OhwrjCryc6ICdpJyxcclxuICAgICfDocK7wosnOiAnaScsXHJcbiAgICAnw4jCiSc6ICdpJyxcclxuICAgICfDg8KsJzogJ2knLFxyXG4gICAgJ8OhwrvCiSc6ICdpJyxcclxuICAgICfDiMKLJzogJ2knLFxyXG4gICAgJ8OEwqsnOiAnaScsXHJcbiAgICAnw4TCryc6ICdpJyxcclxuICAgICfDocK2wpYnOiAnaScsXHJcbiAgICAnw4nCqCc6ICdpJyxcclxuICAgICfDhMKpJzogJ2knLFxyXG4gICAgJ8OhwrjCrSc6ICdpJyxcclxuICAgICfDqsKdwronOiAnZCcsXHJcbiAgICAnw6rCncK8JzogJ2YnLFxyXG4gICAgJ8OhwrXCuSc6ICdnJyxcclxuICAgICfDqsKewoMnOiAncicsXHJcbiAgICAnw6rCnsKFJzogJ3MnLFxyXG4gICAgJ8Oqwp7Chyc6ICd0JyxcclxuICAgICfDqsKdwq0nOiAnaXMnLFxyXG4gICAgJ8OHwrAnOiAnaicsXHJcbiAgICAnw4TCtSc6ICdqJyxcclxuICAgICfDisKdJzogJ2onLFxyXG4gICAgJ8OJwoknOiAnaicsXHJcbiAgICAnw6HCuMKxJzogJ2snLFxyXG4gICAgJ8OHwqknOiAnaycsXHJcbiAgICAnw4TCtyc6ICdrJyxcclxuICAgICfDosKxwqonOiAnaycsXHJcbiAgICAnw6rCncKDJzogJ2snLFxyXG4gICAgJ8OhwrjCsyc6ICdrJyxcclxuICAgICfDhsKZJzogJ2snLFxyXG4gICAgJ8OhwrjCtSc6ICdrJyxcclxuICAgICfDocK2woQnOiAnaycsXHJcbiAgICAnw6rCncKBJzogJ2snLFxyXG4gICAgJ8Oqwp3ChSc6ICdrJyxcclxuICAgICfDhMK6JzogJ2wnLFxyXG4gICAgJ8OGwponOiAnbCcsXHJcbiAgICAnw4nCrCc6ICdsJyxcclxuICAgICfDhMK+JzogJ2wnLFxyXG4gICAgJ8OEwrwnOiAnbCcsXHJcbiAgICAnw6HCuMK9JzogJ2wnLFxyXG4gICAgJ8OIwrQnOiAnbCcsXHJcbiAgICAnw6HCuMK3JzogJ2wnLFxyXG4gICAgJ8OhwrjCuSc6ICdsJyxcclxuICAgICfDosKxwqEnOiAnbCcsXHJcbiAgICAnw6rCncKJJzogJ2wnLFxyXG4gICAgJ8OhwrjCuyc6ICdsJyxcclxuICAgICfDhcKAJzogJ2wnLFxyXG4gICAgJ8OJwqsnOiAnbCcsXHJcbiAgICAnw6HCtsKFJzogJ2wnLFxyXG4gICAgJ8OJwq0nOiAnbCcsXHJcbiAgICAnw4XCgic6ICdsJyxcclxuICAgICfDh8KJJzogJ2xqJyxcclxuICAgICfDhcK/JzogJ3MnLFxyXG4gICAgJ8OhwrrCnCc6ICdzJyxcclxuICAgICfDocK6wpsnOiAncycsXHJcbiAgICAnw6HCusKdJzogJ3MnLFxyXG4gICAgJ8OhwrjCvyc6ICdtJyxcclxuICAgICfDocK5woEnOiAnbScsXHJcbiAgICAnw6HCucKDJzogJ20nLFxyXG4gICAgJ8OJwrEnOiAnbScsXHJcbiAgICAnw6HCtcKvJzogJ20nLFxyXG4gICAgJ8OhwrbChic6ICdtJyxcclxuICAgICfDhcKEJzogJ24nLFxyXG4gICAgJ8OFwognOiAnbicsXHJcbiAgICAnw4XChic6ICduJyxcclxuICAgICfDocK5wosnOiAnbicsXHJcbiAgICAnw4jCtSc6ICduJyxcclxuICAgICfDocK5woUnOiAnbicsXHJcbiAgICAnw6HCucKHJzogJ24nLFxyXG4gICAgJ8OHwrknOiAnbicsXHJcbiAgICAnw4nCsic6ICduJyxcclxuICAgICfDocK5woknOiAnbicsXHJcbiAgICAnw4bCnic6ICduJyxcclxuICAgICfDocK1wrAnOiAnbicsXHJcbiAgICAnw6HCtsKHJzogJ24nLFxyXG4gICAgJ8OJwrMnOiAnbicsXHJcbiAgICAnw4PCsSc6ICduJyxcclxuICAgICfDh8KMJzogJ25qJyxcclxuICAgICfDg8KzJzogJ28nLFxyXG4gICAgJ8OFwo8nOiAnbycsXHJcbiAgICAnw4fCkic6ICdvJyxcclxuICAgICfDg8K0JzogJ28nLFxyXG4gICAgJ8OhwrvCkSc6ICdvJyxcclxuICAgICfDocK7wpknOiAnbycsXHJcbiAgICAnw6HCu8KTJzogJ28nLFxyXG4gICAgJ8OhwrvClSc6ICdvJyxcclxuICAgICfDocK7wpcnOiAnbycsXHJcbiAgICAnw4PCtic6ICdvJyxcclxuICAgICfDiMKrJzogJ28nLFxyXG4gICAgJ8OIwq8nOiAnbycsXHJcbiAgICAnw4jCsSc6ICdvJyxcclxuICAgICfDocK7wo0nOiAnbycsXHJcbiAgICAnw4XCkSc6ICdvJyxcclxuICAgICfDiMKNJzogJ28nLFxyXG4gICAgJ8ODwrInOiAnbycsXHJcbiAgICAnw6HCu8KPJzogJ28nLFxyXG4gICAgJ8OGwqEnOiAnbycsXHJcbiAgICAnw6HCu8KbJzogJ28nLFxyXG4gICAgJ8OhwrvCoyc6ICdvJyxcclxuICAgICfDocK7wp0nOiAnbycsXHJcbiAgICAnw6HCu8KfJzogJ28nLFxyXG4gICAgJ8OhwrvCoSc6ICdvJyxcclxuICAgICfDiMKPJzogJ28nLFxyXG4gICAgJ8Oqwp3Ciyc6ICdvJyxcclxuICAgICfDqsKdwo0nOiAnbycsXHJcbiAgICAnw6LCscK6JzogJ28nLFxyXG4gICAgJ8OFwo0nOiAnbycsXHJcbiAgICAnw6HCucKTJzogJ28nLFxyXG4gICAgJ8OhwrnCkSc6ICdvJyxcclxuICAgICfDh8KrJzogJ28nLFxyXG4gICAgJ8OHwq0nOiAnbycsXHJcbiAgICAnw4PCuCc6ICdvJyxcclxuICAgICfDh8K/JzogJ28nLFxyXG4gICAgJ8ODwrUnOiAnbycsXHJcbiAgICAnw6HCucKNJzogJ28nLFxyXG4gICAgJ8OhwrnCjyc6ICdvJyxcclxuICAgICfDiMKtJzogJ28nLFxyXG4gICAgJ8OGwqMnOiAnb2knLFxyXG4gICAgJ8Oqwp3Cjyc6ICdvbycsXHJcbiAgICAnw4nCmyc6ICdlJyxcclxuICAgICfDocK2wpMnOiAnZScsXHJcbiAgICAnw4nClCc6ICdvJyxcclxuICAgICfDocK2wpcnOiAnbycsXHJcbiAgICAnw4jCoyc6ICdvdScsXHJcbiAgICAnw6HCucKVJzogJ3AnLFxyXG4gICAgJ8OhwrnClyc6ICdwJyxcclxuICAgICfDqsKdwpMnOiAncCcsXHJcbiAgICAnw4bCpSc6ICdwJyxcclxuICAgICfDocK1wrEnOiAncCcsXHJcbiAgICAnw6HCtsKIJzogJ3AnLFxyXG4gICAgJ8Oqwp3ClSc6ICdwJyxcclxuICAgICfDocK1wr0nOiAncCcsXHJcbiAgICAnw6rCncKRJzogJ3AnLFxyXG4gICAgJ8Oqwp3CmSc6ICdxJyxcclxuICAgICfDisKgJzogJ3EnLFxyXG4gICAgJ8OJwosnOiAncScsXHJcbiAgICAnw6rCncKXJzogJ3EnLFxyXG4gICAgJ8OFwpUnOiAncicsXHJcbiAgICAnw4XCmSc6ICdyJyxcclxuICAgICfDhcKXJzogJ3InLFxyXG4gICAgJ8OhwrnCmSc6ICdyJyxcclxuICAgICfDocK5wpsnOiAncicsXHJcbiAgICAnw6HCucKdJzogJ3InLFxyXG4gICAgJ8OIwpEnOiAncicsXHJcbiAgICAnw4nCvic6ICdyJyxcclxuICAgICfDocK1wrMnOiAncicsXHJcbiAgICAnw4jCkyc6ICdyJyxcclxuICAgICfDocK5wp8nOiAncicsXHJcbiAgICAnw4nCvCc6ICdyJyxcclxuICAgICfDocK1wrInOiAncicsXHJcbiAgICAnw6HCtsKJJzogJ3InLFxyXG4gICAgJ8OJwo0nOiAncicsXHJcbiAgICAnw4nCvSc6ICdyJyxcclxuICAgICfDosKGwoQnOiAnYycsXHJcbiAgICAnw6rCnMK/JzogJ2MnLFxyXG4gICAgJ8OJwpgnOiAnZScsXHJcbiAgICAnw4nCvyc6ICdyJyxcclxuICAgICfDhcKbJzogJ3MnLFxyXG4gICAgJ8OhwrnCpSc6ICdzJyxcclxuICAgICfDhcKhJzogJ3MnLFxyXG4gICAgJ8OhwrnCpyc6ICdzJyxcclxuICAgICfDhcKfJzogJ3MnLFxyXG4gICAgJ8OFwp0nOiAncycsXHJcbiAgICAnw4jCmSc6ICdzJyxcclxuICAgICfDocK5wqEnOiAncycsXHJcbiAgICAnw6HCucKjJzogJ3MnLFxyXG4gICAgJ8OhwrnCqSc6ICdzJyxcclxuICAgICfDisKCJzogJ3MnLFxyXG4gICAgJ8OhwrXCtCc6ICdzJyxcclxuICAgICfDocK2woonOiAncycsXHJcbiAgICAnw4jCvyc6ICdzJyxcclxuICAgICfDicKhJzogJ2cnLFxyXG4gICAgJ8OhwrTCkSc6ICdvJyxcclxuICAgICfDocK0wpMnOiAnbycsXHJcbiAgICAnw6HCtMKdJzogJ3UnLFxyXG4gICAgJ8OFwqUnOiAndCcsXHJcbiAgICAnw4XCoyc6ICd0JyxcclxuICAgICfDocK5wrEnOiAndCcsXHJcbiAgICAnw4jCmyc6ICd0JyxcclxuICAgICfDiMK2JzogJ3QnLFxyXG4gICAgJ8OhwrrClyc6ICd0JyxcclxuICAgICfDosKxwqYnOiAndCcsXHJcbiAgICAnw6HCucKrJzogJ3QnLFxyXG4gICAgJ8OhwrnCrSc6ICd0JyxcclxuICAgICfDhsKtJzogJ3QnLFxyXG4gICAgJ8OhwrnCryc6ICd0JyxcclxuICAgICfDocK1wrUnOiAndCcsXHJcbiAgICAnw4bCqyc6ICd0JyxcclxuICAgICfDisKIJzogJ3QnLFxyXG4gICAgJ8OFwqcnOiAndCcsXHJcbiAgICAnw6HCtcK6JzogJ3RoJyxcclxuICAgICfDicKQJzogJ2EnLFxyXG4gICAgJ8OhwrTCgic6ICdhZScsXHJcbiAgICAnw4fCnSc6ICdlJyxcclxuICAgICfDocK1wrcnOiAnZycsXHJcbiAgICAnw4nCpSc6ICdoJyxcclxuICAgICfDisKuJzogJ2gnLFxyXG4gICAgJ8OKwq8nOiAnaCcsXHJcbiAgICAnw6HCtMKJJzogJ2knLFxyXG4gICAgJ8OKwp4nOiAnaycsXHJcbiAgICAnw6rCnsKBJzogJ2wnLFxyXG4gICAgJ8OJwq8nOiAnbScsXHJcbiAgICAnw4nCsCc6ICdtJyxcclxuICAgICfDocK0wpQnOiAnb2UnLFxyXG4gICAgJ8OJwrknOiAncicsXHJcbiAgICAnw4nCuyc6ICdyJyxcclxuICAgICfDicK6JzogJ3InLFxyXG4gICAgJ8OiwrHCuSc6ICdyJyxcclxuICAgICfDisKHJzogJ3QnLFxyXG4gICAgJ8OKwownOiAndicsXHJcbiAgICAnw4rCjSc6ICd3JyxcclxuICAgICfDisKOJzogJ3knLFxyXG4gICAgJ8OqwpzCqSc6ICd0eicsXHJcbiAgICAnw4PCuic6ICd1JyxcclxuICAgICfDhcKtJzogJ3UnLFxyXG4gICAgJ8OHwpQnOiAndScsXHJcbiAgICAnw4PCuyc6ICd1JyxcclxuICAgICfDocK5wrcnOiAndScsXHJcbiAgICAnw4PCvCc6ICd1JyxcclxuICAgICfDh8KYJzogJ3UnLFxyXG4gICAgJ8OHwponOiAndScsXHJcbiAgICAnw4fCnCc6ICd1JyxcclxuICAgICfDh8KWJzogJ3UnLFxyXG4gICAgJ8OhwrnCsyc6ICd1JyxcclxuICAgICfDocK7wqUnOiAndScsXHJcbiAgICAnw4XCsSc6ICd1JyxcclxuICAgICfDiMKVJzogJ3UnLFxyXG4gICAgJ8ODwrknOiAndScsXHJcbiAgICAnw6HCu8KnJzogJ3UnLFxyXG4gICAgJ8OGwrAnOiAndScsXHJcbiAgICAnw6HCu8KpJzogJ3UnLFxyXG4gICAgJ8OhwrvCsSc6ICd1JyxcclxuICAgICfDocK7wqsnOiAndScsXHJcbiAgICAnw6HCu8KtJzogJ3UnLFxyXG4gICAgJ8OhwrvCryc6ICd1JyxcclxuICAgICfDiMKXJzogJ3UnLFxyXG4gICAgJ8OFwqsnOiAndScsXHJcbiAgICAnw6HCucK7JzogJ3UnLFxyXG4gICAgJ8OFwrMnOiAndScsXHJcbiAgICAnw6HCtsKZJzogJ3UnLFxyXG4gICAgJ8OFwq8nOiAndScsXHJcbiAgICAnw4XCqSc6ICd1JyxcclxuICAgICfDocK5wrknOiAndScsXHJcbiAgICAnw6HCucK1JzogJ3UnLFxyXG4gICAgJ8OhwrXCqyc6ICd1ZScsXHJcbiAgICAnw6rCncK4JzogJ3VtJyxcclxuICAgICfDosKxwrQnOiAndicsXHJcbiAgICAnw6rCncKfJzogJ3YnLFxyXG4gICAgJ8OhwrnCvyc6ICd2JyxcclxuICAgICfDisKLJzogJ3YnLFxyXG4gICAgJ8OhwrbCjCc6ICd2JyxcclxuICAgICfDosKxwrEnOiAndicsXHJcbiAgICAnw6HCucK9JzogJ3YnLFxyXG4gICAgJ8Oqwp3CoSc6ICd2eScsXHJcbiAgICAnw6HCusKDJzogJ3cnLFxyXG4gICAgJ8OFwrUnOiAndycsXHJcbiAgICAnw6HCusKFJzogJ3cnLFxyXG4gICAgJ8OhwrrChyc6ICd3JyxcclxuICAgICfDocK6woknOiAndycsXHJcbiAgICAnw6HCusKBJzogJ3cnLFxyXG4gICAgJ8OiwrHCsyc6ICd3JyxcclxuICAgICfDocK6wpgnOiAndycsXHJcbiAgICAnw6HCusKNJzogJ3gnLFxyXG4gICAgJ8OhwrrCiyc6ICd4JyxcclxuICAgICfDocK2wo0nOiAneCcsXHJcbiAgICAnw4PCvSc6ICd5JyxcclxuICAgICfDhcK3JzogJ3knLFxyXG4gICAgJ8ODwr8nOiAneScsXHJcbiAgICAnw6HCusKPJzogJ3knLFxyXG4gICAgJ8OhwrvCtSc6ICd5JyxcclxuICAgICfDocK7wrMnOiAneScsXHJcbiAgICAnw4bCtCc6ICd5JyxcclxuICAgICfDocK7wrcnOiAneScsXHJcbiAgICAnw6HCu8K/JzogJ3knLFxyXG4gICAgJ8OIwrMnOiAneScsXHJcbiAgICAnw6HCusKZJzogJ3knLFxyXG4gICAgJ8OJwo8nOiAneScsXHJcbiAgICAnw6HCu8K5JzogJ3knLFxyXG4gICAgJ8OFwronOiAneicsXHJcbiAgICAnw4XCvic6ICd6JyxcclxuICAgICfDocK6wpEnOiAneicsXHJcbiAgICAnw4rCkSc6ICd6JyxcclxuICAgICfDosKxwqwnOiAneicsXHJcbiAgICAnw4XCvCc6ICd6JyxcclxuICAgICfDocK6wpMnOiAneicsXHJcbiAgICAnw4jCpSc6ICd6JyxcclxuICAgICfDocK6wpUnOiAneicsXHJcbiAgICAnw6HCtcK2JzogJ3onLFxyXG4gICAgJ8OhwrbCjic6ICd6JyxcclxuICAgICfDisKQJzogJ3onLFxyXG4gICAgJ8OGwrYnOiAneicsXHJcbiAgICAnw4nCgCc6ICd6JyxcclxuICAgICfDr8KswoAnOiAnZmYnLFxyXG4gICAgJ8OvwqzCgyc6ICdmZmknLFxyXG4gICAgJ8OvwqzChCc6ICdmZmwnLFxyXG4gICAgJ8OvwqzCgSc6ICdmaScsXHJcbiAgICAnw6/CrMKCJzogJ2ZsJyxcclxuICAgICfDhMKzJzogJ2lqJyxcclxuICAgICfDhcKTJzogJ29lJyxcclxuICAgICfDr8KswoYnOiAnc3QnLFxyXG4gICAgJ8OiwoLCkCc6ICdhJyxcclxuICAgICfDosKCwpEnOiAnZScsXHJcbiAgICAnw6HCtcKiJzogJ2knLFxyXG4gICAgJ8OiwrHCvCc6ICdqJyxcclxuICAgICfDosKCwpInOiAnbycsXHJcbiAgICAnw6HCtcKjJzogJ3InLFxyXG4gICAgJ8OhwrXCpCc6ICd1JyxcclxuICAgICfDocK1wqUnOiAndicsXHJcbiAgICAnw6LCgsKTJzogJ3gnXHJcbn07XHJcbiIsImltcG9ydCB7IFR5cGVhaGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkT3B0aW9ucyB7XHJcbiAgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xyXG4gIHR5cGVhaGVhZFJlZjogVHlwZWFoZWFkRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUeXBlYWhlYWRPcHRpb25zKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVHlwZWFoZWFkTWF0Y2gge1xyXG4gIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcmVhZG9ubHkgaXRlbTogYW55O1xyXG4gIHByb3RlY3RlZCBoZWFkZXI6IGJvb2xlYW47XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IoaXRlbTogYW55LCB2YWx1ZTogc3RyaW5nID0gaXRlbSwgaGVhZGVyID0gZmFsc2UpIHtcclxuICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcclxuICB9XHJcblxyXG4gIGlzSGVhZGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsYXRpbk1hcCB9IGZyb20gJy4vbGF0aW4tbWFwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXRpbml6ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKCFzdHIpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW15BLVphLXowLTlcXFtcXF0gXS9nLCBmdW5jdGlvbiAoYTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsYXRpbk1hcFthXSB8fCBhO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gUmVnZXg6IGNhcHR1cmUgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmdcclxuICAvLyB0aGF0IHdpbGwgYmUgdXNlZCB0byBtYXRjaCB0aGUgcmVzdWx0cywgZm9yIGV4YW1wbGUgaWYgdGhlIGNhcHR1cmUgaXNcclxuICAvLyAnYScgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxyXG4gIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XHJcbn1cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzdHI6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRSZWdleERlbGltaXRlcnMgPSAnICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwaHJhc2VSZWdleERlbGltaXRlcnMgPSAnJyk6IEFycmF5PHN0cmluZz4ge1xyXG4gIC8qIHRzbGludDplbmFibGUgKi9cclxuICBjb25zdCByZWdleFN0ciA9IGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSkoW14ke3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKylgICtcclxuICAgIGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSl8KFteJHt3b3JkUmVnZXhEZWxpbWl0ZXJzfV0rKWA7XHJcbiAgY29uc3QgcHJlVG9rZW5pemVkOiBzdHJpbmdbXSA9IHN0ci5zcGxpdChuZXcgUmVnRXhwKHJlZ2V4U3RyLCAnZycpKTtcclxuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgY29uc3QgcHJlVG9rZW5pemVkTGVuZ3RoOiBudW1iZXIgPSBwcmVUb2tlbml6ZWQubGVuZ3RoO1xyXG4gIGxldCB0b2tlbjogc3RyaW5nO1xyXG4gIGNvbnN0IHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzID0gbmV3IFJlZ0V4cChgWyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rYCwgJ2cnKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVUb2tlbml6ZWRMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgdG9rZW4gPSBwcmVUb2tlbml6ZWRbaV07XHJcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoICYmIHRva2VuICE9PSB3b3JkUmVnZXhEZWxpbWl0ZXJzKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHRva2VuLnJlcGxhY2UocmVwbGFjZVBocmFzZURlbGltaXRlcnMsICcnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqZWN0OiBhbnksIG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoIW9wdGlvbiB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbi5lbmRzV2l0aCgnKCknKSkge1xyXG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gb3B0aW9uLnNsaWNlKDAsIG9wdGlvbi5sZW5ndGggLSAyKTtcclxuXHJcbiAgICByZXR1cm4gb2JqZWN0W2Z1bmN0aW9uTmFtZV0oKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvcGVydGllczogc3RyaW5nID0gb3B0aW9uXHJcbiAgICAucmVwbGFjZSgvXFxbKFxcdyspXFxdL2csICcuJDEnKVxyXG4gICAgLnJlcGxhY2UoL15cXC4vLCAnJyk7XHJcbiAgY29uc3QgcHJvcGVydGllc0FycmF5OiBzdHJpbmdbXSA9IHByb3BlcnRpZXMuc3BsaXQoJy4nKTtcclxuXHJcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzQXJyYXkpIHtcclxuICAgIGlmIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIG9iamVjdCA9IG9iamVjdFtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICghb2JqZWN0KSB7cmV0dXJuICcnOyB9XHJcblxyXG4gIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBsYXRpbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcclxuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3R5cGVhaGVhZC1jb250YWluZXInLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2Ryb3Bkb3duIG9wZW4nLFxyXG4gICAgJ1tjbGFzcy5kcm9wZG93bi1tZW51XSc6ICdpc0JzNCcsXHJcbiAgICAnW3N0eWxlLm92ZXJmbG93LXldJyA6IGBpc0JzNCAmJiBuZWVkU2Nyb2xsYmFyID8gJ3Njcm9sbCc6ICd2aXNpYmxlJ2AsXHJcbiAgICAnW3N0eWxlLmhlaWdodF0nOiBgaXNCczQgJiYgbmVlZFNjcm9sbGJhciA/IGd1aUhlaWdodDogJ2F1dG8nYCxcclxuICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiBgdHlwZWFoZWFkU2Nyb2xsYWJsZSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnYCxcclxuICAgICdbY2xhc3MuZHJvcHVwXSc6ICdkcm9wdXAnLFxyXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7ZGlzcGxheTogYmxvY2s7J1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdC5kcm9wZG93biB7XHJcbiAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgcGFyZW50OiBUeXBlYWhlYWREaXJlY3RpdmU7XHJcbiAgcXVlcnk6IHN0cmluZ1tdIHwgc3RyaW5nO1xyXG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgdG9wOiBzdHJpbmc7XHJcbiAgbGVmdDogc3RyaW5nO1xyXG4gIGRpc3BsYXk6IHN0cmluZztcclxuICBwbGFjZW1lbnQ6IHN0cmluZztcclxuICBkcm9wdXA6IGJvb2xlYW47XHJcbiAgZ3VpSGVpZ2h0OiBzdHJpbmc7XHJcbiAgbmVlZFNjcm9sbGJhcjogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF9hY3RpdmU6IFR5cGVhaGVhZE1hdGNoO1xyXG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xyXG5cclxuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnKVxyXG4gIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKCdsaUVsZW1lbnRzJylcclxuICBwcml2YXRlIGxpRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlKCk6IFR5cGVhaGVhZE1hdGNoIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF0Y2hlcygpOiBUeXBlYWhlYWRNYXRjaFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1hdGNoZXModmFsdWU6IFR5cGVhaGVhZE1hdGNoW10pIHtcclxuICAgIHRoaXMuX21hdGNoZXMgPSB2YWx1ZTtcclxuICAgIHRoaXMubmVlZFNjcm9sbGJhciA9IHRoaXMudHlwZWFoZWFkU2Nyb2xsYWJsZSAmJiB0aGlzLnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3IDwgdGhpcy5tYXRjaGVzLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxhYmxlTW9kZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuX21hdGNoZXNbMF07XHJcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUuaXNIZWFkZXIoKSkge1xyXG4gICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXQgb3B0aW9uc0xpc3RUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50Lm9wdGlvbnNMaXN0VGVtcGxhdGUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdHlwZWFoZWFkU2Nyb2xsYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZFNjcm9sbGFibGUgOiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBnZXQgdHlwZWFoZWFkT3B0aW9uc0luU2Nyb2xsYWJsZVZpZXcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3IDogNTtcclxuICB9XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBnZXQgaXRlbVRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudHlwZWFoZWFkSXRlbVRlbXBsYXRlIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWN0aXZlTWF0Y2goaXNBY3RpdmVJdGVtQ2hhbmdlZD86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5wYXJlbnQudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5fYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMucGFyZW50LnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSAmJiBpc0FjdGl2ZUl0ZW1DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0TWF0Y2godGhpcy5fYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZBY3RpdmVNYXRjaCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5fYWN0aXZlKTtcclxuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMubWF0Y2hlc1tcclxuICAgICAgaW5kZXggLSAxIDwgMCA/IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXHJcbiAgICAgIF07XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlLmlzSGVhZGVyKCkpIHtcclxuICAgICAgdGhpcy5wcmV2QWN0aXZlTWF0Y2goKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnR5cGVhaGVhZFNjcm9sbGFibGUpIHtcclxuICAgICAgdGhpcy5zY3JvbGxQcmV2aW91cyhpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0QWN0aXZlTWF0Y2goKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuX2FjdGl2ZSk7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB0aGlzLm1hdGNoZXNbXHJcbiAgICAgIGluZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMVxyXG4gICAgICBdO1xyXG4gICAgaWYgKHRoaXMuX2FjdGl2ZS5pc0hlYWRlcigpKSB7XHJcbiAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRTY3JvbGxhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsTmV4dChpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RBY3RpdmUodmFsdWU6IFR5cGVhaGVhZE1hdGNoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodChtYXRjaDogVHlwZWFoZWFkTWF0Y2gsIHF1ZXJ5OiBzdHJpbmdbXSB8IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgaXRlbVN0cjogc3RyaW5nID0gbWF0Y2gudmFsdWU7XHJcbiAgICBsZXQgaXRlbVN0ckhlbHBlcjogc3RyaW5nID0gKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgID8gbGF0aW5pemUoaXRlbVN0cilcclxuICAgICAgOiBpdGVtU3RyKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgbGV0IHN0YXJ0SWR4OiBudW1iZXI7XHJcbiAgICBsZXQgdG9rZW5MZW46IG51bWJlcjtcclxuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xyXG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgY29uc3QgcXVlcnlMZW46IG51bWJlciA9IHF1ZXJ5Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeUxlbjsgaSArPSAxKSB7XHJcbiAgICAgICAgLy8gcXVlcnlbaV0gaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcclxuICAgICAgICBzdGFydElkeCA9IGl0ZW1TdHJIZWxwZXIuaW5kZXhPZihxdWVyeVtpXSk7XHJcbiAgICAgICAgdG9rZW5MZW4gPSBxdWVyeVtpXS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XHJcbiAgICAgICAgICBpdGVtU3RyID1cclxuICAgICAgICAgICAgYCR7aXRlbVN0ci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfTxzdHJvbmc+JHtpdGVtU3RyLnN1YnN0cmluZyhzdGFydElkeCwgc3RhcnRJZHggKyB0b2tlbkxlbil9PC9zdHJvbmc+YCArXHJcbiAgICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XHJcbiAgICAgICAgICBpdGVtU3RySGVscGVyID1cclxuICAgICAgICAgICAgYCR7aXRlbVN0ckhlbHBlci5zdWJzdHJpbmcoMCwgc3RhcnRJZHgpfSAgICAgICAgJHsnICcucmVwZWF0KHRva2VuTGVuKX0gICAgICAgICBgICtcclxuICAgICAgICAgICAgYCR7aXRlbVN0ckhlbHBlci5zdWJzdHJpbmcoc3RhcnRJZHggKyB0b2tlbkxlbil9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocXVlcnkpIHtcclxuICAgICAgLy8gcXVlcnkgaXMgYWxyZWFkeSBsYXRpbml6ZWQgYW5kIGxvd2VyIGNhc2VcclxuICAgICAgc3RhcnRJZHggPSBpdGVtU3RySGVscGVyLmluZGV4T2YocXVlcnkpO1xyXG4gICAgICB0b2tlbkxlbiA9IHF1ZXJ5Lmxlbmd0aDtcclxuICAgICAgaWYgKHN0YXJ0SWR4ID49IDAgJiYgdG9rZW5MZW4gPiAwKSB7XHJcbiAgICAgICAgaXRlbVN0ciA9XHJcbiAgICAgICAgICBgJHtpdGVtU3RyLnN1YnN0cmluZygwLCBzdGFydElkeCl9PHN0cm9uZz4ke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4LCBzdGFydElkeCArIHRva2VuTGVuKX08L3N0cm9uZz5gICtcclxuICAgICAgICAgIGAke2l0ZW1TdHIuc3Vic3RyaW5nKHN0YXJ0SWR4ICsgdG9rZW5MZW4pfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVN0cjtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxyXG4gIGZvY3VzTG9zdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSh2YWx1ZTogVHlwZWFoZWFkTWF0Y2gpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmUgPT09IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0TWF0Y2godmFsdWU6IFR5cGVhaGVhZE1hdGNoLCBlOiBFdmVudCA9IHZvaWQgMCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYXJlbnQuY2hhbmdlTW9kZWwodmFsdWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhcmVudC50eXBlYWhlYWRPblNlbGVjdC5lbWl0KHZhbHVlKSwgMCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsYWJsZU1vZGUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudWxFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMudWxFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGlFbGVtZW50cy5maXJzdCkge1xyXG4gICAgICBjb25zdCB1bFN0eWxlcyA9IFV0aWxzLmdldFN0eWxlcyh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgY29uc3QgbGlTdHlsZXMgPSBVdGlscy5nZXRTdHlsZXModGhpcy5saUVsZW1lbnRzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBjb25zdCB1bFBhZGRpbmdCb3R0b20gPSBwYXJzZUZsb2F0KCh1bFN0eWxlc1sncGFkZGluZy1ib3R0b20nXSA/IHVsU3R5bGVzWydwYWRkaW5nLWJvdHRvbSddIDogJycpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuICAgICAgY29uc3QgdWxQYWRkaW5nVG9wID0gcGFyc2VGbG9hdCgodWxTdHlsZXNbJ3BhZGRpbmctdG9wJ10gPyB1bFN0eWxlc1sncGFkZGluZy10b3AnXSA6ICcwJylcclxuICAgICAgICAucmVwbGFjZSgncHgnLCAnJykpO1xyXG4gICAgICBjb25zdCBvcHRpb25IZWlnaHQgPSBwYXJzZUZsb2F0KChsaVN0eWxlcy5oZWlnaHQgPyBsaVN0eWxlcy5oZWlnaHQgOiAnMCcpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3B4JywgJycpKTtcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyAqIG9wdGlvbkhlaWdodDtcclxuICAgICAgdGhpcy5ndWlIZWlnaHQgPSBgJHtoZWlnaHQgKyB1bFBhZGRpbmdUb3AgKyB1bFBhZGRpbmdCb3R0b219cHhgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsUHJldmlvdXMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxpRWxlbWVudHMpIHtcclxuICAgICAgY29uc3QgbGlFbGVtZW50ID0gdGhpcy5saUVsZW1lbnRzLnRvQXJyYXkoKVtpbmRleCAtIDFdO1xyXG4gICAgICBpZiAobGlFbGVtZW50ICYmICF0aGlzLmlzU2Nyb2xsZWRJbnRvVmlldyhsaUVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsTmV4dChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGlFbGVtZW50cykge1xyXG4gICAgICBjb25zdCBsaUVsZW1lbnQgPSB0aGlzLmxpRWxlbWVudHMudG9BcnJheSgpW2luZGV4ICsgMV07XHJcbiAgICAgIGlmIChsaUVsZW1lbnQgJiYgIXRoaXMuaXNTY3JvbGxlZEludG9WaWV3KGxpRWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID1cclxuICAgICAgICAgIGxpRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtXHJcbiAgICAgICAgICBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpICtcclxuICAgICAgICAgIE51bWJlcihsaUVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpc1Njcm9sbGVkSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lclZpZXdUb3A6IG51bWJlciA9IHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgY29udGFpbmVyVmlld0JvdHRvbSA9IGNvbnRhaW5lclZpZXdUb3AgKyBOdW1iZXIodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgY29uc3QgZWxlbVRvcCA9IGVsZW0ub2Zmc2V0VG9wO1xyXG4gICAgY29uc3QgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyBlbGVtLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gKChlbGVtQm90dG9tIDw9IGNvbnRhaW5lclZpZXdCb3R0b20pICYmIChlbGVtVG9wID49IGNvbnRhaW5lclZpZXdUb3ApKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xyXG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKiBEZWZhdWx0IHZhbHVlcyBwcm92aWRlciBmb3IgdHlwZWFoZWFkICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbmZpZyB7XHJcbiAgLyoqIHNldHMgdXNlIGFkYXB0aXZlIHBvc2l0aW9uICovXHJcbiAgYWRhcHRpdmVQb3NpdGlvbiA9IGZhbHNlO1xyXG4gIC8qKiB1c2VkIHRvIGhpZGUgcmVzdWx0cyBvbiBibHVyICovXHJcbiAgaGlkZVJlc3VsdHNPbkJsdXIgPSB0cnVlO1xyXG4gIC8qKiB1c2VkIHRvIGNob29zZSB0aGUgZmlyc3QgaXRlbSBpbiB0eXBlYWhlYWQgY29udGFpbmVyICovXHJcbiAgc2VsZWN0Rmlyc3RJdGVtID0gdHJ1ZTtcclxuICAvKiogdXNlZCB0byBjaG9vc2Ugc2V0IG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvXHJcbiAgICogYmUgZW50ZXJlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluXHJcbiAgICovXHJcbiAgbWluTGVuZ3RoID0gMTtcclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50ICovXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBmcm9tLCBTdWJzY3JpcHRpb24sIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3R5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZENvbmZpZyB9IGZyb20gJy4vdHlwZWFoZWFkLmNvbmZpZyc7XHJcbmltcG9ydCB7IGdldFZhbHVlRnJvbU9iamVjdCwgbGF0aW5pemUsIHRva2VuaXplIH0gZnJvbSAnLi90eXBlYWhlYWQtdXRpbHMnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG1lcmdlTWFwLCBzd2l0Y2hNYXAsIHRvQXJyYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1t0eXBlYWhlYWRdJywgZXhwb3J0QXM6ICdicy10eXBlYWhlYWQnfSlcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKiogb3B0aW9ucyBzb3VyY2UsIGNhbiBiZSBBcnJheSBvZiBzdHJpbmdzLCBvYmplY3RzIG9yXHJcbiAgICogYW4gT2JzZXJ2YWJsZSBmb3IgZXh0ZXJuYWwgbWF0Y2hpbmcgcHJvY2Vzc1xyXG4gICAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZDogYW55O1xyXG4gIC8qKiBtaW5pbWFsIG5vIG9mIGNoYXJhY3RlcnMgdGhhdCBuZWVkcyB0byBiZSBlbnRlcmVkIGJlZm9yZVxyXG4gICAqIHR5cGVhaGVhZCBraWNrcy1pbi4gV2hlbiBzZXQgdG8gMCwgdHlwZWFoZWFkIHNob3dzIG9uIGZvY3VzIHdpdGggZnVsbFxyXG4gICAqIGxpc3Qgb2Ygb3B0aW9ucyAobGltaXRlZCBhcyBub3JtYWwgYnkgdHlwZWFoZWFkT3B0aW9uc0xpbWl0KVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE1pbkxlbmd0aDogbnVtYmVyID0gdm9pZCAwO1xyXG4gIC8qKiBzZXRzIHVzZSBhZGFwdGl2ZSBwb3NpdGlvbiAqL1xyXG4gIEBJbnB1dCgpIGFkYXB0aXZlUG9zaXRpb246IGJvb2xlYW47XHJcbiAgLyoqIG1pbmltYWwgd2FpdCB0aW1lIGFmdGVyIGxhc3QgY2hhcmFjdGVyIHR5cGVkIGJlZm9yZSB0eXBlYWhlYWQga2lja3MtaW4gKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRXYWl0TXM6IG51bWJlcjtcclxuICAvKiogbWF4aW11bSBsZW5ndGggb2Ygb3B0aW9ucyBpdGVtcyBsaXN0LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAyMCAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbnNMaW1pdDogbnVtYmVyO1xyXG4gIC8qKiB3aGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZSBuYW1lIG9mIGZpZWxkXHJcbiAgICogdGhhdCBjb250YWlucyB0aGUgb3B0aW9ucyB2YWx1ZSwgd2UgdXNlIGFycmF5IGl0ZW0gYXMgb3B0aW9uIGluIGNhc2VcclxuICAgKiBvZiB0aGlzIGZpZWxkIGlzIG1pc3NpbmcuIFN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbkZpZWxkOiBzdHJpbmc7XHJcbiAgLyoqIHdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlIG5hbWUgb2YgZmllbGQgdGhhdFxyXG4gICAqIGNvbnRhaW5zIHRoZSBncm91cCB2YWx1ZSwgbWF0Y2hlcyBhcmUgZ3JvdXBlZCBieSB0aGlzIGZpZWxkIHdoZW4gc2V0LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEdyb3VwRmllbGQ6IHN0cmluZztcclxuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIG9mIHR5cGVhaGVhZCBhdHRyaWJ1dGUgaXMgYXJyYXkuXHJcbiAgICogSWYgdHJ1ZSAtIGxvYWRpbmcgb2Ygb3B0aW9ucyB3aWxsIGJlIGFzeW5jLCBvdGhlcndpc2UgLSBzeW5jLlxyXG4gICAqIHRydWUgbWFrZSBzZW5zZSBpZiBvcHRpb25zIGFycmF5IGlzIGxhcmdlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEFzeW5jOiBib29sZWFuID0gdm9pZCAwO1xyXG4gIC8qKiBtYXRjaCBsYXRpbiBzeW1ib2xzLlxyXG4gICAqIElmIHRydWUgdGhlIHdvcmQgc8ODwrpwZXIgd291bGQgbWF0Y2ggc3VwZXIgYW5kIHZpY2UgdmVyc2EuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkTGF0aW5pemUgPSB0cnVlO1xyXG4gIC8qKiBDYW4gYmUgdXNlIHRvIHNlYXJjaCB3b3JkcyBieSBpbnNlcnRpbmcgYSBzaW5nbGUgd2hpdGUgc3BhY2UgYmV0d2VlbiBlYWNoIGNoYXJhY3RlcnNcclxuICAgKiAgZm9yIGV4YW1wbGUgJ0MgYSBsIGkgZiBvIHIgbiBpIGEnIHdpbGwgbWF0Y2ggJ0NhbGlmb3JuaWEnLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNpbmdsZVdvcmRzID0gdHJ1ZTtcclxuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxyXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIGJyZWFrIHdvcmRzLiBEZWZhdWx0cyB0byBzcGFjZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRXb3JkRGVsaW1pdGVycyA9ICcgJztcclxuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxyXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIG1hdGNoIGV4YWN0IHBocmFzZS5cclxuICAgKiBEZWZhdWx0cyB0byBzaW1wbGUgYW5kIGRvdWJsZSBxdW90ZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVycyA9ICdcXCdcIic7XHJcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBpdGVtIHRlbXBsYXRlLlxyXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlcyBleHBvc2VkIGFyZSBjYWxsZWQgaXRlbSBhbmQgaW5kZXg7XHJcbiAgICovXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgdHlwZWFoZWFkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gb3B0aW9ucyBsaXN0IHRlbXBsYXRlLlxyXG4gICAqIFRlbXBsYXRlIHZhcmlhYmxlczogbWF0Y2hlcywgaXRlbVRlbXBsYXRlLCBxdWVyeVxyXG4gICAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG9wdGlvbnNMaXN0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIHNwZWNpZmllcyBpZiB0eXBlYWhlYWQgaXMgc2Nyb2xsYWJsZSAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRTY3JvbGxhYmxlID0gZmFsc2U7XHJcbiAgLyoqIHNwZWNpZmllcyBudW1iZXIgb2Ygb3B0aW9ucyB0byBzaG93IGluIHNjcm9sbCB2aWV3ICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE9wdGlvbnNJblNjcm9sbGFibGVWaWV3ID0gNTtcclxuICAvKiogdXNlZCB0byBoaWRlIHJlc3VsdCBvbiBibHVyICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkSGlkZVJlc3VsdHNPbkJsdXI6IGJvb2xlYW47XHJcbiAgLyoqIGZpcmVkIHdoZW4gYW4gb3B0aW9ucyBsaXN0IHdhcyBvcGVuZWQgYW5kIHRoZSB1c2VyIGNsaWNrZWQgVGFiXHJcbiAgICogSWYgYSB2YWx1ZSBlcXVhbCB0cnVlLCBpdCB3aWxsIGJlIGNob3NlbiBmaXJzdCBvciBhY3RpdmUgaXRlbSBpbiB0aGUgbGlzdFxyXG4gICAqIElmIHZhbHVlIGVxdWFsIGZhbHNlLCBpdCB3aWxsIGJlIGNob3NlbiBhbiBhY3RpdmUgaXRlbSBpbiB0aGUgbGlzdCBvciBub3RoaW5nXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtID0gdHJ1ZTtcclxuICAvKiogZmlyZWQgd2hlbiAnYnVzeScgc3RhdGUgb2YgdGhpcyBjb21wb25lbnQgd2FzIGNoYW5nZWQsXHJcbiAgICogZmlyZWQgb24gYXN5bmMgbW9kZSBvbmx5LCByZXR1cm5zIGJvb2xlYW5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgdHlwZWFoZWFkTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICAvKiogZmlyZWQgb24gZXZlcnkga2V5IGV2ZW50IGFuZCByZXR1cm5zIHRydWVcclxuICAgKiBpbiBjYXNlIG9mIG1hdGNoZXMgYXJlIG5vdCBkZXRlY3RlZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWROb1Jlc3VsdHMgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgLyoqIGZpcmVkIHdoZW4gb3B0aW9uIHdhcyBzZWxlY3RlZCwgcmV0dXJuIG9iamVjdCB3aXRoIGRhdGEgb2YgdGhpcyBvcHRpb24gKi9cclxuICBAT3V0cHV0KCkgdHlwZWFoZWFkT25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGVhaGVhZE1hdGNoPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIGJsdXIgZXZlbnQgb2NjdXJzLiByZXR1cm5zIHRoZSBhY3RpdmUgaXRlbSAqL1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0eXBlYWhlYWQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICAvKiogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWQgdXB3YXJkcyAqL1xyXG4gIEBJbnB1dCgpIGRyb3B1cCA9IGZhbHNlO1xyXG5cclxuICAvLyBub3QgeWV0IGltcGxlbWVudGVkXHJcbiAgLyoqIGlmIGZhbHNlIHJlc3RyaWN0IG1vZGVsIHZhbHVlcyB0byB0aGUgb25lcyBzZWxlY3RlZCBmcm9tIHRoZSBwb3B1cCBvbmx5IHdpbGwgYmUgcHJvdmlkZWQgKi9cclxuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRWRpdGFibGU6Ym9vbGVhbjtcclxuICAvKiogaWYgZmFsc2UgdGhlIGZpcnN0IG1hdGNoIGF1dG9tYXRpY2FsbHkgd2lsbCBub3QgYmUgZm9jdXNlZCBhcyB5b3UgdHlwZSAqL1xyXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c0ZpcnN0OmJvb2xlYW47XHJcbiAgLyoqIGZvcm1hdCB0aGUgbmctbW9kZWwgcmVzdWx0IGFmdGVyIHNlbGVjdGlvbiAqL1xyXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRJbnB1dEZvcm1hdHRlcjphbnk7XHJcbiAgLyoqIGlmIHRydWUgYXV0b21hdGljYWxseSBzZWxlY3QgYW4gaXRlbSB3aGVuIHRoZXJlIGlzIG9uZSBvcHRpb24gdGhhdCBleGFjdGx5IG1hdGNoZXMgdGhlIHVzZXIgaW5wdXQgKi9cclxuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25FeGFjdDpib29sZWFuO1xyXG4gIC8qKiAgaWYgdHJ1ZSBzZWxlY3QgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXRjaCBvbiBibHVyICovXHJcbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uQmx1cjpib29sZWFuO1xyXG4gIC8qKiAgaWYgZmFsc2UgZG9uJ3QgZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBkaXJlY3RpdmUgaXMgYXNzb2NpYXRlZCB3aXRoIG9uIHNlbGVjdGlvbiAqL1xyXG4gICAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzT25TZWxlY3Q6Ym9vbGVhbjtcclxuXHJcbiAgX2NvbnRhaW5lcjogVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50O1xyXG4gIGlzQWN0aXZlSXRlbUNoYW5nZWQgPSBmYWxzZTtcclxuICBpc1R5cGVhaGVhZE9wdGlvbnNMaXN0QWN0aXZlID0gZmFsc2U7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcm90ZWN0ZWQga2V5VXBFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHByb3RlY3RlZCBfbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXTtcclxuICBwcm90ZWN0ZWQgcGxhY2VtZW50ID0gJ2JvdHRvbS1sZWZ0JztcclxuICAvLyBwcm90ZWN0ZWQgcG9wdXA6Q29tcG9uZW50UmVmPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XHJcblxyXG4gIHByaXZhdGUgX3R5cGVhaGVhZDogQ29tcG9uZW50TG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD47XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tMaXN0ZW5lcjogRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgY29uZmlnOiBUeXBlYWhlYWRDb25maWcsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxyXG4gICAgcHJpdmF0ZSBwb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHtcclxuXHJcbiAgICB0aGlzLl90eXBlYWhlYWQgPSBjaXMuY3JlYXRlTG9hZGVyPFR5cGVhaGVhZENvbnRhaW5lckNvbXBvbmVudD4oXHJcbiAgICAgIGVsZW1lbnQsXHJcbiAgICAgIHZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgIHJlbmRlcmVyXHJcbiAgICApXHJcbiAgICAgIC5wcm92aWRlKHsgcHJvdmlkZTogVHlwZWFoZWFkQ29uZmlnLCB1c2VWYWx1ZTogY29uZmlnIH0pO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcyxcclxuICAgICAgeyB0eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1cjogY29uZmlnLmhpZGVSZXN1bHRzT25CbHVyLFxyXG4gICAgICAgICAgICAgICB0eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW06IGNvbmZpZy5zZWxlY3RGaXJzdEl0ZW0sXHJcbiAgICAgICAgICAgICAgIHR5cGVhaGVhZE1pbkxlbmd0aDogY29uZmlnLm1pbkxlbmd0aCxcclxuICAgICAgICAgICAgICAgYWRhcHRpdmVQb3NpdGlvbjogY29uZmlnLmFkYXB0aXZlUG9zaXRpb25cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgfHwgMjA7XHJcblxyXG4gICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPVxyXG4gICAgICB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gdm9pZCAwID8gMSA6IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoO1xyXG5cclxuICAgIHRoaXMudHlwZWFoZWFkV2FpdE1zID0gdGhpcy50eXBlYWhlYWRXYWl0TXMgfHwgMDtcclxuXHJcbiAgICAvLyBhc3luYyBzaG91bGQgYmUgZmFsc2UgaW4gY2FzZSBvZiBhcnJheVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgIShpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHRoaXMudHlwZWFoZWFkKSkge1xyXG4gICAgICB0aGlzLnR5cGVhaGVhZEFzeW5jID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRBc3luYykge1xyXG4gICAgICB0aGlzLmFzeW5jQWN0aW9ucygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zeW5jQWN0aW9ucygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbklucHV0KGU6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gRm9yIGA8aW5wdXQ+YHMsIHVzZSB0aGUgYHZhbHVlYCBwcm9wZXJ0eS4gRm9yIG90aGVycyB0aGF0IGRvbid0IGhhdmUgYVxyXG4gICAgLy8gYHZhbHVlYCAoc3VjaCBhcyBgPHNwYW4gY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiPmApLCB1c2UgZWl0aGVyXHJcbiAgICAvLyBgdGV4dENvbnRlbnRgIG9yIGBpbm5lclRleHRgIChkZXBlbmRpbmcgb24gd2hpY2ggb25lIGlzIHN1cHBvcnRlZCwgaS5lLlxyXG4gICAgLy8gRmlyZWZveCBvciBJRSkuXHJcbiAgICBjb25zdCB2YWx1ZSA9XHJcbiAgICAgIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgOiBlLnRhcmdldC50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBlLnRhcmdldC50ZXh0Q29udGVudFxyXG4gICAgICAgIDogZS50YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA+PSB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCkge1xyXG4gICAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdCh0cnVlKTtcclxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlci5lbWl0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy50eXBlYWhlYWROb1Jlc3VsdHMuZW1pdChmYWxzZSk7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxyXG4gIG9uQ2hhbmdlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XHJcbiAgICAgIC8vIGVzY1xyXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzggfHwgZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlSXRlbUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wcmV2QWN0aXZlTWF0Y2goKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBkb3duXHJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlSXRlbUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5uZXh0QWN0aXZlTWF0Y2goKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBvbkJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmICF0aGlzLl9jb250YWluZXIuaXNGb2N1c2VkKSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkT25CbHVyLmVtaXQodGhpcy5fY29udGFpbmVyLmFjdGl2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8vIG5vIGNvbnRhaW5lciAtIG5vIHByb2JsZW1zXHJcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkgfHwgZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZFNlbGVjdEZpcnN0SXRlbSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zZWxlY3RBY3RpdmVNYXRjaCh0aGlzLmlzQWN0aXZlSXRlbUNoYW5nZWQpO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNb2RlbChtYXRjaDogVHlwZWFoZWFkTWF0Y2gpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlU3RyOiBzdHJpbmcgPSBtYXRjaC52YWx1ZTtcclxuICAgIHRoaXMubmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHZhbHVlU3RyKTtcclxuICAgICh0aGlzLm5nQ29udHJvbC5jb250cm9sKS5zZXRWYWx1ZSh2YWx1ZVN0cik7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1hdGNoZXMoKTogVHlwZWFoZWFkTWF0Y2hbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcztcclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcclxuICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgZmxpcDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5hZGFwdGl2ZVBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90eXBlYWhlYWRcclxuICAgICAgLmF0dGFjaChUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgIC8vIHRvZG86IGFkZCBhcHBlbmQgdG8gYm9keSwgYWZ0ZXIgdXBkYXRpbmcgcG9zaXRpb25pbmcgc2VydmljZVxyXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXHJcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogYCR7dGhpcy5kcm9wdXAgPyAndG9wJyA6ICdib3R0b20nfSBsZWZ0YH0pXHJcbiAgICAgIC5zaG93KHtcclxuICAgICAgICB0eXBlYWhlYWRSZWY6IHRoaXMsXHJcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcclxuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxyXG4gICAgICAgIGRyb3B1cDogdGhpcy5kcm9wdXBcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPT09IDAgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMudHlwZWFoZWFkSGlkZVJlc3VsdHNPbkJsdXIgfHwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uT3V0c2lkZUNsaWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLl90eXBlYWhlYWQuaW5zdGFuY2U7XHJcbiAgICB0aGlzLl9jb250YWluZXIucGFyZW50ID0gdGhpcztcclxuICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcclxuICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxyXG4gICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAudG9Mb3dlckNhc2UoKTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcclxuICAgICAgPyB0b2tlbml6ZShcclxuICAgICAgICBub3JtYWxpemVkUXVlcnksXHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnNcclxuICAgICAgKVxyXG4gICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5tYXRjaGVzID0gdGhpcy5fbWF0Y2hlcztcclxuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3R5cGVhaGVhZC5pc1Nob3duKSB7XHJcbiAgICAgIHRoaXMuX3R5cGVhaGVhZC5oaWRlKCk7XHJcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyKCk7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk91dHNpZGVDbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgIXRoaXMuX2NvbnRhaW5lci5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnNcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90eXBlYWhlYWQuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFzeW5jQWN0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudHlwZWFoZWFkV2FpdE1zKSxcclxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnR5cGVhaGVhZClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzeW5jQWN0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMudHlwZWFoZWFkV2FpdE1zKSxcclxuICAgICAgICAgIG1lcmdlTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMubm9ybWFsaXplUXVlcnkodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZyb20odGhpcy50eXBlYWhlYWQpXHJcbiAgICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKG9wdGlvbjogVHlwZWFoZWFkTWF0Y2gpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0TWF0Y2godGhpcy5ub3JtYWxpemVPcHRpb24ob3B0aW9uKSwgbm9ybWFsaXplZFF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB0b0FycmF5KClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcm90ZWN0ZWQgbm9ybWFsaXplT3B0aW9uKG9wdGlvbjogYW55KTogYW55IHtcclxuICAgIGNvbnN0IG9wdGlvblZhbHVlOiBzdHJpbmcgPSBnZXRWYWx1ZUZyb21PYmplY3QoXHJcbiAgICAgIG9wdGlvbixcclxuICAgICAgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb24gPSB0aGlzLnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgID8gbGF0aW5pemUob3B0aW9uVmFsdWUpXHJcbiAgICAgIDogb3B0aW9uVmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRPcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBub3JtYWxpemVRdWVyeSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgLy8gSWYgc2luZ2xlV29yZHMsIGJyZWFrIG1vZGVsIGhlcmUgdG8gbm90IGJlIGRvaW5nIGV4dHJhIHdvcmsgb24gZWFjaFxyXG4gICAgLy8gaXRlcmF0aW9uXHJcbiAgICBsZXQgbm9ybWFsaXplZFF1ZXJ5OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgID8gbGF0aW5pemUodmFsdWUpXHJcbiAgICAgIDogdmFsdWUpXHJcbiAgICAgIC50b1N0cmluZygpXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgbm9ybWFsaXplZFF1ZXJ5ID0gdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xyXG4gICAgICA/IHRva2VuaXplKFxyXG4gICAgICAgIG5vcm1hbGl6ZWRRdWVyeSxcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzLFxyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVyc1xyXG4gICAgICApXHJcbiAgICAgIDogbm9ybWFsaXplZFF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiBub3JtYWxpemVkUXVlcnk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdGVzdE1hdGNoKG1hdGNoOiBzdHJpbmcsIHRlc3Q6IHN0cmluZ1tdIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgc3BhY2VMZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHNwYWNlTGVuZ3RoID0gdGVzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BhY2VMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmICh0ZXN0W2ldLmxlbmd0aCA+IDAgJiYgbWF0Y2guaW5kZXhPZih0ZXN0W2ldKSA8IDApIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYXRjaC5pbmRleE9mKHRlc3QpID49IDA7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZmluYWxpemVBc3luY0NhbGwobWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVwYXJlTWF0Y2hlcyhtYXRjaGVzIHx8IFtdKTtcclxuXHJcbiAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XHJcbiAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KCF0aGlzLmhhc01hdGNoZXMoKSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmhhc01hdGNoZXMoKSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XHJcbiAgICAgIC8vIGZpeDogcmVtb3ZlIHVzYWdlIG9mIG5nQ29udHJvbCBpbnRlcm5hbHNcclxuICAgICAgY29uc3QgX2NvbnRyb2xWYWx1ZSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgICAgPyBsYXRpbml6ZSh0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxyXG4gICAgICAgIDogdGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSkgfHwgJyc7XHJcbiAgICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gX2NvbnRyb2xWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeSA9IHRoaXMudHlwZWFoZWFkU2luZ2xlV29yZHNcclxuICAgICAgICA/IHRva2VuaXplKFxyXG4gICAgICAgICAgbm9ybWFsaXplZFF1ZXJ5LFxyXG4gICAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcclxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVyc1xyXG4gICAgICAgIClcclxuICAgICAgICA6IG5vcm1hbGl6ZWRRdWVyeTtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcHJlcGFyZU1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkTWF0Y2hbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgbGltaXRlZDogVHlwZWFoZWFkTWF0Y2hbXSA9IG9wdGlvbnMuc2xpY2UoMCwgdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQpO1xyXG5cclxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpIHtcclxuICAgICAgbGV0IG1hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10gPSBbXTtcclxuXHJcbiAgICAgIC8vIGV4dHJhY3QgYWxsIGdyb3VwIG5hbWVzXHJcbiAgICAgIGNvbnN0IGdyb3VwcyA9IGxpbWl0ZWRcclxuICAgICAgICAubWFwKChvcHRpb246IFR5cGVhaGVhZE1hdGNoKSA9PlxyXG4gICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuZmlsdGVyKCh2OiBzdHJpbmcsIGk6IG51bWJlciwgYTogc3RyaW5nW10pID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XHJcblxyXG4gICAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXA6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIC8vIGFkZCBncm91cCBoZWFkZXIgdG8gYXJyYXkgb2YgbWF0Y2hlc1xyXG4gICAgICAgIG1hdGNoZXMucHVzaChuZXcgVHlwZWFoZWFkTWF0Y2goZ3JvdXAsIGdyb3VwLCB0cnVlKSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBlYWNoIGl0ZW0gb2YgZ3JvdXAgdG8gYXJyYXkgb2YgbWF0Y2hlc1xyXG4gICAgICAgIG1hdGNoZXMgPSBtYXRjaGVzLmNvbmNhdChcclxuICAgICAgICAgIGxpbWl0ZWRcclxuICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICAgICAgICAgKG9wdGlvbjogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRHcm91cEZpZWxkKSA9PT0gZ3JvdXBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICAgICAgICAob3B0aW9uOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICBuZXcgVHlwZWFoZWFkTWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbixcclxuICAgICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9tYXRjaGVzID0gbGltaXRlZC5tYXAoXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgICAgIChvcHRpb246IGFueSkgPT5cclxuICAgICAgICAgIG5ldyBUeXBlYWhlYWRNYXRjaChcclxuICAgICAgICAgICAgb3B0aW9uLFxyXG4gICAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZE9wdGlvbkZpZWxkKVxyXG4gICAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhc01hdGNoZXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlYWhlYWQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuaW1wb3J0IHsgVHlwZWFoZWFkQ29uZmlnIH0gZnJvbSAnLi90eXBlYWhlYWQuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50LCBUeXBlYWhlYWREaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQsIFR5cGVhaGVhZERpcmVjdGl2ZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUeXBlYWhlYWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0NvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZSwgVHlwZWFoZWFkQ29uZmlnXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUJBQWEsUUFBUSxHQUE4QjtJQUMvQyxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxLQUFLO0lBQ1YsR0FBRyxFQUFFLEtBQUs7SUFDVixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0NBQ1g7Ozs7OztBQ3h6QkQ7Ozs7SUFLRSxZ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