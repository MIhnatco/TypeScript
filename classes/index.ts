
/**
 * Represents a library where books can be added, removed and displayed
 * @class
 */
class Library {

    library = [];

    /**
     * Creates a new Library instance
     */

    constructor(){
        /**
         * An array to store the books in the library
         * @type {Array < Object}
         */
        this.library = [];
    }

    /**
     * Adds a book to the library
     * @param newBook - The book to be added to the library
     */
    addBook(newBook: {}){
        this.library.push(newBook)
    }


    /**
     * Removes a book from the library by its ID.
     * @param {number} id - The ID of the book to be removed 
     * @returns {Array < Object} The updated library after removal
     */
    removeBook(id: number){
        this.library = this.library.filter(book => book['id'] !== id);
        return this.library;
    }

    /**
     * Displays the current library of books
     * @returns {Array<Object} The array of books in the library.
     */

    showLibrary(){
        return this.library
    }
}


let first = new Library();
first.addBook({name: "Master of Change", author: "Brad Stulberg", id: 1})
first.addBook({name: "Mastery", author: "Robert Greene", id: 2})
first.addBook({name: "Seeking wisdom", author: "Peter Bevelin", id: 3})
first.addBook({name: "Foundation", author: "Isaac Asimov", id: 4})

first.removeBook(1);

console.log(first.showLibrary())



/**
 * Represents a library with the ability to calculate late fees for overdue
 * @class
 * @extends Library
 */

class LibraryWithFees extends Library {

    private lateFeePerDay: number;
    /**
     * Creates a new LibraryWithFees instance with a specified late fee rate.
     * @param {number} lateFeePerDay - The late fee rate per day
     */
    constructor(lateFeePerDay){
        super()

        /**
         * The late fee rate per day for overdue books.
         * @type {number}
         * @private
         */
        this.lateFeePerDay = lateFeePerDay
    }

        /**
         * Calculates the late fee for an overdue book.
         * @param {number} bookId - The Id of the book to calculate the late fee for overdue.
         * @param {number} daysLate - The number of days the book is overdue.
         * @returns {number} The calculated late fee amount
         */

        calculateLateFee(bookId, daysLate){
            //Calculate the late fee for an overdue book.
            const book = this.library.filter((book) => book["id"] === bookId);
            console.log(book)
            if(!book){
                return 0;
            }


            /**
             * The calculated late fee for the book.
             * @type {number}
             */
            const lateFee = daysLate * this.lateFeePerDay;

            return `${book[0]["name"]} - $${lateFee}`;
        }


}


let second = new LibraryWithFees(0.12)

second.addBook({name: "Articulating Design Decisions", author: "John Greever", id: 5})
second.addBook({name: "UX Strategy", author: "John Levy", id: 6})
second.addBook({name: "The next five steps", author: "John Bet-David", id: 7})


console.log(second.showLibrary())
console.log(second.calculateLateFee(6,23))