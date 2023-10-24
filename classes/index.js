var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Represents a library where books can be added, removed and displayed
 * @class
 */
var Library = /** @class */ (function () {
    /**
     * Creates a new Library instance
     */
    function Library() {
        this.library = [];
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
    Library.prototype.addBook = function (newBook) {
        this.library.push(newBook);
    };
    /**
     * Removes a book from the library by its ID.
     * @param {number} id - The ID of the book to be removed
     * @returns {Array < Object} The updated library after removal
     */
    Library.prototype.removeBook = function (id) {
        this.library = this.library.filter(function (book) { return book['id'] !== id; });
        return this.library;
    };
    /**
     * Displays the current library of books
     * @returns {Array<Object} The array of books in the library.
     */
    Library.prototype.showLibrary = function () {
        return this.library;
    };
    return Library;
}());
var first = new Library();
first.addBook({ name: "Master of Change", author: "Brad Stulberg", id: 1 });
first.addBook({ name: "Mastery", author: "Robert Greene", id: 2 });
first.addBook({ name: "Seeking wisdom", author: "Peter Bevelin", id: 3 });
first.addBook({ name: "Foundation", author: "Isaac Asimov", id: 4 });
first.removeBook(1);
console.log(first.showLibrary());
/**
 * Represents a library with the ability to calculate late fees for overdue
 * @class
 * @extends Library
 */
var LibraryWithFees = /** @class */ (function (_super) {
    __extends(LibraryWithFees, _super);
    /**
     * Creates a new LibraryWithFees instance with a specified late fee rate.
     * @param {number} lateFeePerDay - The late fee rate per day
     */
    function LibraryWithFees(lateFeePerDay) {
        var _this = _super.call(this) || this;
        /**
         * The late fee rate per day for overdue books.
         * @type {number}
         * @private
         */
        _this.lateFeePerDay = lateFeePerDay;
        return _this;
    }
    /**
     * Calculates the late fee for an overdue book.
     * @param {number} bookId - The Id of the book to calculate the late fee for overdue.
     * @param {number} daysLate - The number of days the book is overdue.
     * @returns {number} The calculated late fee amount
     */
    LibraryWithFees.prototype.calculateLateFee = function (bookId, daysLate) {
        //Calculate the late fee for an overdue book.
        var book = this.library.filter(function (book) { return book["id"] === bookId; });
        console.log(book);
        if (!book) {
            return 0;
        }
        /**
         * The calculated late fee for the book.
         * @type {number}
         */
        var lateFee = daysLate * this.lateFeePerDay;
        return "".concat(book[0]["name"], " - $").concat(lateFee);
    };
    return LibraryWithFees;
}(Library));
var second = new LibraryWithFees(0.12);
second.addBook({ name: "Articulating Design Decisions", author: "John Greever", id: 5 });
second.addBook({ name: "UX Strategy", author: "John Levy", id: 6 });
second.addBook({ name: "The next five steps", author: "John Bet-David", id: 7 });
console.log(second.showLibrary());
console.log(second.calculateLateFee(6, 23));
