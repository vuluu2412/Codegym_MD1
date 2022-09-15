import {HouseHold} from "../Class Household/ClassHousehold";

export class NeiBorHood {
    private _ID:number;
    private _Name:string;
    private _NeiBorHood:HouseHold[]=[];

    constructor(ID: number, Name: string, NeiBorHood: HouseHold[]) {
        this._ID = ID;
        this._Name = Name;
        this._NeiBorHood = NeiBorHood;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get NeiBorHood(): HouseHold[] {
        return this._NeiBorHood;
    }

    set NeiBorHood(value: HouseHold[]) {
        this._NeiBorHood = value;
    }
    addNeiBorHood(NeiBorHood:HouseHold){
        this._NeiBorHood.push(NeiBorHood)
    }
    deleteNeiBorHood(ID:number){
       return  this._NeiBorHood = this.NeiBorHood.filter((id)=>{
           return id.ID!=ID;
       })
    }
    showNeiBorHood():HouseHold[]{
        return this.NeiBorHood
    }
   findByHouseHoldMoreThan5(Member:number){
        let temp = 0;
        this._NeiBorHood.forEach((mem)=>{
            if (mem.Member>5){
                console.log(mem);
                temp++;
            }
        })
       if(temp==0){
           console.log("Không có")
       }
   }
}