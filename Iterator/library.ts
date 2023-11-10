
/**
 * class Book to represent a book with title , author, and genre
 * @class
 */

class Book {
    title: string;
    author: string;
    genre: string;

    /**
     * Initialize a new instance of a Book
     * @param {string} title  - The title of the book
     * @param {string} author - The author of the book
     * @param {string} genre  - The genre of the book
     */
    constructor(title: string, author: string, genre: string){
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

/**
 * Library class
 * @class
 */
class Library {
    library: Book[];

    /**
     * a new instance of Library 
     */
    constructor(){
        this.library = [];
    }

   /**
    * Adds a new book to the library
    * @param {string} title - The title of the book 
    * @param {string} author  - The author of the book
    * @param {string} genre  - The genre of the book
    */
    addBook(title: string, author: string, genre: string){

        //Check if the book with the same title already exists
        if(!this.library.some(book => book.title === title)){
            const newBook = new Book(title, author, genre);
            this.library.push(newBook)

        } else {
            console.log(`A book with title ${title} already exists in the library.`)
        }

    }

    /**
     * Returns books for choosen genre
     * @param targetGenre 
     * @return Book
     */
    getBooksByGenre(targetGenre: string) {

        function* genreIterator() {
            for (const book of this.library){
                if(book.genre === targetGenre){
                    yield book;
                }
            }
        }

        // Return the iterable object for the specified genre.
        return [...genreIterator.call(this)];

  }

}

// Create an instance of the Library class.
let library = new Library()

library.addBook("Mastery", "Greene","Self-improvement");
library.addBook("Obstacle is the way", "Holiday", "Self-improvement");

library.addBook("Prelude to Foundation", "Asimov","Sci-fi" );
library.addBook("Foundation", "Asimov", "Sci-fi");
library.addBook("Return to Foundation", "Asimov", "Sci-fi");

library.addBook("UX Strategy", "Levy", "Computer Science");
library.addBook("Articulating DD", "Greever", "Computer Science");
console.log(library)

// Use the iterator to display books of a specific genre (e.g., 'Mystery').
const myBooks = library.getBooksByGenre('Mystery');
for (const book of myBooks) {
  console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
}