import {Account} from "../Model/account";

export class ManageAccount{
    listAccount:Account[]=[];
    addAccount(account:Account){
        this.listAccount.push(account);
    }
    checkAccount(user:string,password:string,idUser:number){
        let flag =false;
        this.listAccount.forEach((item)=>{
            if (item.user==user && item.password==password && item.idUser==idUser){
                return flag = true;
            }
        })
        return flag;
    }
}