import {Product} from "../Model/Product";
import {Manage} from "./Manage";

export class ManageProduct implements Manage<Product> {
    productList:Product[] = [];

    add(t: Product): void {
        this.productList.push(t)
    }

    findAll(): Product[] {
        return this.productList;
    }

    // @ts-ignore
    findById(id: number): number {
        for (let i = 0; i < this.productList.length; i++) {
            if (id == this.productList[i].id) {
                return i;
            }
        }
        return -1;
    }

    remove(id: number) {
        let index = this.findById(id);
        this.productList.splice(index, 1);
    }

    update(id: number, t: Product) {
        let index = this.findById(id);
        this.productList[index] = t;
    }

    findProductById(id: number): Product {
        let index = this.findById(id);
        return this.productList[index];
    }

}