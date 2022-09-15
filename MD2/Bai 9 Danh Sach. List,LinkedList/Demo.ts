// Cấu trúc của LinkedList
class Node1<T> {
    data: T;
    next: Node1<T> | null = null;

    constructor(data: T) {
        this.data = data;

        class LinkedList<T> {
            head: Node1<T> | null;
            tail: Node1<T> | null;
            size: number;

            constructor() {
                this.head = null;
                this.tail = null;
                this.size = 0;
            }

            // Các thao tác cơ bản của LinkedList
            // Thêm phần tử vào đầu danh sách
            insertFirstNode1(data: T) {
                let node = new Node1(data);
                node.next = this.head;
                this.head = node;
                if (!this.tail) {
                    this.tail = node
                }
                this.size++;
            }
            // Thêm phần tử vào cuối danh sách
            insertLastNode1(data:T){
                if (!this.head){
                    this.insertFirstNode1(data);
                } else {
                    let node = new Node1(data);
                    this.tail.next=node;
                    this.tail=node;
                    this.size++;
                }
            }
            // Xóa phần tử ở đầu danh sách
            deleteFirstNode() {
                if (this.head) {
                    if (this.head.next){
                        this.head = this.head.next;
                    } else {
                        this.head = null;
                    }
                    this.size--;
                }
            }
            // Xóa phần tử ở cuối danh sách
            deleteLastNode() {
                if (this.head) {
                    let currentNode = this.head;
                    if (!currentNode.next) {
                        this.head = null;
                    } else {
                        let previousNode = null;
                        while (currentNode.next) {
                            previousNode = currentNode;
                            currentNode = currentNode.next;
                        }
                        previousNode.next = null;
                        this.tail = previousNode;
                        this.size--;
                    }
                }
            }
        }
    }
}