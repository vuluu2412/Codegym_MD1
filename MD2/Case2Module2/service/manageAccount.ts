import {Manage} from "./manage";
import {Account} from "../model/account";

export class ManageAccount implements Manage<Account>{
    listAccount:Account[]=[];

    add(t: Account) {
        this.listAccount.push(t);
    }

    findAll() {
        return this.listAccount;
    }

    findById(id: number): number {
        return 0;
    }

    remove(id: number) {
    }

    update(id: number, t: Account) {
    }
}