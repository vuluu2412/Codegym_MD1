import {Shape} from "./shape";

class Triangle extends Shape{
    protected _side1:number;
    protected _side2:number;
    protected _side3:number;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
    get side1(): number {
        return this._side1;
    }
    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }
    getPerimeter():number {
        return this._side1+this._side2+this._side3;
    }
    getAre():number{
        let p = this.getPerimeter()/2
        return Math.pow(p*(p-this._side1)*(p-this._side2)*(p-this._side3),0.5);
    }
}
let triangle:Triangle=new Triangle("tamgiac","red",3,4,5);
console.log(triangle);
console.log(triangle.getAre());
console.log(triangle.getPerimeter());
triangle.side1=6;
triangle.side2=6;
triangle.side3=6;
console.log(triangle.getAre());
console.log(triangle.getPerimeter());


