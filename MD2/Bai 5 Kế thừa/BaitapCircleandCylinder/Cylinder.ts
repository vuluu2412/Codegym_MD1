import {Circle} from "./CircleandCylinder";

class Cylinder extends Circle{
    private _height:number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }
    getVolume ():number{
        return this.Area*this._height;
    }
}
let cylinder: Cylinder = new Cylinder(10,"red",20);
console.log(cylinder);
console.log(cylinder.getVolume());