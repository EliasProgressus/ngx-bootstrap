(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/utils', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].utils = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */
    var /**
     * @copyright Valor Software
     * @copyright Angular ng-bootstrap team
     */ Trigger = (function () {
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
        if (aliases === void 0) {
            aliases = DEFAULT_ALIASES;
        }
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
    var /**
     * @template T
     */ LinkedList = (function () {
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
                if (position === void 0) {
                    position = this.length;
                }
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
                if (position === void 0) {
                    position = 0;
                }
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
                 */ function () {
                    return this[_key];
                },
                /* tslint:disable-next-line: no-any */
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
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
    var Utils = (function () {
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
        if (!core.isDevMode() || _hideMsg || msg in _messagesHash) {
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

    exports.isBs3 = isBs3;
    exports.LinkedList = LinkedList;
    exports.listenToTriggersV2 = listenToTriggersV2;
    exports.registerOutsideClick = registerOutsideClick;
    exports.registerEscClick = registerEscClick;
    exports.OnChange = OnChange;
    exports.setTheme = setTheme;
    exports.Trigger = Trigger;
    exports.Utils = Utils;
    exports.window = win;
    exports.document = document$1;
    exports.warnOnce = warnOnce;
    exports.parseTriggers = parseTriggers;
    exports.listenToTriggers = listenToTriggers;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC11dGlscy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvdXRpbHMvdHJpZ2dlci5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90cmlnZ2Vycy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9mYWNhZGUvYnJvd3Nlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy90aGVtZS1wcm92aWRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9saW5rZWQtbGlzdC5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy9kZWNvcmF0b3JzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3V0aWxzLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzL3dhcm4tb25jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxyXG4gKiBAY29weXJpZ2h0IEFuZ3VsYXIgbmctYm9vdHN0cmFwIHRlYW1cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpZ2dlciB7XHJcbiAgb3Blbjogc3RyaW5nO1xyXG4gIGNsb3NlPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcGVuOiBzdHJpbmcsIGNsb3NlPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xyXG4gICAgdGhpcy5jbG9zZSA9IGNsb3NlIHx8IG9wZW47XHJcbiAgfVxyXG5cclxuICBpc01hbnVhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4gPT09ICdtYW51YWwnIHx8IHRoaXMuY2xvc2UgPT09ICdtYW51YWwnO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxyXG4gKiBAY29weXJpZ2h0IEFuZ3VsYXIgbmctYm9vdHN0cmFwIHRlYW1cclxuICovXHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmlnZ2VyIH0gZnJvbSAnLi90cmlnZ2VyLmNsYXNzJztcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbmV4cG9ydCB0eXBlIEJzRXZlbnRDYWxsYmFjayA9IChldmVudD86IGFueSkgPT4gYm9vbGVhbiB8IHZvaWQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3Rlbk9wdGlvbnMge1xyXG4gIHRhcmdldD86IEhUTUxFbGVtZW50O1xyXG4gIHRhcmdldHM/OiBIVE1MRWxlbWVudFtdO1xyXG4gIHRyaWdnZXJzPzogc3RyaW5nO1xyXG4gIG91dHNpZGVDbGljaz86IGJvb2xlYW47XHJcbiAgb3V0c2lkZUVzYz86IGJvb2xlYW47XHJcbiAgc2hvdz86IEJzRXZlbnRDYWxsYmFjaztcclxuICBoaWRlPzogQnNFdmVudENhbGxiYWNrO1xyXG4gIHRvZ2dsZT86IEJzRXZlbnRDYWxsYmFjaztcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9BTElBU0VTID0ge1xyXG4gIGhvdmVyOiBbJ21vdXNlb3ZlcicsICdtb3VzZW91dCddLFxyXG4gIGZvY3VzOiBbJ2ZvY3VzaW4nLCAnZm9jdXNvdXQnXVxyXG59O1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHJpZ2dlcnModHJpZ2dlcnM6IHN0cmluZywgYWxpYXNlczogYW55ID0gREVGQVVMVF9BTElBU0VTKTogVHJpZ2dlcltdIHtcclxuICBjb25zdCB0cmltbWVkVHJpZ2dlcnMgPSAodHJpZ2dlcnMgfHwgJycpLnRyaW0oKTtcclxuXHJcbiAgaWYgKHRyaW1tZWRUcmlnZ2Vycy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gdHJpbW1lZFRyaWdnZXJzXHJcbiAgICAuc3BsaXQoL1xccysvKVxyXG4gICAgLm1hcCgodHJpZ2dlcjogc3RyaW5nKSA9PiB0cmlnZ2VyLnNwbGl0KCc6JykpXHJcbiAgICAubWFwKCh0cmlnZ2VyUGFpcjogc3RyaW5nW10pID0+IHtcclxuICAgICAgY29uc3QgYWxpYXMgPSBhbGlhc2VzW3RyaWdnZXJQYWlyWzBdXSB8fCB0cmlnZ2VyUGFpcjtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgVHJpZ2dlcihhbGlhc1swXSwgYWxpYXNbMV0pO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IG1hbnVhbFRyaWdnZXJzID0gcGFyc2VkVHJpZ2dlcnMuZmlsdGVyKCh0cmlnZ2VyUGFpcjogVHJpZ2dlcikgPT5cclxuICAgIHRyaWdnZXJQYWlyLmlzTWFudWFsKClcclxuICApO1xyXG5cclxuICBpZiAobWFudWFsVHJpZ2dlcnMubGVuZ3RoID4gMSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmlnZ2VycyBwYXJzZSBlcnJvcjogb25seSBvbmUgbWFudWFsIHRyaWdnZXIgaXMgYWxsb3dlZCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1hbnVhbFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vycy5sZW5ndGggPiAxKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyaWdnZXJzIHBhcnNlIGVycm9yOiBtYW51YWwgdHJpZ2dlciBjYW5cXCd0IGJlIG1peGVkIHdpdGggb3RoZXIgdHJpZ2dlcnMnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJzZWRUcmlnZ2VycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblRvVHJpZ2dlcnMocmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dGbjogQnNFdmVudENhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRm46IEJzRXZlbnRDYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRm46IEJzRXZlbnRDYWxsYmFjayk6IEZ1bmN0aW9uIHtcclxuICBjb25zdCBwYXJzZWRUcmlnZ2VycyA9IHBhcnNlVHJpZ2dlcnModHJpZ2dlcnMpO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xyXG5cclxuICBpZiAocGFyc2VkVHJpZ2dlcnMubGVuZ3RoID09PSAxICYmIHBhcnNlZFRyaWdnZXJzWzBdLmlzTWFudWFsKCkpIHtcclxuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgfVxyXG5cclxuICBwYXJzZWRUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyOiBUcmlnZ2VyKSA9PiB7XHJcbiAgICBpZiAodHJpZ2dlci5vcGVuID09PSB0cmlnZ2VyLmNsb3NlKSB7XHJcbiAgICAgIGxpc3RlbmVycy5wdXNoKHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIub3BlbiwgdG9nZ2xlRm4pKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW5lcnMucHVzaChcclxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCBzaG93Rm4pLFxyXG4gICAgICByZW5kZXJlci5saXN0ZW4odGFyZ2V0LCB0cmlnZ2VyLmNsb3NlLCBoaWRlRm4pXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHVuc3Vic2NyaWJlRm46IEZ1bmN0aW9uKSA9PiB1bnN1YnNjcmliZUZuKCkpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5Ub1RyaWdnZXJzVjIocmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKTogRnVuY3Rpb24ge1xyXG4gIGNvbnN0IHBhcnNlZFRyaWdnZXJzID0gcGFyc2VUcmlnZ2VycyhvcHRpb25zLnRyaWdnZXJzKTtcclxuICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcclxuICAvLyBkbyBub3RoaW5nXHJcbiAgaWYgKHBhcnNlZFRyaWdnZXJzLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRUcmlnZ2Vyc1swXS5pc01hbnVhbCgpKSB7XHJcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIH1cclxuXHJcbiAgLy8gYWxsIGxpc3RlbmVyc1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgY29uc3QgbGlzdGVuZXJzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvLyBsYXp5IGxpc3RlbmVycyByZWdpc3RyYXRpb25cclxuICBjb25zdCBfcmVnaXN0ZXJIaWRlOiBGdW5jdGlvbltdID0gW107XHJcbiAgY29uc3QgcmVnaXN0ZXJIaWRlID0gKCkgPT4ge1xyXG4gICAgLy8gYWRkIGhpZGUgbGlzdGVuZXJzIHRvIHVucmVnaXN0ZXIgYXJyYXlcclxuICAgIF9yZWdpc3RlckhpZGUuZm9yRWFjaCgoZm46IEZ1bmN0aW9uKSA9PiBsaXN0ZW5lcnMucHVzaChmbigpKSk7XHJcbiAgICAvLyByZWdpc3RlciBoaWRlIGV2ZW50cyBvbmx5IG9uY2VcclxuICAgIF9yZWdpc3RlckhpZGUubGVuZ3RoID0gMDtcclxuICB9O1xyXG5cclxuICAvLyByZWdpc3RlciBvcGVuXFxjbG9zZVxcdG9nZ2xlIGxpc3RlbmVyc1xyXG4gIHBhcnNlZFRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcclxuICAgIGNvbnN0IHVzZVRvZ2dsZSA9IHRyaWdnZXIub3BlbiA9PT0gdHJpZ2dlci5jbG9zZTtcclxuICAgIGNvbnN0IHNob3dGbiA9IHVzZVRvZ2dsZSA/IG9wdGlvbnMudG9nZ2xlIDogb3B0aW9ucy5zaG93O1xyXG5cclxuICAgIGlmICghdXNlVG9nZ2xlKSB7XHJcbiAgICAgIF9yZWdpc3RlckhpZGUucHVzaCgoKSA9PlxyXG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbih0YXJnZXQsIHRyaWdnZXIuY2xvc2UsIG9wdGlvbnMuaGlkZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW5lcnMucHVzaChcclxuICAgICAgcmVuZGVyZXIubGlzdGVuKHRhcmdldCwgdHJpZ2dlci5vcGVuLCAoKSA9PiBzaG93Rm4ocmVnaXN0ZXJIaWRlKSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgodW5zdWJzY3JpYmVGbjogRnVuY3Rpb24pID0+IHVuc3Vic2NyaWJlRm4oKSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyT3V0c2lkZUNsaWNrKHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zLm91dHNpZGVDbGljaykge1xyXG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgcmV0dXJuIHJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgb3B0aW9ucy50YXJnZXRzICYmXHJcbiAgICAgIG9wdGlvbnMudGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMuaGlkZSgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJFc2NDbGljayhyZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBMaXN0ZW5PcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zLm91dHNpZGVFc2MpIHtcclxuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdrZXl1cC5lc2MnLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0ICYmIG9wdGlvbnMudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgb3B0aW9ucy50YXJnZXRzICYmXHJcbiAgICAgIG9wdGlvbnMudGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbnMuaGlkZSgpO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBKUyB2ZXJzaW9uIG9mIGJyb3dzZXIgQVBJcy4gVGhpcyBsaWJyYXJ5IGNhbiBvbmx5IHJ1biBpbiB0aGUgYnJvd3Nlci5cclxuICovXHJcbmNvbnN0IHdpbiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHx8IHt9IGFzIGFueTtcclxuXHJcbmV4cG9ydCB7IHdpbiBhcyB3aW5kb3cgfTtcclxuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xyXG5leHBvcnQgY29uc3QgbG9jYXRpb24gPSB3aW4ubG9jYXRpb247XHJcbmV4cG9ydCBjb25zdCBnYyA9IHdpbi5nYyA/ICgpID0+IHdpbi5nYygpIDogKCk6IGFueSA9PiBudWxsO1xyXG5leHBvcnQgY29uc3QgcGVyZm9ybWFuY2UgPSB3aW4ucGVyZm9ybWFuY2UgPyB3aW4ucGVyZm9ybWFuY2UgOiBudWxsO1xyXG5leHBvcnQgY29uc3QgRXZlbnQgPSB3aW4uRXZlbnQ7XHJcbmV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luLk1vdXNlRXZlbnQ7XHJcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luLktleWJvYXJkRXZlbnQ7XHJcbmV4cG9ydCBjb25zdCBFdmVudFRhcmdldCA9IHdpbi5FdmVudFRhcmdldDtcclxuZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW4uSGlzdG9yeTtcclxuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luLkxvY2F0aW9uO1xyXG5leHBvcnQgY29uc3QgRXZlbnRMaXN0ZW5lciA9IHdpbi5FdmVudExpc3RlbmVyO1xyXG4iLCJpbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuL2ZhY2FkZS9icm93c2VyJztcclxuXHJcbmxldCBndWVzc2VkVmVyc2lvbjogJ2JzMycgfCAnYnM0JztcclxuXHJcbmZ1bmN0aW9uIF9ndWVzc0JzVmVyc2lvbigpOiAnYnMzJyB8ICdiczQnIHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIGNvbnN0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzcGFuRWwuaW5uZXJUZXh0ID0gJ3Rlc3QgYnMgdmVyc2lvbic7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuRWwpO1xyXG4gIHNwYW5FbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICBjb25zdCByZWN0ID0gc3BhbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3BhbkVsKTtcclxuICBpZiAoIXJlY3QpIHtcclxuICAgIHJldHVybiAnYnMzJztcclxuICB9XHJcblxyXG4gIHJldHVybiByZWN0LnRvcCA9PT0gMCA/ICdiczQnIDogJ2JzMyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZTogJ2JzMycgfCAnYnM0Jyk6IHZvaWQge1xyXG4gIGd1ZXNzZWRWZXJzaW9uID0gdGhlbWU7XHJcbn1cclxuXHJcbi8vIHRvZG86IGluIG5neC1ib290c3RyYXAsIGJzNCB3aWxsIGJlY2FtZSBhIGRlZmF1bHQgb25lXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0JzMygpOiBib29sZWFuIHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cuX190aGVtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGlmIChndWVzc2VkVmVyc2lvbikge1xyXG4gICAgICByZXR1cm4gZ3Vlc3NlZFZlcnNpb24gPT09ICdiczMnO1xyXG4gICAgfVxyXG4gICAgZ3Vlc3NlZFZlcnNpb24gPSBfZ3Vlc3NCc1ZlcnNpb24oKTtcclxuXHJcbiAgICByZXR1cm4gZ3Vlc3NlZFZlcnNpb24gPT09ICdiczMnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpbmRvdy5fX3RoZW1lICE9PSAnYnM0JztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTGlua2VkTGlzdDxUPiB7XHJcbiAgbGVuZ3RoID0gMDtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgcHJvdGVjdGVkIGhlYWQ6IGFueTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgcHJvdGVjdGVkIHRhaWw6IGFueTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgcHJvdGVjdGVkIGN1cnJlbnQ6IGFueTtcclxuICBwcm90ZWN0ZWQgYXNBcnJheTogVFtdID0gW107XHJcblxyXG4gIGdldChwb3NpdGlvbjogbnVtYmVyKTogVCB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvc2l0aW9uOyBpbmRleCsrKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBhZGQodmFsdWU6IFQsIHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmxlbmd0aCk6IHZvaWQge1xyXG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29uc3Qgbm9kZTogYW55ID0ge1xyXG4gICAgICB2YWx1ZSxcclxuICAgICAgbmV4dDogdW5kZWZpbmVkLFxyXG4gICAgICBwcmV2aW91czogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xyXG4gICAgICB0aGlzLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgICAgLy8gZmlyc3Qgbm9kZVxyXG4gICAgICAgIG5vZGUubmV4dCA9IHRoaXMuaGVhZDtcclxuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSBub2RlO1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gbGFzdCBub2RlXHJcbiAgICAgICAgdGhpcy50YWlsLm5leHQgPSBub2RlO1xyXG4gICAgICAgIG5vZGUucHJldmlvdXMgPSB0aGlzLnRhaWw7XHJcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBub2RlIGluIG1pZGRsZVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmV2aW91c05vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24gLSAxKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50TmV4dE5vZGUgPSBjdXJyZW50UHJldmlvdXNOb2RlLm5leHQ7XHJcblxyXG4gICAgICAgIGN1cnJlbnRQcmV2aW91c05vZGUubmV4dCA9IG5vZGU7XHJcbiAgICAgICAgY3VycmVudE5leHROb2RlLnByZXZpb3VzID0gbm9kZTtcclxuXHJcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IGN1cnJlbnRQcmV2aW91c05vZGU7XHJcbiAgICAgICAgbm9kZS5uZXh0ID0gY3VycmVudE5leHROb2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmxlbmd0aCsrO1xyXG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShwb3NpdGlvbiA9IDApOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zaXRpb24gPT09IDApIHtcclxuICAgICAgLy8gZmlyc3Qgbm9kZVxyXG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmhlYWQpIHtcclxuICAgICAgICAvLyB0aGVyZSBpcyBubyBzZWNvbmQgbm9kZVxyXG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IHVuZGVmaW5lZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGVyZSBpcyBubyBzZWNvbmQgbm9kZVxyXG4gICAgICAgIHRoaXMudGFpbCA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIC8vIGxhc3Qgbm9kZVxyXG4gICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwucHJldmlvdXM7XHJcbiAgICAgIHRoaXMudGFpbC5uZXh0ID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gbWlkZGxlIG5vZGVcclxuICAgICAgY29uc3QgcmVtb3ZlZE5vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24pO1xyXG4gICAgICByZW1vdmVkTm9kZS5uZXh0LnByZXZpb3VzID0gcmVtb3ZlZE5vZGUucHJldmlvdXM7XHJcbiAgICAgIHJlbW92ZWROb2RlLnByZXZpb3VzLm5leHQgPSByZW1vdmVkTm9kZS5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0KHBvc2l0aW9uOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbik7XHJcbiAgICBub2RlLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpOiBUW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNBcnJheTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBmaW5kQWxsKGZuOiBhbnkpOiBhbnlbXSB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe2luZGV4LCB2YWx1ZTogY3VycmVudC52YWx1ZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIEFycmF5IG1ldGhvZHMgb3ZlcnJpZGluZyBzdGFydFxyXG4gIHB1c2goLi4uYXJnczogVFtdKTogbnVtYmVyIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGFyZ3MuZm9yRWFjaCgoYXJnOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5hZGQoYXJnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHBvcCgpOiBUIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFzdCA9IHRoaXMudGFpbDtcclxuICAgIHRoaXMucmVtb3ZlKHRoaXMubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgcmV0dXJuIGxhc3QudmFsdWU7XHJcbiAgfVxyXG5cclxuICB1bnNoaWZ0KC4uLmFyZ3M6IFRbXSk6IG51bWJlciB7XHJcbiAgICBhcmdzLnJldmVyc2UoKTtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGFyZ3MuZm9yRWFjaCgoYXJnOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5hZGQoYXJnLCAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHNoaWZ0KCk6IFQge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMuaGVhZC52YWx1ZTtcclxuICAgIHRoaXMucmVtb3ZlKCk7XHJcblxyXG4gICAgcmV0dXJuIGxhc3RJdGVtO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGZvckVhY2goZm46IGFueSk6IHZvaWQge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpO1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5kZXhPZih2YWx1ZTogVCk6IG51bWJlciB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIGxldCBwb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHBvc2l0aW9uID0gaW5kZXg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgc29tZShmbjogYW55KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgIHdoaWxlIChjdXJyZW50ICYmICFyZXN1bHQpIHtcclxuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgZXZlcnkoZm46IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIHdoaWxlIChjdXJyZW50ICYmIHJlc3VsdCkge1xyXG4gICAgICBpZiAoIWZuKGN1cnJlbnQudmFsdWUpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnW0xpbmtlZCBMaXN0XSc7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgZmluZChmbjogYW55KTogVCB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIGxldCByZXN1bHQ6IFQ7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGZpbmRJbmRleChmbjogYW55KTogbnVtYmVyIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgbGV0IHJlc3VsdDogbnVtYmVyO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcclxuICAgICAgICByZXN1bHQgPSBpbmRleDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgcHJvdGVjdGVkIGdldE5vZGUocG9zaXRpb246IG51bWJlcik6IGFueSB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvc2l0aW9uOyBpbmRleCsrKSB7XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk6IHZvaWQge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29uc3Qgb3V0QXJyYXk6IGFueVtdID0gW107XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuXHJcbiAgICB3aGlsZSAoY3VycmVudCkge1xyXG4gICAgICBvdXRBcnJheS5wdXNoKGN1cnJlbnQudmFsdWUpO1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5hc0FycmF5ID0gb3V0QXJyYXk7XHJcbiAgfVxyXG5cclxuICAvLyBBcnJheSBtZXRob2RzIG92ZXJyaWRpbmcgRU5EXHJcbn1cclxuIiwiLyp0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXMgKi9cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIE9uQ2hhbmdlKGRlZmF1bHRWYWx1ZT86IGFueSk6IGFueSB7XHJcbiAgY29uc3Qgc3VmaXggPSAnQ2hhbmdlJztcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICByZXR1cm4gZnVuY3Rpb24gT25DaGFuZ2VIYW5kbGVyKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBfa2V5ID0gYCBfXyR7cHJvcGVydHlLZXl9VmFsdWVgO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgZ2V0KCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbX2tleV07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gdGhpc1tfa2V5XTtcclxuICAgICAgICB0aGlzW19rZXldID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHByZXZWYWx1ZSAhPT0gdmFsdWUgJiYgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XSkge1xyXG4gICAgICAgICAgdGhpc1twcm9wZXJ0eUtleSArIHN1Zml4XS5lbWl0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG4iLCJpbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuL2ZhY2FkZS9icm93c2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBzdGF0aWMgcmVmbG93KGVsZW1lbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICgoYnM6IGFueSk6IHZvaWQgPT4gYnMpKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIC8vIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi9tYXN0ZXIvc3JjL2Nzcy92YXIvZ2V0U3R5bGVzLmpzXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBzdGF0aWMgZ2V0U3R5bGVzKGVsZW06IGFueSk6IGFueSB7XHJcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAoIzE1MDk4LCAjMTQxNTApXHJcbiAgICAvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcclxuICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxyXG4gICAgbGV0IHZpZXcgPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcblxyXG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm9wZW5lcikge1xyXG4gICAgICB2aWV3ID0gd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5jb25zdCBfbWVzc2FnZXNIYXNoOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5jb25zdCBfaGlkZU1zZyA9IHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAhKCd3YXJuJyBpbiBjb25zb2xlKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuT25jZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gIGlmICghaXNEZXZNb2RlKCkgfHwgX2hpZGVNc2cgfHwgbXNnIGluIF9tZXNzYWdlc0hhc2gpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIF9tZXNzYWdlc0hhc2hbbXNnXSA9IHRydWU7XHJcbiAgLyp0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUqL1xyXG4gIGNvbnNvbGUud2Fybihtc2cpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsIndpbmRvdyIsImlzRGV2TW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7O1FBQUE7UUFJRSxpQkFBWSxJQUFZLEVBQUUsS0FBYztZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7U0FDNUI7Ozs7UUFFRCwwQkFBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQzthQUMx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