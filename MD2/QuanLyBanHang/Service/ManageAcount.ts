import {Account} from "../Model/acount";

export class ManageAccount{
    listAccount:Account[]=[];
    addAccount(account:Account){
        this.listAccount.push(account);
    }
    checkAccount(user:string,password:string){
        let flag = false;
        this.listAccount.forEach((item)=>{
            if(item.user==user && item.password==password){
                return flag = true;
            }
        })
        return flag;
    }
}