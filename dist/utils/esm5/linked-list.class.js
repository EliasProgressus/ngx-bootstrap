/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var /**
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
 * @template T
 */
export { LinkedList };
function LinkedList_tsickle_Closure_declarations() {
    /** @type {?} */
    LinkedList.prototype.length;
    /** @type {?} */
    LinkedList.prototype.head;
    /** @type {?} */
    LinkedList.prototype.tail;
    /** @type {?} */
    LinkedList.prototype.current;
    /** @type {?} */
    LinkedList.prototype.asArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLWxpc3QuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsibGlua2VkLWxpc3QuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBQTs7c0JBQ1csQ0FBQzt1QkFPZSxFQUFFOzs7Ozs7SUFFM0Isd0JBQUc7Ozs7SUFBSCxVQUFJLFFBQWdCO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNmO1FBRUQscUJBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEIsR0FBRyxDQUFDLENBQUMscUJBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDOUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUN0Qjs7Ozs7O0lBRUQsd0JBQUc7Ozs7O0lBQUgsVUFBSSxLQUFRLEVBQUUsUUFBOEI7UUFBOUIseUJBQUEsRUFBQSxXQUFtQixJQUFJLENBQUMsTUFBTTtRQUMxQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDaEQ7O1FBR0QscUJBQU0sSUFBSSxHQUFRO1lBQ2hCLEtBQUssT0FBQTtZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsUUFBUSxFQUFFLFNBQVM7U0FDcEIsQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFD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O1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUNoQjs7OztJQUVTLHNEQUFpQzs7O0lBQTNDOztRQUVFLHFCQUFNLFFBQVEsR0FBVSxFQUFFLENBQUM7UUFDM0IscUJBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEIsT0FBTyxPQUFPLEVBQUUsQ0FBQztZQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7S0FDekI7cUJBdlJIO0lBMFJDLENBQUE7Ozs7QUExUkQsc0JBMFJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExpbmtlZExpc3Q8VD4ge1xyXG4gIGxlbmd0aCA9IDA7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCBoZWFkOiBhbnk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCB0YWlsOiBhbnk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCBjdXJyZW50OiBhbnk7XHJcbiAgcHJvdGVjdGVkIGFzQXJyYXk6IFRbXSA9IFtdO1xyXG5cclxuICBnZXQocG9zaXRpb246IG51bWJlcik6IFQge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3NpdGlvbjsgaW5kZXgrKykge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgYWRkKHZhbHVlOiBULCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5sZW5ndGgpOiB2b2lkIHtcclxuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPiB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGNvbnN0IG5vZGU6IGFueSA9IHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG5leHQ6IHVuZGVmaW5lZCxcclxuICAgICAgcHJldmlvdXM6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcclxuICAgICAgdGhpcy50YWlsID0gbm9kZTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIC8vIGZpcnN0IG5vZGVcclxuICAgICAgICBub2RlLm5leHQgPSB0aGlzLmhlYWQ7XHJcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gbm9kZTtcclxuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgIC8vIGxhc3Qgbm9kZVxyXG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcclxuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xyXG4gICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbm9kZSBpbiBtaWRkbGVcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJldmlvdXNOb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uIC0gMSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE5leHROb2RlID0gY3VycmVudFByZXZpb3VzTm9kZS5uZXh0O1xyXG5cclxuICAgICAgICBjdXJyZW50UHJldmlvdXNOb2RlLm5leHQgPSBub2RlO1xyXG4gICAgICAgIGN1cnJlbnROZXh0Tm9kZS5wcmV2aW91cyA9IG5vZGU7XHJcblxyXG4gICAgICAgIG5vZGUucHJldmlvdXMgPSBjdXJyZW50UHJldmlvdXNOb2RlO1xyXG4gICAgICAgIG5vZGUubmV4dCA9IGN1cnJlbnROZXh0Tm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5sZW5ndGgrKztcclxuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUocG9zaXRpb24gPSAwKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgIC8vIGZpcnN0IG5vZGVcclxuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5oZWFkKSB7XHJcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcclxuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcclxuICAgICAgICB0aGlzLnRhaWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAvLyBsYXN0IG5vZGVcclxuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xyXG4gICAgICB0aGlzLnRhaWwubmV4dCA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG1pZGRsZSBub2RlXHJcbiAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcclxuICAgICAgcmVtb3ZlZE5vZGUubmV4dC5wcmV2aW91cyA9IHJlbW92ZWROb2RlLnByZXZpb3VzO1xyXG4gICAgICByZW1vdmVkTm9kZS5wcmV2aW91cy5uZXh0ID0gcmVtb3ZlZE5vZGUubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcclxuICB9XHJcblxyXG4gIHNldChwb3NpdGlvbjogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24pO1xyXG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKTogVFtdIHtcclxuICAgIHJldHVybiB0aGlzLmFzQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgZmluZEFsbChmbjogYW55KTogYW55W10ge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtpbmRleCwgdmFsdWU6IGN1cnJlbnQudmFsdWV9KTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvLyBBcnJheSBtZXRob2RzIG92ZXJyaWRpbmcgc3RhcnRcclxuICBwdXNoKC4uLmFyZ3M6IFRbXSk6IG51bWJlciB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkKGFyZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwb3AoKTogVCB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLnRhaWw7XHJcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIHJldHVybiBsYXN0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdW5zaGlmdCguLi5hcmdzOiBUW10pOiBudW1iZXIge1xyXG4gICAgYXJncy5yZXZlcnNlKCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkKGFyZywgMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBzaGlmdCgpOiBUIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLmhlYWQudmFsdWU7XHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG5cclxuICAgIHJldHVybiBsYXN0SXRlbTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBmb3JFYWNoKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KTtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluZGV4T2YodmFsdWU6IFQpOiBudW1iZXIge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICBwb3NpdGlvbiA9IGluZGV4O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHNvbWUoZm46IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICB3aGlsZSAoY3VycmVudCAmJiAhcmVzdWx0KSB7XHJcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGV2ZXJ5KGZuOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICB3aGlsZSAoY3VycmVudCAmJiByZXN1bHQpIHtcclxuICAgICAgaWYgKCFmbihjdXJyZW50LnZhbHVlKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ1tMaW5rZWQgTGlzdF0nO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGZpbmQoZm46IGFueSk6IFQge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcmVzdWx0OiBUO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcclxuICAgICAgICByZXN1bHQgPSBjdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBmaW5kSW5kZXgoZm46IGFueSk6IG51bWJlciB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIGxldCByZXN1bHQ6IG51bWJlcjtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCBnZXROb2RlKHBvc2l0aW9uOiBudW1iZXIpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3NpdGlvbjsgaW5kZXgrKykge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpOiB2b2lkIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGNvbnN0IG91dEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcblxyXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcclxuICAgICAgb3V0QXJyYXkucHVzaChjdXJyZW50LnZhbHVlKTtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuICAgIHRoaXMuYXNBcnJheSA9IG91dEFycmF5O1xyXG4gIH1cclxuXHJcbiAgLy8gQXJyYXkgbWV0aG9kcyBvdmVycmlkaW5nIEVORFxyXG59XHJcbiJdfQ==