class Book {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }
}
class BookManager {
    books: Book[] = [];

    constructor() {
    }

    add(book: Book): void {
        this.books.push(book);
    }

    getList(): Book[] {
        return this.books;
    }

    delete(id: string): void {
        let indexBookDelete = this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }

    update(id: string, name: string) {
        let indexBookUpdate = this.findBook(id);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        } else {
            throw new Error('update error')
        }
    }

    findBook(id: string) {
        let i = -1;
        this.books.forEach((book,  index) => {
            if (book.id === id) {
                i = index;
            }
        })

        return i;
    }
}
let book1 = new Book('B001','Lập trình Java');
let book2 = new Book('B002','Lập trình PHP');
let book3 = new Book('B003','Lập trình TypeScript');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003', 'lập trình MySQL')

console.log(bookManager.getList())