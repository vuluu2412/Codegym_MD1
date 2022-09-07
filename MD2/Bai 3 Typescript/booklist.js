var Book = /** @class */ (function () {
    function Book(title, author, alreadyRead) {
        if (alreadyRead === void 0) { alreadyRead = true; }
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    return Book;
}());
// let book = new Book()
var book1 = new Book('abc', 'def', true);
var book2 = new Book('abc1', 'def1', false);
// console.log(book1.toString());
// console.log(book2.toString());
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    }
    else {
        console.log('You still need to read "' + bookInfo);
    }
}
