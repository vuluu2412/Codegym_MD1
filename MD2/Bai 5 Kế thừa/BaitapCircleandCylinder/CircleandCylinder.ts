export class Circle{
    protected _radius: number;
    protected _color:string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    get Area(): number {
        return this._radius * this._radius * Math.PI;
    }
    get Perimeter():number{
        return 2*this._radius*Math.PI;
    }
}
let circle : Circle= new Circle(10,"black");
console.log(circle);
console.log(circle.Area);
console.log(circle.Perimeter);