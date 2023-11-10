/**
 * class Book to represent a book with title , author, and genre
 * @class
 */
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Book = /** @class */ (function () {
    /**
     * Initialize a new instance of a Book
     * @param {string} title  - The title of the book
     * @param {string} author - The author of the book
     * @param {string} genre  - The genre of the book
     */
    function Book(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
    return Book;
}());
/**
 * Library class
 * @class
 */
var Library = /** @class */ (function () {
    /**
     * a new instance of Library
     */
    function Library() {
        this.library = [];
    }
    /**
     * Adds a new book to the library
     * @param {string} title - The title of the book
     * @param {string} author  - The author of the book
     * @param {string} genre  - The genre of the book
     */
    Library.prototype.addBook = function (title, author, genre) {
        //Check if the book with the same title already exists
        if (!this.library.some(function (book) { return book.title === title; })) {
            var newBook = new Book(title, author, genre);
            this.library.push(newBook);
        }
        else {
            console.log("A book with title ".concat(title, " already exists in the library."));
        }
    };
    /**
     * Returns books for choosen genre
     * @param targetGenre
     * @return Book
     */
    Library.prototype.getBooksByGenre = function (targetGenre) {
        function genreIterator() {
            var _i, _a, book;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.library;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        book = _a[_i];
                        if (!(book.genre === targetGenre)) return [3 /*break*/, 3];
                        return [4 /*yield*/, book];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }
        // Return the iterable object for the specified genre.
        return __spreadArray([], genreIterator.call(this), true);
    };
    return Library;
}());
// Create an instance of the Library class.
var library = new Library();
library.addBook("Mastery", "Greene", "Self-improvement");
library.addBook("Obstacle is the way", "Holiday", "Self-improvement");
library.addBook("Prelude to Foundation", "Asimov", "Sci-fi");
library.addBook("Foundation", "Asimov", "Sci-fi");
library.addBook("Return to Foundation", "Asimov", "Sci-fi");
library.addBook("UX Strategy", "Levy", "Computer Science");
library.addBook("Articulating DD", "Greever", "Computer Science");
console.log(library);
// Use the iterator to display books of a specific genre (e.g., 'Mystery').
var myBooks = library.getBooksByGenre('Mystery');
for (var _i = 0, myBooks_1 = myBooks; _i < myBooks_1.length; _i++) {
    var book = myBooks_1[_i];
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Genre: ").concat(book.genre));
}
