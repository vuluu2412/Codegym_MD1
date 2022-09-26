
import {AccountAmin} from "../model/AccountAmin";

export class ManageAccountAdmin{
    listAccountAmin:AccountAmin[]=[];
    addAccountAdmin(accountAdmin:AccountAmin){
        this.listAccountAmin.push(accountAdmin);
    }
    checkAccountAdmin(user:string,password:string){
        let flag = false;
        this.listAccountAmin.forEach((item)=>{
            if(item.user==user && item.password==password){
                return flag = true;
            }
        })
        return flag;
    }
}