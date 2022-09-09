export class Circle {
    private _radius :number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }
    toString():string{
        return `A Circle with radius = ${this.radius}`

    }
}
