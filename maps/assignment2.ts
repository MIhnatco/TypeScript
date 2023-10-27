/**
 * Interfaces for Book
 * @interface
 */

interface Book {
    title: string;
    author: string;
    ISBN: number;
    isAvailable: boolean;
}


/**
 * Represents a Library where books can be added, borrowed, returned and displayed
 * @class
 */

class Library {
    catalog: Map<string, Book>;
        
    /**
     * creates a new Library instance
     */
    constructor(){
        this.catalog = new Map();

    }

    /**
     * Adds a book to the library
     * @param {string} title - The title of a book 
     * @param {object} book 
     */
    addBook(book: Book) {
        // Add a book to the catalog
        this.catalog.set(book.title, book)
    }

    /**
     * Allows a user to borrow a book
     * @param {string} title - The ISBN of the book to be borrowed.
     * @param {object} user - The user, who is borrowing the book.
     * @returns {boolean} - True if the book was successfully borrowed, false it it's not available or doesn't exits.
     */

    borrowBook(title: string, user: User): boolean{
        //Check with title, if the book exists in the catalog 
        if(this.catalog.has(title)){
            //get the book from the catalog
            const book = this.catalog.get(title)

            //check if the book is available for borrowing
            if(book.isAvailable){
                    //Mark the book as borrowed 
                    book.isAvailable = false;
                    console.log(`${user.name} borrowed "${book.title}" with ISBN ${book.ISBN}`)
                    user.borrowBook(title, book)
                    return true;

                } else {
                    console.log(`${book.title} with ISBN ${book.ISBN} is already borrowed.`)
            }

        } else {
            console.log(`Book with title ${title} not found in the catalog.`)
        }

        return false

    }

    /**
     * Marks a borrowed book as returned and makes it available again.
     * @param {string} title - The returned book 
     * @param {object} user - The user, who is returning the book.
     */
    returnBook(title: string, user: User) {
            if(this.catalog.has(title)){
                //get the book from the catalog
                const book = this.catalog.get(title);
                if (!book.isAvailable){

                    //Mark the book as returned
                    book.isAvailable = true;
                    console.log(`${user.name} returned "${book.title}" with ISBN ${book.ISBN}`)
    
                    user.returnBook(title)
                } else {
                    user.returnBook(title)
                }

            }
    }

    /**
     * Displays the current catalog of books, including their title, author, ISBN, and availability status.
     * @returns {Map} catalog
     */

    listCatalog(){
        return this.catalog;
    } 
}



/**
 * Interfaces for User
 * @interface
 */

interface userInfo {
    name: string;
 }


/**
 * represents a User, who can borrow books
 * @class 
 */
class User implements userInfo {
    name: string;
    borrowedBooks: Map<string, Book>;

    /**
     * Creates a User instance
     * @param {string} name - The name of the user 
     * @param {Map} borrowedBooks - Collection of borrowed books 
     */
    constructor(name: string){
        this.name = name;
        this.borrowedBooks = new Map();
    }

     /**
     * Adds a book to the private collection
     * @param {string} title - The title of a book 
     * @param {object} book 
     */
    borrowBook(title:string, book: Book){
        this.borrowedBooks.set(title, book )
    }

     /**
     * Removes a book to the private collection
     * @param {string} title - The title of a book
     */
    returnBook(title: string){
        this.borrowedBooks.delete(title)
    }

     /**
     * Displays the private catalog of books, including their title, author, ISBN, and availability status.
     * @returns {Map} borrowedBooks
     */
    privateCollection(){
        return this.borrowedBooks;
    }
}








const localLibrary = new Library();

const Mastery: Book = {
    title: "Mastery", 
    author: "Robert Greene", 
    ISBN: 1234,
    isAvailable: true
}

const SWisdom: Book = {
    title: "Seeking Wisdom", 
    author: "Peter Bevelin", 
    ISBN: 4567,
    isAvailable: true
}


const Foundation: Book = {
    title: "Prelude to Foundation", 
    author: "Isaac Asimov", 
    ISBN: 7894,
    isAvailable: true
}

localLibrary.addBook(Mastery);
localLibrary.addBook(SWisdom);
localLibrary.addBook(Foundation);
console.log(localLibrary.listCatalog())


const Peter = new User("Peter Doe");
const Lena = new User("Lena Zenday")

localLibrary.borrowBook("Mastery", Peter);
localLibrary.borrowBook("Mastery", Lena);
localLibrary.borrowBook("Prelude to Foundation", Peter)
console.log("Peter's collection: ", Peter.privateCollection())

localLibrary.borrowBook("Seeking Wisdom", Lena)
console.log("Lena's collection: ",Lena.privateCollection())

localLibrary.returnBook("Mastery", Peter)
console.log("Peter's collection: ", Peter.privateCollection())

localLibrary.borrowBook("Mastery", Lena)
console.log("Lena's collection: ", Lena.privateCollection())



