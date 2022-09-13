
import {Staff} from "./employyProduct";

export class StaffManager {
    private _staff: Staff[] = [];
    constructor() {
    }
    get staff(): Staff[] {
        return this._staff;
    }
    set staff(value: Staff[]) {
        this._staff = value;
    }
    addStaff(staff:Staff):void{
        this._staff.push(staff);
    }
    deleteStaff(id:number):void {
      this._staff = this._staff.filter((item)=>
          item.id!=id
      )
    }
    show():void{
        for (let i = 0; i < this._staff.length; i++) {
            console.log(this._staff[i]);
        }
    }
}