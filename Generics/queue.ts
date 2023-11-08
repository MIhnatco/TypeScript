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


/**
 * 
 * using Generics
 */

const addUID = (obj: object) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

let docOne = addUID({name: "Yoshi", age: 45})
console.log(docOne)
console.log(docOne.name)


const addUID2 = <T>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

let docOne2 = addUID2({name: "Yoshi", age: 45})
console.log(docOne2)
console.log(docOne2.name)

let docOne3 = addUID2('a new string'); //this will work, since generics allows to put anything 
//...but this doesn't makes sense ...
//so we can use constraints

const addUID3 = <T extends object>(obj: object) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
//Now , what we need to put inside is an object

let docOne4 = addUID3('a new string');

//we can specify it further

const addUID4 = <T extends {name: string}>(obj: object) =>{
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}


let docOne5 = addUID3({name: "Yoshi", age: 40});