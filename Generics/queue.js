/**
* Represents a queue.
* @class
*/
var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.elements.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.elements.shift();
    };
    Queue.prototype.peek = function () {
        if (this.elements.length > 0) {
            return this.elements[0];
        }
        return undefined;
    };
    Queue.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
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
