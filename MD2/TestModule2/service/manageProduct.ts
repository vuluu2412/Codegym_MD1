import {Manage} from "./Manage";
import {Product} from "../model/Product";

export class ManageProduct implements Manage<Product> {
    listProduct: Product[] = [];
    add(t: Product) {
        this.listProduct.push(t);
    }
    findAll(): Product[] {
        return this.listProduct;
    }
    findById(id: number):number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    remove(id: number) {
        let index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need delete"
        } else {
            this.listProduct.splice(index, 1);
            return "Delete Id comPeLeTe"
        }
    }
    update(id: number, name?: string, sectors?: string, price?: number, amount?: number, date?: string, infoProduct?: string) {
        let index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need update"
        } else {
            if (name) this.listProduct[index].name = name;
            if (sectors) this.listProduct[index].sectors = sectors;
            if (price) this.listProduct[index].price = price;
            if (amount) this.listProduct[index].amount = amount;
            if (date) this.listProduct[index].date = date;
            if (infoProduct) this.listProduct[index].infoProduct = infoProduct;
            return "Update Done";
        }
    }
    findByName(name: string) {
        // let listName: Product[] = [];
        // this.listProduct.forEach((item) => {
        //     if (item.name == name) {
        //         listName.push(item);
        //     }
        // })
        // if (listName.length == 0) {
        //     return "Not Found Name";
        // } else return listName;
        let listName = this.listProduct.filter((item) => item.name.toUpperCase().includes(name.toUpperCase()))
        if (listName.length==0){
            console.log("Not Found Data");
        } else console.log(listName);
    }
}