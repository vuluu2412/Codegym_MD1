export class Shape {
    protected _color:string = "red";
    protected _filled:boolean = true;
    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }
    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
    }
    isFilled(): boolean {
        return this._filled;
    }
    set Filled(value: boolean) {
        this._filled = value;
    }
    toString():string{
        return `A Shape with color of ${this._color} and ${(this.isFilled() ? "filled" : "not filled")}`
    }
}