import {Shape} from "./shape";

export class Circle extends Shape {
    protected _radius: number = 1.0;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get Area(): number {
        return this._radius * this._radius * Math.PI;
    }
    get Perimeter():number{
        return 2*this._radius*Math.PI;
    }
    toString(): string {
        return `A Circle with radius = ${this.radius}
        , which is a subclass of ${super.toString()}`
    }
}