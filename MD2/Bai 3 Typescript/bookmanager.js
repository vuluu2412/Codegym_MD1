var Book = /** @class */ (function () {
    function Book(id, name) {
        this.id = id;
        this.name = name;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.setId = function (value) {
        this.id = value;
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (value) {
        this.name = value;
    };
    return Book;
}());
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype["delete"] = function (id) {
        var indexBookDelete = this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    BookManager.prototype.update = function (id, name) {
        var indexBookUpdate = this.findBook(id);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    };
    BookManager.prototype.findBook = function (id) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.id === id) {
                i = index;
            }
        });
        return i;
    };
    return BookManager;
}());
var book1 = new Book('B001', 'Lập trình Java');
var book2 = new Book('B002', 'Lập trình PHP');
var book3 = new Book('B003', 'Lập trình TypeScript');
var bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.update('B003', 'lập trình MySQL');
console.log(bookManager.getList());
