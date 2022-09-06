class Book{
    title: string;
    author: string;
    alreadyRead: boolean;
    constructor(title:string,author:string,alreadyRead:boolean=true) {
        this.title=title;
        this.author=author;
        this.alreadyRead=alreadyRead;
    }
    toString(){
        if (this.alreadyRead){
            return `Ten sach: ${this.title}, Tac gia: ${this.author}, Da doc`
        } else {
            return `Ten sach: ${this.title}, Tac gia: ${this.author}, chua doc`
        }
    }
}
// let book = new Book()
let book1 = new Book('abc','def',true);
let book2 = new Book('abc1','def1',false);

console.log(book1.toString());
console.log(book2.toString());


let books: Book[] = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    } else {
        console.log('You still need to read "' + bookInfo);
    }
}
