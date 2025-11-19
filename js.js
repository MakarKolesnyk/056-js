class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
    this.id = Book.count++;
  }
  static count = 0;
  showInfo() {
    return `title = ${this.title}
    author = ${this.author}
    id = ${this.id}`;
  }
}

class Reader {
  constructor(name) {
    this.name = name;
    this.id = Reader.count++;
  }
  static count = 0;
  showInfo() {
    return `name = ${this.name} 
        id = ${this.id}`;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.readers = [];
    this.booksAndReaders = [];
  }
  addBook(...book) {
    this.books.push(...book);
  }
  addReaders(...reader) {
    this.readers.push(...reader);
  }
  addBookForReader(reader, book) {
    this.booksAndReaders.push({ idReader: reader.id, idBook: book.id});
  }
  showAllBooks(){
    this.books.forEach((elem)=>console.table(elem));
  }
}
const book1 = new Book("It", "Kiing");
const book2 = new Book("Autsider", "Kiing");
const user1 = new Reader("Alex");
const user2 = new Reader("Bob");
const library = new Library();
library.addBook(book1, book2);
library.addReaders(user1, user2);
library.addBookForReader(user1, book2)
library.addBookForReader(user2, book1)
console.log(library);
library.showAllBooks()
