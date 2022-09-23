import {Manage} from "./Manage";
import {Customer} from "../Model/Customer";

export class ManageCustomer implements Manage<Customer>{
    customerList:Customer[]=[];
    add(t: Customer): void {
        this.customerList.push(t)
    }

    findAll(): void {
    }

    // @ts-ignore
    findById(id: number): number {
        for (let i = 0; i <this.customerList.length ; i++) {
            if(this.customerList[i].id==id){
                return i;
            }
        }
        return -1;
    }

    remove(id: number) {
        let index = this.findById(id);
        this.customerList.splice(index,1);
    }

    update(id: number, t: Customer) {
    }
    findCustomerById(id:number):Customer{
        let index = this.findById(id);
        return this.customerList[index];
    }
}