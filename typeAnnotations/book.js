/**
 * Represents a book - check if it is available
 * @class
 */
var Book = /** @class */ (function () {
    /**
     * Creates a new Book instance
     * @constructor
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     * @param {number} year - The year the book was published.
     */
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = true;
    }
    /**
     * Checks if the book is available and toggles its availability.
     * @method
     */
    Book.prototype.isAvailable = function () {
        // Toggle the availability status of the book
        this.available = !this.isAvailable;
    };
    return Book;
}());
//new instance of the Book class 
var book = new Book("The Catcher in the Rye", "J.D.Salinger", 1951);
//print the book's availability to the console
console.log(book.available);
