import {Cadres} from "./Cadres";
import {Worker} from "./Worker";
import {Engineer} from "./Engineer";
import {Staff} from "./Staff";


export class CadresManager {
    private _cadres: Cadres[] = [];

    get cadres(): Cadres[] {
        return this._cadres;
    }

    set cadres(value: Cadres[]) {
        this._cadres = value;
    }

    addCadres(cadres: Cadres | Worker | Engineer | Staff) {
        this._cadres.push(cadres)
    }

    showInfo(): Cadres[] {
        // for (let i = 0; i <this._cadres.length ; i++) {
        //     console.log(this._cadres[i])
        // }
        return this._cadres
    }

    findName(name: string) {
        let flag = 0;
        this._cadres.forEach((item) => {
                if (item.name == name) {
                    console.log(item);
                    flag++;
                }
            })
        if (flag == 0) {
            console.log("no")
        }
    }
    deleteName(name: string) {
      return this._cadres = this._cadres.filter((e) => {
            return e.name != name;
        })
    }
    editName(name:string,newName: string){
        this._cadres.forEach((item)=>{
            if(item.name==name){
                return item.name=newName
            }
        })
    }
}