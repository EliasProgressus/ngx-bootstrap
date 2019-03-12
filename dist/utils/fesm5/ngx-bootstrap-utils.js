import { isDevMode } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var  /**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
    function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var /** @type {?} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var /** @type {?} */ parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var /** @type {?} */ manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, /* tslint:disable-next-line: no-any */
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    var /** @type {?} */ parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    var /** @type {?} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function listenToTriggersV2(renderer, options) {
    var /** @type {?} */ parsedTriggers = parseTriggers(options.triggers);
    var /** @type {?} */ target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    var /** @type {?} */ listeners = [];
    // lazy listeners registration
    var /** @type {?} */ _registerHide = [];
    var /** @type {?} */ registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        var /** @type {?} */ useToggle = trigger.open === trigger.close;
        var /** @type {?} */ showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return undefined;
        }
        options.hide();
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return undefined;
        }
        options.hide();
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var /** @type {?} */ win = (typeof window !== 'undefined' && window) || /** @type {?} */ ({});
var /** @type {?} */ document$1 = win.document;
var /** @type {?} */ location = win.location;
var /** @type {?} */ gc = win.gc ? function () { return win.gc(); } : function () { return null; };
var /** @type {?} */ performance = win.performance ? win.performance : null;
var /** @type {?} */ Event = win.Event;
var /** @type {?} */ MouseEvent = win.MouseEvent;
var /** @type {?} */ KeyboardEvent = win.KeyboardEvent;
var /** @type {?} */ EventTarget = win.EventTarget;
var /** @type {?} */ History = win.History;
var /** @type {?} */ Location = win.Location;
var /** @type {?} */ EventListener = win.EventListener;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    var /** @type {?} */ spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    var /** @type {?} */ rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
function setTheme(theme) {
    guessedVersion = theme;
}
/**
 * @return {?}
 */
