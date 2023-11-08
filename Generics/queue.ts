  /**
* Represents a generic queue.
* @class
*/

class Queue<T> {
    private elements: T[] = [];

    /**
     * Enqueues an item at the end of the queue
     * @param {T} item - The item to enqueue 
     */
    public enqueue(item: T): void {
        this.elements.push(item);
    }

    /**
     * Dequeues and returns the item from the fron of the queue.
     * @returns {T | undefined} - The dequeued item or undefined if the queue is empty
     */
    public dequeue(): T| undefined {
        return this.elements.shift();
    }

    /**
     * Peeks at the item from the front of the queue without removing it.
     * @returns {T | undefined} - The item at the front of the queue or undefined
     */
    public peek(): T | undefined {
        if(this.elements.length > 0){
            return this.elements[0];
        }

        return undefined
    }

    /**
     * Checks if the queue is empty
     * @returns {boolena} - True if the queue is empty, false otherwise
     */
    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    /**
     * Displays the elements in the queue
     */
    public displayQ(): void{
        console.log(this.elements);
    }
}

const queue = new Queue();
queue.enqueue(12);
queue.enqueue(14);
queue.enqueue(16);
queue.displayQ();
const dequeued = queue.dequeue();
console.log(`Dequeued: ${dequeued}`);
queue.displayQ();
console.log(`Peek: ${queue.peek()}`);
console.log(`Is empty: ${queue.isEmpty()}`);
