/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
export class LinkedList {
    constructor() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ node = {
            value,
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
                const /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                const /** @type {?} */ currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    remove(position = 0) {
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
            const /** @type {?} */ removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        const /** @type {?} */ node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    /**
     * @return {?}
     */
    toArray() {
        return this.asArray;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findAll(fn) {
        let /** @type {?} */ current = this.head;
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ result = [];
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    push(...args) {
        /* tslint:disable-next-line: no-any*/
        args.forEach((arg) => {
            this.add(arg);
        });
        return this.length;
    }
    /**
     * @return {?}
     */
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const /** @type {?} */ last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    unshift(...args) {
        args.reverse();
        /* tslint:disable-next-line: no-any*/
        args.forEach((arg) => {
            this.add(arg, 0);
        });
        return this.length;
    }
    /**
     * @return {?}
     */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const /** @type {?} */ lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    indexOf(value) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ position = 0;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    some(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    every(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @return {?}
     */
    toString() {
        return '[Linked List]';
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    find(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findIndex(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    /**
     * @return {?}
     */
    createInternalArrayRepresentation() {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ outArray = [];
        let /** @type {?} */ current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLWxpc3QuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsibGlua2VkLWxpc3QuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU07O3NCQUNLLENBQUM7dUJBT2UsRUFBRTs7Ozs7O0lBRTNCLEdBQUcsQ0FBQyxRQUFnQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZjtRQUVELHFCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzlDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDdEI7Ozs7OztJQUVELEdBQUcsQ0FBQyxLQUFRLEVBQUUsV0FBbUIsSUFBSSxDQUFDLE1BQU07UUFDMUMsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2hEOztRQUdELHVCQUFNLElBQUksR0FBUTtZQUNoQixLQUFLO1lBQ0wsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElB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QyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLEtBQUssQ0FBQzthQUNQO1lBQ0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7Ozs7O0lBR1MsT0FBTyxDQUFDLFFBQWdCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNoRDtRQUVELHFCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzlDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUNoQjs7OztJQUVTLGlDQUFpQzs7UUFFekMsdUJBQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUMzQixxQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV4QixPQUFPLE9BQU8sRUFBRSxDQUFDO1lBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztLQUN6QjtDQUdGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExpbmtlZExpc3Q8VD4ge1xyXG4gIGxlbmd0aCA9IDA7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCBoZWFkOiBhbnk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCB0YWlsOiBhbnk7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCBjdXJyZW50OiBhbnk7XHJcbiAgcHJvdGVjdGVkIGFzQXJyYXk6IFRbXSA9IFtdO1xyXG5cclxuICBnZXQocG9zaXRpb246IG51bWJlcik6IFQge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3NpdGlvbjsgaW5kZXgrKykge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgYWRkKHZhbHVlOiBULCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5sZW5ndGgpOiB2b2lkIHtcclxuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPiB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGNvbnN0IG5vZGU6IGFueSA9IHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG5leHQ6IHVuZGVmaW5lZCxcclxuICAgICAgcHJldmlvdXM6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcclxuICAgICAgdGhpcy50YWlsID0gbm9kZTtcclxuICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICAgIC8vIGZpcnN0IG5vZGVcclxuICAgICAgICBub2RlLm5leHQgPSB0aGlzLmhlYWQ7XHJcbiAgICAgICAgdGhpcy5oZWFkLnByZXZpb3VzID0gbm9kZTtcclxuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgIC8vIGxhc3Qgbm9kZVxyXG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcclxuICAgICAgICBub2RlLnByZXZpb3VzID0gdGhpcy50YWlsO1xyXG4gICAgICAgIHRoaXMudGFpbCA9IG5vZGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbm9kZSBpbiBtaWRkbGVcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJldmlvdXNOb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uIC0gMSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE5leHROb2RlID0gY3VycmVudFByZXZpb3VzTm9kZS5uZXh0O1xyXG5cclxuICAgICAgICBjdXJyZW50UHJldmlvdXNOb2RlLm5leHQgPSBub2RlO1xyXG4gICAgICAgIGN1cnJlbnROZXh0Tm9kZS5wcmV2aW91cyA9IG5vZGU7XHJcblxyXG4gICAgICAgIG5vZGUucHJldmlvdXMgPSBjdXJyZW50UHJldmlvdXNOb2RlO1xyXG4gICAgICAgIG5vZGUubmV4dCA9IGN1cnJlbnROZXh0Tm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5sZW5ndGgrKztcclxuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUocG9zaXRpb24gPSAwKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XHJcbiAgICAgIC8vIGZpcnN0IG5vZGVcclxuICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5oZWFkKSB7XHJcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcclxuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gc2Vjb25kIG5vZGVcclxuICAgICAgICB0aGlzLnRhaWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09IHRoaXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAvLyBsYXN0IG5vZGVcclxuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xyXG4gICAgICB0aGlzLnRhaWwubmV4dCA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG1pZGRsZSBub2RlXHJcbiAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcclxuICAgICAgcmVtb3ZlZE5vZGUubmV4dC5wcmV2aW91cyA9IHJlbW92ZWROb2RlLnByZXZpb3VzO1xyXG4gICAgICByZW1vdmVkTm9kZS5wcmV2aW91cy5uZXh0ID0gcmVtb3ZlZE5vZGUubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcclxuICB9XHJcblxyXG4gIHNldChwb3NpdGlvbjogbnVtYmVyLCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24pO1xyXG4gICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKTogVFtdIHtcclxuICAgIHJldHVybiB0aGlzLmFzQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgZmluZEFsbChmbjogYW55KTogYW55W10ge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKHtpbmRleCwgdmFsdWU6IGN1cnJlbnQudmFsdWV9KTtcclxuICAgICAgfVxyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvLyBBcnJheSBtZXRob2RzIG92ZXJyaWRpbmcgc3RhcnRcclxuICBwdXNoKC4uLmFyZ3M6IFRbXSk6IG51bWJlciB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkKGFyZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwb3AoKTogVCB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLnRhaWw7XHJcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIHJldHVybiBsYXN0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdW5zaGlmdCguLi5hcmdzOiBUW10pOiBudW1iZXIge1xyXG4gICAgYXJncy5yZXZlcnNlKCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkKGFyZywgMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBzaGlmdCgpOiBUIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFzdEl0ZW0gPSB0aGlzLmhlYWQudmFsdWU7XHJcbiAgICB0aGlzLnJlbW92ZSgpO1xyXG5cclxuICAgIHJldHVybiBsYXN0SXRlbTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBmb3JFYWNoKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KTtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluZGV4T2YodmFsdWU6IFQpOiBudW1iZXIge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcG9zaXRpb24gPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICBwb3NpdGlvbiA9IGluZGV4O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHNvbWUoZm46IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICB3aGlsZSAoY3VycmVudCAmJiAhcmVzdWx0KSB7XHJcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGV2ZXJ5KGZuOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcbiAgICB3aGlsZSAoY3VycmVudCAmJiByZXN1bHQpIHtcclxuICAgICAgaWYgKCFmbihjdXJyZW50LnZhbHVlKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ1tMaW5rZWQgTGlzdF0nO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGZpbmQoZm46IGFueSk6IFQge1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcbiAgICBsZXQgcmVzdWx0OiBUO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcclxuICAgICAgICByZXN1bHQgPSBjdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBmaW5kSW5kZXgoZm46IGFueSk6IG51bWJlciB7XHJcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcclxuICAgIGxldCByZXN1bHQ6IG51bWJlcjtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHByb3RlY3RlZCBnZXROb2RlKHBvc2l0aW9uOiBudW1iZXIpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG91dCBvZiB0aGUgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3NpdGlvbjsgaW5kZXgrKykge1xyXG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjdXJyZW50O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpOiB2b2lkIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGNvbnN0IG91dEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XHJcblxyXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcclxuICAgICAgb3V0QXJyYXkucHVzaChjdXJyZW50LnZhbHVlKTtcclxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcclxuICAgIH1cclxuICAgIHRoaXMuYXNBcnJheSA9IG91dEFycmF5O1xyXG4gIH1cclxuXHJcbiAgLy8gQXJyYXkgbWV0aG9kcyBvdmVycmlkaW5nIEVORFxyXG59XHJcbiJdfQ==