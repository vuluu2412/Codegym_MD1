import {Customer} from "./Customer";
import {Product} from "./Product";

export class OrderDetail{
    private _id:number;
    private _customer:Customer;
    private _time:string;
    private _cart:Product[]=[];

    constructor(id: number, customer: Customer, time: string) {
        this._id = id;
        this._customer = customer;
        this._time = time;
    }
add(product:Product){
        this.cart.push(product);
}
showAll(){
        return this.cart;
}
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get customer(): Customer {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get cart(): Product[] {
        return this._cart;
    }

    set cart(value: Product[]) {
        this._cart = value;
    }
    showCart(){
        let str = ``;
        this.cart.forEach((item)=>{
            str += `${item.name},sl:${item.amount}`
        })
        return str;
    }
}