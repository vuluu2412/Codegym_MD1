export class Point2D {
    protected _x: number;
    protected _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    get x(): number {
        return this._x;
    }
    set x(value: number) {
        this._x = value;
    }
    get y(): number {
        return this._y;
    }
    set y(value: number) {
        this._y = value;
    }
    getXY(): object {
        return {
            x: this._x,
            y: this._y,
        }
    }
    setXY(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}
let point2d:Point2D = new Point2D(10,50);
console.log(point2d);
point2d.setXY(30,60);
console.log(point2d.getXY());
