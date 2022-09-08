import {Point2D} from "./ClassPoint2D";

class Point3D extends Point2D{
    private _z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getXYZ():object{
        return {
            x:this._x,
            y:this._y,
            z:this._z,
        }
    }
    setXYZ(x:number,y:number,z:number):void{
        this.x=x;
        this.y=y;
        this.z=z;
    }
}
let point3d:Point3D=new Point3D(10,50,60);
console.log(point3d);
point3d.setXYZ(100,200,300);
console.log(point3d.getXYZ());