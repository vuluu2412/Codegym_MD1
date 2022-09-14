import {Node1} from "./Node";

export class LinkedList<T>{
    head:Node1<T>|null;
    tail:Node1<T>|null;
    size:number;
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    insertFirstNode1(data:T):void{
        let node1=new Node1(data);
        node1.next=this.head;
        this.head=node1;
        if (!this.tail){
            this.tail = node1
        }
        this.size++;
    }
    insertLastNode(data:T):void{
        if(!this.head){
            this.insertFirstNode1(data);
        } else {
            let node1 = new Node1(data);
            this.tail.next=node1;
            this.tail=node1;
            this.size++;
        }
    }
    getSize():number{
        return this.size;
    }
    readList():T[]{
        let listData=[];
        let currentNode = this.head;
        while (currentNode !==null){
            listData.push(currentNode.readData());
            currentNode=currentNode.next
        }
        return listData;
    }
}