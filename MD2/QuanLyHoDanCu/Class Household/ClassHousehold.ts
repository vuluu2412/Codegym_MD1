import {PerSon} from "../Class Person/PerSon";

export class HouseHold {
    private _ID:number;
    private _Member:number;
    private _Address:string;
    _Household:PerSon[]=[];

    constructor(ID: number, Address: string,Member:number) {
        this._ID = ID;
        this._Address = Address;
        this._Member = Member
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get Member(): number {
        return this._Member;
    }

    set Member(value: number) {
        this._Member = value;
    }

    get Address(): string {
        return this._Address;
    }

    set Address(value: string) {
        this._Address = value;
    }

    get Household() {
        return this._Household;
    }

    set Household(value: PerSon[]) {
        this._Household = value;
    }
    addHouseHold(HouseHold:PerSon){
        this._Household.push(HouseHold)
    }
    showHouseHold(){
        return this.Household
    }
    deleteHouseHold(ID:number){
        return this._Household = this._Household.filter((item)=>{
            return item.ID!=ID;
        })
    }
    findHouseHold(ID:number){
        let flag = 0;
        this._Household.forEach((e)=>{
            if (e.ID == ID){
                console.log(e);
                flag++;
            }
        })
        if (flag==0){
            console.log("Không Có")
        }
    }
}
