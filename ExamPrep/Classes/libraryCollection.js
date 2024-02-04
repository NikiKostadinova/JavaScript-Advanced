class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {

        const book = this.books.find(b => b.bookName == bookName);

        if (book == undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {

        const book = this.books.find(b => b.bookName == bookName);
        const bookIndex = this.books.findIndex(i => i.bookName == bookName);

        if (book == undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books.splice(bookIndex, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {

        if (bookAuthor == undefined) {

            let bookCol = [];
            let emptySpots = this.capacity - this.books.length;
            bookCol.push(`The book collection has ${emptySpots} empty spots left.`);

            let sortedArray = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (const book of sortedArray) {

                if (book.payed == false) {
                    bookCol.push(`${book.bookName} == ${book.bookAuthor} - Not Paid.`);
                } else if (book.payed == true) {
                    bookCol.push(`${book.bookName} == ${book.bookAuthor} - Has Paid.`);
                }
            }

            return bookCol.join('\n');
        } else {

            const bookA = this.books.find(a => a.bookAuthor == bookAuthor);

            if (bookA == undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            // const book = this.books.find(b => b.bookName == bookName);

            if(bookA.payed == false){

                return `${bookA.bookName} == ${bookA.bookAuthor} - Not Paid.`
            }else if(bookA.payed == true){
                return `${bookA.bookName} == ${bookA.bookAuthor} - Has Paid.`

            }



        }
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



