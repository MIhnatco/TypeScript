/**
* Represents a generic queue.
* @class
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
    }
    /**
     * Enqueues an item at the end of the queue
     * @param {T} item - The item to enqueue
     */
    Queue.prototype.enqueue = function (item) {
        this.elements.push(item);
    };
    /**
     * Dequeues and returns the item from the fron of the queue.
     * @returns {T | undefined} - The dequeued item or undefined if the queue is empty
     */
    Queue.prototype.dequeue = function () {
        return this.elements.shift();
    };
    /**
     * Peeks at the item from the front of the queue without removing it.
     * @returns {T | undefined} - The item at the front of the queue or undefined
     */
    Queue.prototype.peek = function () {
        if (this.elements.length > 0) {
            return this.elements[0];
        }
        return undefined;
    };
    /**
     * Checks if the queue is empty
     * @returns {boolena} - True if the queue is empty, false otherwise
     */
    Queue.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    /**
     * Displays the elements in the queue
     */
    Queue.prototype.displayQ = function () {
        console.log(this.elements);
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(12);
queue.enqueue(14);
queue.enqueue(16);
queue.displayQ();
var dequeued = queue.dequeue();
console.log("Dequeued: ".concat(dequeued));
queue.displayQ();
console.log("Peek: ".concat(queue.peek()));
console.log("Is empty: ".concat(queue.isEmpty()));
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "Yoshi", age: 45 });
console.log(docOne);