function isBs3() {
    if (typeof win === 'undefined') {
        return true;
    }
    if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return win.__theme !== 'bs4';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                var /** @type {?} */ currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var /** @type {?} */ removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return this.asArray;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ current = this.head;
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ result = [];
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /* tslint:disable-next-line: no-any*/
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        /* tslint:disable-next-line: no-any*/
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ position = 0;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = /**
     * @return {?}
     */
    function () {
        return '[Linked List]';
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = /**
     * @return {?}
     */
    function () {
        /* tslint:disable-next-line: no-any*/
        var /** @type {?} */ outArray = [];
        var /** @type {?} */ current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
function OnChange(defaultValue) {
    var /** @type {?} */ sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return function OnChangeHandler(target, propertyKey) {
        var /** @type {?} */ _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            get: /**
             * @return {?}
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /* tslint:disable-next-line: no-any */
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var /** @type {?} */ view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ _messagesHash = {};
var /** @type {?} */ _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
function warnOnce(msg) {
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { isBs3, LinkedList, listenToTriggersV2, registerOutsideClick, registerEscClick, OnChange, setTheme, Trigger, Utils, win as window, document$1 as document, warnOnce, parseTriggers, listenToTriggers };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC11dGlscy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90cmlnZ2VyLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3RyaWdnZXJzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2ZhY2FkZS9icm93c2VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3RoZW1lLXByb3ZpZGVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2xpbmtlZC1saXN0LmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL2RlY29yYXRvcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvdXRpbHMvdXRpbHMuY2xhc3MudHMiLCJuZzovL25neC1ib290c3RyYXAvdXRpbHMvd2Fybi1vbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXHJcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlnZ2VyIHtcclxuICBvcGVuOiBzdHJpbmc7XHJcbiAgY2xvc2U/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wZW46IHN0cmluZywgY2xvc2U/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMub3BlbiA9IG9wZW47XHJcbiAgICB0aGlzLmNsb3NlID0gY2xvc2UgfHwgb3BlbjtcclxuICB9XHJcblxyXG4gIGlzTWFudWFsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiA9PT0gJ21hbnVhbCcgfHwgdGhpcy5jbG9zZSA9PT0gJ21hbnVhbCc7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXHJcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxyXG4gKi9cclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyaWdnZXIgfSBmcm9tICcuL3RyaWdnZXIuY2xhc3MnO1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuZXhwb3J0IHR5cGUgQnNFdmVudENhbGxiYWNrID0gKGV2ZW50PzogYW55KSA9PiBib29sZWFuIHwgdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdGVuT3B0aW9ucyB7XHJcbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQ7XHJcbiAgdGFyZ2V0cz86IEhUTUxFbGVtZW50W107XHJcbiAgdHJpZ2dlcnM/OiBzdHJpbmc7XHJcbiAgb3V0c2lkZUNsaWNrPzogYm9vbGVhbjtcclxuICBvdXRzaWRlRXNjPzogYm9vbGVhbjtcclxuICBzaG93PzogQnNFdmVudENhbGxiYWNrO1xyXG4gIGhpZGU/OiBCc0V2ZW50Q2FsbGJhY2s7XHJcbiAgdG9nZ2xlPzogQnNFdmVudENhbGxiYWNrO1xyXG59XHJcblxyXG5jb25zdCBERUZBVUxUX0FMSUFTRVMgPSB7XHJcbiAgaG92ZXI6IFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J10sXHJcbiAgZm9jdXM6IFsnZm9jdXNpbicsICdmb2N1c291dCddXHJcbn07XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vyczogc3RyaW5nLCBhbGlhc2VzOiBhbnkgPSBERUZBVUxUX0FMSUFTRVMpOiBUcmlnZ2VyW10ge1xyXG4gIGNvbnN0IHRyaW1tZWRUcmlnZ2VycyA9ICh0cmlnZ2VycyB8fCAnJykudHJpbSgpO1xyXG5cclxuICBpZiAodHJpbW1lZFRyaWdnZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSB0cmltbWVkVHJpZ2dlcnNcclxuICAgIC5zcGxpdCgvXFxzKy8pXHJcbiAgICAubWFwKCh0cmlnZ2VyOiBzdHJpbmcpID0+IHRyaWdnZXIuc3BsaXQoJzonKSlcclxuICAgIC5tYXAoKHRyaWdnZXJQYWlyOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICBjb25zdCBhbGlhcyA9IGFsaWFzZXNbdHJpZ2dlclBhaXJbMF1dIHx8IHRyaWdnZXJQYWlyO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBUcmlnZ2VyKGFsaWFzWzBdLCBhbGlhc1sxXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgbWFudWFsVHJpZ2dlcnMgPSBwYXJzZWRUcmlnZ2Vycy5maWx0ZXIoKHRyaWdnZXJQYWlyOiBUcmlnZ2VyKSA9PlxyXG4gICAgdHJpZ2dlclBhaXIuaXNNYW51YWwoKVxyXG4gICk7XHJcblxyXG4gIGlmIChtYW51YWxUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBvbmx5IG9uZSBtYW51YWwgdHJpZ2dlciBpcyBhbGxvd2VkJyk7XHJcbiAgfVxyXG5cclxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA+IDEpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVHJpZ2dlcnMgcGFyc2UgZXJyb3I6IG1hbnVhbCB0cmlnZ2VyIGNhblxcJ3QgYmUgbWl4ZWQgd2l0aCBvdGhlciB0cmlnZ2VycycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcnNlZFRyaWdnZXJzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuVG9UcmlnZ2VycyhyZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcnM6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0ZuOiBCc0V2ZW50Q2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGbjogQnNFdmVudENhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVGbjogQnNFdmVudENhbGxiYWNrKTogRnVuY3Rpb24ge1xyXG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0cmlnZ2Vycyk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XHJcblxyXG4gIGlmIChwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPT09IDEgJiYgcGFyc2VkVHJpZ2dlcnNbMF0uaXNNYW51YWwoKSkge1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICB9XHJcblxyXG4gIHBhcnNlZFRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcclxuICAgIGlmICh0cmlnZ2VyLm9wZW4gPT09IHRyaWdnZXIuY2xvc2UpIHtcclxuICAgICAgbGlzdGVuZXJzLnB1c2gocmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCB0b2dnbGVGbikpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbmVycy5wdXNoKFxyXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sIHNob3dGbiksXHJcbiAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIuY2xvc2UsIGhpZGVGbilcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnNWMihyZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpOiBGdW5jdGlvbiB7XHJcbiAgY29uc3QgcGFyc2VkVHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKG9wdGlvbnMudHJpZ2dlcnMpO1xyXG4gIGNvbnN0IHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xyXG4gIC8vIGRvIG5vdGhpbmdcclxuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcclxuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgfVxyXG5cclxuICAvLyBhbGwgbGlzdGVuZXJzXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBjb25zdCBsaXN0ZW5lcnM6IGFueVtdID0gW107XHJcblxyXG4gIC8vIGxhenkgbGlzdGVuZXJzIHJlZ2lzdHJhdGlvblxyXG4gIGNvbnN0IF9yZWdpc3RlckhpZGU6IEZ1bmN0aW9uW10gPSBbXTtcclxuICBjb25zdCByZWdpc3RlckhpZGUgPSAoKSA9PiB7XHJcbiAgICAvLyBhZGQgaGlkZSBsaXN0ZW5lcnMgdG8gdW5yZWdpc3RlciBhcnJheVxyXG4gICAgX3JlZ2lzdGVySGlkZS5mb3JFYWNoKChmbjogRnVuY3Rpb24pID0+IGxpc3RlbmVycy5wdXNoKGZuKCkpKTtcclxuICAgIC8vIHJlZ2lzdGVyIGhpZGUgZXZlbnRzIG9ubHkgb25jZVxyXG4gICAgX3JlZ2lzdGVySGlkZS5sZW5ndGggPSAwO1xyXG4gIH07XHJcblxyXG4gIC8vIHJlZ2lzdGVyIG9wZW5cXGNsb3NlXFx0b2dnbGUgbGlzdGVuZXJzXHJcbiAgcGFyc2VkVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcjogVHJpZ2dlcikgPT4ge1xyXG4gICAgY29uc3QgdXNlVG9nZ2xlID0gdHJpZ2dlci5vcGVuID09PSB0cmlnZ2VyLmNsb3NlO1xyXG4gICAgY29uc3Qgc2hvd0ZuID0gdXNlVG9nZ2xlID8gb3B0aW9ucy50b2dnbGUgOiBvcHRpb25zLnNob3c7XHJcblxyXG4gICAgaWYgKCF1c2VUb2dnbGUpIHtcclxuICAgICAgX3JlZ2lzdGVySGlkZS5wdXNoKCgpID0+XHJcbiAgICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5jbG9zZSwgb3B0aW9ucy5oaWRlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbmVycy5wdXNoKFxyXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLm9wZW4sICgpID0+IHNob3dGbihyZWdpc3RlckhpZGUpKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh1bnN1YnNjcmliZUZuOiBGdW5jdGlvbikgPT4gdW5zdWJzY3JpYmVGbigpKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJPdXRzaWRlQ2xpY2socmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpIHtcclxuICBpZiAoIW9wdGlvbnMub3V0c2lkZUNsaWNrKSB7XHJcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICBpZiAob3B0aW9ucy50YXJnZXQgJiYgb3B0aW9ucy50YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBvcHRpb25zLnRhcmdldHMgJiZcclxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucy5oaWRlKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckVzY0NsaWNrKHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IExpc3Rlbk9wdGlvbnMpIHtcclxuICBpZiAoIW9wdGlvbnMub3V0c2lkZUVzYykge1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2tleXVwLmVzYycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICBpZiAob3B0aW9ucy50YXJnZXQgJiYgb3B0aW9ucy50YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBvcHRpb25zLnRhcmdldHMgJiZcclxuICAgICAgb3B0aW9ucy50YXJnZXRzLnNvbWUodGFyZ2V0ID0+IHRhcmdldC5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9ucy5oaWRlKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxyXG4gKi9cclxuY29uc3Qgd2luID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykgfHwge30gYXMgYW55O1xyXG5cclxuZXhwb3J0IHsgd2luIGFzIHdpbmRvdyB9O1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSB3aW4uZG9jdW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcclxuZXhwb3J0IGNvbnN0IGdjID0gd2luLmdjID8gKCkgPT4gd2luLmdjKCkgOiAoKTogYW55ID0+IG51bGw7XHJcbmV4cG9ydCBjb25zdCBwZXJmb3JtYW5jZSA9IHdpbi5wZXJmb3JtYW5jZSA/IHdpbi5wZXJmb3JtYW5jZSA6IG51bGw7XHJcbmV4cG9ydCBjb25zdCBFdmVudCA9IHdpbi5FdmVudDtcclxuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW4uTW91c2VFdmVudDtcclxuZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW4uS2V5Ym9hcmRFdmVudDtcclxuZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luLkV2ZW50VGFyZ2V0O1xyXG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpbi5IaXN0b3J5O1xyXG5leHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW4uTG9jYXRpb247XHJcbmV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luLkV2ZW50TGlzdGVuZXI7XHJcbiIsImltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xyXG5cclxubGV0IGd1ZXNzZWRWZXJzaW9uOiAnYnMzJyB8ICdiczQnO1xyXG5cclxuZnVuY3Rpb24gX2d1ZXNzQnNWZXJzaW9uKCk6ICdiczMnIHwgJ2JzNCcge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3Qgc3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW5FbC5pbm5lclRleHQgPSAndGVzdCBicyB2ZXJzaW9uJztcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW5FbCk7XHJcbiAgc3BhbkVsLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gIGNvbnN0IHJlY3QgPSBzcGFuRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuRWwpO1xyXG4gIGlmICghcmVjdCkge1xyXG4gICAgcmV0dXJuICdiczMnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlY3QudG9wID09PSAwID8gJ2JzNCcgOiAnYnMzJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lOiAnYnMzJyB8ICdiczQnKTogdm9pZCB7XHJcbiAgZ3Vlc3NlZFZlcnNpb24gPSB0aGVtZTtcclxufVxyXG5cclxuLy8gdG9kbzogaW4gbmd4LWJvb3RzdHJhcCwgYnM0IHdpbGwgYmVjYW1lIGEgZGVmYXVsdCBvbmVcclxuZXhwb3J0IGZ1bmN0aW9uIGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdy5fX3RoZW1lID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKGd1ZXNzZWRWZXJzaW9uKSB7XHJcbiAgICAgIHJldHVybiBndWVzc2VkVmVyc2lvbiA9PT0gJ2JzMyc7XHJcbiAgICB9XHJcbiAgICBndWVzc2VkVmVyc2lvbiA9IF9ndWVzc0JzVmVyc2lvbigpO1xyXG5cclxuICAgIHJldHVybiBndWVzc2VkVmVyc2lvbiA9PT0gJ2JzMyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2luZG93Ll9fdGhlbWUgIT09ICdiczQnO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0PFQ+IHtcclxuICBsZW5ndGggPSAwO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBwcm90ZWN0ZWQgaGVhZDogYW55O1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBwcm90ZWN0ZWQgdGFpbDogYW55O1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBwcm90ZWN0ZWQgY3VycmVudDogYW55O1xyXG4gIHByb3RlY3RlZCBhc0FycmF5OiBUW10gPSBbXTtcclxuXHJcbiAgZ2V0KHBvc2l0aW9uOiBudW1iZXIpOiBUIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHZvaWQgMDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9zaXRpb247IGluZGV4KyspIHtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGFkZCh2YWx1ZTogVCwgcG9zaXRpb246IG51bWJlciA9IHRoaXMubGVuZ3RoKTogdm9pZCB7XHJcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID4gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb25zdCBub2RlOiBhbnkgPSB7XHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBuZXh0OiB1bmRlZmluZWQsXHJcbiAgICAgIHByZXZpb3VzOiB1bmRlZmluZWRcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XHJcbiAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcbiAgICAgIHRoaXMuY3VycmVudCA9IG5vZGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocG9zaXRpb24gPT09IDApIHtcclxuICAgICAgICAvLyBmaXJzdCBub2RlXHJcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xyXG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5oZWFkID0gbm9kZTtcclxuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgICAvLyBsYXN0IG5vZGVcclxuICAgICAgICB0aGlzLnRhaWwubmV4dCA9IG5vZGU7XHJcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcclxuICAgICAgICB0aGlzLnRhaWwgPSBub2RlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG5vZGUgaW4gbWlkZGxlXHJcbiAgICAgICAgY29uc3QgY3VycmVudFByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbiAtIDEpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXh0Tm9kZSA9IGN1cnJlbnRQcmV2aW91c05vZGUubmV4dDtcclxuXHJcbiAgICAgICAgY3VycmVudFByZXZpb3VzTm9kZS5uZXh0ID0gbm9kZTtcclxuICAgICAgICBjdXJyZW50TmV4dE5vZGUucHJldmlvdXMgPSBub2RlO1xyXG5cclxuICAgICAgICBub2RlLnByZXZpb3VzID0gY3VycmVudFByZXZpb3VzTm9kZTtcclxuICAgICAgICBub2RlLm5leHQgPSBjdXJyZW50TmV4dE5vZGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubGVuZ3RoKys7XHJcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKHBvc2l0aW9uID0gMCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAvLyBmaXJzdCBub2RlXHJcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xyXG5cclxuICAgICAgaWYgKHRoaXMuaGVhZCkge1xyXG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIHNlY29uZCBub2RlXHJcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gdW5kZWZpbmVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIHNlY29uZCBub2RlXHJcbiAgICAgICAgdGhpcy50YWlsID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSB0aGlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgLy8gbGFzdCBub2RlXHJcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcclxuICAgICAgdGhpcy50YWlsLm5leHQgPSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBtaWRkbGUgbm9kZVxyXG4gICAgICBjb25zdCByZW1vdmVkTm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbik7XHJcbiAgICAgIHJlbW92ZWROb2RlLm5leHQucHJldmlvdXMgPSByZW1vdmVkTm9kZS5wcmV2aW91cztcclxuICAgICAgcmVtb3ZlZE5vZGUucHJldmlvdXMubmV4dCA9IHJlbW92ZWROb2RlLm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sZW5ndGgtLTtcclxuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBzZXQocG9zaXRpb246IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcclxuICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICB0b0FycmF5KCk6IFRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGZpbmRBbGwoZm46IGFueSk6IGFueVtdIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7aW5kZXgsIHZhbHVlOiBjdXJyZW50LnZhbHVlfSk7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLy8gQXJyYXkgbWV0aG9kcyBvdmVycmlkaW5nIHN0YXJ0XHJcbiAgcHVzaCguLi5hcmdzOiBUW10pOiBudW1iZXIge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgYXJncy5mb3JFYWNoKChhcmc6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmFkZChhcmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcG9wKCk6IFQge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsYXN0ID0gdGhpcy50YWlsO1xyXG4gICAgdGhpcy5yZW1vdmUodGhpcy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICByZXR1cm4gbGFzdC52YWx1ZTtcclxuICB9XHJcblxyXG4gIHVuc2hpZnQoLi4uYXJnczogVFtdKTogbnVtYmVyIHtcclxuICAgIGFyZ3MucmV2ZXJzZSgpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgYXJncy5mb3JFYWNoKChhcmc6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmFkZChhcmcsIDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2hpZnQoKTogVCB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxhc3RJdGVtID0gdGhpcy5oZWFkLnZhbHVlO1xyXG4gICAgdGhpcy5yZW1vdmUoKTtcclxuXHJcbiAgICByZXR1cm4gbGFzdEl0ZW07XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgZm9yRWFjaChmbjogYW55KTogdm9pZCB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBmbihjdXJyZW50LnZhbHVlLCBpbmRleCk7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbmRleE9mKHZhbHVlOiBUKTogbnVtYmVyIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgcG9zaXRpb24gPSBpbmRleDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBzb21lKGZuOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgIXJlc3VsdCkge1xyXG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSkpIHtcclxuICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBldmVyeShmbjogYW55KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgcmVzdWx0KSB7XHJcbiAgICAgIGlmICghZm4oY3VycmVudC52YWx1ZSkpIHtcclxuICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdbTGlua2VkIExpc3RdJztcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBmaW5kKGZuOiBhbnkpOiBUIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgbGV0IHJlc3VsdDogVDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gY3VycmVudC52YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgZmluZEluZGV4KGZuOiBhbnkpOiBudW1iZXIge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcmVzdWx0OiBudW1iZXI7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBwcm90ZWN0ZWQgZ2V0Tm9kZShwb3NpdGlvbjogbnVtYmVyKTogYW55IHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9zaXRpb247IGluZGV4KyspIHtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3VycmVudDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTogdm9pZCB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb25zdCBvdXRBcnJheTogYW55W10gPSBbXTtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIHdoaWxlIChjdXJyZW50KSB7XHJcbiAgICAgIG91dEFycmF5LnB1c2goY3VycmVudC52YWx1ZSk7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFzQXJyYXkgPSBvdXRBcnJheTtcclxuICB9XHJcblxyXG4gIC8vIEFycmF5IG1ldGhvZHMgb3ZlcnJpZGluZyBFTkRcclxufVxyXG4iLCIvKnRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpcyAqL1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gT25DaGFuZ2UoZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcclxuICBjb25zdCBzdWZpeCA9ICdDaGFuZ2UnO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIHJldHVybiBmdW5jdGlvbiBPbkNoYW5nZUhhbmRsZXIodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IF9rZXkgPSBgIF9fJHtwcm9wZXJ0eUtleX1WYWx1ZWA7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgICBnZXQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpc1tfa2V5XTtcclxuICAgICAgfSxcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgc2V0KHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzW19rZXldO1xyXG4gICAgICAgIHRoaXNbX2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZiAocHJldlZhbHVlICE9PSB2YWx1ZSAmJiB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdKSB7XHJcbiAgICAgICAgICB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdLmVtaXQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiIsImltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIHN0YXRpYyByZWZsb3coZWxlbWVudDogYW55KTogdm9pZCB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgKChiczogYW55KTogdm9pZCA9PiBicykoZWxlbWVudC5vZmZzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLy8gc291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iL21hc3Rlci9zcmMvY3NzL3Zhci9nZXRTdHlsZXMuanNcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIHN0YXRpYyBnZXRTdHlsZXMoZWxlbTogYW55KTogYW55IHtcclxuICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICgjMTUwOTgsICMxNDE1MClcclxuICAgIC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xyXG4gICAgLy8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXHJcbiAgICBsZXQgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuXHJcbiAgICBpZiAoIXZpZXcgfHwgIXZpZXcub3BlbmVyKSB7XHJcbiAgICAgIHZpZXcgPSB3aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmNvbnN0IF9tZXNzYWdlc0hhc2g6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbmNvbnN0IF9oaWRlTXNnID0gdHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8ICEoJ3dhcm4nIGluIGNvbnNvbGUpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PbmNlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgaWYgKCFpc0Rldk1vZGUoKSB8fCBfaGlkZU1zZyB8fCBtc2cgaW4gX21lc3NhZ2VzSGFzaCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgX21lc3NhZ2VzSGFzaFttc2ddID0gdHJ1ZTtcclxuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSovXHJcbiAgY29uc29sZS53YXJuKG1zZyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRvY3VtZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7Ozs7QUFBQTtJQUlFLGlCQUFZLElBQVksRUFBRSxLQUFjO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztLQUM1Qjs7OztJQUVELDBCQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7S0FDMUQ7a0JBaEJIO0lBaUJDOzs7Ozs7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