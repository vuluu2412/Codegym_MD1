import {Rectangle} from "./Classrectangle";

export class Square extends Rectangle {

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side, side);
    }

    getSide(): number {
        return this.width;
    }

    setSide(side: number): void {
        this.width = side;
        this.length = side;
    }

    setWidth(width: number): void {
        this.setSide(width);
    }

    setLength(length: number): void {
        this.setSide(length)
    }

    toString(): string {
        return "A Square with side = "
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}