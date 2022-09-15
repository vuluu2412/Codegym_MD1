import {IArrList} from "./interfaceList";

export class ArrayList<T> implements IArrList<T>{
    container: Array<T>;
    constructor() {
        this.container=[];
    }

    add(data: T): void {
        this.container.push(data);
    }

    get(index: number): T {
        return this.container[index];
    }

    remove(): void {
        this.container.pop()
    }

    size(): number {
        return this.container.length;
    }

}