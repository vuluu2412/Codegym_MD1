import {Shape} from "./shape";

export class Rectangle extends Shape{
    protected _width:number = 1.0;
    protected _length: number = 1.0;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    get width(): number {
        return this._width;
    }

     set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
    get Area():number{
        return this._length*this._width;
    }
    get Perimeter():number{
        return (this._length+this._width)*2;
    }

    toString(): string {
        return `A Rectangle with width= ${this.width} and length = ${this.length}
        , which is a subclass of ${super.toString()}`
    }
}