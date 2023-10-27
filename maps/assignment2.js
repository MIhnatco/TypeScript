/**
 * Interfaces for Book
 * @interface
 */
/**
 * Represents a Library where books can be added, borrowed, returned and displayed
 * @class
 */
var Library = /** @class */ (function () {
    /**
     * creates a new Library instance
     */
    function Library() {
        this.catalog = new Map();
    }
    /**
     * Adds a book to the library
     * @param {string} title - The title of a book
     * @param {object} book
     */
    Library.prototype.addBook = function (book) {
        // Add a book to the catalog
        this.catalog.set(book.title, book);
    };
    /**
     * Allows a user to borrow a book
     * @param {string} title - The ISBN of the book to be borrowed.
     * @param {object} user - The user, who is borrowing the book.
     * @returns {boolean} - True if the book was successfully borrowed, false it it's not available or doesn't exits.
     */
    Library.prototype.borrowBook = function (title, user) {
        //Check with title, if the book exists in the catalog 
        if (this.catalog.has(title)) {
            //get the book from the catalog
            var book = this.catalog.get(title);
            //check if the book is available for borrowing
            if (book.isAvailable) {
                //Mark the book as borrowed 
                book.isAvailable = false;
                console.log("".concat(user.name, " borrowed \"").concat(book.title, "\" with ISBN ").concat(book.ISBN));
                user.borrowBook(title, book);
                return true;
            }
            else {
                console.log("".concat(book.title, " with ISBN ").concat(book.ISBN, " is already borrowed."));
            }
        }
        else {
            console.log("Book with title ".concat(title, " not found in the catalog."));
        }
        return false;
    };
    /**
     * Marks a borrowed book as returned and makes it available again.
     * @param {string} title - The returned book
     * @param {object} user - The user, who is returning the book.
     */
    Library.prototype.returnBook = function (title, user) {
        if (this.catalog.has(title)) {
            //get the book from the catalog
            var book = this.catalog.get(title);
            if (!book.isAvailable) {
                //Mark the book as returned
                book.isAvailable = true;
                console.log("".concat(user.name, " returned \"").concat(book.title, "\" with ISBN ").concat(book.ISBN));
                user.returnBook(title);
            }
            else {
                user.returnBook(title);
            }
        }
    };
    /**
     * Displays the current catalog of books, including their title, author, ISBN, and availability status.
     * @returns {Map} catalog
     */
    Library.prototype.listCatalog = function () {
        return this.catalog;
    };
    return Library;
}());
/**
 * represents a User, who can borrow books
 * @class
 */
var User = /** @class */ (function () {
    /**
     * Creates a User instance
     * @param {string} name - The name of the user
     * @param {Map} borrowedBooks - Collection of borrowed books
     */
    function User(name) {
        this.name = name;
        this.borrowedBooks = new Map();
    }
    /**
    * Adds a book to the private collection
    * @param {string} title - The title of a book
    * @param {object} book
    */
    User.prototype.borrowBook = function (title, book) {
        this.borrowedBooks.set(title, book);
    };
    /**
    * Removes a book to the private collection
    * @param {string} title - The title of a book
    */
    User.prototype.returnBook = function (title) {
        this.borrowedBooks.delete(title);
    };
    /**
    * Displays the private catalog of books, including their title, author, ISBN, and availability status.
    * @returns {Map} borrowedBooks
    */
    User.prototype.privateCollection = function () {
        return this.borrowedBooks;
    };
    return User;
}());
var localLibrary = new Library();
var Mastery = {
    title: "Mastery",
    author: "Robert Greene",
    ISBN: 1234,
    isAvailable: true
};
var SWisdom = {
    title: "Seeking Wisdom",
    author: "Peter Bevelin",
    ISBN: 4567,
    isAvailable: true
};
var Foundation = {
    title: "Prelude to Foundation",
    author: "Isaac Asimov",
    ISBN: 7894,
    isAvailable: true
};
localLibrary.addBook(Mastery);
localLibrary.addBook(SWisdom);
localLibrary.addBook(Foundation);
console.log(localLibrary.listCatalog());
var Peter = new User("Peter Doe");
var Lena = new User("Lena Zenday");
localLibrary.borrowBook("Mastery", Peter);
localLibrary.borrowBook("Mastery", Lena);
localLibrary.borrowBook("Prelude to Foundation", Peter);
console.log("Peter's collection: ", Peter.privateCollection());
localLibrary.borrowBook("Seeking Wisdom", Lena);
console.log("Lena's collection: ", Lena.privateCollection());
localLibrary.returnBook("Mastery", Peter);
console.log("Peter's collection: ", Peter.privateCollection());
localLibrary.borrowBook("Mastery", Lena);
console.log("Lena's collection: ", Lena.privateCollection());
