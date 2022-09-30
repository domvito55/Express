const author = {
    fullName: "Bob Alice",
    books: [],
    printBooks() {
    this.books.forEach(book => console.log(book + ' by ' +
    this.fullName));
    }
};
author.books[0] = 'Ramiro';
author.books[1] = 'Clay';
author.printBooks();
